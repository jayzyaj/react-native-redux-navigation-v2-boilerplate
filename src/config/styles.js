import { StyleSheet } from "react-native";

export const COLOR = {
  DARK: "#040207",
  PANTOME: '#ff6f61',
  LIGHT: "#ffffff",
  BLACK: "#000",
  GRAY: "#9A9A9A",
  LIGHT_GRAY: "#f2f2f2",
  DANGER: "#FF5370",
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.LIGHT_GRAY,
    padding: 16
  },
  header: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    width: '100%',
    zIndex: 100
  }
});

export default Styles;
