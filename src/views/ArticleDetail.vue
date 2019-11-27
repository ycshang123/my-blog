<template>
	<div class="container">
		<div class="yv-col-8" style="background: #01579B; height: 600px;" >
			<div class="author-text">
				
			</div>
			<div class="article"></div>
		</div>
		<div class="yv-col-4" style="background: #D4E157; height: 600px;">
			<p>作者周边</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				articlesVo: {}
			};
		},
		created(){
			var id = this.$route.params.id;
			this.axios.get(this.GLOBAL.baseUrl + '/article/'+id).then(res =>{
				console.log(res.data.data);
				this.articlesVo = res.data.data;
			});

		},
		methods:{
			
		},
		computed:{
			
		}
	}
</script>

<style scoped>
	.container{
		display: flex;
	}
	.author-text{
		height: 200px;
		width:100%;
		border: 2px solid brown;
		margin-bottom: 20px;
	}
	.article{
	height: 600px;
	width:100%;
	border: 2px solid brown;
	}
</style>
