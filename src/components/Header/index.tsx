import { Image, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import logoImg from "@assets/logo.png";
import theme from "@theme/index";
import { CaretLeft } from "phosphor-react-native";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <View style={styles.container}>
      {showBackButton && (
        <TouchableOpacity style={styles.backButton}>
          <CaretLeft color={theme.COLORS.WHITE} size={32} />
        </TouchableOpacity>
      )}
      <Image source={logoImg} style={styles.logo} />
    </View>
  );
}
