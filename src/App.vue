<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
export default {
	name: 'App'
}
</script>

<style lang="scss">
	body{
		margin: 0;
		padding: 0;	
	}
	p,header,footer,article,h1,section,title{
		display: block;
		padding: 0;
		margin: 0;
	}
	.container{
		min-height: calc( 100vh - 96px );
		width: 100%;
		min-width: 1420px;
	}
	.after-line::after{
		content: '';
		display: block;
		height: 1px;
		background-color: #e5e5e5;
	}
	.before-line::before{
		content: '';
		display: block;
		height: 1px;
		background-color: #e5e5e5;
	}
</style>
