<template>
  <div
    id="app"
    class="flex flex-col max-w-md min-h-screen mx-auto px-4 sm:px-0"
  >
    <Header msg="Expense Tracker" />
    <Balance />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Balance from "./components/Balance";
import "./main.css";

export default {
  name: "App",
  components: {
    Header,
    Balance
  }
};
</script>

<style></style>
