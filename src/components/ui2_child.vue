<template>
  <div>
    <button
      v-for="(item, index) in articles"
      :key="index"
      @click="btn_onclick(index)"
    >
      {{ item }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["articles"],
  methods: {
    btn_onclick(index) {
      console.log(index)
      this.$emit("callback", index);
    }
  }
}
</script>