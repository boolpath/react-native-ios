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
  constructor() {
    super();
    this.state = {selectedTab: 'search'};
  }
  setTab(tabID) {
    this.setState({selectedTab: tabID});
  }

  render() {
    return (
      <TabBarIOS
        // tintColor
        // barTintColor
        // translucent
        // style
        >
        <TabBarIOS.Item
          systemIcon='search'
          selected={this.state.selectedTab ===  'search'}
          onPress={() => this.setTab('search')}>
          <View style={styles.container}>
            <Text>Search</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon='contacts'
          selected={this.state.selectedTab ===  'contacts'}
          onPress={() => this.setTab('contacts')}>
          <View style={styles.container}>
            <Text>Contacts</Text>
          </View>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon='more'
          selected={this.state.selectedTab ===  'more'}
          onPress={() => this.setTab('more')}>
          <View style={styles.container}>
            <Text>More</Text>
          </View>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('ios', () => ios);
