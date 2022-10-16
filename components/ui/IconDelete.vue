<template>
	<span class="group cursor-pointer" @click="showPanel = true" v-if="showPanel == false">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 fill-current icon-close-square"><rect width="18" height="18" x="3" y="3" class="text-blueGray-200 group-hover:text-red-100" rx="2"/><path class="text-blueGray-500 group-hover:text-red-800" d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z"/></svg>
	</span>
	<!-- CD (CB on 20200715): added confirmation panel before delete -->
	<div v-else>
		<span class="group">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 fill-current icon-close-square"><rect width="18" height="18" x="3" y="3" class="text-blueGray-200 group-hover:text-red-100" rx="2"/><path class="text-blueGray-500 group-hover:text-red-800" d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z"/></svg>
		</span>
		<div class="fixed inset-0 flex items-center justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-center sm:justify-center">
			<div class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto">
				<div class="bg-white shadow sm:rounded-lg">
					<div class="px-4 py-5 sm:p-6">
						<div class="mt-2 max-w-xl text-sm leading-5 text-blueGray-500 text-center items-center justify-center">
							<p>
								Are you sure you want to delete this item?
							</p>
						</div>
						<div class="mt-5 flex items-center justify-center">
							<button @click="showOnPage" type="button" class="px-4 mx-1 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-50 focus:outline-none focus:border-red-300 focus:shadow-outline-red active:bg-red-200 transition ease-in-out duration-300 sm:text-sm sm:leading-5">
								Delete
							</button>
							<button @click="showPanel = false" type="button" class="px-4 m x-1 py-2 border border-transparent font-medium rounded-md text-blueGray-700 bg-blueGray-100 hover:bg-blueGray-150 focus:outline-none focus:border-blueGray-200 focus:shadow-outline-blueGray active:bg-blueGray-200 transition ease-in-out duration-300 sm:text-sm sm:leading-5">
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showPanel: false,
			}
		},
		methods: {
			showOnPage(){
				this.$emit('confirm')
				this.showPanel = false
			}
		}
	}
</script>
