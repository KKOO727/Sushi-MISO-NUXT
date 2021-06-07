<template>
	<footer
		class="footer ml-auto"
		:class="[!slideBar ? 'active-footer' : 'inactive-footer']"
	>
		<div class="container-fluid d-flex justify-content-between align-items-center">
			<div class="footer-link">
				<a href="https://discord.gg/yYWQrPdNJc" target="_blank" rel="noopener">
					Report any bugs on our Discord. No one wants your alpha bug Tweetstorm.
				</a>
			</div>
			<div class="copyright">
				MISO &copy; {{ year }}, made by

				<a href="https://sushi.com/" rel="noopener" target="_blank">Sushi</a>
			</div>
		</div>
	</footer>
</template>
<script>
export default {
	props: {
		slideBar: {
			type: Boolean,
			required: true,
		},
	},
	data() {
		return {
			year: new Date().getFullYear(),
		}
	},
}
</script>
<style lang="scss" scoped>
.footer {
	&-image {
		height: 40px;
		width: 90px;
	}
	&-link a {
		color: white;
	}
}
@media screen and (min-width: 1200px) {
	.active-footer {
		width: calc(100% - 264px) !important;
	}
	.inactive-footer {
		width: 100% !important;
	}
}
</style>
