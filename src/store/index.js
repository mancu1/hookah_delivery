import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hookahs: [
      {
        name: "Путой кальян",
        description: "(самовывоз)",
        cost: 600
      },
      {
        name: "Путой кальян",
        description: "(доставка)",
        cost: 800
      },
      {
        name: "Кальян с забивкой",
        description: "(Глиняная чаша)",
        cost: 1000
      },
      {
        name: "Кальян с забивкой",
        description: "(2 Глиняные чаши)",
        cost: 1200
      },
      {
        name: "Кальян на фрукте",
        description: "(Ананас)",
        cost: 1500
      }
    ],
    tobaccos: [
      {
        name: "malazia miks",
        cost: 0
      },
      {
        name: "cobra",
        cost: 0
      },
      {
        name: "Adalia",
        cost: 0
      },
      {
        name: "Sherbetli",
        cost: 0
      },
      {
        name: "Woodu",
        cost: 0
      },
      {
        name: "Dark side",
        cost: 300
      },
      {
        name: "Element",
        cost: 300
      },
      {
        name: "Duft",
        cost: 200
      }
    ],
    liq
  },
  mutations: {},
  actions: {},
  modules: {}
});
