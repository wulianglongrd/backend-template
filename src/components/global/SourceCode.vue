<style lang="less" scoped>
.source-code {
  width: 250px;
  word-break: break-all;
  position: fixed;
  right: 50px;
  top: 30%;
  font-size: 12px;
  color: #C0C4CC;
}
</style>
<template>
  <div class="source-code">{{ text }}</div>
</template>
<script>
export default {
  props: ['text']
}
</script>
