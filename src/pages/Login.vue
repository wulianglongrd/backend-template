<style lang="less">
.login-form {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 350px;
}
.login-title {
  font-size: 32px;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 18px;
}
.login-btn {
  width: 100%;
}
</style>
<template>
  <div class="login-page">
    <el-form
      :model="form"
      label-width="0"
      class="login-form"
    >
    <h1 class="login-title">登录系统</h1>
      <el-form-item>
        <el-input
          v-model="form.name"
          placeholder="用户名"
        />
      </el-form-item>
      <el-form-item>
        <el-input
          type="password"
          v-model="form.password"
          placeholder="密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="login-btn"
          @click="handleLogin">
            登录
        </el-button>
      </el-form-item>

    </el-form>
  </div>
</template>
<script>
import api from '@/api/user'
export default {
  data () {
    return {
      form: {
        name: 'admin',
        password: 'admin'
      }
    }
  },
  methods: {
    handleLogin () {
      api.login().then(data => {
        this.$notify.success('登录成功')
        setTimeout(() => {
          this.$router.push({path: '/'})
        }, 800)
      })
    }
  }
}
</script>
