import Vue from 'vue'

/**
 * 约定：
 * 1. /a/b 其中a表示模块(module)，b表示操作，默认操作定义：pages 含分页的列表, create 新建, update 编辑, delete 删除
 */

/**
 * 由当前路由推断跳转路由
 */
function genDefaultPath ({ path }, operate) {
  let arr = path.split('/')
  if (arr.length !== 3) {
    console.warning(`common-operate-${operate} default path is not meeting expectations`)
    return '=============='
  }
  return `/${arr[1]}/${operate}`
}

/**
 * 新建
 * @param operate 操作，用于推断默认跳转路由
 * @param path    跳转路由
 * @param query   跳转参数
 */
Vue.component('common-operate-create', {
  props: {
    operate: {
      type: String,
      default: 'create'
    },
    path: {
      type: String,
      default () {
        return genDefaultPath(this.$route, this.operate)
      }
    },
    query: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    handleCreate () {
      let path = this.path
      let query = this.query
      this.$router.push({path, query})
    }
  },
  render () {
    return <el-button type="primary" onClick={this.handleCreate}>新建</el-button>
  }
})

/**
 * 编辑
 * @param row     当前操作行
 * @param operate 操作，用于推断默认跳转路由
 * @param path    跳转路由
 * @param query   跳转参数
 * @param primaryKey 主键字段
 */
Vue.component('common-operate-update', {
  props: {
    row: {
      type: Object,
      required: true
    },
    operate: {
      type: String,
      default: 'update'
    },
    path: {
      type: String,
      default () {
        return genDefaultPath(this.$route, this.operate)
      }
    },
    query: {
      type: Object,
      default () {
        return {}
      }
    },
    primaryKey: {
      type: String,
      default: 'id'
    }
  },
  methods: {
    handleCreate () {
      let key = this.primaryKey
      if (!this.row[key]) {
        console.warning('common-operate-update primaryKey is not exists')
        return
      }

      let id = this.row[key]
      let path = this.path
      let query = Object.assign(this.query, {
        [this.primaryKey]: id
      })

      this.$router.push({path, query})
    }
  },
  render () {
    return <el-button type="primary" size="mini" onClick={this.handleCreate}>编辑</el-button>
  }
})

/**
 * 删除
 * @param row     当前操作行
 * @param operate 操作，用于推断默认跳转路由
 * @param query   跳转参数
 */
Vue.component('common-operate-delete', {
  props: {
    row: {
      type: Object,
      required: true
    },
    operate: {
      type: String,
      default: 'delete'
    },
    query: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleClick (action) {
      this.show = false
      if (action === 'confirm') {
        let playload = {
          row: this.row,
          query: this.query
        }
        this.$emit('handleCommonDelete', playload)
      }
    }
  },
  render () {
    return (
      <el-popover
        placement="top"
        width="160"
        value={this.show}
      >
        <p style="margin-bottom: 8px;">这是一段内容这是一段内容确定删除吗？</p>
        <div style="text-align: right; margin: 0;">
          <el-button
            size="mini"
            onClick={() => this.handleClick('cancel')}
          >
            取消
          </el-button>
          <el-button
            size="mini"
            type="primary"
            onClick={() => this.handleClick('confirm')}
          >
            确定
          </el-button>
        </div>
        <el-button
          size="mini"
          type="danger"
          slot="reference"
          onClick={() => (this.show = true)}
        >
          删除
        </el-button>
      </el-popover>
    )
  }
})

/**
 * 返回
 * @param text 返回按钮的文案
 */
Vue.component('common-router-back', {
  props: {
    text: {
      type: String,
      default: '返回'
    }
  },
  methods: {
    handleBack () {
      this.$router.go(-1)
    }
  },
  render () {
    return <el-button onClick={this.handleBack}>{this.text}</el-button>
  }
})
