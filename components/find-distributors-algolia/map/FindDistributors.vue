<template>
  <ais-instant-search-ssr>
    <div class="mb-10">
      <div class="h-full mx-auto sm:mx-10">
        <div class="flex h-96">
          <div class="w-full h-full ml-auto">
            <h1 class="my-2">Find Distributors &amp; Sales Representatives</h1>
            <client-only>
              <mgl-map
                :access-token="mapbox.token"
                :map-style.sync="mapbox.style"
                :zoom="3"
                :scroll-zoom="false"
                repaint
                render-world-copies
                @load="onMapLoaded"
              >
                <mgl-navigation-control position="top-right" />
                <mgl-geolocate-control poisition="top-right" />
                <mgl-scale-control />
                <ais-infinite-hits>
                  <template slot-scope="{ items }">
                    <template v-for="(data, index) in items">
                      <mgl-marker
                        :key="data.objectID"
                        :coordinates="[data._geoloc.lng, data._geoloc.lat]"
                        @click="selectMarker(data, index, false)"
                        ref="markers"
                        @removed="removeMarkerRef"
                        :color="
                          data.category === 'Distributor'
                            ? colors.distributor
                            : colors.sales_rep
                        "
                      >
                        <mgl-popup :close-button="false">
                          <template>
                            <FindDistributorsMapPopup
                              :data="data"
                              @close="closePopup(index)"
                            />
                          </template>
                        </mgl-popup>
                      </mgl-marker>
                    </template>
                  </template>
                </ais-infinite-hits>
              </mgl-map>
            </client-only>
          </div>
        </div>
      </div>
      <div class="mx-auto sm:mx-10">
        <div
          class="relative inline-flex flex-col justify-center w-full text-gray-500"
        >
          <div class="relative w-full mt-20">
            <!-- <h3>Search</h3> -->
            <ais-search-box>
              <template
                slot-scope="{ currentRefinement, isSearchStalled, refine }"
              >
                <input
                  class="block p-2 pl-8 bg-gray-100 border border-gray-200 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-nsk-secondary focus:border-transparent"
                  placeholder="Search by name or address"
                  type="search"
                  :value="currentRefinement"
                  @input="refine($event.target.value)"
                />
                <span :hidden="!isSearchStalled">Loading...</span>
              </template>
            </ais-search-box>
          </div>
          <div class="relative w-full my-5">
            <h3>Filter</h3>
            <ais-refinement-list
              attribute="categoryType"
              :class-names="{
                'ais-RefinementList-count': 'hidden'
                //'ais-RefinementList-checkbox': 'checked'
              }"
            />
            <ais-configure :hits-per-page.camel="lazyLoadingNumberOfItems" />
          </div>
          <template>
            <!-- <h3>Locations</h3> -->
            <ais-infinite-hits>
              <template slot-scope="{ items, refineNext, isLastPage }">
                <template v-for="(item, index) in items">
                  <FindDistributorsMapCenter
                    :key="`center-${item._id}`"
                    :item="item"
                    @center="selectCenter(item)"
                    v-if="!index"
                  />
                  <FindDistributorsMapListingItem
                    :key="item.objectID"
                    @click="selectMarker(item, index, true)"
                  >
                    <div class="py-2">
                      <h4>
                        {{ item.name }}
                      </h4>
                      <div class="my-2 text-xs">
                        {{ item.category }}
                      </div>
                      <!-- <p>
                        <span>Category Type: </span
                        >{{ item.categoryType }}
                      </p> -->
                      <p>
                        {{ item.address | address }}
                      </p>
                      <p><span v-if="item.company"></span>{{ item.company }}</p>
                      <p>
                        <span v-if="item.territroyTitle"></span
                        >{{ item.territroyTitle }}
                      </p>
                      <p>
                        <span v-if="item.territoryState"></span
                        >{{ item.territoryState }}
                      </p>
                      <p><span v-if="item.email"></span>{{ item.email }}</p>
                      <p>
                        <span v-if="item.telephone"></span>{{ item.telephone }}
                      </p>
                      <p>
                        <span v-if="item.faxNumber"></span>{{ item.faxNumber }}
                      </p>
                      <p><span v-if="item.url"></span>{{ item.url }}</p>
                      <p>
                        <span
                          class="font-bold"
                          v-if="
                            item.category === 'Distributor' &&
                              item.isNationalDistributor
                          "
                          >National Distributor: </span
                        >{{
                          item.isNationalDistributor | isNationationalDistributor
                        }}
                      </p>
                      <!-- CD (KO on 20210712): Distance is WIP/Bug -->
                      <!-- <div class="flex mt-2">
                        <span class="inline-block mr-1"><UiIconRuler /> </span>
                        <span  class="inline-block text-xs font-light"
                          v-text="distance([item._geoloc.lng, item._geoloc.lat])"
                        ></span>
                      </div> -->
                    </div>
                  </FindDistributorsMapListingItem>
                </template>
                <UiAppButton
                  className="primary-full"
                  v-if="!isLastPage"
                  @click="refineNext"
                  label="Load More Results"
                />
              </template>
            </ais-infinite-hits>
            <!-- <h3
              class="mt-2 text-sm"
              v-if="!suggestions.loading && suggestions.all.length"
            >
              Suggestions: <span v-if="suggestions.loading"> Loading ...</span>
            </h3>
            <FindDistributorsMapListings v-if="!suggestions.loading">
              <template v-for="(suggestion, index) in suggestions.all">
                <FindDistributorsMapListingItem
                  :key="`suggestion-${suggestion.objectID}`"
                  @click="selectMarker(suggestion, index, true)"
                >
                  <ais-highlight
                    :hit="suggestion"
                    attribute="name"
                    class="font-bold"
                  />
                  <p>
                    <span>Category: </span>
                    <ais-highlight :hit="suggestion" attribute="category" />
                  </p>
                  <p>
                    <span>Full Address: </span
                    >{{ suggestion.address | address }}
                  </p>
                  <p v-if="suggestion.url">
                    <span>URL: </span>
                    <ais-highlight :hit="suggestion" attribute="url" />
                  </p>
                  <p v-if="suggestion.telephone">
                    <span>Contact Number: </span>
                    <ais-highlight :hit="suggestion" attribute="telephone" />
                  </p>
                  <p>
                    <span class="font-bold">Distance: </span>
                    <span
                      v-text="
                        distance([
                          suggestion._geoloc.lng,
                          suggestion._geoloc.lat
                        ])
                      "
                    ></span>
                  </p>
                </FindDistributorsMapListingItem>
              </template>
            </FindDistributorsMapListings> -->
          </template>
        </div>
      </div>
    </div>
  </ais-instant-search-ssr>
</template>

<script>
import { distance } from "@turf/turf";
import algoliasearch from "algoliasearch";
import { createServerRootMixin } from "vue-instantsearch";
import "mapbox-gl/dist/mapbox-gl.css";

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
  name: "FindDistributors",
  data() {
    const mixin = createServerRootMixin({
      searchClient,
      indexName: "locations-test",
      routing: {
        router: nuxtRouter(this.$router)
      }
    });

    return {
      ...mixin.data(),
      algolia: algoliasearch(
        process.env.ALGOLIA_APP_ID,
        process.env.ALGOLIA_API_KEY
      ),
      lazyLoadingNumberOfItems: process.env.MAP_LAZY_LOADING_NUMBER_OF_ITEMS,

      selected: null,
      marker: null,
      mapbox: {
        instance: null,
        token: process.env.MAPBOX_TOKEN,
        style: process.env.MAPBOX_STYLE
      },
      colors: {
        sales_rep: process.env.MAPBOX_MARKER_COLOR_SALES_REPRESENTATIVE,
        distributor: process.env.MAPBOX_MARKER_COLOR_DISTRIBUTOR
      },
      center: null,
      suggestions: {
        all: [],
        loading: false
      }
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
    distance(to) {
      if (!this.center) return "N/A";
      const units = process.env.MAP_TURF_DISTANCE_UNITS;
      return distance(this.center, to, { units }).toFixed(2) + " " + units;
    },
    closePopup(index) {
      this.$refs.markers[index].togglePopup();
    },
    removeMarkerRef(index) {
      this.$refs.markers.splice(index, 1);
    },
    selectCenter(item) {
      this.center = [item._geoloc.lng, item._geoloc.lat];
      if (!this.mapbox.instance) return;
      this.mapbox.instance.jumpTo({
        center: this.center
      });
    },
    selectMarker(location, index, fromResult = false) {
      this.selected = location;
      if (!this.mapbox.instance) {
        alert("no mapbox instance");
      } else {
        if (this.marker) {
          // CD (JE on 20210601): close current open marker
          this.marker.togglePopup();
        }
        this.marker = this.$refs.markers[index];
        // CD (JE on 20210601): if marker exist and the event cames from search results
        if (this.marker && fromResult) {
          // CD (JE on 20210601): open new selected location
          this.marker.togglePopup();
        }
        this.center = [this.selected._geoloc.lng, this.selected._geoloc.lat];
        this.mapbox.instance.jumpTo({ center: this.center });
      }
    },
    onMapLoaded({ map }) {
      this.mapbox.instance = map;
      this.mapbox.instance.jumpTo({
        center: [process.env.MAPBOX_LNG, process.env.MAPBOX_LAT]
      });
    }
  },
  watch: {
    center: {
      deep: true,
      async handler([lat, lng]) {
        if (!lat || !lng) return;
        this.suggestions.loading = true;
        const aroundLatLng = `${lng}, ${lat}`;
        const data = await this.algolia.search([
          {
            indexName: "locations-test",
            params: {
              query: "",
              aroundRadius: process.env.MAPBOX_RADIUS,
              aroundLatLng
            }
          }
        ]);
        this.suggestions.all = data?.results[0]?.hits || [];
        this.suggestions.loading = false;
      }
    }
  },
  filters: {
    isNationationalDistributor(value) {
      return value === "True" ? "Yes" : value === "False" ? "No" : "";
    },
    address(address) {
      return `${[
        address.streetAddress,
        address.addressLocality,
        address.addressRegion,
        address.country
      ].join(", ")} ${address.postalCode}`;
    }
  }
};
</script>
