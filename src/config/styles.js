import { StyleSheet } from "react-native";

export const COLOR = {
  STATUS_BAR: "#040207", // SOME KIND OF BLACK
  BACKGROUND: "#D3D3D3", // LIGHT GRAY
  ICON_BACKGROUND: '#FDFD66', // LIGHT YELLOW
  HEADER_BACKGROUND: "#DE1738", // PINKISH RED
  HEADER_TINT: "#ffffff", // WHITE
  TEXT: "#FDFD66", // LIGHT YELLOW
  CONTENT_TEXT: '#ffffff', // WHITE
  INPUT_TEXT: "#000", // BLACK
  INPUT_PLACEHOLDER: "#9A9A9A", // GRAY
  INPUT_BACKGROUND: "#f2f2f2", // LIGHT GRAY
  BUTTON_BACKGROUND: "#DE1738", // PINKISH RED
  BUTTON_TEXT: "#ffffff", // WHITE
  ERROR_TEXT: "#FF5370", // REDISH
  ICON: "#004792" // BLUE
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND,
    padding: 16
  }
});

export default Styles;
