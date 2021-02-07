module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    "react-native/no-inline-styles": 0 //禁止行内样式
  },
  "globals": {
    //添加这一行，添加全局对象
    "NavigationHelper": true,
  }
};

