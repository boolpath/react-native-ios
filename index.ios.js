/**
 * React Native iOS Native UI Components
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

const NavigatorPage = React.createClass({
  render() {
    return (
      <View>

      </View>
    );
  }
});

class ios extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          title: '',
          component: NavigatorPage
        }}
      />
    );
  };
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('ios', () => ios);
