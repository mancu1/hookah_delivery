import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hookahs: [
      {
        id: 0,
        text: "Пустой кальян",
        description: "(самовывоз)",
        cost: 600,
        fill: false
      },
      {
        id: 1,
        text: "Пустой кальян",
        description: "(доставка)",
        cost: 800,
        fill: false
      },
      {
        id: 2,
        text: "Кальян с забивкой",
        description: "(Глиняная чаша)",
        cost: 800,
        fill: true
      },
      {
        id: 3,
        text: "Кальян с забивкой",
        description: "(2 Глиняные чаши)",
        cost: 800,
        fill: true
      },
      {
        id: 4,
        text: "Кальян на фрукте",
        description: "(Ананас)",
        cost: 1300,
        fill: true
      }
    ],
    tobaccos: [
      {
        id: 0,
        text: "malazia miks",
        cost: 200
      },
      {
        id: 1,
        text: "cobra",
        cost: 200
      },
      {
        id: 2,
        text: "Adalia",
        cost: 200
      },
      {
        id: 3,
        text: "Sherbetli",
        cost: 200
      },
      {
        id: 4,
        text: "Woodu",
        cost: 200
      },
      {
        id: 5,
        text: "Dark side",
        cost: 500
      },
      {
        id: 6,
        text: "Element",
        cost: 500
      },
      {
        id: 7,
        text: "Duft",
        cost: 400
      }
    ],
    liquids: [
      {
        id: 0,
        text: "Вода",
        cost: 0
      },
      {
        id: 1,
        text: "Молоко",
        cost: 200
      },
      {
        id: 2,
        text: "Кола",
        cost: 200
      },
      {
        id: 3,
        text: "сок",
        cost: 200
      },
      {
        id: 4,
        text: "Вино",
        cost: 200
      },
      {
        id: 5,
        text: "Шампанское",
        cost: 200
      }
    ],
    cart: [
      {
        id: 0,
        count: 0
      },
      {
        id: 1,
        count: 0
      },
      {
        id: 2,
        count: 0,
        tobaccoId: 0,
        liquidId: 0
      },
      {
        id: 3,
        count: 0,
        tobaccoId: 0,
        liquidId: 0
      },
      {
        id: 4,
        count: 0,
        tobaccoId: 0,
        liquidId: 0
      }
    ]
  },
  mutations: {
    addHook(state, hookName) {
      state.cart[hookName].count++;
    },
    decHook(state, hookName) {
      state.cart[hookName].count--;
    },
    editTobacco(state, { hookName, tobaccoId }) {
      state.cart[hookName].tobaccoId = tobaccoId;
    },
    editLiquid(state, { hookName, liquidId }) {
      state.cart[hookName].liquidId = liquidId;
    }
  },
  actions: {},
  modules: {}
});
