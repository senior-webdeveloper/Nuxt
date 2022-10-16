<template>
  <ais-instant-search :search-client="algolia" index-name="locations-test">
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
                @load="onMapLoaded"
              >
                <ais-infinite-hits>
                  <template slot-scope="{ items }">
                    <template v-for="(data, index) in items">
                      <mgl-marker
                        :key="data.objectID"
                        :coordinates="[data._geoloc.lng, data._geoloc.lat]"
                        @click="selectMarker(data, false, index)"
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
                            <popup :data="data" @close="closePopup(index)" />
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
        <div class="relative inline-flex flex-col justify-center w-full text-gray-500">
          <div class="relative w-full mt-20">
            <ais-search-box>
              <template
                slot-scope="{ currentRefinement, isSearchStalled, refine }"
              >
                <input
                  class="block p-2 pl-8 bg-gray-100 border border-gray-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-nsk-primary focus:border-transparent"
                  placeholder="search..."
                  type="search"
                  :value="currentRefinement"
                  @input="refine($event.target.value)"
                />
                <span :hidden="!isSearchStalled">Loading...</span>
              </template>
            </ais-search-box>
          </div>

          <section class="mx-5">
            <h2 class="my-5">Filter</h2>
            <div class="relative w-full my-5">
              <ais-refinement-list
                attribute="categoryType"
                :sort-by="['name:asc']"
                :class-names="{
                  'ais-RefinementList-count': 'hidden'
                }"
              />
              <ais-configure :hits-per-page.camel="lazyLoadingNumberOfItems" />
            </div>
          </section>

          <section class="mx-5">
            <h2 class="my-5">Locations</h2>
            <template>
              <ais-infinite-hits>
                <template slot-scope="{ items, refineNext, isLastPage }">
                  <template v-for="(item, index) in items">
                    <Center
                      :key="`center-${item._id}`"
                      @center="selectCenter(item)"
                      v-if="!index"
                    />
                    <listing-item
                      :key="item.objectID"
                      @click="selectMarker(item, index, true)"
                    >
                      <h3>
                        {{ item.name }}
                      </h3>
                      <p>
                        {{ item.category }}
                      </p>
                      <!-- <p>
                        <span>Category Type: </span
                        >{{ item.categoryType }}
                      </p> -->
                      <p>
                        {{ item.address | address }}
                      </p>
                      <p>
                        <span v-if="item.company"
                          ></span
                        >{{ item.company }}
                      </p>
                      <p>
                        <span v-if="item.territroyTitle"
                          ></span
                        >{{ item.territroyTitle }}
                      </p>
                      <p>
                        <span v-if="item.territoryState"
                          ></span
                        >{{ item.territoryState }}
                      </p>
                      <p>
                        <span v-if="item.email"></span
                        >{{ item.email }}
                      </p>
                      <p>
                        <span v-if="item.telephone"
                          ></span
                        >{{ item.telephone }}
                      </p>
                      <p>
                        <span v-if="item.faxNumber"></span
                        >{{ item.faxNumber }}
                      </p>
                      <p>
                        <span v-if="item.url"></span
                        >{{ item.url }}
                      </p>
                      <!-- <p>
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
                      </p> -->
                    </listing-item>
                  </template>
                  <!-- <UiAppButton
                    className="primary-full"
                    v-if="!isLastPage"
                    @click="refineNext"
                    label="Load More Results"
                  /> -->
                </template>
              </ais-infinite-hits>
              <!-- <h3
                class="mt-2 text-sm"
                v-if="!suggestions.loading && suggestions.all.length"
              >
                Suggestions: <span v-if="suggestions.loading"> Loading ...</span>
              </h3>
              <listings v-if="!suggestions.loading">
                <template v-for="suggestion in suggestions.all">
                  <listing-item
                    :key="`suggestion-${suggestion._id}`"
                    @click="selectMarker(suggestion, true)"
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
                  </listing-item>
                </template>
              </listings> -->
            </template>
          </section>
        </div>
      </div>
    </div>
  </ais-instant-search>
</template>

<script>
import algoliasearch from "algoliasearch";
import "mapbox-gl/dist/mapbox-gl.css";
import Center from "./Center";
import Popup from "./Popup";
import ListingItem from "./ListingItem";

export default {
  name: "FindDistributors",
  components: { Center, Popup, ListingItem },
  data: () => ({
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
  }),
  methods: {
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
        if (this.marker && fromResult) {
          if (!this.marker) return;
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
      ].join(", ")} ${address.postalCode}`
    }
  }
};
</script>
