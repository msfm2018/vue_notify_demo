<template>
  <div>
    <vv_2 />
    <vv_1 />
  </div>
</template>

<script>
  import vv_1 from "@/components/vv_1.vue"; // 导入A组件
  import vv_2 from "@/components/vv_2.vue"; // 导入B组件
  export default {
    components: { vv_1, vv_2 } // 注册A、B组件
  };
</script>
