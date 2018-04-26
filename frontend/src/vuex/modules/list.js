import {
  CATS_LIST
} from "../types";

const state = {
  list: []
}

const mutations = {
  [CATS_LIST] (state, list) {
    state.list = list
  }
}

export const getCatsList = ({dispatch}) => {
  // return api.Attribute.get(filter).then(response => {
  //   dispatch(types.ATTRIBUTE_LIST, response.data.data);
  // });
};

export default {
  state,
  mutations
}
