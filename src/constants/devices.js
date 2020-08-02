export const DEVICE_TYPES = {
  COMPUTER: "computer",
  DISPLAY: "display",
  HOME: "home",
  PHONE: "phone",
  TABLET: "tablet",
  WATCH: "watch",
};

export const devices = {
  phones: [
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
      thumbnail: require("../assets/images/devices/phones/Apple iPhone X/apple_iphone_x_thumbnail.png"),
      variants: [
        {
          id: "silver",
          name: "Silver",
          source: require("../assets/images/devices/phones/Apple iPhone X/Device/Apple iPhone X Silver.png"),
        },
        {
          id: "space_grey",
          name: "Space Grey",
          source: require("../assets/images/devices/phones/Apple iPhone X/Device/Apple iPhone X Space Grey.png"),
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
      thumbnail: require("../assets/images/devices/phones/Apple iPhone X Flat/apple_iphone_x_flat_thumbnail.png"),
      variants: [
        {
          id: "white",
          name: "White",
          source: require("../assets/images/devices/phones/Apple iPhone X Flat/Device/Apple iPhone X Flat White.png"),
        },
        {
          id: "black",
          name: "Black",
          source: require("../assets/images/devices/phones/Apple iPhone X Flat/Device/Apple iPhone X Flat Black.png"),
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
      thumbnail: require("../assets/images/devices/phones/Apple iPhone X Clay/apple_iphone_x_clay_thumbnail.png"),
      variants: [
        {
          id: "white",
          name: "White",
          source: require("../assets/images/devices/phones/Apple iPhone X Clay/Device/Apple iPhone X Clay White.png"),
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
      thumbnail: require("../assets/images/devices/phones/Apple iPhone XR/apple_iphone_xr_thumbnail.png"),
      variants: [
        {
          id: "blue",
          name: "Blue",
          source: require("../assets/images/devices/phones/Apple iPhone XR/Device/Apple iPhone XR Blue.png"),
        },
        {
          id: "coral",
          name: "Coral",
          source: require("../assets/images/devices/phones/Apple iPhone XR/Device/Apple iPhone XR Coral.png"),
        },
        {
          id: "red",
          name: "Red",
          source: require("../assets/images/devices/phones/Apple iPhone XR/Device/Apple iPhone XR Red.png"),
        },
        {
          id: "silver",
          name: "Silver",
          source: require("../assets/images/devices/phones/Apple iPhone XR/Device/Apple iPhone XR Silver.png"),
        },
        {
          id: "space_grey",
          name: "Space Grey",
          source: require("../assets/images/devices/phones/Apple iPhone XR/Device/Apple iPhone XR Space Grey.png"),
        },
        {
          id: "yellow",
          name: "Yellow",
          source: require("../assets/images/devices/phones/Apple iPhone XR/Device/Apple iPhone XR Yellow.png"),
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
      thumbnail: require("../assets/images/devices/phones/Apple iPhone 5c/apple_iphone_5c_thumbnail.png"),
      variants: [
        {
          id: "blue",
          name: "Blue",
          source: require("../assets/images/devices/phones/Apple iPhone 5c/Device/Apple iPhone 5c Blue.png"),
        },
        {
          id: "green",
          name: "Green",
          source: require("../assets/images/devices/phones/Apple iPhone 5c/Device/Apple iPhone 5c Green.png"),
        },
        {
          id: "red",
          name: "Red",
          source: require("../assets/images/devices/phones/Apple iPhone 5c/Device/Apple iPhone 5c Red.png"),
        },
        {
          id: "white",
          name: "White",
          source: require("../assets/images/devices/phones/Apple iPhone 5c/Device/Apple iPhone 5c White.png"),
        },
        {
          id: "yellow",
          name: "Yellow",
          source: require("../assets/images/devices/phones/Apple iPhone 5c/Device/Apple iPhone 5c Yellow.png"),
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
      thumbnail: require("../assets/images/devices/phones/Apple iPhone 5s/apple_iphone_5s_thumbnail.png"),
      variants: [
        {
          id: "gold",
          name: "Gold",
          source: require("../assets/images/devices/phones/Apple iPhone 5s/Device/Apple iPhone 5s Gold.png"),
        },
        {
          id: "silver",
          name: "Silver",
          source: require("../assets/images/devices/phones/Apple iPhone 5s/Device/Apple iPhone 5s Silver.png"),
        },
        {
          id: "gray",
          name: "Gray",
          source: require("../assets/images/devices/phones/Apple iPhone 5s/Device/Apple iPhone 5s Space Gray.png"),
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
      thumbnail: require("../assets/images/devices/phones/Apple iPhone 6s/apple_iphone_6s_thumbnail.png"),
      variants: [
        {
          id: "gold",
          name: "Gold",
          source: require("../assets/images/devices/phones/Apple iPhone 6s/Device/Apple iPhone 6s Gold.png"),
        },
        {
          id: "rose_gold",
          name: "Rose Gold",
          source: require("../assets/images/devices/phones/Apple iPhone 6s/Device/Apple iPhone 6s Rose Gold.png"),
        },
        {
          id: "silver",
          name: "Silver",
          source: require("../assets/images/devices/phones/Apple iPhone 6s/Device/Apple iPhone 6s Silver.png"),
        },
        {
          id: "space_gray",
          name: "Space Gray",
          source: require("../assets/images/devices/phones/Apple iPhone 6s/Device/Apple iPhone 6s Space Gray.png"),
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
      thumbnail: require("../assets/images/devices/phones/Apple iPhone 6s Plus/apple_iphone_6s_plus_thumbnail.png"),
      variants: [
        {
          id: "gold",
          name: "Gold",
          source: require("../assets/images/devices/phones/Apple iPhone 6s Plus/Device/Apple iPhone 6s Plus Gold.png"),
        },
        {
          id: "rose_gold",
          name: "Rose Gold",
          source: require("../assets/images/devices/phones/Apple iPhone 6s Plus/Device/Apple iPhone 6s Plus Rose Gold.png"),
        },
        {
          id: "silver",
          name: "Silver",
          source: require("../assets/images/devices/phones/Apple iPhone 6s Plus/Device/Apple iPhone 6s Plus Silver.png"),
        },
        {
          id: "space_gray",
          name: "Space Gray",
          source: require("../assets/images/devices/phones/Apple iPhone 6s Plus/Device/Apple iPhone 6s Plus Space Gray.png"),
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
      thumbnail: require("../assets/images/devices/phones/Apple iPhone 7/apple_iphone_7_thumbnail.png"),
      variants: [
        {
          id: "gold",
          name: "Gold",
          source: require("../assets/images/devices/phones/Apple iPhone 7/Device/Apple iPhone 7 Gold.png"),
        },
        {
          id: "jet_black",
          name: "Jet Black",
          source: require("../assets/images/devices/phones/Apple iPhone 7/Device/Apple iPhone 7 Jet Black.png"),
        },
        {
          id: "matte_black",
          name: "Matte Black",
          source: require("../assets/images/devices/phones/Apple iPhone 7/Device/Apple iPhone 7 Matte Black.png"),
        },
        {
          id: "rose_gold",
          name: "Rose Gold",
          source: require("../assets/images/devices/phones/Apple iPhone 7/Device/Apple iPhone 7 Rose Gold.png"),
        },
        {
          id: "silver",
          name: "Silver",
          source: require("../assets/images/devices/phones/Apple iPhone 7/Device/Apple iPhone 7 Silver.png"),
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
      thumbnail: require("../assets/images/devices/phones/Apple iPhone 7 Plus/apple_iphone_7_plus_thumbnail.png"),
      variants: [
        {
          id: "gold",
          name: "Gold",
          source: require("../assets/images/devices/phones/Apple iPhone 7 Plus/Device/Apple iPhone 7 Plus Gold.png"),
        },
        {
          id: "jet_black",
          name: "Jet Black",
          source: require("../assets/images/devices/phones/Apple iPhone 7 Plus/Device/Apple iPhone 7 Plus Jet Black.png"),
        },
        {
          id: "matte_black",
          name: "Matte Black",
          source: require("../assets/images/devices/phones/Apple iPhone 7 Plus/Device/Apple iPhone 7 Plus Matte Black.png"),
        },
        {
          id: "rose_gold",
          name: "Rose Gold",
          source: require("../assets/images/devices/phones/Apple iPhone 7 Plus/Device/Apple iPhone 7 Plus Rose Gold.png"),
        },
        {
          id: "silver",
          name: "Silver",
          source: require("../assets/images/devices/phones/Apple iPhone 7 Plus/Device/Apple iPhone 7 Plus Silver.png"),
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
      thumbnail: require("../assets/images/devices/phones/Apple iPhone 8/apple_iphone_8_thumbnail.png"),
      variants: [
        {
          id: "gold",
          name: "Gold",
          source: require("../assets/images/devices/phones/Apple iPhone 8/Device/Apple iPhone 8 Gold.png"),
        },
        {
          id: "silver",
          name: "Silver",
          source: require("../assets/images/devices/phones/Apple iPhone 8/Device/Apple iPhone 8 Silver.png"),
        },
        {
          id: "space_grey",
          name: "Space Grey",
          source: require("../assets/images/devices/phones/Apple iPhone 8/Device/Apple iPhone 8 Space Grey.png"),
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
      thumbnail: require("../assets/images/devices/phones/Apple iPhone 8 Plus/apple_iphone_8_plus_thumbnail.png"),
      variants: [
        {
          id: "gold",
          name: "Gold",
          source: require("../assets/images/devices/phones/Apple iPhone 8 Plus/Device/Apple iPhone 8 Plus Gold.png"),
        },
        {
          id: "silver",
          name: "Silver",
          source: require("../assets/images/devices/phones/Apple iPhone 8 Plus/Device/Apple iPhone 8 Plus Silver.png"),
        },
        {
          id: "space_grey",
          name: "Space Grey",
          source: require("../assets/images/devices/phones/Apple iPhone 8 Plus/Device/Apple iPhone 8 Plus Space Grey.png"),
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
      thumbnail: require("../assets/images/devices/phones/Apple iPhone 11/apple_iphone_11_thumbnail.png"),
      variants: [
        {
          id: "black",
          name: "Black",
          source: require("../assets/images/devices/phones/Apple iPhone 11/Device/Apple iPhone 11 Black.png"),
        },
        {
          id: "green",
          name: "Green",
          source: require("../assets/images/devices/phones/Apple iPhone 11/Device/Apple iPhone 11 Green.png"),
        },
        {
          id: "purple",
          name: "Purple",
          source: require("../assets/images/devices/phones/Apple iPhone 11/Device/Apple iPhone 11 Purple.png"),
        },
        {
          id: "red",
          name: "Red",
          source: require("../assets/images/devices/phones/Apple iPhone 11/Device/Apple iPhone 11 Red.png"),
        },
        {
          id: "white",
          name: "White",
          source: require("../assets/images/devices/phones/Apple iPhone 11/Device/Apple iPhone 11 White.png"),
        },
        {
          id: "yellow",
          name: "Yellow",
          source: require("../assets/images/devices/phones/Apple iPhone 11/Device/Apple iPhone 11 Yellow.png"),
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
      thumbnail: require("../assets/images/devices/phones/Apple iPhone 11 Pro/apple_iphone_11_pro_thumbnail.png"),
      variants: [
        {
          id: "gold",
          name: "Gold",
          source: require("../assets/images/devices/phones/Apple iPhone 11 Pro/Device/Apple iPhone 11 Pro Gold.png"),
        },
        {
          id: "midnight_green",
          name: "Midnight Green",
          source: require("../assets/images/devices/phones/Apple iPhone 11 Pro/Device/Apple iPhone 11 Pro Midnight Green.png"),
        },
        {
          id: "silver",
          name: "Silver",
          source: require("../assets/images/devices/phones/Apple iPhone 11 Pro/Device/Apple iPhone 11 Pro Silver.png"),
        },
        {
          id: "space_grey",
          name: "Space Grey",
          source: require("../assets/images/devices/phones/Apple iPhone 11 Pro/Device/Apple iPhone 11 Pro Space Grey.png"),
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
      thumbnail: require("../assets/images/devices/phones/Apple iPhone 11 Pro Max/apple_iphone_11_pro_max_thumbnail.png"),
      variants: [
        {
          id: "gold",
          name: "Gold",
          source: require("../assets/images/devices/phones/Apple iPhone 11 Pro Max/Device/Apple iPhone 11 Pro Max Gold.png"),
        },
        {
          id: "midnight_green",
          name: "Midnight Green",
          source: require("../assets/images/devices/phones/Apple iPhone 11 Pro Max/Device/Apple iPhone 11 Pro Max Midnight Green.png"),
        },
        {
          id: "silver",
          name: "Silver",
          source: require("../assets/images/devices/phones/Apple iPhone 11 Pro Max/Device/Apple iPhone 11 Pro Max Silver.png"),
        },
        {
          id: "space_grey",
          name: "Space Grey",
          source: require("../assets/images/devices/phones/Apple iPhone 11 Pro Max/Device/Apple iPhone 11 Pro Max Space Grey.png"),
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
      thumbnail: require("../assets/images/devices/phones/Apple iPhone SE/apple_iphone_se_thumbnail.png"),
      variants: [
        {
          id: "gold",
          name: "Gold",
          source: require("../assets/images/devices/phones/Apple iPhone SE/Device/Apple iPhone SE Gold.png"),
        },
        {
          id: "rose_gold",
          name: "Rose Gold",
          source: require("../assets/images/devices/phones/Apple iPhone SE/Device/Apple iPhone SE Rose Gold.png"),
        },
        {
          id: "silver",
          name: "Silver",
          source: require("../assets/images/devices/phones/Apple iPhone SE/Device/Apple iPhone SE Silver.png"),
        },
        {
          id: "space_gray",
          name: "Space Gray",
          source: require("../assets/images/devices/phones/Apple iPhone SE/Device/Apple iPhone SE Space Gray.png"),
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
      thumbnail: require("../assets/images/devices/phones/Apple iPhone XS/apple_iphone_xs_thumbnail.png"),
      variants: [
        {
          id: "gold",
          name: "Gold",
          source: require("../assets/images/devices/phones/Apple iPhone XS/Device/Apple iPhone XS Gold.png"),
        },
        {
          id: "silver",
          name: "Silver",
          source: require("../assets/images/devices/phones/Apple iPhone XS/Device/Apple iPhone XS Silver.png"),
        },
        {
          id: "space_grey",
          name: "Space Grey",
          source: require("../assets/images/devices/phones/Apple iPhone XS/Device/Apple iPhone XS Space Grey.png"),
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
      thumbnail: require("../assets/images/devices/phones/Apple iPhone XS Max/apple_iphone_xs_max_thumbnail.png"),
      variants: [
        {
          id: "gold",
          name: "Gold",
          source: require("../assets/images/devices/phones/Apple iPhone XS Max/Device/Apple iPhone XS Max Gold.png"),
        },
        {
          id: "silver",
          name: "Silver",
          source: require("../assets/images/devices/phones/Apple iPhone XS Max/Device/Apple iPhone XS Max Silver.png"),
        },
        {
          id: "space_grey",
          name: "Space Grey",
          source: require("../assets/images/devices/phones/Apple iPhone XS Max/Device/Apple iPhone XS Max Space Grey.png"),
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
      thumbnail: require("../assets/images/devices/phones/Google Pixel 3/google_pixel_3_thumbnail.png"),
      variants: [
        {
          id: "clearly_white",
          name: "Clearly White",
          source: require("../assets/images/devices/phones/Google Pixel 3/Device/Google Pixel 3 - Clearly White.png"),
        },
        {
          id: "just_black",
          name: "Just Black",
          source: require("../assets/images/devices/phones/Google Pixel 3/Device/Google Pixel 3 - Just Black.png"),
        },
        {
          id: "not_pink",
          name: "Not Pink",
          source: require("../assets/images/devices/phones/Google Pixel 3/Device/Google Pixel 3 - Not Pink.png"),
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
      thumbnail: require("../assets/images/devices/phones/Google Pixel 3 XL/google_pixel_3xl_thumbnail.png"),
      variants: [
        {
          id: "clearly_white",
          name: "Clearly White",
          source: require("../assets/images/devices/phones/Google Pixel 3 XL/Device/Google Pixel 3 XL - Clearly White.png"),
        },
        {
          id: "just_black",
          name: "Just Black",
          source: require("../assets/images/devices/phones/Google Pixel 3 XL/Device/Google Pixel 3 XL - Just Black.png"),
        },
        {
          id: "not_pink",
          name: "Not Pink",
          source: require("../assets/images/devices/phones/Google Pixel 3 XL/Device/Google Pixel 3 XL - Not Pink.png"),
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
      thumbnail: require("../assets/images/devices/phones/Google Pixel 4/google_pixel_4_thumbnail.png"),
      variants: [
        {
          id: "clearly_white",
          name: "Clearly White",
          source: require("../assets/images/devices/phones/Google Pixel 4/Device/Google Pixel 4 Clearly White.png"),
        },
        {
          id: "just_black",
          name: "Just Black",
          source: require("../assets/images/devices/phones/Google Pixel 4/Device/Google Pixel 4 Just Black.png"),
        },
        {
          id: "oh_so_orange",
          name: "Oh So Orange",
          source: require("../assets/images/devices/phones/Google Pixel 4/Device/Google Pixel 4 Oh So Orange.png"),
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
      thumbnail: require("../assets/images/devices/phones/Google Pixel 4 XL/google_pixel_4xl_thumbnail.png"),
      variants: [
        {
          id: "clearly_white",
          name: "Clearly White",
          source: require("../assets/images/devices/phones/Google Pixel 4 XL/Device/Google Pixel 4 XL Clearly White.png"),
        },
        {
          id: "just_black",
          name: "Just Black",
          source: require("../assets/images/devices/phones/Google Pixel 4 XL/Device/Google Pixel 4 XL Just Black.png"),
        },
        {
          id: "oh_so_orange",
          name: "Oh So Orange",
          source: require("../assets/images/devices/phones/Google Pixel 4 XL/Device/Google Pixel 4 XL Oh So Orange.png"),
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
      thumbnail: require("../assets/images/devices/phones/HTC One A9/htc_one_a9_thumbnail.png"),
      variants: [
        {
          id: "black",
          name: "Black",
          source: require("../assets/images/devices/phones/HTC One A9/Device/HTC One A9 Black.png"),
        },
        {
          id: "white",
          name: "White",
          source: require("../assets/images/devices/phones/HTC One A9/Device/HTC One A9 White.png"),
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
      thumbnail: require("../assets/images/devices/phones/HTC One M8/htc_one_m8_thumbnail.png"),
      variants: [
        {
          id: "black",
          name: "Black",
          source: require("../assets/images/devices/phones/HTC One M8/Device/HTC One M8 Black.png"),
        },
        {
          id: "gold",
          name: "Gold",
          source: require("../assets/images/devices/phones/HTC One M8/Device/HTC One M8 Gold.png"),
        },
        {
          id: "silver",
          name: "Silver",
          source: require("../assets/images/devices/phones/HTC One M8/Device/HTC One M8 Silver.png"),
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
      thumbnail: require("../assets/images/devices/phones/Huawei P8/huawei_p8_thumbnail.png"),
      variants: [
        {
          id: "black",
          name: "Black",
          source: require("../assets/images/devices/phones/Huawei P8/Device/Huawei P8 Black.png"),
        },
        {
          id: "white",
          name: "White",
          source: require("../assets/images/devices/phones/Huawei P8/Device/Huawei P8 White.png"),
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
      thumbnail: require("../assets/images/devices/phones/Microsoft Lumia 950/microsoft_lumia_950_thumbnail.png"),
      variants: [
        {
          id: "black",
          name: "Black",
          source: require("../assets/images/devices/phones/Microsoft Lumia 950/Device/Microsoft Lumia 950 Black.png"),
        },
        {
          id: "white",
          name: "White",
          source: require("../assets/images/devices/phones/Microsoft Lumia 950/Device/Microsoft Lumia 950 White.png"),
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
      thumbnail: require("../assets/images/devices/phones/Motorola Moto E/motorola_moto_e_thumbnail.png"),
      variants: [
        {
          id: "black",
          name: "Black",
          source: require("../assets/images/devices/phones/Motorola Moto E/Device/Motorola Moto E Black.png"),
        },
        {
          id: "white",
          name: "White",
          source: require("../assets/images/devices/phones/Motorola Moto E/Device/Motorola Moto E White.png"),
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
      thumbnail: require("../assets/images/devices/phones/Motorola Moto G/motorola_moto_g_thumbnail.png"),
      variants: [
        {
          id: "black",
          name: "Black",
          source: require("../assets/images/devices/phones/Motorola Moto G/Device/Motorola Moto G.png"),
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
      thumbnail: require("../assets/images/devices/phones/Nexus 4/nexus_4_thumbnail.png"),
      variants: [
        {
          id: "black",
          name: "Black",
          source: require("../assets/images/devices/phones/Nexus 4/Device/Nexus 4.png"),
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
      thumbnail: require("../assets/images/devices/phones/Nexus 5X/nexus_5x_thumbnail.png"),
      variants: [
        {
          id: "black",
          name: "Black",
          source: require("../assets/images/devices/phones/Nexus 5X/Device/Nexus 5x.png"),
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
      thumbnail: require("../assets/images/devices/phones/Nexus 6P/nexus_6p_thumbnail.png"),
      variants: [
        {
          id: "black",
          name: "Black",
          source: require("../assets/images/devices/phones/Nexus 6P/Device/Nexus 6P.png"),
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
      thumbnail: require("../assets/images/devices/phones/Nokia 220/nokia_220_thumbnail.png"),
      variants: [
        {
          id: "black",
          name: "Black",
          source: require("../assets/images/devices/phones/Nokia 220/Device/Nokia 220 Black.png"),
        },
        {
          id: "blue",
          name: "Blue",
          source: require("../assets/images/devices/phones/Nokia 220/Device/Nokia 220 Blue.png"),
        },
        {
          id: "red",
          name: "Red",
          source: require("../assets/images/devices/phones/Nokia 220/Device/Nokia 220 Red.png"),
        },
        {
          id: "white",
          name: "White",
          source: require("../assets/images/devices/phones/Nokia 220/Device/Nokia 220 White.png"),
        },
        {
          id: "yellow",
          name: "Yellow",
          source: require("../assets/images/devices/phones/Nokia 220/Device/Nokia 220 Yellow.png"),
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
      thumbnail: require("../assets/images/devices/phones/Nokia 230/nokia_230_thumbnail.png"),
      variants: [
        {
          id: "black",
          name: "Black",
          source: require("../assets/images/devices/phones/Nokia 230/Device/Nokia 230 Black.png"),
        },
        {
          id: "white",
          name: "White",
          source: require("../assets/images/devices/phones/Nokia 230/Device/Nokia 230 White.png"),
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
      thumbnail: require("../assets/images/devices/phones/Nokia Asha 230/nokia_asha_230_thumbnail.png"),
      variants: [
        {
          id: "black",
          name: "Black",
          source: require("../assets/images/devices/phones/Nokia Asha 230/Device/Nokia Asha 230 Black.png"),
        },
        {
          id: "blue",
          name: "Blue",
          source: require("../assets/images/devices/phones/Nokia Asha 230/Device/Nokia Asha 230 Blue.png"),
        },
        {
          id: "green",
          name: "Green",
          source: require("../assets/images/devices/phones/Nokia Asha 230/Device/Nokia Asha 230 Green.png"),
        },
        {
          id: "red",
          name: "Red",
          source: require("../assets/images/devices/phones/Nokia Asha 230/Device/Nokia Asha 230 Red.png"),
        },
        {
          id: "white",
          name: "White",
          source: require("../assets/images/devices/phones/Nokia Asha 230/Device/Nokia Asha 230 White.png"),
        },
        {
          id: "yellow",
          name: "Yellow",
          source: require("../assets/images/devices/phones/Nokia Asha 230/Device/Nokia Asha 230 Yellow.png"),
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
      thumbnail: require("../assets/images/devices/phones/Nokia C3-00/nokia_c300_thumbnail.png"),
      variants: [
        {
          id: "grey",
          name: "Grey",
          source: require("../assets/images/devices/phones/Nokia C3-00/Device/Nokia C3-00.png"),
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
      thumbnail: require("../assets/images/devices/phones/Samsung Galaxy Grand Prime/samsung_galaxy_grand_prime_thumbnail.png"),
      variants: [
        {
          id: "black",
          name: "Black",
          source: require("../assets/images/devices/phones/Samsung Galaxy Grand Prime/Device/Samsung Galaxy Grand Prime Black.png"),
        },
        {
          id: "gold",
          name: "Gold",
          source: require("../assets/images/devices/phones/Samsung Galaxy Grand Prime/Device/Samsung Galaxy Grand Prime Gold.png"),
        },
        {
          id: "white",
          name: "White",
          source: require("../assets/images/devices/phones/Samsung Galaxy Grand Prime/Device/Samsung Galaxy Grand Prime White.png"),
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
      thumbnail: require("../assets/images/devices/phones/Samsung Galaxy Note 5/samsung_galaxy_note_5_thumbnail.png"),
      variants: [
        {
          id: "black",
          name: "Black",
          source: require("../assets/images/devices/phones/Samsung Galaxy Note 5/Device/Samsung Galaxy Note 5 Black.png"),
        },
        {
          id: "gold",
          name: "Gold",
          source: require("../assets/images/devices/phones/Samsung Galaxy Note 5/Device/Samsung Galaxy Note 5 Gold.png"),
        },
        {
          id: "pink",
          name: "Pink",
          source: require("../assets/images/devices/phones/Samsung Galaxy Note 5/Device/Samsung Galaxy Note 5 Pink.png"),
        },
        {
          id: "silver_titanium",
          name: "Silver Titanium",
          source: require("../assets/images/devices/phones/Samsung Galaxy Note 5/Device/Samsung Galaxy Note 5 Silver Titanium.png"),
        },
        {
          id: "white",
          name: "White",
          source: require("../assets/images/devices/phones/Samsung Galaxy Note 5/Device/Samsung Galaxy Note 5 White.png"),
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
      thumbnail: require("../assets/images/devices/phones/Samsung Galaxy Note10/samsung_galaxy_note_10_thumbnail.png"),
      variants: [
        {
          id: "aura_black",
          name: "Aura Black",
          source: require("../assets/images/devices/phones/Samsung Galaxy Note10/Device/Samsung Galaxy Note10 Aura Black.png"),
        },
        {
          id: "aura_glow",
          name: "Aura Glow",
          source: require("../assets/images/devices/phones/Samsung Galaxy Note10/Device/Samsung Galaxy Note10 Aura Glow.png"),
        },
        {
          id: "aura_pink",
          name: "Aura Pink",
          source: require("../assets/images/devices/phones/Samsung Galaxy Note10/Device/Samsung Galaxy Note10 Aura Pink.png"),
        },
        {
          id: "aura_red",
          name: "Aura Red",
          source: require("../assets/images/devices/phones/Samsung Galaxy Note10/Device/Samsung Galaxy Note10 Aura Red.png"),
        },
        {
          id: "aura_white",
          name: "Aura White",
          source: require("../assets/images/devices/phones/Samsung Galaxy Note10/Device/Samsung Galaxy Note10 Aura White.png"),
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
      thumbnail: require("../assets/images/devices/phones/Samsung Galaxy Note10+/samsung_galaxy_note_10+_thumbnail.png"),
      variants: [
        {
          id: "aura_black",
          name: "Aura Black",
          source: require("../assets/images/devices/phones/Samsung Galaxy Note10+/Device/Samsung Galaxy Note10+ Aura Black.png"),
        },
        {
          id: "aura_glow",
          name: "Aura Glow",
          source: require("../assets/images/devices/phones/Samsung Galaxy Note10+/Device/Samsung Galaxy Note10+ Aura Glow.png"),
        },
        {
          id: "aura_blue",
          name: "Aura Blue",
          source: require("../assets/images/devices/phones/Samsung Galaxy Note10+/Device/Samsung Galaxy Note10+ Aura Blue.png"),
        },
        {
          id: "aura_white",
          name: "Aura White",
          source: require("../assets/images/devices/phones/Samsung Galaxy Note10+/Device/Samsung Galaxy Note10+ Aura White.png"),
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
      thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S Duos/samsung_galaxy_s_duos_thumbnail.png"),
      variants: [
        {
          id: "white",
          name: "White",
          source: require("../assets/images/devices/phones/Samsung Galaxy S Duos/Device/Samsung Galaxy S Duos.png"),
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
      thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S3/samsung_galaxy_s3_thumbnail.png"),
      variants: [
        {
          id: "white",
          name: "White",
          source: require("../assets/images/devices/phones/Samsung Galaxy S3/Device/Samsung Galaxy S3.png"),
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
      thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S5/samsung_galaxy_s5_thumbnail.png"),
      variants: [
        {
          id: "black",
          name: "Black",
          source: require("../assets/images/devices/phones/Samsung Galaxy S5/Device/Samsung Galaxy S5 Black.png"),
        },
        {
          id: "white",
          name: "White",
          source: require("../assets/images/devices/phones/Samsung Galaxy S5/Device/Samsung Galaxy S5 White.png"),
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
      thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S7/samsung_galaxy_s7_thumbnail.png"),
      variants: [
        {
          id: "black",
          name: "Black",
          source: require("../assets/images/devices/phones/Samsung Galaxy S7/Device/Samsung Galaxy S7 Black.png"),
        },
        {
          id: "gold",
          name: "Gold",
          source: require("../assets/images/devices/phones/Samsung Galaxy S7/Device/Samsung Galaxy S7 Gold.png"),
        },
        {
          id: "silver",
          name: "Silver",
          source: require("../assets/images/devices/phones/Samsung Galaxy S7/Device/Samsung Galaxy S7 Silver.png"),
        },
        {
          id: "white",
          name: "White",
          source: require("../assets/images/devices/phones/Samsung Galaxy S7/Device/Samsung Galaxy S7 White.png"),
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
      thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S8/samsung_galaxy_s8_thumbnail.png"),
      variants: [
        {
          id: "arctic_silver",
          name: "Arctic Silver",
          source: require("../assets/images/devices/phones/Samsung Galaxy S8/Device/Samsung Galaxy S8 Arctic Silver.png"),
        },
        {
          id: "coral_blue",
          name: "Coral Blue",
          source: require("../assets/images/devices/phones/Samsung Galaxy S8/Device/Samsung Galaxy S8 Coral Blue.png"),
        },
        {
          id: "maple_gold",
          name: "Maple Gold",
          source: require("../assets/images/devices/phones/Samsung Galaxy S8/Device/Samsung Galaxy S8 Maple Gold.png"),
        },
        {
          id: "midnight_black",
          name: "Midnight Black",
          source: require("../assets/images/devices/phones/Samsung Galaxy S8/Device/Samsung Galaxy S8 Midnight Black.png"),
        },
        {
          id: "orchid_gray",
          name: "Orchid Gray",
          source: require("../assets/images/devices/phones/Samsung Galaxy S8/Device/Samsung Galaxy S8 Orchid Gray.png"),
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
      thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S9/samsung_galaxy_s9_thumbnail.png"),
      variants: [
        {
          id: "burgundy_red",
          name: "Burgundy Red",
          source: require("../assets/images/devices/phones/Samsung Galaxy S9/Device/Samsung Galaxy S9 Burgundy Red.png"),
        },
        {
          id: "coral_blue",
          name: "Coral Blue",
          source: require("../assets/images/devices/phones/Samsung Galaxy S9/Device/Samsung Galaxy S9 Coral Blue.png"),
        },
        {
          id: "lilac_purple",
          name: "Lilac Purple",
          source: require("../assets/images/devices/phones/Samsung Galaxy S9/Device/Samsung Galaxy S9 Lilac Purple.png"),
        },
        {
          id: "midnight_black",
          name: "Midnight Black",
          source: require("../assets/images/devices/phones/Samsung Galaxy S9/Device/Samsung Galaxy S9 Midnight Black.png"),
        },
        {
          id: "sunrise_gold",
          name: "Sunrise Gold",
          source: require("../assets/images/devices/phones/Samsung Galaxy S9/Device/Samsung Galaxy S9 Sunrise Gold.png"),
        },
        {
          id: "titanium_gray",
          name: "Titanium Gray",
          source: require("../assets/images/devices/phones/Samsung Galaxy S9/Device/Samsung Galaxy S9 Titanium Gray.png"),
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
      thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S10/samsung_galaxy_s10_thumbnail.png"),
      variants: [
        {
          id: "flamingo_pink",
          name: "Flamingo Pink",
          source: require("../assets/images/devices/phones/Samsung Galaxy S10/Device/Samsung Galaxy S10 Flamingo Pink.png"),
        },
        {
          id: "prism_black",
          name: "Prism Black",
          source: require("../assets/images/devices/phones/Samsung Galaxy S10/Device/Samsung Galaxy S10 Prism Black.png"),
        },
        {
          id: "prism_blue",
          name: "Prism Blue",
          source: require("../assets/images/devices/phones/Samsung Galaxy S10/Device/Samsung Galaxy S10 Prism Blue.png"),
        },
        {
          id: "prism_green",
          name: "Prism Green",
          source: require("../assets/images/devices/phones/Samsung Galaxy S10/Device/Samsung Galaxy S10 Prism Green.png"),
        },
        {
          id: "prism_white",
          name: "Prism White",
          source: require("../assets/images/devices/phones/Samsung Galaxy S10/Device/Samsung Galaxy S10 Prism White.png"),
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
      thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S10+/samsung_galaxy_s10+_thumbnail.png"),
      variants: [
        {
          id: "ceramic_white",
          name: "Ceramic White",
          source: require("../assets/images/devices/phones/Samsung Galaxy S10+/Device/Samsung Galaxy S10+ Ceramic White.png"),
        },
        {
          id: "flamingo_pink",
          name: "Flamingo Pink",
          source: require("../assets/images/devices/phones/Samsung Galaxy S10+/Device/Samsung Galaxy S10+ Flamingo Pink.png"),
        },
        {
          id: "prism_black",
          name: "Prism Black",
          source: require("../assets/images/devices/phones/Samsung Galaxy S10+/Device/Samsung Galaxy S10+ Prism Black.png"),
        },
        {
          id: "prism_blue",
          name: "Prism Blue",
          source: require("../assets/images/devices/phones/Samsung Galaxy S10+/Device/Samsung Galaxy S10+ Prism Blue.png"),
        },
        {
          id: "prism_green",
          name: "Prism Green",
          source: require("../assets/images/devices/phones/Samsung Galaxy S10+/Device/Samsung Galaxy S10+ Prism Green.png"),
        },
        {
          id: "prism_white",
          name: "Prism White",
          source: require("../assets/images/devices/phones/Samsung Galaxy S10+/Device/Samsung Galaxy S10+ Prism White.png"),
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
      thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S20/samsung_galaxy_s20_thumbnail.png"),
      variants: [
        {
          id: "cloud_blue",
          name: "Cloud Blue",
          source: require("../assets/images/devices/phones/Samsung Galaxy S20/Device/Samsung Galaxy S20 Cloud Blue.png"),
        },
        {
          id: "cloud_pink",
          name: "Cloud Pink",
          source: require("../assets/images/devices/phones/Samsung Galaxy S20/Device/Samsung Galaxy S20 Cloud Pink.png"),
        },
        {
          id: "cosmic_gray",
          name: "Cosmin Gray",
          source: require("../assets/images/devices/phones/Samsung Galaxy S20/Device/Samsung Galaxy S20 Cosmic Gray.png"),
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
      thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S20 Ultra/samsung_galaxy_s20_ultra_thumbnail.png"),
      variants: [
        {
          id: "cosmic_black",
          name: "Cosmic Black",
          source: require("../assets/images/devices/phones/Samsung Galaxy S20 Ultra/Device/Samsung Galaxy S20 Utra Cosmic Black.png"),
        },
        {
          id: "cosmic_gray",
          name: "Cosmic Gray",
          source: require("../assets/images/devices/phones/Samsung Galaxy S20 Ultra/Device/Samsung Galaxy S20 Utra Cosmic Gray.png"),
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
      thumbnail: require("../assets/images/devices/phones/Samsung Galaxy S20+/samsung_galaxy_s20+_thumbnail.png"),
      variants: [
        {
          id: "cloud_blue",
          name: "Cloud Blue",
          source: require("../assets/images/devices/phones/Samsung Galaxy S20+/Device/Samsung Galaxy S20+ Cloud Blue.png"),
        },
        {
          id: "cosmic_black",
          name: "Cosmic Black",
          source: require("../assets/images/devices/phones/Samsung Galaxy S20+/Device/Samsung Galaxy S20+ Cosmic Black.png"),
        },
        {
          id: "cosmic_gray",
          name: "Cosmic Gray",
          source: require("../assets/images/devices/phones/Samsung Galaxy S20+/Device/Samsung Galaxy S20+ Cosmic Gray.png"),
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
      thumbnail: require("../assets/images/devices/phones/Samsung Galaxy Y/samsung_galaxy_y_thumbnail.png"),
      variants: [
        {
          id: "black",
          name: "Black",
          source: require("../assets/images/devices/phones/Samsung Galaxy Y/Device/Samsung Galaxy Y Black.png"),
        },
        {
          id: "white",
          name: "White",
          source: require("../assets/images/devices/phones/Samsung Galaxy Y/Device/Samsung Galaxy Y White.png"),
        },
      ],
    },
  ],
};
