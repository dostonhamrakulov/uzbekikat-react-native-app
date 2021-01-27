import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import HomeActivity from './src/HomeActivity';
import ProfileActivity from './src/ProfileActivity';
import GalleryActivity from './src/GalleryActivity';
const RootStack = createStackNavigator(
    {
        Home: { screen: HomeActivity },
        Profile: { screen: ProfileActivity },
        Gallery: { screen: GalleryActivity },
    },/**/
    {
        initialRouteName: 'Home',
    }
);

const App = createAppContainer(RootStack);

export default App;
