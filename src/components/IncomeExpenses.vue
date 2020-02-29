<template>
  <div
    class="bg-white p-4 flex justify-between shadow-md text-center font-medium uppercase"
  >
    <div class="border-r-4 border-gray-200 flex-1">
      <h4>Income</h4>
      <p class="text-xl text-green-400 mx-5 my-0">+$0.00</p>
    </div>
    <div class="flex-1">
      <h4>Expense</h4>
      <p class="text-xl text-red-400 mx-5 my-0">-$0.00</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "IncomeExpenses"
};
</script>
