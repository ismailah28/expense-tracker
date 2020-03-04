<template>
  <div>
    <h3 class="border-b-2 pb-2 mb-4  mt-8 text-h3 font-medium">
      History
    </h3>
    <ul class="mb-4">
      <li
        v-for="transaction in transactions"
        :key="transaction.id"
        class="font-medium bg-white shadow-md mb-1 flex justify-between relative p-2 border-r-8"
        :class="{
          'border-minus': transaction.amount < 0,
          'border-plus': transaction.amount >= 0
        }"
      >
        {{ transaction.text }} <span>{{ transaction.amount }}</span
        ><button
          class="delete-btn bg-custom-red text-white text-lg font-medium p-1 leading-5 absolute top-0 left-0
           transform translate -translate-x-full cursor-pointer opacity-0 transition-opacity duration-300 ease-out"
        >
          x
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TransactionList",
  props: ["transactions"]
};
</script>
<style scoped>
li:hover .delete-btn {
  opacity: 1;
}
</style>
