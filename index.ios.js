/**
 * React Native iOS Native UI Components
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  AlertIOS
} from 'react-native';

class ios extends Component {
  constructor() {
    super();
    this.state = {
      promptValue: undefined
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.showPromptDefault.bind(this)} style={styles.button}>
          Prompt with title and callback
        </Text>
        <Text onPress={this.showPromtCustomButtons.bind(this)} style={styles.button}>
          Prompt with custom buttons
        </Text>
        <Text onPress={this.showPromptLoginPassword.bind(this)} style={styles.button}>
          Prompt with login/password
        </Text>
        <Text style={{marginTop: 20}}>
          Prompt value: {this.state.promptValue}
        </Text>
      </View>
    );
  }

  showPromptDefault() {
    AlertIOS.prompt('Default Promt', 'prompt message ', (value) => this.setState({promptValue: value}))
  }

  showPromtCustomButtons() {
    AlertIOS.prompt('Prompt with Custom Buttons', 'this prompt has custom buttons', [{
      text: 'Custom OK',
      onPress: (value) => this.setState({promptValue: value})
    }, {
      text: 'Custom Cancel',
      style: 'cancel',
    }])
  }

  showPromptLoginPassword() {
    AlertIOS.prompt('Prompt with login/password', 'please enter you email and password',
      (value) => this.setState({promptValue: JSON.stringify(value)}),
      'login-password', 'email@example.com')
      // plain-text, secure-text
  }
}

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
