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
  addListItem(listId, value) {
    this.lists = this.lists.map(list => {
      if (list.id === listId) {
        list.items = [...list.items, value];

        return list;
      }
      return list;
    });
  }

  @action
  toggleItem(listId, itemId) {
    this.lists = this.lists.map(list => {
      if (list.id === listId) {
        list.items = list.items.map(item => {
          if (item.id === itemId) {
            item.marked = !item.marked;

            return item;
          }
          return item;
        });
        return list;
      }
      return list;
    });
  }

  @action
  addList(value) {
    this.lists = [...this.lists, value];
  }

  @action
  removeList(listId) {
    this.lists = this.lists.filter(e => {
      return e.id !== listId;
    });
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
