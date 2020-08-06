<template>
  <div>
    <NavBar :navBarContent="navBarContent"></NavBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { navBarContent } from "@/constant/pageState";

import NavBar from "@/components/myNavBar/NavBar.vue";

@Component({
  components: {
    NavBar,
  },
})
export default class TitleBar extends Vue {
  private navBarContent = navBarContent;
}
</script>

<style lange="scss" scoped></style>
