<template>
    <div class="bacis_layout_header">
      <div class="logo" />
      <!-- 一级菜单 -->
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="selectedMenu"
        :selectedKeys="selectedMenu"
        :style="{ lineHeight: '52px' }"
      >
        <a-menu-item v-for="i in menuData.menu" :key="i.path" @click="$router.push({path: i.path})">
          {{i.meta.title}}
        </a-menu-item>
      </a-menu>
    </div>
</template>

<script>
export default {
  props: {
      selectedMenu: {
          type: Array,
          default: ()=>{return []}
      },
      menuData: {
          type: Object,
          default: ()=>{return {}}
      }
  }
}
</script>

<style>

</style>
