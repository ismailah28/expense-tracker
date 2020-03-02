<template>
  <div
    id="app"
    class="flex flex-col w-84 min-h-screen mx-auto px-4 sm:px-0"
    style=""
  >
    <Header msg="Expense Tracker" />
    <Balance />
    <IncomeExpenses />
    <TransactionList :transactions="transactions" />
    <AddTransaction />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import EventBus from "./eventBus";
import "./main.css";

const dummyTransactions = [
  { id: 1, text: "Flower", amount: -20 },
  { id: 2, text: "Salary", amount: 300 },
  { id: 3, text: "Book", amount: -10 },
  { id: 4, text: "Camera", amount: 150 }
];

export default {
  name: "App",
  data() {
    return {
      transactions: dummyTransactions
    };
  },
  components: {
    Header,
    Balance,
    IncomeExpenses,
    TransactionList,
    AddTransaction
  },
  methods: {
    addTransaction(transaction) {
      this.transactions.push(transaction);
    }
  },
  created() {
    EventBus.$on("add-transaction", event => {
      this.addTransaction(event);
    });
  }
};
</script>

<style>
h1 {
  @apply text-h1 font-medium tracking-wider;
}

h4 {
  @apply m-0 text-h4 uppercase font-medium;
}
</style>
