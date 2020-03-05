<template>
  <div>
    <h3 class="border-b-2 pb-2 mt-4 text-h3 font-medium">
      Add New Transaction
    </h3>
    <form @submit.prevent="addTransaction" novalidate>
      <div class="">
        <label class="mt-4 inline-block font-medium" for="text">Text</label>
        <input
          class="border border-gray-400 rounded block py-1 px-2 w-full text-base"
          type="text"
          v-model="fields.text"
          id="text"
          required
          placeholder="Enter text..."
        />
        <span class="text-xs text-custom-red">{{ fieldErrors.text }}</span>
      </div>
      <div class="">
        <label class="mt-1 inline-block font-medium" for="amount"
          >Amount <br />
          <span class="text-sm"
            >(negative - expense, positive - income)</span
          ></label
        >
        <input
          class="border border-gray-400 rounded block py-1 px-2 w-full block"
          type="number"
          id="amount"
          v-model.number="fields.amount"
          required
          placeholder="Enter amount..."
        />
        <span class="text-xs text-custom-red block">{{
          fieldErrors.amount
        }}</span>
      </div>
      <button
        class="font-medium text-sm bg-purple-700 shadow-md rounded-sm text-white block py-1 my-4 w-full hover:bg-purple-600 focus:outline-none"
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
      fields: {
        text: "",
        amount: 0
      },
      fieldErrors: {
        text: null,
        amount: null
      }
    };
  },

  methods: {
    addTransaction() {
      this.fieldErrors = this.validateForm(this.fields);
      if (Object.keys(this.fieldErrors).length) return;

      let newTransaction = {
        id: Date.now(),
        text: this.fields.text,
        amount: this.fields.amount
      };
      this.$store.dispatch("addTransaction", newTransaction);

      this.fields.text = "";
      this.fields.amount = 0;
    },

    validateForm(fields) {
      const errors = {};
      if (!fields.text) errors.text = "text cannot be empty";
      if (fields.text && fields.text.length < 3)
        errors.text = "text name must be greater than 2";
      if (fields.amount == 0) errors.amount = "amount cannot be 0";

      return errors;
    }
  }
};
</script>
