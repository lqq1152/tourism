<template>
	<div>
		<div class="title" >
			<span class="line"></span>
			<span class="txt">仪陇旅游快讯</span>
			<span class="line"></span>
		</div>
		<ul>
			<a :href="item.url" class="item border-bottom border" v-for="item in recommend" :key="item.id">
				<img class="item-img" :src="item.imgUrl"  style="border-radius: 5px">
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
				<img src="../../../assets/img/into.png" class="item-into">
			</a>
		</ul>
	</div>
</template>
<!--<template>-->
<!--	<section>-->
<!--		<z-header title="互动社区"/>-->
<!--		<div class="img-box">-->
<!--			<img src="../../../assets/img/咨询.png">-->
<!--			<img src="../../../assets/img/建议.png">-->

<!--		</div>-->
<!--		<div class="list-item" v-for="(item,index) of list" :key="'shoplist' + index">-->
<!--			<a :href="item.url || '#'">-->
<!--				<div class="list-item-content">-->
<!--					<img class="list-item-img" :src="item.img">-->
<!--					<div class="list-item-title">-->
<!--						{{item.title}}-->
<!--					</div>-->

<!--				</div>-->
<!--			</a>-->
<!--		</div>-->
<!--	</section>-->
<!--</template>-->
<script>
export default {
	props:{
		recommend:Array
	}
}
</script>

<style scoped lang="stylus">
@import '~styles/mixins.styl';
.img-box{
	display flex
	justify-content space-around
}
.title
	line-height: .8rem
	background: #fff
	margin-top: .2rem
	text-indent: .2rem
	color: #212121
	text-align center

.item
	display: flex
	overflow: hidden
	height: 1.9rem
	background: #fff
	color: #000
	justify-content space-between
	padding 10px
	.item-img {
		width: 142px
		height: 85px

		border-radius 5px
	}
	.item-info
		flex: 1
		padding: 10px
		min-width: 0
		.item-title
			width :150px
			line-height: 0.4rem;
			font-size: 0.25rem;
			white-space pre-wrap
			padding-top: .2rem;
		.item-desc
			line-height: .4rem
			color: #ccc
			ellipsis()
	.item-into{
		display: flex;
		align-items: center;
		width 20px
		height 25px;
		margin-top 30px;

	};
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