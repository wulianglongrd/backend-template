import DefaultLayout from '@/components/layouts/DefaultLayout'

export default {
  name: 'app',
  components: {
    DefaultLayout
  },
  render () {
    let { singlePage = false } = this.$route.meta
    let layout = singlePage
      ? <router-view/>
      : (
          <default-layout>
            <router-view/>
          </default-layout>
        )
    return (
      <div id="app">
        { layout }
      </div>
    )
  }
}
