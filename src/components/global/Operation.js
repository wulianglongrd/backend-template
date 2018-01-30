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
