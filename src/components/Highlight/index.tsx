import { Text, View } from "react-native";
import { styles } from "./style";

type Props = {
    title: string;
    subTitle: string;
};

export function Highlight({title, subTitle}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subTitle}>
        {subTitle}
      </Text>
    </View>
  );
}
