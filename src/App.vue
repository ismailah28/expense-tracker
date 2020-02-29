<template>
  <div
    id="app"
    class="flex flex-col max-w-md min-h-screen mx-auto px-4 sm:px-0"
  >
    <Header msg="Expense Tracker" />
    <Balance />
    <IncomeExpenses />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import "./main.css";

export default {
  name: "App",
  components: {
    Header,
    Balance,
    IncomeExpenses
  }
};
</script>

<style>
h1 {
  @apply text-4xl font-bold tracking-wider;
}

h4 {
  @apply m-0 uppercase font-medium;
}
</style>
