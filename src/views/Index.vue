<template>
	<div>
		<!-- <div class="yv-row">
			<div class="yv-col-8">
				<div class="yv-col-6" v-for="(article,index) in articles" :key="index">
					<p class="yv-title">{{article.title}}</p>
					<img : src="article.avatar" alt="图书的封面图">
				</div>
			</div>
			<div class="yv-col-4">
				
			</div>
		</div> -->
		<div v-for="(article,index) in articles" :key="index">
			<span>{{article.title}}</span>
			<span>{{article.comments}}</span>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			articles:[]
		}
	},
	created(){
		this.axios.get('http://b2722934f3.wicp.vip:13701/api/article').then(res =>{
			console.log(res.data.data);
			this.articles = res.data.data
		})
	},
	methods:{
		
	},
	computed:{
		
	}
}
</script>

<style>
</style>
