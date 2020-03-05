<template>
  <div>One One One One One One</div>
</template>

<script>
export default {
  name: "One",
  beforeCreate() {
    console.info("One--- beforeCreate()");
  },
  created() {
    console.info("One--- created()");
  },
  beforeMount() {
    console.info("One--- beforeMount()");
  },
  mounted() {
    console.info("One--- mounted()");
  },
  beforeUpdate() {
    console.info("One--- beforeUpdate()");
  },
  updated() {
    console.info("One--- updated()");
  },
  beforeDestroy() {
    console.info("One--- beforeDestroy()");
  }
};
</script>

<style scoped></style>
