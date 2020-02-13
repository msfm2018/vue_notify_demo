<template>
  <div>
    <span>{{value}}</span>
    <button @click="reduce">减少5</button>
  </div>
</template>

<script>
export default {
  props: {
    value: Number // 注意这里是value
  },
  methods: {
    reduce: function() {
      this.$emit("input", this.value - 5); // 事件为input
    }
  }
};
</script>