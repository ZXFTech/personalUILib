<template>
  <ul class="subNavBar">
    <li v-for="subNavItem in subNavContent" :key="subNavItem.navName">
      <NavBarItem
        :navBarItemContent="subNavItem"
        :index="index"
        :parentNavUrl="parentUrl"
        @sendIndex="sendIndex"
      ></NavBarItem>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import NavBarItem from "@/components/myNavBar/NavBarItem.vue";

@Component({
  components: {
    NavBarItem,
  },
})
export default class SubNavBar extends Vue {
  @Prop({ default: () => [] }) private subNavContent!: Array<unknown>;
  @Prop({ default: "" }) private parentNavUrl!: string;
  @Prop({ default: 0 }) private index!: number;

  private parentUrl: string = this.parentNavUrl;

  @Emit("sendIndex") private emitClickEvent(index: number) {
    return index;
  }
  private sendIndex() {
    this.emitClickEvent(this.index);
  }
}
</script>

<style lang="scss" scoped>
.subNavbar {
  color: red;
}
</style>
