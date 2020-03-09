<template>
  <div>
    <h3 class="border-b-2 pb-2 mb-4  mt-8 text-h3 font-medium">
      History
    </h3>
    <div v-if="transactions.length < 1" class="text-center font-medium">
      <p>Oops! No Transactions</p>
    </div>

    <div class="flex mb-2" v-if="transactions.length > 0">
      <FilterComponent
        @filter-by="filterText = $event"
        :filterText="filterText"
      />
      <SortComponent />
    </div>
    <div
      v-if="
        filterText == 'income' &&
          transactions &&
          filteredTransactions.length < 1
      "
      class="text-center font-medium mt-4"
    >
      <p>Oops! No Income Transactions</p>
    </div>
    <div
      v-if="
        filterText == 'expense' &&
          transactions &&
          filteredTransactions.length < 1
      "
      class="text-center font-medium mt-4"
    >
      <p>Oops! No Expense Transactions</p>
    </div>

    <ul class="mb-4">
      <li
        v-for="transaction in filteredTransactions"
        :key="transaction.id"
        class="font-medium bg-white shadow-md mb-1 flex justify-between relative p-2 border-r-8"
        :class="{
          'border-minus': transaction.amount < 0,
          'border-plus': transaction.amount >= 0
        }"
      >
        {{ transaction.text }} <span>{{ transaction.amount }}</span
        ><button
          @click="deleteTransaction(transaction)"
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
import { mapGetters, mapActions } from "vuex";
import FilterComponent from "./FilterComponent";
import SortComponent from "./SortComponent";

export default {
  name: "TransactionList",
  data() {
    return {
      filterText: "all"
    };
  },

  components: {
    FilterComponent,
    SortComponent
  },

  computed: {
    ...mapGetters(["transactions"]),
    filteredTransactions() {
      if (this.filterText == "all") {
        return this.transactions;
      } else if (this.filterText == "expense") {
        return this.transactions.filter(tx => tx.amount < 0);
      } else {
        return this.transactions.filter(tx => tx.amount > 0);
      }
    }
  },

  methods: {
    ...mapActions(["deleteTransaction"])
  }
};
</script>
<style scoped>
li:hover .delete-btn {
  opacity: 1;
}
</style>
