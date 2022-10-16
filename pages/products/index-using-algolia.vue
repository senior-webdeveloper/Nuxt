//pages/products/index

<template>
  <div>
    <!--<ais-instant-search
      :search-client="searchClient"
      index-name="products-content"
    >
      <h1>toolType</h1>
      <ais-refinement-list attribute="toolType" />
      <hr />
      <h1>productCategory</h1>
      <ais-refinement-list attribute="productCategory" />
      <hr />
      <h1>productType</h1>
      <ais-refinement-list attribute="productType" />
      <h1>tags</h1>
      <ais-refinement-list attribute="tags" />
      <h1>isAccessoryOrSparePartFor</h1>

      <ais-refinement-list attribute="isAccessoryOrSparePartFor" />
      <ais-search-box />
      <ais-hits>
        <template slot="item" slot-scope="{ item }">
          <h3><ais-highlight :hit="item" attribute="details.name" /></h3>
          <p>{{ item.details.description }}</p>

          <img :src="item.details.image" />
        </template>
      </ais-hits>
      <ais-pagination />
    </ais-instant-search>-->

    <ais-instant-search-ssr>
      <div class="flex overflow-hidden bg-white">
        <!-- CD (CT on 20210420): Add "h-sceen" if to add y scrollbar and will fix the side area of the filters.  -->
        <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
        <div
          class="fixed inset-0 z-40 flex lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <!--
            Off-canvas menu overlay, show/hide based on off-canvas menu state.

            Entering: "transition-opacity ease-linear duration-300"
              From: "opacity-0"
              To: "opacity-100"
            Leaving: "transition-opacity ease-linear duration-300"
              From: "opacity-100"
              To: "opacity-0"
          -->
          <div
            class="fixed inset-0 bg-gray-600 bg-opacity-75"
            aria-hidden="true"
          ></div>

          <!--
            Off-canvas menu, show/hide based on off-canvas menu state.

            Entering: "transition ease-in-out duration-300 transform"
              From: "-translate-x-full"
              To: "translate-x-0"
            Leaving: "transition ease-in-out duration-300 transform"
              From: "translate-x-0"
              To: "-translate-x-full"
          -->
          <div
            class="relative flex flex-col flex-1 w-full max-w-md pt-5 pb-4 bg-white"
          >
            <!--
              Close button, show/hide based on off-canvas menu state.

              Entering: "ease-in-out duration-300"
                From: "opacity-0"
                To: "opacity-100"
              Leaving: "ease-in-out duration-300"
                From: "opacity-100"
                To: "opacity-0"
            -->
            <div class="absolute top-0 right-0 pt-2 -mr-12">
              <button
                type="button"
                class="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span class="sr-only">Close sidebar</span>
                <!-- Heroicon name: outline/x -->
                <svg
                  class="w-6 h-6 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div class="flex-1 h-0 mt-5 overflow-y-auto">
              <nav class="px-2">
                <div class="px-6">
                  <h2>Filter</h2>
                </div>
                <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <div class="px-6 mt-10 space-y-5">
                    <div>
                      <p
                        class="text-xs font-semibold tracking-wider text-gray-400 uppercase"
                      >
                        Major Categories
                      </p>
                      <div class="mt-2 space-y-1">
                        <ais-refinement-list attribute="toolType" />
                      </div>
                    </div>
                    <div>
                      <p
                        class="text-xs font-semibold tracking-wider text-gray-400 uppercase"
                      >
                        Minor Categories
                      </p>
                      <div class="mt-2 space-y-1">
                        <ais-refinement-list attribute="productCategory" />
                      </div>
                    </div>
                    <div>
                      <p
                        class="text-xs font-semibold tracking-wider text-gray-400 uppercase"
                      >
                        Drive Type
                      </p>
                      <div class="mt-2 space-y-1">
                        <ais-refinement-list attribute="productType" />
                      </div>
                    </div>
                    <div>
                      <p
                        class="text-xs font-semibold tracking-wider text-gray-400 uppercase"
                      >
                        Tags
                      </p>
                      <div class="mt-2 space-y-1">
                        <ais-refinement-list attribute="tags" />
                      </div>
                    </div>
                    <div>
                      <p
                        class="text-xs font-semibold tracking-wider text-gray-400 uppercase"
                      >
                        Series
                      </p>
                      <div class="mt-2 space-y-1">
                        <ais-refinement-list
                          attribute="isAccessoryOrSparePartFor"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>

        <!-- Static sidebar for desktop -->
        <div class="hidden lg:flex lg:flex-shrink-0">
          <div class="flex flex-col w-64">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div class="flex flex-col flex-1">
              <nav class="flex-1 px-2 py-4">
                <!-- DIV FOR FILTERS -->
                <div class="mt-10 space-y-5">
                  <div>
                    <UiAppAccordion>
                      <template v-slot:header>
                        <span>
                          <p
                            class="px-3 text-xs font-semibold tracking-wider text-gray-400 uppercase"
                          >
                            Major Categories
                          </p>
                        </span>
                      </template>
                      <template v-slot:content>
                        <div class="px-3 mt-2 space-y-1">
                          <ais-refinement-list attribute="toolType" />
                        </div>
                      </template>
                    </UiAppAccordion>
                    <UiAppAccordion>
                      <template v-slot:header>
                        <span>
                          <p
                            class="px-3 text-xs font-semibold tracking-wider text-gray-400 uppercase"
                          >
                            Minor Categories
                          </p>
                        </span>
                      </template>
                      <template v-slot:content>
                        <div class="px-3 mt-2 space-y-1">
                          <ais-refinement-list attribute="productCategory" />
                        </div>
                      </template>
                    </UiAppAccordion>
                    <UiAppAccordion>
                      <template v-slot:header>
                        <span>
                          <p
                            class="px-3 text-xs font-semibold tracking-wider text-gray-400 uppercase"
                          >
                            Drive Type
                          </p>
                        </span>
                      </template>
                      <template v-slot:content>
                        <div class="px-3 mt-2 space-y-1">
                          <ais-refinement-list attribute="productType" />
                        </div>
                      </template>
                    </UiAppAccordion>
                    <UiAppAccordion>
                      <template v-slot:header>
                        <span>
                          <p
                            class="px-3 text-xs font-semibold tracking-wider text-gray-400 uppercase"
                          >
                            Tags
                          </p>
                        </span>
                      </template>
                      <template v-slot:content>
                        <div class="px-3 mt-2 space-y-1">
                          <ais-refinement-list attribute="tags" />
                        </div>
                      </template>
                    </UiAppAccordion>
                    <UiAppAccordion>
                      <template v-slot:header>
                        <span>
                          <p
                            class="px-3 text-xs font-semibold tracking-wider text-gray-400 uppercase"
                          >
                            Series
                          </p>
                        </span>
                      </template>
                      <template v-slot:content>
                        <div class="px-3 mt-2 space-y-1">
                          <ais-refinement-list
                            attribute="isAccessoryOrSparePartFor"
                          />
                        </div>
                      </template>
                    </UiAppAccordion>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div class="flex flex-col flex-1 w-0 overflow-hidden">
          <main class="relative flex-1 focus:outline-none">
            <div class="px-4 py-8 sm:px-6 lg:px-8 xl:py-10">
              <div
                class="md:flex md:items-center md:justify-between md:space-x-4 xl:pb-6"
              >
                <div>
                  <h1>Products</h1>
                  <p>Lorem ipsum sit dolor amet</p>
                </div>
              </div>
              <div class="mt-10">
                <!--<ais-search-box />-->
                <ais-search-box>
                  <template
                    slot-scope="{ currentRefinement, isSearchStalled, refine }"
                  >
                    <input
                      class="block p-2 pl-8 border border-gray-600 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-nsk-primary focus:border-transparent"
                      placeholder="Search products"
                      type="search"
                      :value="currentRefinement"
                      @input="refine($event.target.value)"
                    />
                    <span :hidden="!isSearchStalled">Loading...</span>
                  </template>
                </ais-search-box>
              </div>
              <div class="mt-5">
                <div class="w-full p-2 bg-blueGray-100">
                  <!--<div class="flex items-center justify-between">
                    <div>
                      Sort by [dropdown here]
                    </div>
                    <div
                      class="hidden ml-6 bg-blueGray-500 p-0.5 rounded-lg items-center sm:flex"
                    >
                      <button
                        type="button"
                        class="p-1.5 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 toggle-default"
                        :class="listViewStyleIs('list') && 'toggle-active'"
                        @click="listViewStyle = 'list'"
                      >
                        <svg
                          class="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span class="sr-only">Use list view</span>
                      </button>
                      <button
                        type="button"
                        class="ml-0.5 p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 toggle-default"
                        :class="listViewStyleIs('grid') && 'toggle-active'"
                        @click="listViewStyle = 'grid'"
                      >
                        <svg
                          class="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          />
                        </svg>
                        <span class="sr-only">Use grid view</span>
                      </button>
                    </div>
                  </div>-->
                
                  <div class="flex items-center justify-between">
                    <div>
                      <!-- Sort by [dropdown here] -->
                    </div>
                    <div class="hidden ml-6 bg-blueGray-500 p-0.5 rounded-lg items-center sm:flex">
                      <button
                        type="button"
                        class="p-1.5 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 toggle-default"
                        :class="listViewStyleIs('list') && 'toggle-active'"
                        @click="listViewStyle = 'list'"
                      >
                        <UiIconViewList />
                        <span class="sr-only">Use list view</span>
                      </button>
                      <button
                        type="button"
                        class="ml-0.5 p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 toggle-default"
                        :class="listViewStyleIs('grid') && 'toggle-active'"
                        @click="listViewStyle = 'grid'"
                      >
                        <UiIconViewGrid />
                        <span class="sr-only">Use grid view</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-10">
                <ais-hits>
                  <template slot-scope="{ items }">
                    <UiAppSwitchTableList
                      :direction="listViewStyle"
                      :items="items"
                    >
                      <template #grid="{ item }">
                        <div
                          @click="redirect('/products/' + item.slugForUrl)"
                          class="border border-black cursor-pointer"
                        >
                          <h3>
                            <ais-highlight
                              :hit="item"
                              attribute="details.name"
                            />
                          </h3>
                          <p class="truncate ...">
                            {{ item.details.description }}
                          </p>
                          <img
                            :src="item.details.image"
                            :alt="item.details.name"
                          />
                        </div>
                      </template>
                      <template #list="{ item }">
                        <div
                          @click="redirect('/products/' + item.slugForUrl)"
                          class="border border-red-500 cursor-pointer"
                        >
                          <h3>
                            <ais-highlight
                              :hit="item"
                              attribute="details.name"
                            />
                          </h3>
                          <p class="truncate ...">
                            {{ item.details.description }}
                          </p>
                          <img
                            :src="item.details.image"
                            :alt="item.details.name"
                          />
                        </div>
                      </template>
                    </UiAppSwitchTableList>
                  </template>
                </ais-hits>
              </div>
            </div>
            <div class="mt-10">
              <ais-pagination />
            </div>
          </main>
        </div>
      </div>
    </ais-instant-search-ssr>
  </div>
</template>

<script>
import algoliasearch from "algoliasearch/lite";
import { createServerRootMixin } from "vue-instantsearch";

const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY
);

function nuxtRouter(vueRouter) {
  return {
    read() {
      return vueRouter.currentRoute.query;
    },
    write(routeState) {
      // Only push a new entry if the URL changed (avoid duplicated entries in the history)
      if (this.createURL(routeState) === this.createURL(this.read())) {
        return;
      }
      vueRouter.push({
        query: routeState
      });
    },
    createURL(routeState) {
      const url = vueRouter.resolve({
        query: routeState
      }).href;
      return url;
    },
    onUpdate(cb) {
      if (typeof window === "undefined") return;

      this._onPopState = event => {
        const routeState = event.state;
        // On initial load, the state is read from the URL without
        // update. Therefore, the state object isn't present. In this
        // case, we fallback and read the URL.
        if (!routeState) {
          cb(this.read());
        } else {
          cb(routeState);
        }
      };
      window.addEventListener("popstate", this._onPopState);
    },
    dispose() {
      if (typeof window === "undefined") return;

      window.removeEventListener("popstate", this._onPopState);
    }
  };
}

export default {
  data() {
    const mixin = createServerRootMixin({
      searchClient,
      indexName: "products-content",
      routing: {
        router: nuxtRouter(this.$router)
      }
    });
    return {
      listViewStyle: "grid",
      currentRefinement: "",
      ...mixin.data()
    };
  },
  provide() {
    return {
      // Provide the InstantSearch instance for SSR
      $_ais_ssrInstantSearchInstance: this.instantsearch
    };
  },
  fetch() {
    return this.instantsearch.findResultsState(this).then(algoliaState => {
      this.$ssrContext.nuxt.algoliaState = algoliaState;
    });
  },
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href:
            "https://unpkg.com/instantsearch.css@7.1.0/themes/algolia-min.css"
        }
      ]
    };
  },
  beforeMount() {
    const results =
      (this.$nuxt.context && this.$nuxt.context.nuxtState.algoliaState) ||
      window.__NUXT__.algoliaState;

    this.instantsearch.hydrate(results);

    // Remove the SSR state so it can't be applied again by mistake
    delete this.$nuxt.context.nuxtState.algoliaState;
    delete window.__NUXT__.algoliaState;
  },
  methods: {
    redirect(url) {
      this.$router.push({ path: url });
    },
    listViewStyleIs(view) {
      return this.listViewStyle === view;
    }
  }
};
</script>

<style lang="postcss" scoped>
.toggle-active {
  @apply bg-white;
}
.toggle-default {
  @apply hover:bg-white hover:shadow-sm;
}
</style>
