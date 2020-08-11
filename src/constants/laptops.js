import { DEVICE_TYPES } from "./deviceTypes";

export const laptops = [
  {
    id: "apple_macbook",
    name: "Apple Macbook",
    type: DEVICE_TYPES.LAPTOP,
    baseWidth: 1200,
    screenOffset: {
      left: 148,
      top: 49,
      width: 904,
      height: 566,
    },
    thumbnail: require("../assets/images/devices/computers/Apple Macbook/apple_macbook_thumbnail.webp"),
    variants: [
      {
        id: "gold",
        name: "Gold",
        source: require("../assets/images/devices/computers/Apple Macbook/Device/Apple-Macbook-Gold.webp"),
      },
      {
        id: "space_grey",
        name: "Space Grey",
        source: require("../assets/images/devices/computers/Apple Macbook/Device/Apple-Macbook-Space-Grey.webp"),
      },
    ],
  },
  {
    id: "apple_macbook_air",
    name: "Apple Macbook Air",
    type: DEVICE_TYPES.LAPTOP,
    baseWidth: 1200,
    screenOffset: {
      left: 156,
      top: 79,
      width: 889,
      height: 556,
    },
    thumbnail: require("../assets/images/devices/computers/Apple MacBook Air/apple_macbook_air_thumbnail.webp"),
    variants: [
      {
        id: "gold",
        name: "Gold",
        source: require("../assets/images/devices/computers/Apple MacBook Air/Device/Apple MacBook Air Gold.webp"),
      },
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/computers/Apple MacBook Air/Device/Apple MacBook Air Silver.webp"),
      },
      {
        id: "space_grey",
        name: "Space Grey",
        source: require("../assets/images/devices/computers/Apple MacBook Air/Device/Apple MacBook Air Space Grey.webp"),
      },
    ],
  },
  {
    id: "apple_macbook_pro_13",
    name: "Apple Macbook Pro 13 Inch",
    type: DEVICE_TYPES.LAPTOP,
    baseWidth: 1200,
    screenOffset: {
      left: 168,
      top: 101,
      width: 864,
      height: 540,
    },
    thumbnail: require("../assets/images/devices/computers/Apple MacBook Pro/apple_macbook_pro_13_inch_thumbnail.webp"),
    variants: [
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/computers/Apple MacBook Pro/Device/Apple Macbook Pro 13 Silver.webp"),
      },
      {
        id: "space_grey",
        name: "Space Grey",
        source: require("../assets/images/devices/computers/Apple MacBook Pro/Device/Apple Macbook Pro 13 Space Grey.webp"),
      },
    ],
  },
  {
    id: "apple_macbook_pro_16",
    name: "Apple Macbook Pro 16 Inch",
    type: DEVICE_TYPES.LAPTOP,
    baseWidth: 1200,
    screenOffset: {
      left: 147,
      top: 88,
      width: 906,
      height: 567,
    },
    thumbnail: require("../assets/images/devices/computers/Apple MacBook Pro/apple_macbook_pro_16_inch_thumbnail.webp"),
    variants: [
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/computers/Apple MacBook Pro/Device/Apple Macbook Pro 16 Silver.webp"),
      },
      {
        id: "space_grey",
        name: "Space Grey",
        source: require("../assets/images/devices/computers/Apple MacBook Pro/Device/Apple Macbook Pro 16 Space Grey.webp"),
      },
    ],
  },
  {
    id: "dell_xps_13",
    name: "Dell XPS 13",
    type: DEVICE_TYPES.LAPTOP,
    baseWidth: 1200,
    screenOffset: {
      left: 99,
      top: 26,
      width: 1002,
      height: 565,
    },
    thumbnail: require("../assets/images/devices/computers/Dell XPS 13/dell_xps_13_thumbnail.webp"),
    variants: [
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/computers/Dell XPS 13/Device/Dell XPS 13.webp"),
      },
    ],
  },
  {
    id: "dell_xps_15",
    name: "Dell XPS 15",
    type: DEVICE_TYPES.LAPTOP,
    baseWidth: 1200,
    screenOffset: {
      left: 156,
      top: 29,
      width: 888,
      height: 501,
    },
    thumbnail: require("../assets/images/devices/computers/Dell XPS 15/dell_xps_15_thumbnail.webp"),
    variants: [
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/computers/Dell XPS 15/Device/Dell XPS 15.webp"),
      },
    ],
  },
  {
    id: "microsoft_surface_book",
    name: "Microsoft Surface Book",
    type: DEVICE_TYPES.LAPTOP,
    baseWidth: 1200,
    screenOffset: {
      left: 166,
      top: 54,
      width: 870,
      height: 580,
    },
    thumbnail: require("../assets/images/devices/computers/Microsoft Surface Book/microsoft_surfacebook_thumbnail.webp"),
    variants: [
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/computers/Microsoft Surface Book/Device/Microsoft Surface Book.webp"),
      },
    ],
  },
];
