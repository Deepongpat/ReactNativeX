
import React, { Component } from 'react';
import { Router, Scene } from "react-native-router-flux";
import store from "./src/core/common/redux/store";
import { Provider } from "react-redux";
import { Platform, StyleSheet, Text, View } from 'react-native';

//
import LoginTemplate from './src/templates/LoginTemplate/LoginTemplate'



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Router>
            <Scene key="root">
              <Scene key="login" component={LoginTemplate} hideNavBar initial />
            </Scene>
          </Router>
        </View>
      </Provider>
    );
  }
}


