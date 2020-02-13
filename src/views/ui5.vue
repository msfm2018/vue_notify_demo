<template>
  <div>
    <ui3_a v-model="total"></ui3_a>
    <button @click="increse">增加5</button>
  </div>
</template>

<script>
  import ui3_a from "@/components/ui5_a.vue"; // 导入A组件
  export default {
    components: {
      ui3_a
    },
    data: function () {
      return {
        total: 0
      };
    },
    methods: {
      increse: function () {
        this.total += 5;
      }
    }
  }
</script>
