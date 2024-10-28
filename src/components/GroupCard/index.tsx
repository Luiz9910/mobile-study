import { styles } from "./style"
import { Text, View } from "react-native"
import {UsersThree} from "phosphor-react-native"
import theme from "@theme/index"
import { TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps &{
    title: string;
}

export function GroupCard({title, ...rest}: Props) {
    return (
        <View style={styles.container} {...rest}>
            <UsersThree 
                size={32} 
                color={theme.COLORS.GREEN_700}
                style={styles.icon}
                weight="fill"
            />
            <Text 
                style={styles.title}>
                    {title}
            </Text>
        </View>
    )
}