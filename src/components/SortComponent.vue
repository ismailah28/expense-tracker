<template>
  <div class="flex flex-col items-center w-1/3">
    <small class="mb-1 text-gray-700 font-medium">Sort By</small>
    <div class="w-full flex justify-between">
      <div class="w-1/2">
        <button
          @click="$emit('sortby', 'text')"
          class="w-full text-xs text-white py-1 rounded-l rounded-r-none bg-purple-600 focus:outline-none"
          :class="{ bgg: sortText === 'text' }"
        >
          Text
        </button>
      </div>
      <div class="w-1/2">
        <button
          @click="$emit('sortby', 'amount')"
          class="w-full text-xs text-white py-1 block rounded-r rounded-l-none bg-purple-600 focus:outline-none"
          :class="{ bgg: sortText === 'amount' }"
        >
          Amount
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SortComponent",
  props: ["sortText"]
};
</script>
<style lang="css" scoped>
.bgg {
  @apply bg-purple-500;
}
</style>
