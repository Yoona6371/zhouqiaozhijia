import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';
import Nav from './src/router/nav';
import { Provider } from 'mobx-react';
import RootStore from './src/mobx/index';
import Http from './src/action/request';
import './src/utils/fontUtils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // 接口挂载到全局
    RootStore.globalStore.allData.Http = Http;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
        <Provider RootStore={RootStore}>
          <Nav />
        </Provider>
      </View>
    );
  }
}

export default App;
