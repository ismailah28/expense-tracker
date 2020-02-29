<template>
  <div class="text-2xl text-blue-800 font-bold text-center pt-4">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["msg"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
