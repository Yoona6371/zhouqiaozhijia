import { observable, action } from 'mobx';
import userStore from './userStore';
import globalStore from './globalStore';
import LocalStorageUtils from '../utils/LocalStorageUtils';

class RootStore {
  constructor() {
    this.userStore = new UserStore(userStore, this);
    this.globalStore = new GlobalStore(globalStore, this);
  }
}

class UserStore {
  @observable allData = {};

  constructor(data, RootStore) {
    this.rootStore = RootStore;
    this.allData = data;
  }

  // 设置用户信息
  @action async infoSet(data) {
    // 看后台传回的data是单个数据还是一个整的
    this.allData = data;
    await LocalStorageUtils.set('userInfo', data);
  }

  // 移除用户信息
  @action async infoRemove(data) {
    // 看后台传回的data是单个数据还是一个整的
    this.allData = data;
    await LocalStorageUtils.deleteItem('userInfo');
  }
}

class GlobalStore {
  @observable allData = {};

  constructor(data, RootStore) {
    this.store = RootStore;
    this.allData = data;
  }
  // 方法
  // @action
}

export default new RootStore();
