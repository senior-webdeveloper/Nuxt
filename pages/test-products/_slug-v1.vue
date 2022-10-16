<template>
  <div>
    <div class="px-4 mx-auto">
        <!-- Page header -->
        <div class="flex md:hidden md:items-center md:justify-between">
          <div class="items-center ">
            <h1>{{ product[0].details.name }}</h1>
            <p>[IF PART OF SERIES, SHOW SERIES NAME]</p>
          </div>
        </div>

        <div class="grid gap-6 pt-6 mx-auto md:grid-cols-2">
          <div class="col-span-1 space-y-2 sm:space-y-6 sm:md:col-span-1">
            <!-- <h1>{{ product[0].details.name }}</h1> -->
            <!-- Product Hero: Image and CTAs -->
            <section aria-labelledby="product-image">
              <div class="p-2 space-y-4 bg-white border border-gray-300 rounded shadow md:mt-8">
                <img class="object-cover" src="https://cinnamon.nyc3.cdn.digitaloceanspaces.com/nsk/KBS-101.jpg" :alt="product[0].details.name" />
              </div>

              <div class="flex items-center justify-between pt-4 lg:px-8">
                <a href="#">
                  <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="ml-3">Watch product video</p>
                  </div>
                </a>
                <a href="#">
                  <div class="">
                    <UiAppButton className="primary" @click="modal = true" label="See PDF Catalog for details" />
                  </div>
                </a>
              </div>
            </section>
          </div>

          <section aria-labelledby="product-details">
            <div class="px-2 sm:px-4">
              <div class="hidden md:block">
                <h1>{{ product[0].details.name }}</h1>
                <p class="pt-2">[IF PART OF SERIES, SHOW SERIES NAME]</p>
              </div>
              <div class="flex pt-4 space-x-2">
                <!-- CD (CD on 20210421): Use appbadge here for tags for this product -->
                <UiAppBadge className="grey-border" label="tag1" />
                <UiAppBadge className="grey-border" label="tag2" />
                <UiAppBadge className="grey-border" label="tag3" />
                <UiAppBadge className="grey-border" label="tag4" />
              </div>
              <div class="pt-10">
                <p>{{ product[0].details.description }}</p>
              </div>
            </div>
          </section>
        </div>

        <!-- RELATED PRODUCTS -->
            <!-- Main content -->
        <div class="flex items-stretch flex-1 overflow-hidden">
          <div class="flex-1 overflow-y-auto">
            <div class="px-4 pt-8 mx-auto md:pt-20 max-w-7xl sm:px-6 lg:px-8">
              <div class="flex">
                <h1 class="flex-1 text-2xl font-bold text-gray-900">Related Products</h1>
                <div class="ml-6 bg-gray-100 p-0.5 rounded-lg flex items-center sm:hidden">
                  <button type="button" class="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <!-- Heroicon name: solid/view-list -->
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                    <span class="sr-only">Use list view</span>
                  </button>
                  <button type="button" class="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <!-- Heroicon name: solid/view-grid -->
                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span class="sr-only">Use grid view</span>
                  </button>
                </div>
              </div>

              <!-- Tabs -->
              <div class="mt-3 sm:mt-2">
                <!-- CD (CT on 20210421): This hidden section is the dropdown version of tabs in smaller screens -->
                <!--<div class="sm:hidden">
                  <label for="tabs" class="sr-only">Select a tab</label>
                  <select id="tabs" name="tabs" class="block w-full py-2 pl-3 pr-10 text-base border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option selected>Tab 1</option>
                    <option>Tab 2</option>
                    <option>Tab 3</option>
                  </select>
                </div>-->
                <!-- CD (CT on 20210421): This section is the default tabs. Each tab will be 1 sticky as user scrolls. In contrast, in sm+ screens, there is only 1 sticky and all tabs are there. -->
                <div class="sm:hidden">
                  <div class="mt-2">
                    <UiAppStickyTab>
                      <template v-slot:header>
                        <h2>Sticky Header</h2>
                      </template>
                      <div v-for="index in 3" :key="index">
                        <div class="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5">
                          <div class="flex flex-nowrap">
                            <div>
                              <UiAppCardPortrait1
                                :type="{ whole: false, line: true }"
                                title="Sample title UiAppCardPortrait1"
                                subtitle="Tempor orci hac"
                                image="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixqx=DquD8FxC5C&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                imgAlt="Hand Tools"
                                content="Ultricies massa malesuada viverra cras lobortis. Tempor orci hac
                                    ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl
                                    dictum."
                              >
                                <template v-slot:footer>
                                  <div class="mt-2">
                                    <UiAppButton
                                      className="primary"
                                      label="hello"
                                    />
                                  </div>
                                </template>
                              </UiAppCardPortrait1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </UiAppStickyTab>
                  </div>
                  <div class="mt-5">
                    <!-- CD (CD on 20210421): Another stickytab here for the next tab -->
                  </div>
                  <div class="mt-5">
                    <!-- CD (CD on 20210421): Another stickytab here for the next tab -->
                  </div>
                </div>
                <!-- CD (CT on 20210421): Tabs in sm+ screens -->
                <div class="hidden sm:block">
                  <div class="flex items-center border-b border-gray-200">
                    <nav class="flex flex-1 -mb-px space-x-6 xl:space-x-8">
                      <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
                      <a href="#" aria-current="page" class="px-1 py-4 text-sm font-medium text-indigo-600 border-b-2 border-indigo-500 whitespace-nowrap">
                        Tab 1
                      </a>

                      <a href="#" class="px-1 py-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 whitespace-nowrap">
                        Tab 2
                      </a>

                      <a href="#" class="px-1 py-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 whitespace-nowrap">
                        Tab 3
                      </a>
                    </nav>
                    <div class="hidden ml-6 bg-gray-100 p-0.5 rounded-lg items-center sm:flex">
                      <button type="button" class="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <!-- Heroicon name: solid/view-list -->
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                        <span class="sr-only">Use list view</span>
                      </button>
                      <button type="button" class="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <!-- Heroicon name: solid/view-grid -->
                        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        <span class="sr-only">Use grid view</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Related products -->
              <section class="pb-16 mt-8" aria-labelledby="related-products">
                <h2 id="related-products" class="sr-only">Tab 1</h2>
                <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  <li class="relative">
                    <!-- Current: "ring-2 ring-offset-2 ring-indigo-500", Default: "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500" -->
                    <div class="block w-full overflow-hidden group aspect-w-10 aspect-h-7">
                      <!-- Current: "", Default: "group-hover:opacity-75" -->

                      <!-- CD (CT on 20210421): Products here using Appcards. -->
                      <div class="grid grid-cols-3 gap-2 md:grid-cols-4 lg:grid-cols-5">
                          <!-- <div class="flex flex-nowrap">
                            <div>
                              <UiAppCardPortrait1
                                :type="{ whole: false, line: true }"
                                title="Sample title UiAppCardPortrait1"
                                subtitle="Tempor orci hac"
                                image="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixqx=DquD8FxC5C&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                imgAlt="Hand Tools"
                                content="Ultricies massa malesuada viverra cras lobortis. Tempor orci hac
                                    ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl
                                    dictum."
                              >
                                <template v-slot:footer>
                                  <div class="mt-2">
                                    <UiAppButton
                                      className="primary"
                                      label="hello"
                                    />
                                  </div>
                                </template>
                              </UiAppCardPortrait1>
                            </div>
                          </div> -->
                        </div>
                    
                    </div>
                  </li>

                  <!-- More files... -->
                </ul>
              </section>
            </div>
          </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  watch: {
    // whenever question changes, this function will run
    checkedproductCategory: async function(
      newCheckedproductCategory,
      oldCheckedproductCategory
    ) {
      // console.log(newCheckedproductCategory)
      this.relatedProducts = await this.$content("products")
        .where({
          sku: { $in: this.product[0].isRelatedTo },
          productCategory: newCheckedproductCategory
        })
        .only([
          "sku",
          "isAccessoryOrSparePartFor",
          "details",
          "toolType",
          "productCategory",
          "productType",
          "tags",
          "inProductGroupWithID",
          "isRelatedTo"
        ])
        .fetch();
    
    }
  },
  async asyncData({ params, $content }) {
    const slug = params.slug; // When calling /abc the slug will be "abc"
    const product = await $content("products")
      .where({ slugForUrl: slug })
      .fetch();

    const relatedProducts = await $content("products")
      .where({ sku: { $in: product[0].isRelatedTo } })
      .fetch();

    const options = relatedProducts
      .map(item => item.productCategory)
      .filter((value, index, self) => self.indexOf(value) === index);

    return {
      product: product,
      relatedProducts: relatedProducts,
      options: options,
      checkedproductCategory: []
    };
  }
};
</script>
