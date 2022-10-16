<template>
  <div>

    <div class="bg-white">
      <div class="py-8 mt-10 lg:py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">

        <div class="flow-root mt-5 md:mt-10">
          <div class="-my-2">
            <div class="box-content relative py-2">
              <div class="grid grid-cols-2 gap-4 md:grid-cols-2 min-w-screen-xl">

                <!--(CD - CT on 20211021: Hide ui for those with no value --> 
                <div v-for="product, i in products" :key="i" class="relative flex flex-col py-6 overflow-hidden border border-gray-200 rounded-sm xl:w-auto">
                  <div class="px-4 py-1">
                    <h3>{{product.name}}</h3>
                  </div>
                  <div class="p-5">
                    <img :src="product.image" :alt="product.name" class="object-cover object-center ">
                  </div>
                  <div class="md:flex md:flex-row justify-center mt-auto text-center">
                    <div class="w-full md:w-1/2 px-4 py-1">
                      <UiAppButton className="primary-full" label="Download PDF" @click="download(product.downloads[0])" />
                    </div>
                    <div class="w-full md:w-1/2 px-4 py-1" v-if="product.videos && product.videos.length">
                      <UiAppButton @click="toggleModal(i)" className="primary-full" label="Watch video" />
                        <div class="flex items-center ml-4 md:ml-6">
                          <UiAppModalBlank :show="modal === i + 1" @close="modal = false">
                            <template v-slot:modalContent>
                              <SolutionsVideoModal :videos="product.videos" />
                            </template>
                          </UiAppModalBlank>
                        </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

+<script>
export default {
  props: ["products"],
  data() {
    return {
      modal: 0,
      toggle: false,
    };
  },
  methods: {
    appToggle() {
      this.toggle = !this.toggle;
    },
    toggleModal(i) {
      this.modal = i + 1;
    },
    download(pdf) {
      const link = document.createElement('a')
      link.download = pdf.label
      link.href=pdf.link
      link.target="_blank"
      link.click()
    }
  }
};
</script>

