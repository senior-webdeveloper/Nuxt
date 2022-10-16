<template>
  <div>
    
    <div class="max-w-3xl py-10 mx-auto space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
      <!--<div>
        <h1>Add new distributor / sales representative</h1>
      </div>-->
      <!-- CD (JE on 20210511): Use AppNotification -->
      <UiAppNotification
        :show="notification.show"
        :title="notification.title"
        :content="notification.content"
        @close="notification.show = false"
      />
      <form @submit.prevent="formSubmit">
        <div class="space-y-6">
          <div>
            <p class="block mb-2 text-sm font-medium text-blueGray-700">Category</p>
            <div class="flex space-x-6">
              <label class="flex text-sm font-medium text-blueGray-700">
                <input
                  type="radio"
                  class="radio" 
                  v-model="form.category"
                  name="category"
                  value="Distributor"
                  checked
                />
                <p class="ml-3">Distributor</p>
              </label>
              <label class="flex text-sm font-medium text-blueGray-700">
                <input
                  type="radio"
                  class="radio" 
                  v-model="form.category"
                  name="category"
                  value="Sales Representative"
                />
                <p class="ml-3">Sales Representative</p>
              </label>
            </div>
          </div>
          <div>
            <UiAppFormField
              v-model="form.name"
              type="text"
              label="Name"
              :required="true"
            />
          </div>
          <div v-if="isDistributor">
            <UiAppFormSelect
              :options="categoryTypes"
              v-model="form.categoryType"
              label="Category Type"
              required
            />
          </div>
          <div v-if="isDistributor">
            <div class="relative flex items-center">
              <input
                type="checkbox"
                id="isNationalDistributor"
                name="isNationalDistributor"
                class="checkbox"
                v-model="form.isNationalDistributor"
              />
              <label for="isNationalDistributor" class="block ml-3 text-sm font-medium text-blueGray-700">National Distributor
              </label>
            </div>
          </div>
          <div class="relative flex items-center">
            <input
              type="checkbox"
              id="isTopSpeed"
              name="isTopSPeed"
              class="checkbox"
              v-model="form.isTopSpeed"
            />
            <label for="isTopSpeed" class="block ml-3 text-sm font-medium text-blueGray-700">Top Speed</label>
          </div>
          <div>
            <UiAppFormField
              v-model="form.address.country"
              type="text"
              label="Country"
              :required="true"
            />
          </div>
          <div>
            <UiAppFormField
              v-model="form.address.addressRegion"
              type="text"
              label="State"
              :required="true"
            />
          </div>
          <div>
            <UiAppFormField
              v-model="form.address.addressLocality"
              type="text"
              label="City"
              :required="true"
            />
          </div>
          <div>
            <UiAppFormField
              v-model="form.address.postalCode"
              type="text"
              label="Zipcode"
              :required="true"
            />
          </div>
          <div>
            <UiAppFormField
              v-model="form.address.streetAddress"
              type="text"
              label="Street Address"
              :required="true"
            />
          </div>
          <div class="mt-2">
            <UiAppButton
              className="primary"
              @click="getGeoLocation"
              label="Get Geolocation"
            />
          </div>
          <div>
            <UiAppFormField
              v-model="form._geoloc.lat"
              type="text"
              label="Latitude"
              :required="true"
            />
          </div>
          <div>
            <UiAppFormField
              v-model="form._geoloc.lng"
              type="text"
              label="Longitude"
              :required="true"
            />
          </div>
          <!-- <div class="mt-2">
            <UiAppButton
              className="primary"
              @click="modal = !modal"
              :label="modal ? 'Hide Map': 'Show Map'"
              :disabled="!hasCoords"
            />
            <div v-if="modal && hasCoords" class="w-full h-96">
              <client-only>
                <mgl-map
                  :access-token="mapbox.token"
                  :map-style.sync="mapbox.style"
                  :zoom="3"
                  :center="[form._geoloc.lng, form._geoloc.lat]"
                  @load="onMapLoaded"
                >
                  <mgl-marker
                    draggable
                    :coordinates="[form._geoloc.lng, form._geoloc.lat]"
                    @drag="dragMarker"
                  ></mgl-marker>
                </mgl-map>
              </client-only>
            </div>
          </div> -->
          <div v-if="!isDistributor">
            <UiAppFormField
              v-model="form.company"
              type="text"
              label="Company"
              :required="true"
            />
          </div>
          <div v-if="!isDistributor">
            <UiAppFormField
              v-model="form.territoryState"
              type="text"
              label="Territory State"
              :required="true"
            />
          </div>
          <div v-if="!isDistributor">
            <UiAppFormField
              v-model="form.territoryTitle"
              type="text"
              label="Territory Title"
              :required="true"
            />
          </div>
          <div>
            <UiAppFormField
              v-model="form.email"
              type="email"
              label="Email"
            />
          </div>
          <div>
            <UiAppFormField
              v-model="form.telephone"
              type="text"
              label="Telephone"
            />
          </div>
          <div v-if="isDistributor">
            <UiAppFormField v-model="form.faxNumber" type="text" label="Fax" />
          </div>
          <div v-if="isDistributor">
            <UiAppFormField v-model="form.url" type="text" label="URL" />
          </div>
          <div>
            <UiAppFormSelect
              :options="statusTypes"
              v-model="form.status"
              label="Status"
              required
            />
          </div>
          <div class="px-4 py-3 mt-10 text-right bg-gray-50 sm:px-6">
            <template>
              <UiAppFormSubmit
                className="primary"
                label="Save"
              />
            </template>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import algoliasearch from "algoliasearch";
import {
  INSERT_ONE_DISTRIBUTOR_AND_SALES_REP,
  UPDATE_ONE_DISTRIBUTOR_AND_SALES_REP
} from "~/graphql/dashboard/admin/map/distributor-and-sales-representative";
export default {
  props: ["data", "isEdit"],
  mounted() {
    this.form = this.isEdit ? {...this.data} : this.form;
  },
  computed: {
    isDistributor() {
      return this.form.category === "Distributor";
    },
    hasCoords() {
      return this.form._geoloc.lng !== null && this.form._geoloc.lat !== null;
    }
  },
  data: () => ({
    modal: false,
    mapbox: {
      instance: null,
      token: process.env.MAPBOX_TOKEN,
      style: process.env.MAPBOX_STYLE
    },
    algolia: {
      client: algoliasearch(
        process.env.ALGOLIA_APP_ID,
        process.env.ALGOLIA_API_KEY
      )
    },
    categoryTypes: [
      { label: "Sales Representative", value: "Sales Representative" },
      { label: "Traditional", value: "Traditional" },
      { label: "Woodworking", value: "Woodworking" },
      { label: "Machine Tool", value: "Machine Tool" },
      { label: "Distributor", value: "Distributor" },
      { label: "Jewelry", value: "Jewelry" },
      { label: "Machinery", value: "Machinery" },
      { label: "Automation", value: "Automation" }
    ],
    statusTypes: [
      { label: "Published", value: "Published" },
      { label: "Unpublished", value: "Unpublished" }
    ],
    notification: {
      show: false,
      title: "",
      content: ""
    },
    form: {
      name: "",
      category: "Distributor",
      categoryType: "Jewelry",
      address: {
        country: "",
        addressRegion: "",
        addressLocality: "",
        postalCode: "",
        streetAddress: ""
      },
      _geoloc: {
        lat: "",
        lng: ""
      },
      company: "",
      territoryState: "",
      territoryTitle: "",
      email: "",
      telephone: "",
      faxNumber: "",
      url: "",
      isNationalDistributor: "",
      isTopSpeed: false,
      status: "Unpublished",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  }),
  methods: {
    async getGeoLocation() {
      const {
        streetAddress,
        postalCode,
        addressRegion,
        addressLocality
      } = this.form.address;
      const searchAddress = [
        streetAddress,
        addressLocality,
        addressRegion,
        postalCode
      ]
        .filter(Boolean)
        .join("+")
        .replace(/ /g, "+");
      const { data } = await this.$axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchAddress}.json?access_token=${process.env.MAPBOX_TOKEN}`
      );
      const [relevantAddress] = data.features;
      if (!relevantAddress) return alert("Address geolocation not found");
      const [lng, lat] = relevantAddress.center;
      this.form._geoloc = { lat: lat.toString(), lng: lng.toString() };
    },
    onMapLoaded({ map }) {
      this.mapbox.instance = map;
    },
    dragMarker({ mapboxEvent }) {
      const lat = mapboxEvent.target._lngLat.lat.toString();
      const lng = mapboxEvent.target._lngLat.lng.toString();
      this.form._geoloc = { lng, lat };
    },
    async formSubmit() {
      try {
        this.form.Type = this.isDistributor ? "Local Business" : "Person";
        this.form.categoryType = this.isDistributor
          ? this.form.categoryType
          : "Sales Representative";
        this.form.isNationalDistributor =
          this.isDistributor && this.form.isNationalDistributor ? "True" : "";

        // CD (JE on 20210603): update form data to match current mutation (insert/update)
        const mongoId = this.isEdit ? this.form._id : null;
        const query = this.isEdit
          ? {
              query: { _id: mongoId }
            }
          : {};

        if (this.isEdit) {
          delete this.form._id;
          delete this.form.objectID;
        } else {
        this.form.createdBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
        }
        this.form.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
        // CD (JE on 20210603): create mongodb entry
        const {
          data: { mutate }
        } = await this.$apollo.mutate({
          mutation: this.isEdit
            ? UPDATE_ONE_DISTRIBUTOR_AND_SALES_REP
            : INSERT_ONE_DISTRIBUTOR_AND_SALES_REP,
          variables: {
            // CD (JE on 20210603): we will save the objectID from algolia for easy algolia updates
            data: this.form,
            ...query
          }
        });

        // CD (JE on 20210503): create algolia entry
        await this.algolia.client
          .initIndex("distributors_and_sales_representatives-mongodb")
          .saveObject(
            { ...this.form, objectID: mutate._id },
            { autoGenerateObjectIDIfNotExist: true }
          );

        this.$emit(this.isEdit ? "submit:update" : "submit:create", {
          ...this.form,
          _id: mutate._id,
          objectID: mutate._id
        });

        this.form = {
          name: "",
          category: "Distributor",
          categoryType: "Jewelry",
          address: {
            country: "",
            addressRegion: "",
            addressLocality: "",
            postalCode: "",
            streetAddress: ""
          },
          _geoloc: {
            lat: "",
            lng: ""
          },
          company: "",
          territoryState: "",
          territoryTitle: "",
          email: "",
          telephone: "",
          faxNumber: "",
          url: "",
          isNationalDistributor: "",
          isTopSpeed: false,
          status: "Unpublished",
          createdAt: new Date(),
          updatedAt: new Date()
        };
      } catch (err) {
        // CD (JE on 20210503): show notification
        this.notification = {
          show: true,
          title: "Error",
          content: err.message || "Internal Server Error"
        };
      }
    },
  }
};
</script>
