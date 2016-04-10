/**
 * React Native iOS Native UI Components
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

class ios extends Component {
  render() {
    return (
      <TabBarIOS>
        
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('ios', () => ios);
