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
          'border-red-400': transaction.amount < 0,
          'border-green-400': transaction.amount >= 0
        }"
      >
        {{ transaction.text }} <span>{{ transaction.amount }}</span
        ><button
          class="bg-red-400 text-white text-xl px-1 py-2 absolute top-0 left-0 transform translate -translate-x-full opacity-0 transition-opacity duration-500 ease-out hover:opacity-100"
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
