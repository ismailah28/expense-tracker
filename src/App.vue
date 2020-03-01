<template>
  <div
    id="app"
    class="flex flex-col w-84 min-h-screen mx-auto px-4 sm:px-0"
    style=""
  >
    <Header msg="Expense Tracker" />
    <Balance />
    <IncomeExpenses />
    <TransactionList />
    <AddTransaction />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import "./main.css";

export default {
  name: "App",
  components: {
    Header,
    Balance,
    IncomeExpenses,
    TransactionList,
    AddTransaction
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
