<template>
  <!-- <ul v-if="navBarContent !== undefined && navBarContent.length !== 0"> -->
  <ul class="navBar">
    <li
      v-for="(navBarItem, index) in navBarContent"
      :key="navBarItem.navName"
      :class="{ active: index === activeIndex }"
    >
      <NavBarItem
        :navBarItemContent="navBarItem"
        :index="index"
        @sendIndex="setIndex"
      ></NavBarItem>
      <SubNavBar
        v-if="navBarItem.subNav !== undefined && navBarItem.subNav.length !== 0"
        :subNavContent="navBarItem.subNav"
        :parentNavUrl="navBarItem.navUrl"
        :index="index"
        @sendIndex="setIndex"
      ></SubNavBar>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import SubNavBar from "@/components/myNavBar/SubNavBar.vue";
import NavBarItem from "@/components/myNavBar/NavBarItem.vue";

@Component({
  components: {
    SubNavBar,
    NavBarItem,
  },
})
export default class NavBar extends Vue {
  @Prop({ default: () => [] }) private navBarContent!: Array<unknown>;

  private activeIndex = 0;

  /**
   * checkIsActive
   */
  public checkIsActive(index: number): boolean {
    return this.activeIndex === index;
  }

  public setIndex(index: number): void {
    this.activeIndex = index;
    this.$forceUpdate();
  }
}
</script>

<style lang="scss">
$light-greenish-blue: rgba(85, 239, 196, 1);
.navBar {
  /*	布局	*/
  margin: 0 20%;
  padding: 5px;
  display: flex;
  align-content: center;
  justify-content: flex-start;

  /*	样式	*/
  font-size: 1.5rem;
  list-style: none;

  /*	颜色	*/
  background: rgba($color: #fff, $alpha: 0.618);

  li {
    /*	布局	*/
    margin: 0 10px;
    padding: 5px 0px;
    position: relative;

    /*	样式	*/
    width: 200px;
    text-align: center;
    &::after {
      /*	布局	*/
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;

      /*	样式	*/
      height: 2px;
      width: 0;

      /*	颜色	*/
      background: $light-greenish-blue;

      /*	动画	*/
      transition: width 0.618s ease 0s;
    }
    &:hover {
      /*	颜色	*/
      background: rgba($color: #000, $alpha: 0.1);
      &::after {
        /*	样式	*/
        width: 100%;
      }
    }
    a {
      /*	布局	*/
      display: block;

      /*	样式	*/
      width: 100%;
      letter-spacing: 5px;

      /*	颜色	*/
      color: $light-greenish-blue;

      /*	动画	*/
      text-decoration: none;
    }
    ul {
      /*	布局	*/
      list-style: none;
      position: absolute;
      top: 50px;
      margin: 0;
      padding: 0;

      /*	样式	*/
      text-align: center;
      width: 100%;
      height: 0;
      overflow: hidden;

      /*	颜色	*/
      color: $light-greenish-blue;
      background: white;

      /*	动画	*/
      transition: height 0.618s ease 0s;

      li {
        /*	布局	*/
        padding: 5px 5px;

        /*	样式	*/
        width: auto;
        /*	颜色	*/

        /*	动画	*/
      }
    }
    &:hover {
      ul {
        /*	布局	*/

        /*	样式	*/
        height: 150px;
        /*	颜色	*/

        /*	动画	*/
      }
    }
  }
}

.active {
  background: black;
  &::after {
    /*	布局	*/
    position: absolute;
    top: 0;
    bottom: 0;

    /*	样式	*/
    content: "";

    /*	颜色	*/
    background: $light-greenish-blue;
    /*	动画	*/
  }
}
</style>
