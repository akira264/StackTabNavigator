import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
//Screens
import InputScreen from './Components/InputScreen';
import ConfirmScreen from './Components/ConfirmScreen';
import ListScreen from './Components/ListScreen';

 
 

export const MainNavigator =  createBottomTabNavigator({
  Input : {screen : InputScreen,
    navigationOptions : {
      tabBarLabel : 'Input',
      tabBarIcon :  ({tintColor}) =>(
        <Image
      source = {require('./icons/input_icon.jpg')}
      style = {{width : 24, height : 24}}
      // tintColor = {tintColor}
    />
      )
    }
  },
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
      )
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
