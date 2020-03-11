<template>
  <div class="flex flex-col w-1/2 mr-1">
    <small class="mb-1 text-gray-700 font-medium">Filter By</small>
    <div class="w-full flex">
      <div class="w-1/3">
        <button
          @click="filterBy('all')"
          class="w-full text-xs text-white py-1 rounded-l bg-purple-600  focus:outline-none"
          :class="{ bgg: filterText === 'all' }"
        >
          All
        </button>
      </div>
      <div class="w-1/3">
        <button
          @click="filterBy('income')"
          class="w-full text-xs text-white py-1 rounded-none bg-purple-600 focus:outline-none"
          :class="{ bgg: filterText === 'income' }"
        >
          Income
        </button>
      </div>
      <div class="w-1/3">
        <button
          @click="filterBy('expense')"
          class="w-full text-xs text-white py-1 px-2 rounded-r rounded-l-none bg-purple-600  focus:outline-none"
          :class="{ bgg: filterText === 'expense' }"
        >
          Expense
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FilterComponent",
  props: ["filterText"],
  methods: {
    filterBy(value) {
      this.$emit("filter-by", value);
    }
  }
};
</script>
<style lang="css" scoped>
.bgg {
  @apply bg-purple-500;
}
</style>
