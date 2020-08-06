<template>
  <router-link
    :to="parentNavUrl + navBarItemContent.navUrl"
    @click.native="onClick"
  >
    {{ navBarItemContent.navText }}
  </router-link>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class NavBarItem extends Vue {
  @Prop({ default: 0 }) private index!: number;
  @Prop({ default: "" }) private parentNavUrl!: string;
  @Prop({ default: () => new Object() }) private navBarItemContent!: unknown;

  @Emit("sendIndex") private emitClickEvent(index: number) {
    return index;
  }
  private onClick() {
    this.emitClickEvent(this.index);
  }
}
</script>

<style lang="scss" scoped></style>
