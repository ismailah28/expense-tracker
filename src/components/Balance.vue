<template>
  <div class="mt-8 my-4">
    <h4>Your Balance</h4>
    <h1>${{ balance }}</h1>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Balance",

  computed: {
    ...mapGetters(["balance"])
  }
};
</script>
