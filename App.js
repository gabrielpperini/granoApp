import { createStackNavigator , createAppContainer } from "react-navigation";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import Coletor from "./src/screens/Coletor";



const AppNavigator = createStackNavigator({
  Login: Login,
  Home: Home,
  Coletor: Coletor
} , { 
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    header: null,
  }
 });

console.disableYellowBox = true;

export default App = createAppContainer(AppNavigator);

