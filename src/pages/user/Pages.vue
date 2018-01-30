<template>
  <div class="default-pages">
    <el-form
      size="small"
      :inline="true"
      :model="form"
    >
      <el-form-item label="用户名">
        <el-input
          v-model="form.name"
          placeholder="用户名"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="renderPages">
            查询
        </el-button>
        <common-operate-create />
      </el-form-item>
    </el-form>

    <el-table
      :data="tableData"
      size="small"
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="ID"
      />
      <el-table-column
        prop="name"
        label="用户名"
      />
      <el-table-column
        prop="updated_at"
        label="更新时间"
      />
      <el-table-column label="操作">
        <template slot-scope="{ row }">
          <div>
            操作
          </div>
        </template>
      </el-table-column>
    </el-table>
    <default-pagination
      :pagination="pagination"
      @current-change="renderPages"
    />
  </div>
</template>
<script>
import api from '@/api/user'
export default {
  data () {
    return {
      pagination: {},
      tableData: [],
      form: {
        name: ''
      }
    }
  },
  created () {
    this.renderPages()
  },
  methods: {
    renderPages () {
      api.pages(this.form).then(data => {
        this.pagination = data.pagination
        this.tableData = data.table_data
      })
    }
  }
}
</script>
