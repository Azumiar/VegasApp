import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Домой',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const MenuStack = createStackNavigator({
  Menu: LinksScreen,
});

MenuStack.navigationOptions = {
  tabBarLabel: 'Меню',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-menu${focused ? '' : '-outline'}` : 'md-menu'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: LinksScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Личный кабинет',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-person${focused ? '' : '-outline'}` : 'md-person'}
    />
  ),
};

const MapStack = createStackNavigator({
  Map: SettingsScreen,
});

MapStack.navigationOptions = {
  tabBarLabel: 'Как нас найти',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-map${focused ? '' : '-outline'}` : 'md-map'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ProfileStack,
  MenuStack,
  MapStack,
});
