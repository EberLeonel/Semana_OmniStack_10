import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main.js";
import Profile from "./pages/Profile.js";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          title: "DevRadar"
        }
      },
      Profile: {
        sreen: Profile,
        navigationOptions: {
          title: "Perfil no GitHub"
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTintColor: "#FFF",
        headerStyle: {
          backgroundColor: "#7D40E7"
        }
      }
    }
  )
);

export default Routes;
