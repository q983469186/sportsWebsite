<template>
    <div class="index-page">
		<header-top></header-top>
		<router-view></router-view>
    </div>
</template>

<script>
import headerTop from '../header/header'
	export default {
		components:{
			headerTop
		},
		data() {
		  	return {
		  	};
		},
		methods: {
		},
	}
</script>

<style lang="scss" scoped>
    @import './index.scss';
</style>