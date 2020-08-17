import { fabric } from "fabric";

/**
 * Should objects be aligned by a bounding box?
 * [Bug] Scaled objects sometimes can not be aligned by edges
 *
 */
export var initAligningGuidelines = function (canvas) {
  try {
    if (typeof canvas.getSelectionContext !== "function") return;

    var ctx = canvas.getSelectionContext(),
      aligningLineOffset = 0,
      aligningLineMargin = 2,
      aligningLineWidth = 3,
      aligningLineColor = "red",
      viewportTransform,
      zoom = 1;

    function drawVerticalLine(coords) {
      drawLine(
        coords.x,
        coords.y1 > coords.y2 ? coords.y2 : coords.y1,
        coords.x,
        coords.y2 > coords.y1 ? coords.y2 : coords.y1
      );
    }

    function drawHorizontalLine(coords) {
      drawLine(
        coords.x1 > coords.x2 ? coords.x2 : coords.x1,
        coords.y,
        coords.x2 > coords.x1 ? coords.x2 : coords.x1,
        coords.y
      );
    }

    function drawLine(x1, y1, x2, y2) {
      const x1Pos = (x1 + viewportTransform[4]) * zoom;
      const y1Pos = (y1 + viewportTransform[5]) * zoom;
      const x2Pos = (x2 + viewportTransform[4]) * zoom;
      const y2Pos = (y2 + viewportTransform[5]) * zoom;
      ctx.save();
      ctx.lineWidth = aligningLineWidth;
      ctx.strokeStyle = aligningLineColor;
      ctx.beginPath();
      ctx.translate(1, 1);
      // ctx.setLineDash([1, 2]);
      ctx.moveTo(Math.round(x1Pos), Math.round(y1Pos));
      ctx.lineTo(Math.round(x2Pos), Math.round(y2Pos));
      ctx.stroke();
      // ctx.font = "15px Open Sans";
      // ctx.fillStyle = "#FF1DFF";
      // ctx.textAlign = "center";
      // ctx.fillText("•", Math.round(x1Pos), Math.round(y1Pos) + 4.9)
      // ctx.fillText("•", Math.round(x2Pos), Math.round(y2Pos) + 4.9)
      ctx.restore();
    }

    function isInRange(value1, value2) {
      value1 = Math.round(value1);
      value2 = Math.round(value2);
      for (
        var i = value1 - aligningLineMargin, len = value1 + aligningLineMargin;
        i <= len;
        i++
      ) {
        if (i === value2) {
          return true;
        }
      }
      return false;
    }

    var verticalLines = [],
      horizontalLines = [];

    canvas.on("mouse:down", function () {
      viewportTransform = canvas.viewportTransform;
      zoom = canvas.getZoom();
    });

    canvas.on("object:moving", function (opt) {
      if (!opt.target) return;
      if (!viewportTransform) return;

      var activeObject = opt.target,
        canvasObjects = canvas.getObjects(),
        activeObjectCenter = activeObject.getCenterPoint(),
        activeObjectLeft = activeObjectCenter.x,
        activeObjectTop = activeObjectCenter.y,
        activeObjectBoundingRect = activeObject.getBoundingRect(),
        padding = activeObject.padding,
        activeObjectHeight =
          activeObjectBoundingRect.height -
          (padding * 2) / viewportTransform[3],
        activeObjectWidth =
          activeObjectBoundingRect.width - (padding * 2) / viewportTransform[0],
        horizontalInTheRange = false,
        verticalInTheRange = false,
        transform = canvas._currentTransform;

      if (!transform) return;

      // It should be trivial to DRY this up by encapsulating (repeating) creation of x1, x2, y1, and y2 into functions,
      // but we're not doing it here for perf. reasons -- as this a function that's invoked on every mouse move

      for (var i = canvasObjects.length; i--; ) {
        if (canvasObjects[i] === activeObject || !canvasObjects[i].visible)
          continue;

        // don't align to center alignment lines
        if (
          canvasObjects[i].id === "line_h" ||
          canvasObjects[i].id === "line_v"
        )
          continue;

        let objectCenter = canvasObjects[i].getCenterPoint(),
          objectLeft = objectCenter.x,
          objectTop = objectCenter.y,
          objectBoundingRect = canvasObjects[i].getBoundingRect(),
          padding = canvasObjects[i].padding,
          objectHeight =
            objectBoundingRect.height - (padding * 2) / viewportTransform[3],
          objectWidth =
            objectBoundingRect.width - (padding * 2) / viewportTransform[0];

        // snap by the horizontal center line
        if (isInRange(objectLeft, activeObjectLeft)) {
          verticalInTheRange = true;
          verticalLines.push({
            x: objectLeft,
            y1:
              objectTop < activeObjectTop
                ? objectTop - objectHeight / 2 - aligningLineOffset
                : objectTop + objectHeight / 2 + aligningLineOffset,
            y2:
              activeObjectTop > objectTop
                ? activeObjectTop + activeObjectHeight / 2 + aligningLineOffset
                : activeObjectTop - activeObjectHeight / 2 - aligningLineOffset,
          });
          activeObject.setPositionByOrigin(
            new fabric.Point(objectLeft, activeObjectTop),
            "center",
            "center"
          );
        }

        // snap by the left edge
        if (
          isInRange(
            objectLeft - objectWidth / 2,
            activeObjectLeft - activeObjectWidth / 2
          )
        ) {
          verticalInTheRange = true;
          verticalLines.push({
            x: objectLeft - objectWidth / 2,
            y1:
              objectTop < activeObjectTop
                ? objectTop - objectHeight / 2 - aligningLineOffset
                : objectTop + objectHeight / 2 + aligningLineOffset,
            y2:
              activeObjectTop > objectTop
                ? activeObjectTop + activeObjectHeight / 2 + aligningLineOffset
                : activeObjectTop - activeObjectHeight / 2 - aligningLineOffset,
          });
          activeObject.setPositionByOrigin(
            new fabric.Point(
              objectLeft - objectWidth / 2 + activeObjectWidth / 2,
              activeObjectTop
            ),
            "center",
            "center"
          );
        }

        // snap by the right edge
        if (
          isInRange(
            objectLeft + objectWidth / 2,
            activeObjectLeft + activeObjectWidth / 2
          )
        ) {
          verticalInTheRange = true;
          verticalLines.push({
            x: objectLeft + objectWidth / 2,
            y1:
              objectTop < activeObjectTop
                ? objectTop - objectHeight / 2 - aligningLineOffset
                : objectTop + objectHeight / 2 + aligningLineOffset,
            y2:
              activeObjectTop > objectTop
                ? activeObjectTop + activeObjectHeight / 2 + aligningLineOffset
                : activeObjectTop - activeObjectHeight / 2 - aligningLineOffset,
          });
          activeObject.setPositionByOrigin(
            new fabric.Point(
              objectLeft + objectWidth / 2 - activeObjectWidth / 2,
              activeObjectTop
            ),
            "center",
            "center"
          );
        }

        // snap by the vertical center line
        if (isInRange(objectTop, activeObjectTop)) {
          horizontalInTheRange = true;
          horizontalLines.push({
            y: objectTop,
            x1:
              objectLeft < activeObjectLeft
                ? objectLeft - objectWidth / 2 - aligningLineOffset
                : objectLeft + objectWidth / 2 + aligningLineOffset,
            x2:
              activeObjectLeft > objectLeft
                ? activeObjectLeft + activeObjectWidth / 2 + aligningLineOffset
                : activeObjectLeft - activeObjectWidth / 2 - aligningLineOffset,
          });
          activeObject.setPositionByOrigin(
            new fabric.Point(activeObjectLeft, objectTop),
            "center",
            "center"
          );
        }

        // snap by the top edge
        if (
          isInRange(
            objectTop - objectHeight / 2,
            activeObjectTop - activeObjectHeight / 2
          )
        ) {
          horizontalInTheRange = true;
          horizontalLines.push({
            y: objectTop - objectHeight / 2,
            x1:
              objectLeft < activeObjectLeft
                ? objectLeft - objectWidth / 2 - aligningLineOffset
                : objectLeft + objectWidth / 2 + aligningLineOffset,
            x2:
              activeObjectLeft > objectLeft
                ? activeObjectLeft + activeObjectWidth / 2 + aligningLineOffset
                : activeObjectLeft - activeObjectWidth / 2 - aligningLineOffset,
          });
          activeObject.setPositionByOrigin(
            new fabric.Point(
              activeObjectLeft,
              objectTop - objectHeight / 2 + activeObjectHeight / 2
            ),
            "center",
            "center"
          );
        }

        // snap by the bottom edge
        if (
          isInRange(
            objectTop + objectHeight / 2,
            activeObjectTop + activeObjectHeight / 2
          )
        ) {
          horizontalInTheRange = true;
          horizontalLines.push({
            y: objectTop + objectHeight / 2,
            x1:
              objectLeft < activeObjectLeft
                ? objectLeft - objectWidth / 2 - aligningLineOffset
                : objectLeft + objectWidth / 2 + aligningLineOffset,
            x2:
              activeObjectLeft > objectLeft
                ? activeObjectLeft + activeObjectWidth / 2 + aligningLineOffset
                : activeObjectLeft - activeObjectWidth / 2 - aligningLineOffset,
          });
          activeObject.setPositionByOrigin(
            new fabric.Point(
              activeObjectLeft,
              objectTop + objectHeight / 2 - activeObjectHeight / 2
            ),
            "center",
            "center"
          );
        }
      }

      if (!horizontalInTheRange) {
        horizontalLines.length = 0;
      }

      if (!verticalInTheRange) {
        verticalLines.length = 0;
      }
    });

    canvas.on("before:render", function () {
      canvas.clearContext(canvas.contextTop);
    });

    canvas.on("after:render", function () {
      var i;
      for (i = verticalLines.length; i--; ) {
        drawVerticalLine(verticalLines[i]);
      }
      for (i = horizontalLines.length; i--; ) {
        drawHorizontalLine(horizontalLines[i]);
      }

      verticalLines.length = horizontalLines.length = 0;
    });

    canvas.on("mouse:up", function () {
      verticalLines.length = horizontalLines.length = 0;
      canvas.requestRenderAll();
    });
  } catch (error) {
    console.error(error);
  }
};
