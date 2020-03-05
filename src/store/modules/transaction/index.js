const state = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 }
  ]
};

const mutations = {
  ADD_TRANSACTION(state, payload) {
    state.transactions.push(payload);
  },

  DELETE_TRANSACTION(state, payload) {
    state.transactions.splice(state.transactions.indexOf(payload), 1);
  }
};

const actions = {
  addTransaction({ commit }, payload) {
    commit("ADD_TRANSACTION", payload);
  },
  deleteTransaction({ commit }, payload) {
    commit("DELETE_TRANSACTION", payload);
  }
};

const getters = {
  transactions: state => state.transactions,

  balance: state => {
    let amounts = state.transactions.map(transaction => transaction.amount);
    return amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
  },

  income: state =>
    state.transactions
      .map(transaction => transaction.amount)
      .filter(amount => amount > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2),

  expense: state =>
    state.transactions
      .map(transaction => transaction.amount)
      .filter(amount => amount < 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2) * -1
};

const transactionModule = {
  state,
  mutations,
  actions,
  getters
};

export default transactionModule;
