<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ toMsg }}</h1>
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="clickLeft"
      @click-right="clickRight"
    />
    <One />
  </div>
</template>

<script>
import One from "./One";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => ({
    // toMsg: this.props.msg
    toMsg: "toMsg"
  }),
  components: {
    One
  },
  methods: {
    clickLeft: function() {
      console.log("返回clickLeft");
      alert("fanhui ");
    },
    clickRight: function() {
      console.log("返回clickRight");
    }
  },
  beforeCreate() {
    console.info("HelloWorld--- beforeCreate()");
  },
  created() {
    console.info("HelloWorld--- created()");
    // this.toMsg = "test";
    console.info("test==>", this._props.msg);
    // let _this = this;
    setTimeout(function() {
      alert("Hello");
      // _this.toMsg = "test2";
    }, 3000);
  },
  beforeMount() {
    console.info("HelloWorld--- beforeMount()");
  },
  mounted() {
    console.info("HelloWorld--- mounted()");
  },
  beforeUpdate() {
    console.info("HelloWorld--- beforeUpdate()");
  },
  updated() {
    console.info("HelloWorld--- updated()");
  },
  beforeDestroy() {
    console.info("HelloWorld--- beforeDestroy()");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
