<template>
  <el-pagination
    class="default-pagination"
    @current-change="handleCurrentChange"
    :current-page.sync="pagination.current_page"
    :page-size="pagination.per_page"
    :total="pagination.total"
    layout="total, prev, pager, next"
    background
  />
</template>
<script>
export default {
  props: {
    pagination: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleCurrentChange () {
      this.$emit('current-change')
    }
  }
}
</script>
