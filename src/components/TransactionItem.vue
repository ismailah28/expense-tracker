<template>
  <div>
    <li
      class="font-medium bg-white shadow-md mb-1 flex justify-between relative p-2 border-r-8"
      :class="{
        'border-minus': transaction.amount < 0,
        'border-plus': transaction.amount >= 0
      }"
    >
      {{ transaction.text }} <span>{{ transaction.amount }}</span>
      <button
        @click="deleteTransaction(transaction)"
        class="delete-btn bg-custom-red text-white text-lg font-medium p-1 leading-5 absolute top-0 left-0
           transform translate -translate-x-full cursor-pointer opacity-0 transition-opacity duration-300 ease-out"
      >
        x
      </button>
    </li>
  </div>
</template>
<script>
export default {
  name: "TransactionItem",
  props: ["transaction"]
};
</script>
