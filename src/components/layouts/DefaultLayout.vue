<style lang="less">
.default-layout {
  display: flex;
  height: inherit;
  .default-layout-menus,
  .default-layout-main {
    overflow: auto;
  }
  .default-layout-menus {
    background: #545c64;
    box-shadow: 1px 0 4px rgba(0, 21, 41, 0.08);
  }
  .default-layout-main {
    flex: 1;
  }
  .default-layout-container {
    margin: 24px 24px 0px;
  }
}
</style>
<template>
  <div class="default-layout">
    <div class="default-layout-menus">
      <layout-logo />
      <layout-menus />
    </div>
    <div class="default-layout-main">
      <layout-header />
      <div class="default-layout-container">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
import LayoutMenus from './LayoutMenus'
import LayoutHeader from './LayoutHeader'
import LayoutLogo from './LayoutLogo'
import { mapActions } from 'vuex'
export default {
  created () {
    this.getMenus()
    this.getUser()
  },
  methods: {
    ...mapActions([
      'getMenus',
      'getUser'
    ])
  },
  components: {
    LayoutMenus,
    LayoutHeader,
    LayoutLogo
  }
}
</script>
