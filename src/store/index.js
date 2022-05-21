import { createStore } from 'vuex'
import axios from 'axios';
import twitch from '@/utils/twitch'

const store = createStore({
 state() {
   return {
    auth: null,
    viewer: null,
    username: '',
   }
  },

  mutations: {
    setAuth(state, auth) {
      state.auth = auth;
    },
    setUsername(state, user) {
      state.username = user.data.data[0].display_name
    },
    setViewer(state, viewer) {
      state.viewer = viewer
    },
  },

  actions: {
    setAuth({ commit }, auth) {
      commit('setAuth', auth);
    },

    setViewer({ commit }) {
      commit('setViewer', twitch.viewer)
    },

    async fetchUserData(context) {
      try {
        const userData = await axios.get(`https://api.twitch.tv/helix/users?id=${context.state.viewer.id}`, {
          headers: {
            'Authorization': `Extension ${context.state.auth.helixToken}`,
            'Client-Id': '' // Your cliend ID goes here
          }
        })
        context.commit('setUsername', userData)
        return userData;
      } catch (e) {
        console.log('Failed API request to retieve user data from Twitch');
      }
    },


  },
})
