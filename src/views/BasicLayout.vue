<template>
  <a-layout  class="basic_layout" id="components-layout-demo-top-side">
    <!-- 头部 -->
    <a-layout-header class="header">
      <Header />>
    </a-layout-header>
    <!-- layout -->
    <a-layout-content style="padding: 0 50px">
      <a-layout style="padding: 24px 0; background: #fff">
        <!-- 子级菜单 -->
        <a-layout-sider width="200" style="background: #fff">
          <a-menu mode="inline" :selectedKeys="selectedSub">
            <a-menu-item v-for="s in menuData.sub" :key="s.path" @click="$router.push({path: s.path})">
              <span class="nav-text">{{s.meta.title}}</span>
            </a-menu-item>
          </a-menu>
        </a-layout-sider>
        <!-- 内容 -->
        <a-layout-content :style="{ padding: '0 24px', minHeight: '280px' }">
          Content
        </a-layout-content>
      </a-layout>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<script>
import Header from "@/views/Header"
export default {
  components: {
    Header
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
      this.selectedMenu[0] = this.toMenu(p)
      // console.log(this.selectedMenu)
      this.selectedSub[0] = p
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

<style lang="scss">
.basic_layout {
    // 头部
    .header.ant-layout-header {
    height: 52px;
    line-height: 52px;
    }
    // 内容
    .ant-layout.ant-layout-has-sider {
        width: 1080px;
        margin: 20px auto 0;
    }
}
</style>

