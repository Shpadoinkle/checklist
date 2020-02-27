import { AsyncStorage } from "react-native";
import { observable, action, computed } from "mobx";
import { create, persist } from "mobx-persist";

class ListItem {
  @persist
  @observable
  id = null;

  @persist
  @observable
  name = "";

  @persist
  @observable
  marked = false;
}

class List {
  @persist
  @observable
  id = null;

  @persist
  @observable
  name = "";

  @persist("list", ListItem)
  @observable
  items = [];
}

class AppStore {
  @persist
  @observable
  id = "";

  @persist("list", List)
  @observable
  lists = [];

  @action
  setItem(key, value) {
    this[key] = value;
  }

  @action
  addList(value) {
    this.lists = [...this.lists, value];
  }

  @action
  async logout() {
    await AsyncStorage.clear();
  }
}

const hydrate = create({ storage: AsyncStorage });

let appStore = new AppStore();
hydrate("appStore", appStore).then(data => {});
export default appStore;
