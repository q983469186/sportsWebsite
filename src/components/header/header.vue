<template>
    <div>
        <el-menu
                :default-active="$store.state.headerIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#fff"
                text-color="#000"
                active-text-color="#ffd04b"
				style="padding-left:40vh"
                router>
                <el-menu-item style="margin-right:40px;user-select:none" :index="menuItem.index" v-for="menuItem in menuList" :key="menuItem.index">{{menuItem.inner}}</el-menu-item>
                <el-submenu index="user" >
                    <template slot="title" style="margin-right:40px;user-select:none">登录/注册/个人中心</template>
                    <el-menu-item index="2-1" style="margin-right:40px;user-select:none">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                menuList:[
                    //header列表
                    {
                        index : 'square',
                        inner : '动态广场'
                    },
                    {
                        index : 'date',
                        inner : '同城约会'
                    },
                    {
                        index : 'goods',
                        inner : '商品'
                    },
                    {
                        index : 'tools',
                        inner : '实用工具'
                    },
                    {
                        index : '',
                        inner : '我的聊天'
                    },
                ]
            }
        },
        methods: {
		  	handleSelect(key, keyPath) {
		  	  	console.log(key, keyPath);
		  	}
        },
    }
</script>

<style lang="scss" scoped>
    .el-menu-demo{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        min-width: 1420px;
    }
</style>
