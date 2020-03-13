<template>
  <div
    class="bg-white p-5 flex justify-between shadow-md text-center font-medium uppercase"
  >
    <div class="border-r-4 border-gray-200 flex-1">
      <h4>Income</h4>
      <p class="text-xl text-green-700 mx-5 my-0">+{{ income | currency }}</p>
    </div>
    <div class="flex-1">
      <h4>Expense</h4>
      <p class="text-xl text-red-700 mx-5 my-0">-{{ expense | currency }}</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "IncomeExpenses",
  computed: {
    ...mapGetters(["income", "expense"])
  }
};
</script>
