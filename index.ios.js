/**
 * React Native iOS Native UI Components
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ActionSheetIOS
} from 'react-native';

class ios extends Component {
  constructor() {
    super();
    this.state = {
      clicked: 'none'
    };
  }  

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.showActionSheet.bind(this)} style={styles.button}>
          Click to show the ActionSheet
        </Text>
        <Text>
          Clicked button: {this.state.clicked}
        </Text>
      </View>
    );
  }

  showActionSheet() {
    ActionSheetIOS.showActionSheetWithOptions({
      options: this.props.buttons,
      cancelButtonIndex: this.props.buttons.length - 1,
      destructiveButtonIndex: this.props.buttons.length - 2
    },
    (buttonIndex) => {
      this.setState({clicked: this.props.buttons[buttonIndex]});
    });
  }
}

ios.defaultProps = {
  buttons: ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8', 'Delete', 'Cancel']
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    padding: 20,
    fontWeight: '500',
    fontSize: 20
  }
});

AppRegistry.registerComponent('ios', () => ios);
