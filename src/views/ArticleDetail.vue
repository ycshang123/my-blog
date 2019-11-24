<template>
	<div class="container">
		<div class="yv-col-8" style="background: #01579B; height: 600px;" >
			<p>{{articleVo.title}}</p>
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
				articleVo: {}
			};
		},
		created(){
			var id = this.$route.params.id;
			this.axios.get('http://localhost:8080/api/article'+id).then(res =>{
				console.log(res.data.data);
				this.articleVo = res.data.data;
			}
			)
			// this.axios.get('http://localhost:8080/api/article/*').then(res =>{
			// 	this.articles = res.data.data;
			// 	for(var i =0;i<this.articles.length;i++){
			// 		this.articles[i].cover = this.getImage(this.articles[i].cover);
			// 		this.user[i].avatar = this.getImage(this.articles[i].avatar)
			// 	}
			// })

		},
		methods:{
			getImage(url){
				return 'https://images.weserv.nl/?url='+url;
			}
		},
		computed:{
			
		}
	}
</script>

<style scoped>
	.container{
		display: flex;
	}
</style>
