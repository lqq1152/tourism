<template>
	<div>
		<div class="title">
			<span class="line"></span>
			<span class="txt">景区介绍</span>
			<span class="line"></span>
		<ul>
			<a :href="item.url" class="item border-bottom" v-for="item in list" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl" style="width: 355px;height: 200px"/>
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</a>
		</ul>
	</div>
	</div>
</template>

<script>
export default {
	name:'weekend',
	props:{
		list:Array
	}
}
</script>

<style scoped lang="stylus">
@import '~styles/mixins.styl';
.title
	line-height: .8rem
	background: #fff
	margin-top: .2rem

	color: #212121
	text-align center
.item
	background: #fff
	color: #000
	height 178px
.item-img-wrapper

	.item-img
		width:100%
.item-info
	padding: .1rem
	text-align left
	.item-title
		line-height: .54rem
		font-size: .32rem
		ellipsis()
	.item-desc
		line-height: .4rem
		color: #616161
		ellipsis()
.title .line{
	display: inline-block;
	width: 10px;
	border-top: 1px solid #ccc
}
.title .txt{
	font-size 16px
	vertical-align: -8%;
	font-weight bold
	font-family: PingFang-SC-Bold}

</style>