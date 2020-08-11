import { DEVICE_TYPES } from "./deviceTypes";

export const tablets = [
  {
    id: "apple_ipad",
    name: "Apple iPad",
    type: DEVICE_TYPES.TABLET,
    baseWidth: 800,
    screenOffset: {
      left: 62,
      top: 114,
      width: 676,
      height: 901,
    },
    thumbnail: require("../assets/images/devices/tablets/Apple iPad/apple_ipad_thumbnail.webp"),
    variants: [
      {
        id: "gold",
        name: "Gold",
        source: require("../assets/images/devices/tablets/Apple iPad/Device/Apple iPad Gold.webp"),
      },
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/tablets/Apple iPad/Device/Apple iPad Silver.webp"),
      },
      {
        id: "space_grey",
        name: "Space Grey",
        source: require("../assets/images/devices/tablets/Apple iPad/Device/Apple iPad Space Grey.webp"),
      },
    ],
  },
  {
    id: "apple_ipad_air",
    name: "Apple iPad Air",
    type: DEVICE_TYPES.TABLET,
    baseWidth: 800,
    screenOffset: {
      left: 57,
      top: 107,
      width: 686,
      height: 916,
    },
    thumbnail: require("../assets/images/devices/tablets/Apple iPad Air/apple_ipad_air_thumbnail.webp"),
    variants: [
      {
        id: "gold",
        name: "Gold",
        source: require("../assets/images/devices/tablets/Apple iPad Air/Device/Apple iPad Air Gold.webp"),
      },
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/tablets/Apple iPad Air/Device/Apple iPad Air Silver.webp"),
      },
      {
        id: "space_grey",
        name: "Space Grey",
        source: require("../assets/images/devices/tablets/Apple iPad Air/Device/Apple iPad Air Space Grey.webp"),
      },
    ],
  },
  {
    id: "apple_ipad_mini",
    name: "Apple iPad Mini",
    type: DEVICE_TYPES.TABLET,
    baseWidth: 800,
    screenOffset: {
      left: 65,
      top: 143,
      width: 670,
      height: 894,
    },
    thumbnail: require("../assets/images/devices/tablets/Apple iPad Mini/apple_ipad_mini_thumbnail.webp"),
    variants: [
      {
        id: "gold",
        name: "Gold",
        source: require("../assets/images/devices/tablets/Apple iPad Mini/Device/Apple iPad Mini Gold.webp"),
      },
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/tablets/Apple iPad Mini/Device/Apple iPad Mini Silver.webp"),
      },
      {
        id: "space_grey",
        name: "Space Grey",
        source: require("../assets/images/devices/tablets/Apple iPad Mini/Device/Apple iPad Mini Space Grey.webp"),
      },
    ],
  },
  {
    id: "apple_ipad_pro_11",
    name: "Apple iPad Pro 11",
    type: DEVICE_TYPES.TABLET,
    baseWidth: 800,
    screenOffset: {
      left: 76,
      top: 77,
      width: 647,
      height: 925,
    },
    thumbnail: require("../assets/images/devices/tablets/Apple iPad Pro/apple_ipad_pro_11_thumbnail.webp"),
    variants: [
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/tablets/Apple iPad Pro/Device/Apple iPad Pro 11 Silver - Portrait.webp"),
      },
      {
        id: "space_grey",
        name: "Space Grey",
        source: require("../assets/images/devices/tablets/Apple iPad Pro/Device/Apple iPad Pro 11 Space Gray - Portrait.webp"),
      },
    ],
  },
  {
    id: "apple_ipad_pro_13",
    name: "Apple iPad Pro 13",
    type: DEVICE_TYPES.TABLET,
    baseWidth: 800,
    screenOffset: {
      left: 65,
      top: 65,
      width: 671,
      height: 894,
    },
    thumbnail: require("../assets/images/devices/tablets/Apple iPad Pro/apple_ipad_pro_13_thumbnail.webp"),
    variants: [
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/tablets/Apple iPad Pro/Device/Apple iPad Pro 13 Silver - Portrait.webp"),
      },
      {
        id: "space_grey",
        name: "Space Grey",
        source: require("../assets/images/devices/tablets/Apple iPad Pro/Device/Apple iPad Pro 13 Space Gray - Portrait.webp"),
      },
    ],
  },
  {
    id: "microsoft_surface_3",
    name: "Microsoft Surface 3",
    type: DEVICE_TYPES.TABLET,
    baseWidth: 800,
    screenOffset: {
      left: 68,
      top: 68,
      width: 664,
      height: 443,
    },
    thumbnail: require("../assets/images/devices/tablets/Microsoft Surface 3/microsoft_surface_3_thumbnail.webp"),
    variants: [
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/tablets/Microsoft Surface 3/Device/Microsoft Surface Pro 3.webp"),
      },
    ],
  },
  {
    id: "microsoft_surface_pro_4",
    name: "Microsoft Surface Pro 4",
    type: DEVICE_TYPES.TABLET,
    baseWidth: 800,
    screenOffset: {
      left: 59,
      top: 49,
      width: 682,
      height: 455,
    },
    thumbnail: require("../assets/images/devices/tablets/Microsoft Surface Pro 4/microsoft_surface_pro_4_thumbnail.webp"),
    variants: [
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/tablets/Microsoft Surface Pro 4/Device/Microsoft Surface Pro 4.webp"),
      },
    ],
  },
  {
    id: "nexus_9",
    name: "Nexus 9",
    type: DEVICE_TYPES.TABLET,
    baseWidth: 800,
    screenOffset: {
      left: 75,
      top: 126,
      width: 650,
      height: 865,
    },
    thumbnail: require("../assets/images/devices/tablets/Nexus 9/nexus_9_thumbnail.webp"),
    variants: [
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/tablets/Nexus 9/Device/Nexus 9.webp"),
      },
    ],
  },
];
