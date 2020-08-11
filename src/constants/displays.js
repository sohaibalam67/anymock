import { DEVICE_TYPES } from "./deviceTypes";

export const displays = [
  {
    id: "apple_pro_display_xdr",
    name: "Apple Pro Display XDR",
    type: DEVICE_TYPES.DISPLAY,
    baseWidth: 1200,
    screenOffset: {
      left: 28,
      top: 28,
      width: 1144,
      height: 644,
    },
    thumbnail: require("../assets/images/devices/displays/Apple Pro Display XDR/apple_pro_display_xdr_thumbnail.webp"),
    variants: [
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/displays/Apple Pro Display XDR/Device/Apple Pro Display XDR.webp"),
      },
    ],
  },
  {
    id: "apple_thunderbolt_display",
    name: "Apple Thunderbolt Display",
    type: DEVICE_TYPES.DISPLAY,
    baseWidth: 1200,
    screenOffset: {
      left: 48,
      top: 55,
      width: 1105,
      height: 622,
    },
    thumbnail: require("../assets/images/devices/displays/Apple Thunderbolt Display/apple_thunderbolt_display_thumbnail.webp"),
    variants: [
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/displays/Apple Thunderbolt Display/Device/Apple Thunderbolt Display.webp"),
      },
    ],
  },
  {
    id: "dell_ultrasharp_5k_27",
    name: "Dell UltraSharp 5K Monitor 27",
    type: DEVICE_TYPES.DISPLAY,
    baseWidth: 1200,
    screenOffset: {
      left: 36,
      top: 39,
      width: 1128,
      height: 635,
    },
    thumbnail: require("../assets/images/devices/displays/Dell UltraSharp HD 5K Monitor/dell_ultrashap_5k_27_thumbnail.webp"),
    variants: [
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/displays/Dell UltraSharp HD 5K Monitor/Device/Dell UltraSharp 5K Monitor 27.webp"),
      },
    ],
  },
  {
    id: "dell_ultrasharp_24",
    name: "Dell UltraSharp Monitor 24",
    type: DEVICE_TYPES.DISPLAY,
    baseWidth: 1200,
    screenOffset: {
      left: 16,
      top: 16,
      width: 1168,
      height: 730,
    },
    thumbnail: require("../assets/images/devices/displays/Dell UltraSharp Monitor/dell_ultrashap_24_thumbnail.webp"),
    variants: [
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/displays/Dell UltraSharp Monitor/Device/24 Inch/Dell UltraSharp 24.webp"),
      },
    ],
  },
  {
    id: "dell_ultrasharp_27",
    name: "Dell UltraSharp Monitor 27",
    type: DEVICE_TYPES.DISPLAY,
    baseWidth: 1200,
    screenOffset: {
      left: 14,
      top: 26,
      width: 1172,
      height: 660,
    },
    thumbnail: require("../assets/images/devices/displays/Dell UltraSharp Monitor/dell_ultrashap_27_thumbnail.webp"),
    variants: [
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/displays/Dell UltraSharp Monitor/Device/27 Inch/Dell UltraSharp 27.webp"),
      },
    ],
  },
];
