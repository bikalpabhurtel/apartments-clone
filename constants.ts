import {
  Dimensions,StatusBar,Platform
} from "react-native";

export const LIST_MARGIN = 10;
export const WIDTH = Dimensions.get("screen").width - LIST_MARGIN * 2;

const baseHeight = 160;
const iosNotch = 40;
const iosHeight = baseHeight + iosNotch;
let androidHeight = baseHeight;
let androidNotch = 0;
if (StatusBar.currentHeight) androidNotch = StatusBar.currentHeight;
androidHeight += androidNotch;

export const HEADER_HEIGHT = Platform.OS === "ios" ? iosHeight : androidHeight;