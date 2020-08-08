<template>
  <div class="titleBar">
    <slot name="icon"></slot>
    <slot name="navBar"></slot>
    <slot name="searchBar"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import NavBar from "@/components/myNavBar/NavBar.vue";

@Component({
  components: {
    NavBar,
  },
})
export default class TitleBar extends Vue {}
</script>

<style lange="scss" scoped>
.titleBar {
  padding: 3px 0;
  border-bottom: solid #666 2px;
}
</style>
