import {createStackNavigator} from "@react-navigation/stack";
import SearchScreen from "../screens/Search";

const Stack = createStackNavigator();

const SearchScreenStack = ({ navigation }) => {
    return (
      <Stack.Navigator initialRouteName="SearchScreen">
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            title: "Search",
            headerStyle: {
              backgroundColor: "#fff",
              elevation: 0, // remove shadow on Android
              shadowOpacity: 0, // remove shadow on iOS  
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />

      </Stack.Navigator>
      
    );
  };

  export {SearchScreenStack}