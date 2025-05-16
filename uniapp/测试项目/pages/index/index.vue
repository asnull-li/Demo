<template>
	<view class="content">
		<view class="example-body">
			<uni-file-picker @select="select"  ref="files" limit="9" title="最多选择9张图片" :auto-upload="false"
				v-model="imageValue">
			</uni-file-picker>
			<button @click="uploads()">上传文件</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageValue: [1],
				hhhhhhh: 11111,
				files: [{
					"name": "file.txt",
					"extname": "txt",
					"url": "https://xxxx",
					// ...
				}]
			}
		},
		methods: {
			uploads() {
				this.$refs.files.upload()
			},
			select(e){
							console.log('选择文件：',e)
						},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
