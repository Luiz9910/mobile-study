import theme from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: theme.COLORS.GRAY_500,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    padding: 24
  },
  title: {
    fontSize: theme.FONT_SIZE.MD,
    fontWeight: "bold",
    color: theme.COLORS.GRAY_200,
    fontFamily: theme.FONT_FAMILY.REGULAR
  },
  icon: {
    marginRight: 20,
  }
});