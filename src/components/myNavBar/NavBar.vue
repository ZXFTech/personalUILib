<template>
  <!-- <ul v-if="navBarContent !== undefined && navBarContent.length !== 0"> -->
  <div class="navBar">
    <ul>
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
          v-if="
            navBarItem.subNav !== undefined && navBarItem.subNav.length !== 0
          "
          :subNavContent="navBarItem.subNav"
          :parentNavUrl="navBarItem.navUrl"
          :index="index"
          @sendIndex="setIndex"
        ></SubNavBar>
      </li>
    </ul>
  </div>
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
$navBarFontColor: #666;
$navBarBackgroundColor: #fff;
$navBarActiveColor: #ccc;
.navBar {
  /*	布局	*/
  display: inline;

  /*	样式	*/

  /*	颜色	*/

  /*	动画	*/

  ul {
    /*	布局	*/
    margin: 0;
    padding: 5px;
    display: flex;
    align-content: center;
    justify-content: center;

    /*	样式	*/
    font-size: 1.5rem;
    list-style: none;

    /*	颜色	*/
    background: $navBarBackgroundColor;

    li {
      /*	布局	*/
      margin: 0 10px;
      padding: 5px 0px;
      position: relative;

      /*	样式	*/
      width: 100px;
      text-align: center;
      border-radius: 5px;
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
        background: $navBarFontColor;

        /*	动画	*/
        transition: width 0.618s ease 0s;
      }
      &:hover {
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
        color: $navBarFontColor;

        /*	动画	*/
        text-decoration: none;
      }
      ul {
        /*	布局	*/
        display: flex;
        flex-direction: column;
        align-items: center;;
        list-style: none;
        position: absolute;
        left: -18px;
        top: 39px;
        margin: 0;
        padding: 0;

        /*	样式	*/
        width: 130px;
        height: 0;
        overflow: hidden;
        border-left: solid 2px $navBarFontColor;
        border-right: solid 2px $navBarFontColor;

        /*	颜色	*/
        background: $navBarBackgroundColor;

        /*	动画	*/
        transition: height 0.618s ease 0s;

        li {
          /*	布局	*/
          padding: 5px 5px;
          margin: 5px;

          /*	样式	*/
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
}

.active {
  background: $navBarActiveColor;
}
</style>
