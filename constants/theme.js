import { Dimensions } from "react-native";

const COLORS = {
    primary: "#2B3859",
    secondary: "#8CBB38",
    tertiary: "#FF7754",
    gray: "#828282",
    gray2: "#6C738D",
    gray3:"#6C738D",
    white: "#fff",
    lightWhite: "#FAFAFC",
    darkWhite: '#F5F5F5',
    blackText: "#121212",
    MainPurple: '#5C3BDE',
    MainText: '#212F54',
    SecondText: '#384668',
    blackTillBack: "#0000007a",
    alert: "#ab5757",
    tillBlue: "#D1D8F4"
  };
  
  const FONT = {
    regular: "DMRegular",
    medium: "DMMedium",
    bold: "DMBold",
  };
  
  const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
  };

  let ScreenHeigh =Dimensions.get("window").height
  let ScreenWidth =Dimensions.get("window").width
  
  const SHADOWS = {
    small: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5.84,
      elevation: 5,
    },
  };
  
  export { COLORS, FONT, SIZES, SHADOWS, ScreenHeigh, ScreenWidth };