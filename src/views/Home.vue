<template>
  <div>
    <home_child msg=" App_test ok"  />
  </div>
</template>

<script>
// @ is an alias to /src
import home_child from "@/components/home_child.vue";

export default {
  name: "Home",
  components: {
    home_child
  }
};
</script>
