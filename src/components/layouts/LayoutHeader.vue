<style lang="less">
.layout-header {
  height: 64px;
  line-height: 64px;
  box-sizing: border-box;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  background: #fff;
}
.mg-dropdown {
  float: right;
  margin-right: 15px;
  cursor: pointer;
}
</style>
<template>
	<div class="layout-header">
    <el-dropdown
      class="mg-dropdown"
      @command="handleCommand"
      :hide-timeout="300"
    >
      <span class="el-dropdown-link">
        {{ user.name }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="logout">退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
	</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'
import api from '@/api/user'
export default {
  name: 'LayoutHeader',
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    handleCommand (cmd) {
      api.logout().then(data => {
        this.$notify.success('退出成功')
        setTimeout(() => {
          this.$router.push({path: '/login'})
        }, 800)
      })
    }
  }
}
</script>
