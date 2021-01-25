/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.welcomeDiv}>
        <Text style={styles.textHeader}>Uzbek ikat</Text>
        <Text style={styles.textBody}>
          We are coming <Text style={styles.textBold}>soon</Text>.
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  welcomeDiv: {
    marginTop: 250,
  },
  textHeader: {
    fontSize: 30,
    textAlign: 'center',
  },
  textBody: {
    marginTop: 23,
    fontSize: 23,
    textAlign: 'center',
  },

  textBold: {
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

export default App;
