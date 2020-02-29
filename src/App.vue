<template>
  <div id="app" class="flex flex-col max-w-md min-h-screen mx-auto">
    <Header msg="Expense Tracker" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import "./main.css";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style></style>
