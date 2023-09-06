import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import { useFonts, Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";

import { StatusBar } from "react-native";

import NewGroup from "@screens/NewGroup";
import Loading from "@components/Loading";

const App = () => {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold});

  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <ThemeProvider theme={theme}>
        { fontsLoaded ? <NewGroup/> : <Loading />}
      </ThemeProvider>
    </>
  );
}

export default App;
