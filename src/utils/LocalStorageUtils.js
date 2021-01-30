import AsyncStorage from '@react-native-async-storage/async-storage';
export default {
  constructor() {},
  get(key) {
    if (!key) {
      return null;
    }
    key = key.toString();
    return AsyncStorage.getItem(key)
      .then((value) => {
        if (value) {
          return JSON.parse(value);
        }
        return null;
      })
      .catch(() => {
        return null;
      });
  },
  set(key, value) {
    if (!key) {
      return;
    }
    key = key.toString();
    AsyncStorage.setItem(
      key,
      JSON.stringify({
        value,
      }),
    );
  },
  /**
   * 删除key对应json数值
   * @param key
   * @returns {Promise<string>}
   */
  deleteItem(key) {
    if (!key) {
      return;
    }
    return AsyncStorage.removeItem(key);
  },

  /**
   * 删除所有配置数据
   * @returns {Promise<string>}
   */
  clear() {
    return AsyncStorage.clear();
  },
};
