import api from '../../api/imgur';
import { router } from '../../main';

const state = {
  images: [],
};

const getters = {
  allImages: state => state.images,
};

const actions = {
  async fetchImages({rootState, commit}) {
    const {token} = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data);
  },
  async fetchFavorites({rootState, commit}) {
    const {token} = rootState.auth;
    const response = await api.fetchFavorites(token);
    const images = [];
    response.data.data.forEach((item) => images.push(...item.images));
    commit('setImages', images);
  },
  async uploadImages({rootState}, images) {
    // Get the assess token
    const { token } = rootState.auth;
    // Call our API module to do the upload
    await api.uploadImages(images, token);
    // Redirect out user to ImageList component
    router.push('/');
    console.log(images);
  },
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
