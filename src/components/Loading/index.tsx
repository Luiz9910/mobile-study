import { ActivityIndicator, View } from "react-native";
import { styles } from "./style";
import theme from "@theme/index";

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator 
        style={styles.loadIndicator} 
        color={theme.COLORS.GREEN_700}
       />
    </View>
  );
}
