import { StatusBar } from "react-native";

import Groups from "@screens/Groups";

const App = () => {
  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      <Groups/>
    </>
  );
}

export default App;
