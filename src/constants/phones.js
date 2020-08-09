import { DEVICE_TYPES } from "./deviceTypes";

export const phones = [
  {
    id: "apple_iphone_x",
    name: "Apple iPhone X",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 59,
      top: 76,
      width: 482,
      height: 1042,
    },
    thumbnail: require("../assets/images/devices/phones/Apple iPhone X/apple_iphone_x_thumbnail.webp"),
    variants: [
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/phones/Apple iPhone X/Device/Apple iPhone X Silver.webp"),
      },
      {
        id: "space_grey",
        name: "Space Grey",
        source: require("../assets/images/devices/phones/Apple iPhone X/Device/Apple iPhone X Space Grey.webp"),
      },
    ],
  },
  {
    id: "apple_iphone_x_flat",
    name: "Apple iPhone X Flat",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 41,
      top: 36,
      width: 520,
      height: 1124,
    },
    thumbnail: require("../assets/images/devices/phones/Apple iPhone X Flat/apple_iphone_x_flat_thumbnail.webp"),
    variants: [
      {
        id: "white",
        name: "White",
        source: require("../assets/images/devices/phones/Apple iPhone X Flat/Device/Apple iPhone X Flat White.webp"),
      },
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/phones/Apple iPhone X Flat/Device/Apple iPhone X Flat Black.webp"),
      },
    ],
  },
  {
    id: "apple_iphone_x_clay",
    name: "Apple iPhone X Clay",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 40,
      top: 36,
      width: 521,
      height: 1126,
    },
    thumbnail: require("../assets/images/devices/phones/Apple iPhone X Clay/apple_iphone_x_clay_thumbnail.webp"),
    variants: [
      {
        id: "white",
        name: "White",
        source: require("../assets/images/devices/phones/Apple iPhone X Clay/Device/Apple iPhone X Clay White.webp"),
      },
    ],
  },
  {
    id: "apple_iphone_xr",
    name: "Apple iPhone XR",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 62,
      top: 62,
      width: 476,
      height: 1028,
    },
    thumbnail: require("../assets/images/devices/phones/Apple iPhone XR/apple_iphone_xr_thumbnail.webp"),
    variants: [
      {
        id: "blue",
        name: "Blue",
        source: require("../assets/images/devices/phones/Apple iPhone XR/Device/Apple iPhone XR Blue.webp"),
      },
      {
        id: "coral",
        name: "Coral",
        source: require("../assets/images/devices/phones/Apple iPhone XR/Device/Apple iPhone XR Coral.webp"),
      },
      {
        id: "red",
        name: "Red",
        source: require("../assets/images/devices/phones/Apple iPhone XR/Device/Apple iPhone XR Red.webp"),
      },
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/phones/Apple iPhone XR/Device/Apple iPhone XR Silver.webp"),
      },
      {
        id: "space_grey",
        name: "Space Grey",
        source: require("../assets/images/devices/phones/Apple iPhone XR/Device/Apple iPhone XR Space Grey.webp"),
      },
      {
        id: "yellow",
        name: "Yellow",
        source: require("../assets/images/devices/phones/Apple iPhone XR/Device/Apple iPhone XR Yellow.webp"),
      },
    ],
  },
  {
    id: "apple_iphone_5c",
    name: "Apple iPhone 5C",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 52,
      top: 186,
      width: 502,
      height: 890,
    },
    thumbnail: require("../assets/images/devices/phones/Apple iPhone 5c/apple_iphone_5c_thumbnail.webp"),
    variants: [
      {
        id: "blue",
        name: "Blue",
        source: require("../assets/images/devices/phones/Apple iPhone 5c/Device/Apple iPhone 5c Blue.webp"),
      },
      {
        id: "green",
        name: "Green",
        source: require("../assets/images/devices/phones/Apple iPhone 5c/Device/Apple iPhone 5c Green.webp"),
      },
      {
        id: "red",
        name: "Red",
        source: require("../assets/images/devices/phones/Apple iPhone 5c/Device/Apple iPhone 5c Red.webp"),
      },
      {
        id: "white",
        name: "White",
        source: require("../assets/images/devices/phones/Apple iPhone 5c/Device/Apple iPhone 5c White.webp"),
      },
      {
        id: "yellow",
        name: "Yellow",
        source: require("../assets/images/devices/phones/Apple iPhone 5c/Device/Apple iPhone 5c Yellow.webp"),
      },
    ],
  },
  {
    id: "apple_iphone_5s",
    name: "Apple iPhone 5S",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 50,
      top: 187,
      width: 507,
      height: 899,
    },
    thumbnail: require("../assets/images/devices/phones/Apple iPhone 5s/apple_iphone_5s_thumbnail.webp"),
    variants: [
      {
        id: "gold",
        name: "Gold",
        source: require("../assets/images/devices/phones/Apple iPhone 5s/Device/Apple iPhone 5s Gold.webp"),
      },
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/phones/Apple iPhone 5s/Device/Apple iPhone 5s Silver.webp"),
      },
      {
        id: "gray",
        name: "Gray",
        source: require("../assets/images/devices/phones/Apple iPhone 5s/Device/Apple iPhone 5s Space Gray.webp"),
      },
    ],
  },
  {
    id: "apple_iphone_6s",
    name: "Apple iPhone 6S",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 72,
      top: 181,
      width: 456,
      height: 810,
    },
    thumbnail: require("../assets/images/devices/phones/Apple iPhone 6s/apple_iphone_6s_thumbnail.webp"),
    variants: [
      {
        id: "gold",
        name: "Gold",
        source: require("../assets/images/devices/phones/Apple iPhone 6s/Device/Apple iPhone 6s Gold.webp"),
      },
      {
        id: "rose_gold",
        name: "Rose Gold",
        source: require("../assets/images/devices/phones/Apple iPhone 6s/Device/Apple iPhone 6s Rose Gold.webp"),
      },
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/phones/Apple iPhone 6s/Device/Apple iPhone 6s Silver.webp"),
      },
      {
        id: "space_gray",
        name: "Space Gray",
        source: require("../assets/images/devices/phones/Apple iPhone 6s/Device/Apple iPhone 6s Space Gray.webp"),
      },
    ],
  },
  {
    id: "apple_iphone_6s_plus",
    name: "Apple iPhone 6S Plus",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 42,
      top: 156,
      width: 516,
      height: 918,
    },
    thumbnail: require("../assets/images/devices/phones/Apple iPhone 6s Plus/apple_iphone_6s_plus_thumbnail.webp"),
    variants: [
      {
        id: "gold",
        name: "Gold",
        source: require("../assets/images/devices/phones/Apple iPhone 6s Plus/Device/Apple iPhone 6s Plus Gold.webp"),
      },
      {
        id: "rose_gold",
        name: "Rose Gold",
        source: require("../assets/images/devices/phones/Apple iPhone 6s Plus/Device/Apple iPhone 6s Plus Rose Gold.webp"),
      },
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/phones/Apple iPhone 6s Plus/Device/Apple iPhone 6s Plus Silver.webp"),
      },
      {
        id: "space_gray",
        name: "Space Gray",
        source: require("../assets/images/devices/phones/Apple iPhone 6s Plus/Device/Apple iPhone 6s Plus Space Gray.webp"),
      },
    ],
  },
  {
    id: "apple_iphone_7",
    name: "Apple iPhone 7",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 72,
      top: 181,
      width: 456,
      height: 810,
    },
    thumbnail: require("../assets/images/devices/phones/Apple iPhone 7/apple_iphone_7_thumbnail.webp"),
    variants: [
      {
        id: "gold",
        name: "Gold",
        source: require("../assets/images/devices/phones/Apple iPhone 7/Device/Apple iPhone 7 Gold.webp"),
      },
      {
        id: "jet_black",
        name: "Jet Black",
        source: require("../assets/images/devices/phones/Apple iPhone 7/Device/Apple iPhone 7 Jet Black.webp"),
      },
      {
        id: "matte_black",
        name: "Matte Black",
        source: require("../assets/images/devices/phones/Apple iPhone 7/Device/Apple iPhone 7 Matte Black.webp"),
      },
      {
        id: "rose_gold",
        name: "Rose Gold",
        source: require("../assets/images/devices/phones/Apple iPhone 7/Device/Apple iPhone 7 Rose Gold.webp"),
      },
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/phones/Apple iPhone 7/Device/Apple iPhone 7 Silver.webp"),
      },
    ],
  },
  {
    id: "apple_iphone_7_plus",
    name: "Apple iPhone 7 Plus",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 97,
      top: 195,
      width: 406,
      height: 720,
    },
    thumbnail: require("../assets/images/devices/phones/Apple iPhone 7 Plus/apple_iphone_7_plus_thumbnail.webp"),
    variants: [
      {
        id: "gold",
        name: "Gold",
        source: require("../assets/images/devices/phones/Apple iPhone 7 Plus/Device/Apple iPhone 7 Plus Gold.webp"),
      },
      {
        id: "jet_black",
        name: "Jet Black",
        source: require("../assets/images/devices/phones/Apple iPhone 7 Plus/Device/Apple iPhone 7 Plus Jet Black.webp"),
      },
      {
        id: "matte_black",
        name: "Matte Black",
        source: require("../assets/images/devices/phones/Apple iPhone 7 Plus/Device/Apple iPhone 7 Plus Matte Black.webp"),
      },
      {
        id: "rose_gold",
        name: "Rose Gold",
        source: require("../assets/images/devices/phones/Apple iPhone 7 Plus/Device/Apple iPhone 7 Plus Rose Gold.webp"),
      },
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/phones/Apple iPhone 7 Plus/Device/Apple iPhone 7 Plus Silver.webp"),
      },
    ],
  },
  {
    id: "apple_iphone_8",
    name: "Apple iPhone 8",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 62,
      top: 176,
      width: 476,
      height: 844,
    },
    thumbnail: require("../assets/images/devices/phones/Apple iPhone 8/apple_iphone_8_thumbnail.webp"),
    variants: [
      {
        id: "gold",
        name: "Gold",
        source: require("../assets/images/devices/phones/Apple iPhone 8/Device/Apple iPhone 8 Gold.webp"),
      },
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/phones/Apple iPhone 8/Device/Apple iPhone 8 Silver.webp"),
      },
      {
        id: "space_grey",
        name: "Space Grey",
        source: require("../assets/images/devices/phones/Apple iPhone 8/Device/Apple iPhone 8 Space Grey.webp"),
      },
    ],
  },
  {
    id: "apple_iphone_8_plus",
    name: "Apple iPhone 8 Plus",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 72,
      top: 145,
      width: 456,
      height: 809,
    },
    thumbnail: require("../assets/images/devices/phones/Apple iPhone 8 Plus/apple_iphone_8_plus_thumbnail.webp"),
    variants: [
      {
        id: "gold",
        name: "Gold",
        source: require("../assets/images/devices/phones/Apple iPhone 8 Plus/Device/Apple iPhone 8 Plus Gold.webp"),
      },
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/phones/Apple iPhone 8 Plus/Device/Apple iPhone 8 Plus Silver.webp"),
      },
      {
        id: "space_grey",
        name: "Space Grey",
        source: require("../assets/images/devices/phones/Apple iPhone 8 Plus/Device/Apple iPhone 8 Plus Space Grey.webp"),
      },
    ],
  },
  {
    id: "apple_iphone_11",
    name: "Apple iPhone 11",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 58,
      top: 58,
      width: 484,
      height: 1047,
    },
    thumbnail: require("../assets/images/devices/phones/Apple iPhone 11/apple_iphone_11_thumbnail.webp"),
    variants: [
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/phones/Apple iPhone 11/Device/Apple iPhone 11 Black.webp"),
      },
      {
        id: "green",
        name: "Green",
        source: require("../assets/images/devices/phones/Apple iPhone 11/Device/Apple iPhone 11 Green.webp"),
      },
      {
        id: "purple",
        name: "Purple",
        source: require("../assets/images/devices/phones/Apple iPhone 11/Device/Apple iPhone 11 Purple.webp"),
      },
      {
        id: "red",
        name: "Red",
        source: require("../assets/images/devices/phones/Apple iPhone 11/Device/Apple iPhone 11 Red.webp"),
      },
      {
        id: "white",
        name: "White",
        source: require("../assets/images/devices/phones/Apple iPhone 11/Device/Apple iPhone 11 White.webp"),
      },
      {
        id: "yellow",
        name: "Yellow",
        source: require("../assets/images/devices/phones/Apple iPhone 11/Device/Apple iPhone 11 Yellow.webp"),
      },
    ],
  },
  {
    id: "apple_iphone_11_pro",
    name: "Apple iPhone 11 Pro",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 56,
      top: 56,
      width: 488,
      height: 1056,
    },
    thumbnail: require("../assets/images/devices/phones/Apple iPhone 11 Pro/apple_iphone_11_pro_thumbnail.webp"),
    variants: [
      {
        id: "gold",
        name: "Gold",
        source: require("../assets/images/devices/phones/Apple iPhone 11 Pro/Device/Apple iPhone 11 Pro Gold.webp"),
      },
      {
        id: "midnight_green",
        name: "Midnight Green",
        source: require("../assets/images/devices/phones/Apple iPhone 11 Pro/Device/Apple iPhone 11 Pro Midnight Green.webp"),
      },
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/phones/Apple iPhone 11 Pro/Device/Apple iPhone 11 Pro Silver.webp"),
      },
      {
        id: "space_grey",
        name: "Space Grey",
        source: require("../assets/images/devices/phones/Apple iPhone 11 Pro/Device/Apple iPhone 11 Pro Space Grey.webp"),
      },
    ],
  },
  {
    id: "apple_iphone_11_pro_max",
    name: "Apple iPhone 11 Pro Max",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 51,
      top: 51,
      width: 498,
      height: 1075,
    },
    thumbnail: require("../assets/images/devices/phones/Apple iPhone 11 Pro Max/apple_iphone_11_pro_max_thumbnail.webp"),
    variants: [
      {
        id: "gold",
        name: "Gold",
        source: require("../assets/images/devices/phones/Apple iPhone 11 Pro Max/Device/Apple iPhone 11 Pro Max Gold.webp"),
      },
      {
        id: "midnight_green",
        name: "Midnight Green",
        source: require("../assets/images/devices/phones/Apple iPhone 11 Pro Max/Device/Apple iPhone 11 Pro Max Midnight Green.webp"),
      },
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/phones/Apple iPhone 11 Pro Max/Device/Apple iPhone 11 Pro Max Silver.webp"),
      },
      {
        id: "space_grey",
        name: "Space Grey",
        source: require("../assets/images/devices/phones/Apple iPhone 11 Pro Max/Device/Apple iPhone 11 Pro Max Space Grey.webp"),
      },
    ],
  },
  {
    id: "apple_iphone_se",
    name: "Apple iPhone SE",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 71,
      top: 199,
      width: 458,
      height: 813,
    },
    thumbnail: require("../assets/images/devices/phones/Apple iPhone SE/apple_iphone_se_thumbnail.webp"),
    variants: [
      {
        id: "gold",
        name: "Gold",
        source: require("../assets/images/devices/phones/Apple iPhone SE/Device/Apple iPhone SE Gold.webp"),
      },
      {
        id: "rose_gold",
        name: "Rose Gold",
        source: require("../assets/images/devices/phones/Apple iPhone SE/Device/Apple iPhone SE Rose Gold.webp"),
      },
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/phones/Apple iPhone SE/Device/Apple iPhone SE Silver.webp"),
      },
      {
        id: "space_gray",
        name: "Space Gray",
        source: require("../assets/images/devices/phones/Apple iPhone SE/Device/Apple iPhone SE Space Gray.webp"),
      },
    ],
  },
  {
    id: "apple_iphone_xs",
    name: "Apple iPhone XS",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 56,
      top: 51,
      width: 488,
      height: 1057,
    },
    thumbnail: require("../assets/images/devices/phones/Apple iPhone XS/apple_iphone_xs_thumbnail.webp"),
    variants: [
      {
        id: "gold",
        name: "Gold",
        source: require("../assets/images/devices/phones/Apple iPhone XS/Device/Apple iPhone XS Gold.webp"),
      },
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/phones/Apple iPhone XS/Device/Apple iPhone XS Silver.webp"),
      },
      {
        id: "space_grey",
        name: "Space Grey",
        source: require("../assets/images/devices/phones/Apple iPhone XS/Device/Apple iPhone XS Space Grey.webp"),
      },
    ],
  },
  {
    id: "apple_iphone_xs_max",
    name: "Apple iPhone XS Max",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 54,
      top: 54,
      width: 492,
      height: 1061,
    },
    thumbnail: require("../assets/images/devices/phones/Apple iPhone XS Max/apple_iphone_xs_max_thumbnail.webp"),
    variants: [
      {
        id: "gold",
        name: "Gold",
        source: require("../assets/images/devices/phones/Apple iPhone XS Max/Device/Apple iPhone XS Max Gold.webp"),
      },
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/phones/Apple iPhone XS Max/Device/Apple iPhone XS Max Silver.webp"),
      },
      {
        id: "space_grey",
        name: "Space Grey",
        source: require("../assets/images/devices/phones/Apple iPhone XS Max/Device/Apple iPhone XS Max Space Grey.webp"),
      },
    ],
  },
  {
    id: "google_pixel_3",
    name: "Google Pixel 3",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 46,
      top: 112,
      width: 508,
      height: 1014,
    },
    thumbnail: require("../assets/images/devices/phones/Google Pixel 3/google_pixel_3_thumbnail.webp"),
    variants: [
      {
        id: "clearly_white",
        name: "Clearly White",
        source: require("../assets/images/devices/phones/Google Pixel 3/Device/Google Pixel 3 - Clearly White.webp"),
      },
      {
        id: "just_black",
        name: "Just Black",
        source: require("../assets/images/devices/phones/Google Pixel 3/Device/Google Pixel 3 - Just Black.webp"),
      },
      {
        id: "not_pink",
        name: "Not Pink",
        source: require("../assets/images/devices/phones/Google Pixel 3/Device/Google Pixel 3 - Not Pink.webp"),
      },
    ],
  },
  {
    id: "google_pixel_3_xl",
    name: "Google Pixel 3 XL",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 51,
      top: 51,
      width: 498,
      height: 1022,
    },
    thumbnail: require("../assets/images/devices/phones/Google Pixel 3 XL/google_pixel_3xl_thumbnail.webp"),
    variants: [
      {
        id: "clearly_white",
        name: "Clearly White",
        source: require("../assets/images/devices/phones/Google Pixel 3 XL/Device/Google Pixel 3 XL - Clearly White.webp"),
      },
      {
        id: "just_black",
        name: "Just Black",
        source: require("../assets/images/devices/phones/Google Pixel 3 XL/Device/Google Pixel 3 XL - Just Black.webp"),
      },
      {
        id: "not_pink",
        name: "Not Pink",
        source: require("../assets/images/devices/phones/Google Pixel 3 XL/Device/Google Pixel 3 XL - Not Pink.webp"),
      },
    ],
  },
  {
    id: "google_pixel_4",
    name: "Google Pixel 4",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 46,
      top: 93,
      width: 508,
      height: 1071,
    },
    thumbnail: require("../assets/images/devices/phones/Google Pixel 4/google_pixel_4_thumbnail.webp"),
    variants: [
      {
        id: "clearly_white",
        name: "Clearly White",
        source: require("../assets/images/devices/phones/Google Pixel 4/Device/Google Pixel 4 Clearly White.webp"),
      },
      {
        id: "just_black",
        name: "Just Black",
        source: require("../assets/images/devices/phones/Google Pixel 4/Device/Google Pixel 4 Just Black.webp"),
      },
      {
        id: "oh_so_orange",
        name: "Oh So Orange",
        source: require("../assets/images/devices/phones/Google Pixel 4/Device/Google Pixel 4 Oh So Orange.webp"),
      },
    ],
  },
  {
    id: "google_pixel_4_xl",
    name: "Google Pixel 4 XL",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 36,
      top: 91,
      width: 528,
      height: 1114,
    },
    thumbnail: require("../assets/images/devices/phones/Google Pixel 4 XL/google_pixel_4xl_thumbnail.webp"),
    variants: [
      {
        id: "clearly_white",
        name: "Clearly White",
        source: require("../assets/images/devices/phones/Google Pixel 4 XL/Device/Google Pixel 4 XL Clearly White.webp"),
      },
      {
        id: "just_black",
        name: "Just Black",
        source: require("../assets/images/devices/phones/Google Pixel 4 XL/Device/Google Pixel 4 XL Just Black.webp"),
      },
      {
        id: "oh_so_orange",
        name: "Oh So Orange",
        source: require("../assets/images/devices/phones/Google Pixel 4 XL/Device/Google Pixel 4 XL Oh So Orange.webp"),
      },
    ],
  },
  {
    id: "htc_one_a9",
    name: "HTC One A9",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 38,
      top: 140,
      width: 521,
      height: 926,
    },
    thumbnail: require("../assets/images/devices/phones/HTC One A9/htc_one_a9_thumbnail.webp"),
    variants: [
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/phones/HTC One A9/Device/HTC One A9 Black.webp"),
      },
      {
        id: "white",
        name: "White",
        source: require("../assets/images/devices/phones/HTC One A9/Device/HTC One A9 White.webp"),
      },
    ],
  },
  {
    id: "htc_one_m8",
    name: "HTC One M8",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 34,
      top: 129,
      width: 530,
      height: 941,
    },
    thumbnail: require("../assets/images/devices/phones/HTC One M8/htc_one_m8_thumbnail.webp"),
    variants: [
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/phones/HTC One M8/Device/HTC One M8 Black.webp"),
      },
      {
        id: "gold",
        name: "Gold",
        source: require("../assets/images/devices/phones/HTC One M8/Device/HTC One M8 Gold.webp"),
      },
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/phones/HTC One M8/Device/HTC One M8 Silver.webp"),
      },
    ],
  },
  {
    id: "huawei_p8",
    name: "Huawei P8",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 46,
      top: 149,
      width: 508,
      height: 902,
    },
    thumbnail: require("../assets/images/devices/phones/Huawei P8/huawei_p8_thumbnail.webp"),
    variants: [
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/phones/Huawei P8/Device/Huawei P8 Black.webp"),
      },
      {
        id: "white",
        name: "White",
        source: require("../assets/images/devices/phones/Huawei P8/Device/Huawei P8 White.webp"),
      },
    ],
  },
  {
    id: "microsoft_lumia_950",
    name: "Microsoft Lumia 950",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 33,
      top: 133,
      width: 528,
      height: 937,
    },
    thumbnail: require("../assets/images/devices/phones/Microsoft Lumia 950/microsoft_lumia_950_thumbnail.webp"),
    variants: [
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/phones/Microsoft Lumia 950/Device/Microsoft Lumia 950 Black.webp"),
      },
      {
        id: "white",
        name: "White",
        source: require("../assets/images/devices/phones/Microsoft Lumia 950/Device/Microsoft Lumia 950 White.webp"),
      },
    ],
  },
  {
    id: "motorola_moto_e",
    name: "Motorola Moto E",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 49,
      top: 168,
      width: 495,
      height: 877,
    },
    thumbnail: require("../assets/images/devices/phones/Motorola Moto E/motorola_moto_e_thumbnail.webp"),
    variants: [
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/phones/Motorola Moto E/Device/Motorola Moto E Black.webp"),
      },
      {
        id: "white",
        name: "White",
        source: require("../assets/images/devices/phones/Motorola Moto E/Device/Motorola Moto E White.webp"),
      },
    ],
  },
  {
    id: "motorola_moto_g",
    name: "Motorola Moto G",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 65,
      top: 162,
      width: 470,
      height: 837,
    },
    thumbnail: require("../assets/images/devices/phones/Motorola Moto G/motorola_moto_g_thumbnail.webp"),
    variants: [
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/phones/Motorola Moto G/Device/Motorola Moto G.webp"),
      },
    ],
  },
  {
    id: "nexus_4",
    name: "Nexus 4",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 28,
      top: 129,
      width: 541,
      height: 900,
    },
    thumbnail: require("../assets/images/devices/phones/Nexus 4/nexus_4_thumbnail.webp"),
    variants: [
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/phones/Nexus 4/Device/Nexus 4.webp"),
      },
    ],
  },
  {
    id: "nexus_5x",
    name: "Nexus 5X",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 26,
      top: 115,
      width: 544,
      height: 966,
    },
    thumbnail: require("../assets/images/devices/phones/Nexus 5X/nexus_5x_thumbnail.webp"),
    variants: [
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/phones/Nexus 5X/Device/Nexus 5x.webp"),
      },
    ],
  },
  {
    id: "nexus_6p",
    name: "Nexus 6P",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 22,
      top: 125,
      width: 553,
      height: 983,
    },
    thumbnail: require("../assets/images/devices/phones/Nexus 6P/nexus_6p_thumbnail.webp"),
    variants: [
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/phones/Nexus 6P/Device/Nexus 6P.webp"),
      },
    ],
  },
  {
    id: "nokia_220",
    name: "Nokia 220",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 74,
      top: 179,
      width: 452,
      height: 602,
    },
    thumbnail: require("../assets/images/devices/phones/Nokia 220/nokia_220_thumbnail.webp"),
    variants: [
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/phones/Nokia 220/Device/Nokia 220 Black.webp"),
      },
      {
        id: "blue",
        name: "Blue",
        source: require("../assets/images/devices/phones/Nokia 220/Device/Nokia 220 Blue.webp"),
      },
      {
        id: "red",
        name: "Red",
        source: require("../assets/images/devices/phones/Nokia 220/Device/Nokia 220 Red.webp"),
      },
      {
        id: "white",
        name: "White",
        source: require("../assets/images/devices/phones/Nokia 220/Device/Nokia 220 White.webp"),
      },
      {
        id: "yellow",
        name: "Yellow",
        source: require("../assets/images/devices/phones/Nokia 220/Device/Nokia 220 Yellow.webp"),
      },
    ],
  },
  {
    id: "nokia_230",
    name: "Nokia 230",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 56,
      top: 134,
      width: 488,
      height: 651,
    },
    thumbnail: require("../assets/images/devices/phones/Nokia 230/nokia_230_thumbnail.webp"),
    variants: [
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/phones/Nokia 230/Device/Nokia 230 Black.webp"),
      },
      {
        id: "white",
        name: "White",
        source: require("../assets/images/devices/phones/Nokia 230/Device/Nokia 230 White.webp"),
      },
    ],
  },
  {
    id: "nokia_asha_230",
    name: "Nokia Asha 230",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 72,
      top: 188,
      width: 450,
      height: 600,
    },
    thumbnail: require("../assets/images/devices/phones/Nokia Asha 230/nokia_asha_230_thumbnail.webp"),
    variants: [
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/phones/Nokia Asha 230/Device/Nokia Asha 230 Black.webp"),
      },
      {
        id: "blue",
        name: "Blue",
        source: require("../assets/images/devices/phones/Nokia Asha 230/Device/Nokia Asha 230 Blue.webp"),
      },
      {
        id: "green",
        name: "Green",
        source: require("../assets/images/devices/phones/Nokia Asha 230/Device/Nokia Asha 230 Green.webp"),
      },
      {
        id: "red",
        name: "Red",
        source: require("../assets/images/devices/phones/Nokia Asha 230/Device/Nokia Asha 230 Red.webp"),
      },
      {
        id: "white",
        name: "White",
        source: require("../assets/images/devices/phones/Nokia Asha 230/Device/Nokia Asha 230 White.webp"),
      },
      {
        id: "yellow",
        name: "Yellow",
        source: require("../assets/images/devices/phones/Nokia Asha 230/Device/Nokia Asha 230 Yellow.webp"),
      },
    ],
  },
  {
    id: "nokia_c300",
    name: "Nokia C3-00",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 47,
      top: 167,
      width: 506,
      height: 380,
    },
    thumbnail: require("../assets/images/devices/phones/Nokia C3-00/nokia_c300_thumbnail.webp"),
    variants: [
      {
        id: "grey",
        name: "Grey",
        source: require("../assets/images/devices/phones/Nokia C3-00/Device/Nokia C3-00.webp"),
      },
    ],
  },
  {
    id: "samsung_galaxy_grand_prime",
    name: "Samsung Galaxy Grand Prime",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 68,
      top: 171,
      width: 464,
      height: 824,
    },
    thumbnail: require("../assets/images/devices/phones/Samsung Galaxy Grand Prime/samsung_galaxy_grand_prime_thumbnail.webp"),
    variants: [
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/phones/Samsung Galaxy Grand Prime/Device/Samsung Galaxy Grand Prime Black.webp"),
      },
      {
        id: "gold",
        name: "Gold",
        source: require("../assets/images/devices/phones/Samsung Galaxy Grand Prime/Device/Samsung Galaxy Grand Prime Gold.webp"),
      },
      {
        id: "white",
        name: "White",
        source: require("../assets/images/devices/phones/Samsung Galaxy Grand Prime/Device/Samsung Galaxy Grand Prime White.webp"),
      },
    ],
  },
  {
    id: "samsung_galaxy_note_5",
    name: "Samsung Galaxy Note 5",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 25,
      top: 110,
      width: 552,
      height: 981,
    },
    thumbnail: require("../assets/images/devices/phones/Samsung Galaxy Note 5/samsung_galaxy_note_5_thumbnail.webp"),
    variants: [
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/phones/Samsung Galaxy Note 5/Device/Samsung Galaxy Note 5 Black.webp"),
      },
      {
        id: "gold",
        name: "Gold",
        source: require("../assets/images/devices/phones/Samsung Galaxy Note 5/Device/Samsung Galaxy Note 5 Gold.webp"),
      },
      {
        id: "pink",
        name: "Pink",
        source: require("../assets/images/devices/phones/Samsung Galaxy Note 5/Device/Samsung Galaxy Note 5 Pink.webp"),
      },
      {
        id: "silver_titanium",
        name: "Silver Titanium",
        source: require("../assets/images/devices/phones/Samsung Galaxy Note 5/Device/Samsung Galaxy Note 5 Silver Titanium.webp"),
      },
      {
        id: "white",
        name: "White",
        source: require("../assets/images/devices/phones/Samsung Galaxy Note 5/Device/Samsung Galaxy Note 5 White.webp"),
      },
    ],
  },
  {
    id: "samsung_galaxy_note_10",
    name: "Samsung Galaxy Note 10",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 46,
      top: 46,
      width: 508,
      height: 1070,
    },
    thumbnail: require("../assets/images/devices/phones/Samsung Galaxy Note10/samsung_galaxy_note_10_thumbnail.webp"),
    variants: [
      {
        id: "aura_black",
        name: "Aura Black",
        source: require("../assets/images/devices/phones/Samsung Galaxy Note10/Device/Samsung Galaxy Note10 Aura Black.webp"),
      },
      {
        id: "aura_glow",
        name: "Aura Glow",
        source: require("../assets/images/devices/phones/Samsung Galaxy Note10/Device/Samsung Galaxy Note10 Aura Glow.webp"),
      },
      {
        id: "aura_pink",
        name: "Aura Pink",
        source: require("../assets/images/devices/phones/Samsung Galaxy Note10/Device/Samsung Galaxy Note10 Aura Pink.webp"),
      },
      {
        id: "aura_red",
        name: "Aura Red",
        source: require("../assets/images/devices/phones/Samsung Galaxy Note10/Device/Samsung Galaxy Note10 Aura Red.webp"),
      },
      {
        id: "aura_white",
        name: "Aura White",
        source: require("../assets/images/devices/phones/Samsung Galaxy Note10/Device/Samsung Galaxy Note10 Aura White.webp"),
      },
    ],
  },
  {
    id: "samsung_galaxy_note_10+",
    name: "Samsung Galaxy Note 10+",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 36,
      top: 36,
      width: 528,
      height: 1113,
    },
    thumbnail: require("../assets/images/devices/phones/Samsung Galaxy Note10+/samsung_galaxy_note_10+_thumbnail.webp"),
    variants: [
      {
        id: "aura_black",
        name: "Aura Black",
        source: require("../assets/images/devices/phones/Samsung Galaxy Note10+/Device/Samsung Galaxy Note10+ Aura Black.webp"),
      },
      {
        id: "aura_glow",
        name: "Aura Glow",
        source: require("../assets/images/devices/phones/Samsung Galaxy Note10+/Device/Samsung Galaxy Note10+ Aura Glow.webp"),
      },
      {
        id: "aura_blue",
        name: "Aura Blue",
        source: require("../assets/images/devices/phones/Samsung Galaxy Note10+/Device/Samsung Galaxy Note10+ Aura Blue.webp"),
      },
      {
        id: "aura_white",
        name: "Aura White",
        source: require("../assets/images/devices/phones/Samsung Galaxy Note10+/Device/Samsung Galaxy Note10+ Aura White.webp"),
      },
    ],
  },
  {
    id: "samsung_galaxy_s_duos",
    name: "Samsung Galaxy S Duos",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 49,
      top: 162,
      width: 504,
      height: 838,
    },
    thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S Duos/samsung_galaxy_s_duos_thumbnail.webp"),
    variants: [
      {
        id: "white",
        name: "White",
        source: require("../assets/images/devices/phones/Samsung Galaxy S Duos/Device/Samsung Galaxy S Duos.webp"),
      },
    ],
  },
  {
    id: "samsung_galaxy_s3",
    name: "Samsung Galaxy S3",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 64,
      top: 130,
      width: 472,
      height: 836,
    },
    thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S3/samsung_galaxy_s3_thumbnail.webp"),
    variants: [
      {
        id: "white",
        name: "White",
        source: require("../assets/images/devices/phones/Samsung Galaxy S3/Device/Samsung Galaxy S3.webp"),
      },
    ],
  },
  {
    id: "samsung_galaxy_s5",
    name: "Samsung Galaxy S5",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 54,
      top: 136,
      width: 492,
      height: 874,
    },
    thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S5/samsung_galaxy_s5_thumbnail.webp"),
    variants: [
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/phones/Samsung Galaxy S5/Device/Samsung Galaxy S5 Black.webp"),
      },
      {
        id: "white",
        name: "White",
        source: require("../assets/images/devices/phones/Samsung Galaxy S5/Device/Samsung Galaxy S5 White.webp"),
      },
    ],
  },
  {
    id: "samsung_galaxy_s7",
    name: "Samsung Galaxy S7",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 48,
      top: 139,
      width: 504,
      height: 894,
    },
    thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S7/samsung_galaxy_s7_thumbnail.webp"),
    variants: [
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/phones/Samsung Galaxy S7/Device/Samsung Galaxy S7 Black.webp"),
      },
      {
        id: "gold",
        name: "Gold",
        source: require("../assets/images/devices/phones/Samsung Galaxy S7/Device/Samsung Galaxy S7 Gold.webp"),
      },
      {
        id: "silver",
        name: "Silver",
        source: require("../assets/images/devices/phones/Samsung Galaxy S7/Device/Samsung Galaxy S7 Silver.webp"),
      },
      {
        id: "white",
        name: "White",
        source: require("../assets/images/devices/phones/Samsung Galaxy S7/Device/Samsung Galaxy S7 White.webp"),
      },
    ],
  },
  {
    id: "samsung_galaxy_s8",
    name: "Samsung Galaxy S8",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 36,
      top: 116,
      width: 528,
      height: 1084,
    },
    thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S8/samsung_galaxy_s8_thumbnail.webp"),
    variants: [
      {
        id: "arctic_silver",
        name: "Arctic Silver",
        source: require("../assets/images/devices/phones/Samsung Galaxy S8/Device/Samsung Galaxy S8 Arctic Silver.webp"),
      },
      {
        id: "coral_blue",
        name: "Coral Blue",
        source: require("../assets/images/devices/phones/Samsung Galaxy S8/Device/Samsung Galaxy S8 Coral Blue.webp"),
      },
      {
        id: "maple_gold",
        name: "Maple Gold",
        source: require("../assets/images/devices/phones/Samsung Galaxy S8/Device/Samsung Galaxy S8 Maple Gold.webp"),
      },
      {
        id: "midnight_black",
        name: "Midnight Black",
        source: require("../assets/images/devices/phones/Samsung Galaxy S8/Device/Samsung Galaxy S8 Midnight Black.webp"),
      },
      {
        id: "orchid_gray",
        name: "Orchid Gray",
        source: require("../assets/images/devices/phones/Samsung Galaxy S8/Device/Samsung Galaxy S8 Orchid Gray.webp"),
      },
    ],
  },
  {
    id: "samsung_galaxy_s9",
    name: "Samsung Galaxy S9",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 36,
      top: 87,
      width: 528,
      height: 1084,
    },
    thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S9/samsung_galaxy_s9_thumbnail.webp"),
    variants: [
      {
        id: "burgundy_red",
        name: "Burgundy Red",
        source: require("../assets/images/devices/phones/Samsung Galaxy S9/Device/Samsung Galaxy S9 Burgundy Red.webp"),
      },
      {
        id: "coral_blue",
        name: "Coral Blue",
        source: require("../assets/images/devices/phones/Samsung Galaxy S9/Device/Samsung Galaxy S9 Coral Blue.webp"),
      },
      {
        id: "lilac_purple",
        name: "Lilac Purple",
        source: require("../assets/images/devices/phones/Samsung Galaxy S9/Device/Samsung Galaxy S9 Lilac Purple.webp"),
      },
      {
        id: "midnight_black",
        name: "Midnight Black",
        source: require("../assets/images/devices/phones/Samsung Galaxy S9/Device/Samsung Galaxy S9 Midnight Black.webp"),
      },
      {
        id: "sunrise_gold",
        name: "Sunrise Gold",
        source: require("../assets/images/devices/phones/Samsung Galaxy S9/Device/Samsung Galaxy S9 Sunrise Gold.webp"),
      },
      {
        id: "titanium_gray",
        name: "Titanium Gray",
        source: require("../assets/images/devices/phones/Samsung Galaxy S9/Device/Samsung Galaxy S9 Titanium Gray.webp"),
      },
    ],
  },
  {
    id: "samsung_galaxy_s10",
    name: "Samsung Galaxy S10",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 36,
      top: 54,
      width: 528,
      height: 1114,
    },
    thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S10/samsung_galaxy_s10_thumbnail.webp"),
    variants: [
      {
        id: "flamingo_pink",
        name: "Flamingo Pink",
        source: require("../assets/images/devices/phones/Samsung Galaxy S10/Device/Samsung Galaxy S10 Flamingo Pink.webp"),
      },
      {
        id: "prism_black",
        name: "Prism Black",
        source: require("../assets/images/devices/phones/Samsung Galaxy S10/Device/Samsung Galaxy S10 Prism Black.webp"),
      },
      {
        id: "prism_blue",
        name: "Prism Blue",
        source: require("../assets/images/devices/phones/Samsung Galaxy S10/Device/Samsung Galaxy S10 Prism Blue.webp"),
      },
      {
        id: "prism_green",
        name: "Prism Green",
        source: require("../assets/images/devices/phones/Samsung Galaxy S10/Device/Samsung Galaxy S10 Prism Green.webp"),
      },
      {
        id: "prism_white",
        name: "Prism White",
        source: require("../assets/images/devices/phones/Samsung Galaxy S10/Device/Samsung Galaxy S10 Prism White.webp"),
      },
    ],
  },
  {
    id: "samsung_galaxy_s10+",
    name: "Samsung Galaxy S10+",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 36,
      top: 54,
      width: 528,
      height: 1114,
    },
    thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S10+/samsung_galaxy_s10+_thumbnail.webp"),
    variants: [
      {
        id: "ceramic_white",
        name: "Ceramic White",
        source: require("../assets/images/devices/phones/Samsung Galaxy S10+/Device/Samsung Galaxy S10+ Ceramic White.webp"),
      },
      {
        id: "flamingo_pink",
        name: "Flamingo Pink",
        source: require("../assets/images/devices/phones/Samsung Galaxy S10+/Device/Samsung Galaxy S10+ Flamingo Pink.webp"),
      },
      {
        id: "prism_black",
        name: "Prism Black",
        source: require("../assets/images/devices/phones/Samsung Galaxy S10+/Device/Samsung Galaxy S10+ Prism Black.webp"),
      },
      {
        id: "prism_blue",
        name: "Prism Blue",
        source: require("../assets/images/devices/phones/Samsung Galaxy S10+/Device/Samsung Galaxy S10+ Prism Blue.webp"),
      },
      {
        id: "prism_green",
        name: "Prism Green",
        source: require("../assets/images/devices/phones/Samsung Galaxy S10+/Device/Samsung Galaxy S10+ Prism Green.webp"),
      },
      {
        id: "prism_white",
        name: "Prism White",
        source: require("../assets/images/devices/phones/Samsung Galaxy S10+/Device/Samsung Galaxy S10+ Prism White.webp"),
      },
    ],
  },
  {
    id: "samsung_galaxy_s20",
    name: "Samsung Galaxy S20",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 65,
      top: 65,
      width: 470,
      height: 1044,
    },
    thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S20/samsung_galaxy_s20_thumbnail.webp"),
    variants: [
      {
        id: "cloud_blue",
        name: "Cloud Blue",
        source: require("../assets/images/devices/phones/Samsung Galaxy S20/Device/Samsung Galaxy S20 Cloud Blue.webp"),
      },
      {
        id: "cloud_pink",
        name: "Cloud Pink",
        source: require("../assets/images/devices/phones/Samsung Galaxy S20/Device/Samsung Galaxy S20 Cloud Pink.webp"),
      },
      {
        id: "cosmic_gray",
        name: "Cosmin Gray",
        source: require("../assets/images/devices/phones/Samsung Galaxy S20/Device/Samsung Galaxy S20 Cosmic Gray.webp"),
      },
    ],
  },
  {
    id: "samsung_galaxy_s20_ultra",
    name: "Samsung Galaxy S20 Ultra",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 65,
      top: 65,
      width: 470,
      height: 1044,
    },
    thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S20 Ultra/samsung_galaxy_s20_ultra_thumbnail.webp"),
    variants: [
      {
        id: "cosmic_black",
        name: "Cosmic Black",
        source: require("../assets/images/devices/phones/Samsung Galaxy S20 Ultra/Device/Samsung Galaxy S20 Utra Cosmic Black.webp"),
      },
      {
        id: "cosmic_gray",
        name: "Cosmic Gray",
        source: require("../assets/images/devices/phones/Samsung Galaxy S20 Ultra/Device/Samsung Galaxy S20 Utra Cosmic Gray.webp"),
      },
    ],
  },
  {
    id: "samsung_galaxy_s20+",
    name: "Samsung Galaxy S20+",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 65,
      top: 65,
      width: 470,
      height: 1044,
    },
    thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S20+/samsung_galaxy_s20+_thumbnail.webp"),
    variants: [
      {
        id: "cloud_blue",
        name: "Cloud Blue",
        source: require("../assets/images/devices/phones/Samsung Galaxy S20+/Device/Samsung Galaxy S20+ Cloud Blue.webp"),
      },
      {
        id: "cosmic_black",
        name: "Cosmic Black",
        source: require("../assets/images/devices/phones/Samsung Galaxy S20+/Device/Samsung Galaxy S20+ Cosmic Black.webp"),
      },
      {
        id: "cosmic_gray",
        name: "Cosmic Gray",
        source: require("../assets/images/devices/phones/Samsung Galaxy S20+/Device/Samsung Galaxy S20+ Cosmic Gray.webp"),
      },
    ],
  },
  {
    id: "samsung_galaxy_y",
    name: "Samsung Galaxy Y",
    type: DEVICE_TYPES.PHONE,
    baseWidth: 600,
    screenOffset: {
      left: 70,
      top: 220,
      width: 462,
      height: 617,
    },
    thumbnail: require("../assets/images/devices/phones/Samsung Galaxy Y/samsung_galaxy_y_thumbnail.webp"),
    variants: [
      {
        id: "black",
        name: "Black",
        source: require("../assets/images/devices/phones/Samsung Galaxy Y/Device/Samsung Galaxy Y Black.webp"),
      },
      {
        id: "white",
        name: "White",
        source: require("../assets/images/devices/phones/Samsung Galaxy Y/Device/Samsung Galaxy Y White.webp"),
      },
    ],
  },
];
