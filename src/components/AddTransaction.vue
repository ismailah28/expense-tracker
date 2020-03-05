<template>
  <div>
    <h3 class="border-b-2 pb-2 mt-4 text-h3 font-medium">
      Add New Transaction
    </h3>
    <form @submit.prevent="addTransaction">
      <div class="">
        <label class="my-4 inline-block font-medium" for="text">Text</label>
        <input
          class="border border-gray-400 rounded block p-2 w-full text-base"
          type="text"
          v-model="text"
          id="text"
          placeholder="Enter text..."
        />
      </div>
      <div class="">
        <label class="my-4 inline-block font-medium" for="amount"
          >Amount <br />
          (negative - expense, positive - income)</label
        >
        <input
          class="border border-gray-400 rounded block p-2 w-full"
          type="number"
          id="amount"
          v-model.number="amount"
          placeholder="Enter amount..."
        />
      </div>
      <button
        class="font-medium bg-purple-700 shadow-md rounded-md text-white block p-2 my-4 w-full hover:bg-purple-600 focus:outline-none"
      >
        Add Transaction
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "AddTransaction",
  data() {
    return {
      text: "",
      amount: 0
    };
  },

  methods: {
    addTransaction() {
      let newTransaction = {
        id: Date.now(),
        text: this.text,
        amount: this.amount
      };
      this.$store.dispatch("addTransaction", newTransaction);
    }
  }
};
</script>
