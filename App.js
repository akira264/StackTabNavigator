import React from 'react';
import { StyleSheet, Text, View , Image, Alert} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
//Screens
import InputScreen from './Components/InputScreen';
import ConfirmScreen from './Components/ConfirmScreen';
import ListScreen from './Components/ListScreen';
// Redux
import store from './Store/index';
import { Provider } from 'react-redux';



export default class App extends React.Component {
  render() {
      

    const MainNavigator = createBottomTabNavigator({
      Input : {screen : InputScreen},
      Confirm : {
        screen : ConfirmScreen,
        navigationOptions : {
          tabBarLabel : 'Confirm',
          tabBarVisible : true ,
          tabBarIcon : ({tintColor}) =>(
            <Image
          source = {require('./icons/confirm_icon.png')}
          style = {{width : 24, height : 24 }}
          tintColor = {tintColor}
        />
          )
        }
      },
      List : {
        screen : ListScreen,
        navigationOptions : {
          tabBarLabel : 'List',
          tabBarVisible : true ,
          tabBarIcon : ({tintColor}) =>(
            <Image
          source = {require('./icons/list.png')}
          style = {{width : 24, height : 24 }}
          tintColor = {tintColor}
        />
          ),
          // tabBarOnPress: ({ navigation }) => {console.log("click list screen") } 
          tabBarOnPress: ({ navigation, defaultHandler }) => {
             
            console.log("click list screen");
            defaultHandler();
          },
        }
      }
    },{
      // Router config
      initialRouteName : 'Input',
      order : ['Input' , 'Confirm', 'List'],
      // navigation for complete tab navigator
      navigationOptions: {
        tabBarVisible: true
      },
      tabBarOptions : {
        activeTintColor: 'red',
        inactiveTintColor: 'gray'
      }
    });



    return (
      <Provider store = {store}>
        <MainNavigator/>
      </Provider>
    );
  }
}

