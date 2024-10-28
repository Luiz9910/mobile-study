import { View } from "react-native";
import { styles } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  return (
    <View style={styles.container}>
      <Header />
      <Highlight 
        title="Turmas"
        subTitle="Jogue Com sua Turma"
       />
       <GroupCard title="Galera do Athletes"/>
    </View>
  );
}
