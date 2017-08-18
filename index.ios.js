// Index.ios.js - Place code in here for IOS!

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header.js';
import AlbumList from './src/components/AlbumList.js';

// Create a component
const App = () => (
  <View>
    <Header headerText={'Albums!'} />
    <AlbumList style={{ flex: 1 }} />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
