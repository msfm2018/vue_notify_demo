<template>
  <div class="section">
    <ui2_child :articles="articleList" @callback="go"></ui2_child>
    <p>{{ currentIndex }}</p>
  </div>
</template>

<script>
import ui2_child from "@/components/ui2_child.vue";
export default {
  components: { ui2_child },
  data() {
    return {
      currentIndex: -1,
      articleList: ['A', 'B', 'C']
    }
  },
  methods: {
    go(idx) {
      this.currentIndex = idx
    }
  }
}
</script>
