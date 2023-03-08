import { combineReducers, createStore } from "redux";

let alertBase = true;

function reducer2(state = alertBase, Action) {
  if (Action.type === "alertClose") {
    state = false;
    return state;
  } else {
    return state;
  }
}

let shopBase = [
  {
    id: 1,
    name: "IAB Studio T-Shirt White Light Green",
    quan: 0,
  },
  {
    id: 2,
    name: "IAB Studio Knit Black",
    quan: 0,
  },
  {
    id: 3,
    name: "IAB Studio Hoodie Brown",
    quan: 0,
  },
];

function reducer(state = shopBase, Action) {
  if (Action.type === "CategoryAdd") {
    let found = state.findIndex((a) => {
      return a.id === Action.payload.id;
    });
    if (found >= 0) {
      let shopBaseCopy = [...state];
      shopBaseCopy[found].quan++;
      return shopBaseCopy;
    } else {
      let shopBaseCopy = [...state];
      shopBaseCopy.push(Action.payload);
      return shopBaseCopy;
    }
  } else if (Action.type === "MountAdd") {
    let shopBaseCopy = [...state];
    let found = state.findIndex((a) => {
      return a.id === Action.Data;
    });
    shopBaseCopy[found].quan++;
    return shopBaseCopy;
  } else if (Action.type === "MountSubtract") {
    let shopBaseCopy = [...state];
    let found = state.findIndex((a) => {
      return a.id === Action.Data;
    });
    if (shopBaseCopy[found].quan <= 0) {
      shopBaseCopy[found].quan = 0;
    } else {
      shopBaseCopy[found].quan--;
    }
    return shopBaseCopy;
  } else {
    return state;
  }
}

export let store = createStore(combineReducers({ reducer, reducer2 }));
