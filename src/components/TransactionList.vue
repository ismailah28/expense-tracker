<template>
  <div>
    <h3 class="border-b-1  mt-8 text-xl font-medium uppercase">History</h3>
    <ul class="mb-4">
      <li
        class="bg-white shadow-md mb-1 flex justify-between relative p-4 border-r-8 border-red-400"
      >
        Cash <span>-$400</span
        ><button
          class="bg-red-400 text-white text-xl px-1 py-2 absolute top-0 left-0 transform translate -translate-x-full opacity-0 transition-opacity duration-500 ease-out hover:opacity-100"
        >
          x
        </button>
      </li>
      <li
        class="bg-white shadow-md mb-1 flex justify-between relative p-4 border-r-8 border-green-400"
      >
        Cash <span>-$400</span
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
  name: "TransactionList"
};
</script>
