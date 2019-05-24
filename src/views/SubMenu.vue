<template>
    <a-layout-sider width="200" style="background: #fff">
        <a-menu mode="inline" :defaultSelectedKeys="selectedSub" :selectedKeys="selectedSub">
            <a-menu-item v-for="s in menuData.sub" :key="s.path" @click="$router.push({path: s.path})">
                <span class="nav-text">{{s.meta.title}}</span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>

<script>
export default {
    props: {
        selectedSub: {
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
