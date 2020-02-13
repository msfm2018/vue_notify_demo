<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul v-for="item in msg" :key="item.id">
      <h1>
        {{ item }}
      </h1>
    </ul>

    <ul v-for="item in articles" :key="item.id">
      {{
        item
      }}
    </ul>
  </div>
</template>

<script>
export default {
  props: ["articles", "msg"],
};
</script>
