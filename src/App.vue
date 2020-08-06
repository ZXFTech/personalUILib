<template>
  <div>
    <TitleBar></TitleBar>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "@/views/Home.vue";
import TitleBar from "@/components/myTitleBar/TitleBar.vue";

@Component({
  components: {
    TitleBar,
    Home,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
@import url("./assets/global.scss");
</style>
