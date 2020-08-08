<template>
  <div>
    <TitleBar>
      <SearchBar slot="searchBar" @doSearch="search"></SearchBar>
      <NavBar slot="navBar" :navBarContent="navBar"></NavBar>
    </TitleBar>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TitleBar from "@/components/myTitleBar/TitleBar.vue";
import SearchBar from "@/components/mySearchBar/SearchBar.vue";
import NavBar from "@/components/myNavBar/NavBar.vue";
import { navBarContent } from "@/constant/pageState";

@Component({
  components: {
    SearchBar,
    TitleBar,
    NavBar,
  },
})
export default class App extends Vue {
  private navBar = navBarContent;

  private search(content: string): void {
    alert(content);
  }
}
</script>

<style lang="scss" scoped>
@import url("./assets/global.scss");
</style>
