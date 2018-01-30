<style lang="less">
.layout-logo {
  height: 64px;
  line-height: 64px;
  font-size: 15px;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  color: #fff;
}
</style>
<template>
	<div class="layout-logo" @click="handleClick">
		LOGO
	</div>
</template>
<script>
export default {
  name: 'LayoutLogo',
  methods: {
    handleClick () {
      this.$router.push({path: '/'})
    }
  }
}
</script>
