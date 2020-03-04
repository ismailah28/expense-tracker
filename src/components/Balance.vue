<template>
  <div class="mt-8 my-4">
    <h4>Your Balance</h4>
    <h1>${{ balance }}</h1>
  </div>
</template>
<script>
import EventBus from "../eventBus";

export default {
  name: "Balance",
  data() {
    return {
      balance: 0
    };
  },
  created() {
    EventBus.$on("add-transaction", event => {
      this.balance += event.amount;
    });
  }
};
</script>
