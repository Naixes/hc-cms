<template>
  <a-layout  class="basic_layout" id="components-layout-demo-top-side">
    <!-- 头部 -->
    <a-layout-header class="header">
      <!-- 传入菜单数据 -->
      <Header :menuData="menuData" :selectedMenu="selectedMenu" />
    </a-layout-header>
    <!-- layout -->
    <a-layout-content style="padding: 0 50px">
      <a-layout style="padding: 24px 0; background: #fff">
        <!-- 子级菜单 -->
        <SubMenu v-if="selectedSub[0] !=='/home'" :menuData="menuData" :selectedSub="selectedSub" />
        <!-- 内容 -->
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      <Footer />
    </a-layout-footer>
  </a-layout>
</template>

<script>
// 处理菜单数据
import Header from "@/views/Header"
import Footer from "@/views/Footer"
import SubMenu from "@/views/SubMenu"
export default {
  components: {
    Header,
    Footer,
    SubMenu
  },
  data() {
    // 菜单映射
    this.menuMap = {}

    let selectedSub = [this.$route.path]
    let selectedMenu = [this.toMenu(this.$route.path)]
    // console.log(this.$router.options.routes)
    const menuData = this.getMenuData(this.$router.options.routes[0].children)
    // 初始化二级菜单
    menuData.sub = this.menuMap[selectedMenu]
    // console.log(this.menuMap[selectedMenu])
    return {
      // 菜单
      menuData,
      // 选中的一级菜单
      selectedMenu,
      // 选中的二级菜单
      selectedSub
    }
  },
  watch: {
    '$route.path'(p) {
      // console.log(p)
      this.selectedMenu = [this.toMenu(p)]
      // console.log(this.selectedMenu)
      this.selectedSub = [p]
      // 路由变化时绑定子菜单
      this.menuData.sub = this.menuMap[this.selectedMenu]
    }
  },
  methods: {
    // 将路径转换为一级菜单
    toMenu(path) {
      let arr = path.split('/')
      let str = ''
      if(arr.length > 1) {
        str = arr.slice(0, 2).join('/')
      }
      return str
    },
    getMenuData(menurRoutes) {
      // console.log(menurRoutes)
      let menuData = {
        menu: [],
        sub: []
      }
      // 一级菜单
      for(let route of menurRoutes) {
        menuData.menu.push(route)
        if(route.children) {
            this.menuMap[route.path] = route.children
          // 二级菜单
          // for(let sub of route.children) {
          //   console.log("route.path",route.path,"selectedMenu",this.selectedMenu)
          //   this.menuMap[route.path] = route.children
          //   if(route.path === this.selectedMenu) {
          //     menuData.sub.push(sub)
          //   }
          // }
        }
      }
      // console.log(this.menuMap)
      return menuData
    }
  }
}
</script>

<style lang="scss" src="../style/layout.scss"/>

