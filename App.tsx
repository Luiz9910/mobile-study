import { Groups } from "@screens/Groups";
import { StatusBar } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { ActivityIndicator } from "react-native";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <>
      {fontsLoaded ? <Groups /> : <Loading />}
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent" 
        translucent
      />
    </>
  );
}