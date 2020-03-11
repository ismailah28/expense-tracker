<template>
  <div>
    <li
      class="font-medium bg-white shadow-md mb-1 flex justify-between items-center relative p-2 border-r-8"
      :class="{
        'border-minus': transaction.amount < 0,
        'border-plus': transaction.amount >= 0
      }"
    >
      <div class="flex flex-col">
        <p>{{ transaction.text }}</p>
        <small class="text-gray-600 font-normal">{{
          transaction.date | moment("from", now)
        }}</small>
      </div>
      <span>{{ transaction.amount | currency }}</span>
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
import { mapActions } from "vuex";

export default {
  name: "TransactionItem",
  props: ["transaction"],
  data() {
    return {
      now: new Date()
    };
  },
  created() {
    setInterval(() => (this.now = new Date()), 1000 * 60);
  },
  methods: {
    ...mapActions(["deleteTransaction"])
  }
};
</script>
<style lang="css" scoped>
small {
  font-size: 10px;
}
li:hover .delete-btn {
  opacity: 1;
}
</style>
