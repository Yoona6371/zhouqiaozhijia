import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Home extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => NavigationHelper.navigate('ImageShow')}
        >
          <Text>123</Text>
        </TouchableOpacity>
        <Text>home</Text>
      </View>
    );
  }
}

export default Home;
