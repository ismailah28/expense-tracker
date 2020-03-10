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
      <SortComponent @sortby="sortText = $event" :sortText="sortText" />
    </div>
    <div
      v-if="
        filterText == 'income' &&
          transactions &&
          filteredAndSortedTransactions.length < 1
      "
      class="text-center font-medium mt-4"
    >
      <p>Oops! No Income Transactions</p>
    </div>
    <div
      v-if="
        filterText == 'expense' &&
          transactions &&
          filteredAndSortedTransactions.length < 1
      "
      class="text-center font-medium mt-4"
    >
      <p>Oops! No Expense Transactions</p>
    </div>

    <ul class="mb-4">
      <TransactionItem
        v-for="transaction in filteredAndSortedTransactions"
        :key="transaction.id"
        :transaction="transaction"
      />
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import FilterComponent from "./FilterComponent";
import SortComponent from "./SortComponent";
import TransactionItem from "./TransactionItem";

export default {
  name: "TransactionList",
  data() {
    return {
      filterText: "all",
      sortText: "text"
    };
  },

  components: {
    FilterComponent,
    SortComponent,
    TransactionItem
  },

  computed: {
    ...mapGetters(["transactions"]),
    filteredAndSortedTransactions() {
      let filteredTransactions = [];
      let filteredAndSorted = [];
      if (this.filterText == "all") {
        filteredTransactions = this.transactions;
      } else if (this.filterText == "expense") {
        filteredTransactions = this.transactions.filter(tx => tx.amount < 0);
      } else {
        filteredTransactions = this.transactions.filter(tx => tx.amount > 0);
      }

      if (this.sortText === "text") {
        filteredAndSorted = filteredTransactions.sort((a, b) =>
          a.text > b.text ? 1 : -1
        );
      } else if (this.sortText === "amount") {
        filteredAndSorted = filteredTransactions.sort((a, b) =>
          a.amount > b.amount ? 1 : -1
        );
      }
      return filteredAndSorted;
    }
  }
};
</script>
