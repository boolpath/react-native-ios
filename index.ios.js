/**
 * React Native iOS Native UI Components
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  SegmentedControlIOS
} from 'react-native';

class ios extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.controlView}>
          <SegmentedControlIOS values={['One', 'Two']} />
        </View>
        <View style={styles.controlView}>
          <SegmentedControlIOS values={['One', 'Two', 'Three']} selectedIndex={0} />
        </View>
        <View style={styles.controlView}>
          <SegmentedControlIOS values={['One', 'Two', 'Three', 'Four', 'Five']} selectedIndex={4} />
        </View>
        <View style={styles.controlView}>
          <SegmentedControlIOS values={['One', 'Two']} momentary={true} />
        </View>
        <View style={styles.controlView}>
          <SegmentedControlIOS values={['One', 'Two']} enabled={false} />
        </View>
        <View style={styles.controlView}>
          <SegmentedControlIOS values={['One', 'Two']} tintColor="#aaa" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 64
  },
  controlView: {
    margin: 10,
    marginBottom: 25
  }
});

AppRegistry.registerComponent('ios', () => ios);
