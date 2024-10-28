import theme from "@theme/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 32,
    marginBottom: 32, 
    marginLeft: 0,  
    marginRight: 0,
  },
  title: {
    textAlign: "center",
    fontSize: theme.FONT_SIZE.XL,
    fontFamily: theme.FONT_FAMILY.BOLD,
    color: theme.COLORS.WHITE,
  },
  subTitle: {
    textAlign: "center",
    fontSize: theme.FONT_SIZE.MD,
    fontFamily: theme.FONT_FAMILY.REGULAR,
    color: theme.COLORS.GRAY_300,
  }
});
