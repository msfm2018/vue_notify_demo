<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link tag="button" to="/sb">A</router-link>|
      <router-link tag="button" to="/ui2">ui2</router-link>|
      <router-link tag="button" to="/va">va_奇怪</router-link>|
      <router-link tag="button" to="/attrs">attrs</router-link>|
      <router-link tag="button" to="/mm">mm</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less"></style>
