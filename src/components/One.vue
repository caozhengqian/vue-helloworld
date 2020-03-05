<template>
  <div>
    <div>One One One One One One</div>
    <button @click="onc(counter)">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
  </div>
</template>

<script>
export default {
  name: "One",
  data: () => ({
    // toMsg: this.props.msg
    counter: 0
  }),
  methods: {
    onc(message) {
      console.log("onc==>", message);
    }
  },
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
