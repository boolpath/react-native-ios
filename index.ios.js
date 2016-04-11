/**
 * React Native iOS Native UI Components
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Alert
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
        <Text onPress={this.showAlertDefault.bind(this)} style={styles.button}>
          Click to Alert (default)
        </Text>
        <Text onPress={this.showAlertTwoButtons.bind(this)} style={styles.button}>
          Click to Alert Two Buttons
        </Text>
        <Text onPress={this.showAlertThreeButtons.bind(this)} style={styles.button}>
          Click to Alert Three Buttons
        </Text>
        <Text style={{marginTop: 20}}>
          Clicked button: {this.state.clicked}
        </Text>
      </View>
    );
  }

  showAlertDefault() {
    Alert.alert('Alert Title')
  }

  showAlertTwoButtons() {
    Alert.alert(
      'Two Buttons',
      'This alert has two buttons',
      [
        {text: 'Button 1', onPress: () => this.setState({clicked: 'Button 1'})},
        {text: 'Button 2', onPress: () => this.setState({clicked: 'Button 2'})}
      ]
    )
  }

  showAlertThreeButtons() {
    Alert.alert(
      'Three Buttons',
      'This alert has three buttons',
      [
        {text: 'Button 1', onPress: () => this.setState({clicked: 'Button 1'})},
        {text: 'Button 2', onPress: () => this.setState({clicked: 'Button 2'})},
        {text: 'Button 3', onPress: () => this.setState({clicked: 'Button 3'})}
      ]
    )
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
