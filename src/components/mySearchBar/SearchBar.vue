<template>
  <div class="searchBar">
    <label>
      <input
        type="text"
        @focus="fold = true"
        @blur="fold = false"
        @keydown="doSearch"
        v-model="searchContent"
        placeholder="Search something..."
      />
      <svg
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M400.696889 801.393778A400.668444 400.668444 0 1 1 400.696889 0a400.668444 400.668444 0 0 1 0 801.393778z m0-89.031111a311.637333 311.637333 0 1 0 0-623.331556 311.637333 311.637333 0 0 0 0 623.331556z"
        ></path>
        <path
          d="M667.904 601.998222l314.766222 314.823111-62.919111 62.976-314.823111-314.823111z"
        ></path>
      </svg>
      <!-- <ul id="ullll" :class="{ foldUl: fold }">
        <li>11111</li>
        <li>22222</li>
        <li>33333</li>
        <li>44444</li>
      </ul> -->
    </label>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class SearchBar extends Vue {
  @Prop({ default: "" }) private placehold?: string;
  @Prop({ default: "" }) private searchIcon?: string;

  private searchContent?: string;

  @Emit("doSearch") private emitSearchEvent(content: string) {
    return content;
  }
  private doSearch(e: { keyCode: number }) {
    if (e.keyCode === 13 && this.searchContent) {
      this.emitSearchEvent(this.searchContent);
    }
  }
}
</script>

<style lang="scss" scoped>
$navBarFontColor: #666;
$navBarBackgroundColor: #fff;
$navBarActiveColor: #aaa;
$fontColor: red;
.searchBar {
  /*	布局	*/
  display: inline-block;
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 100;
  /*	样式	*/

  /*	颜色	*/
  background: inherit;
  color: $navBarActiveColor;

  label {
    /*	布局	*/
    margin: 0;
    display: flex;
    align-items: center;
    position: relative;

    input {
      /*	布局	*/
      margin: 0;
      padding: 0 50px 0 10px;

      /*	样式	*/
      width: 200px;
      height: 40px;
      outline: none;
      border: solid 2px $navBarFontColor;
      border-radius: 5px;
      font-size: 20px;
      font-family: "weiruanyahei";

      /*	颜色	*/
      background: $navBarBackgroundColor;

      /*	动画	*/
      transition: all 0.618s ease 0s;

      &:focus {
        /*	样式	*/
        width: 300px;
      }
    }
    .icon {
      /*	布局	*/
      position: absolute;
      right: 7px;
      bottom: 7px;
      padding: 3px;

      /*	样式	*/
      height: 20px;
      width: 20px;
      border-radius: 5px;
      border: solid 2px $navBarFontColor;

      /*	颜色	*/
      color: $navBarFontColor;

      /*	动画	*/
    }
    ul {
      /*	布局	*/
      margin: 0;
      padding: 0;
      position: absolute;
      left: 2px;
      bottom: 0;

      /*	样式	*/
      list-style: none;
      overflow: hidden;
      height: 0;

      /*	颜色	*/
      background: white;

      /*	动画	*/
      transition-delay: 0.618s;

      li {
        /*	布局	*/
        margin: 0;
        padding: 0;

        /*	样式	*/
        height: 50px;

        /*	颜色	*/

        /*	动画	*/
      }
    }
  }

  .foldUl {
    /*	布局	*/
    /*	样式	*/
    width: 555px;
    height: 200px;
    /*	颜色	*/

    /*	动画	*/
  }
}
</style>
