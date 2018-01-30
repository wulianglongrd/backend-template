<style lang="less">
.layouts-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  margin-top: 10px;
}
.el-menu {
  border-right: none;
}
</style>
<template>
  <el-menu
    class="layouts-menu"
    :default-active="active"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :router="true"
  >
    <el-submenu
      v-for="(submenu, submenuKey) in menus"
      :index="`${submenuKey}`"
      :key="submenuKey"
    >
      <template slot="title">
        <span>{{ submenu.title }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          v-for="(menuItem, menuItemKey) in submenu.menu_item_group"
          :index="menuItem.path"
          :key="menuItemKey">
            {{ menuItem.title }}
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
import { mapGetters } from 'vuex'

function getActivePath (router) {
  let { path = '' } = router
  if (path) {
    let arr = path.split('/')
    path = `/${arr[1]}/pages`
  }
  return path
}

export default {
  name: 'LayoutMenus',
  data () {
    return {
      active: ''
    }
  },
  computed: {
    ...mapGetters([
      'menus'
    ])
  },
  mounted () {
    setTimeout(() => {
      this.active = getActivePath(this.$route)
    })
  },
  watch: {
    '$route' (to, from) {
      this.active = getActivePath(to)
    }
  }
}
</script>
