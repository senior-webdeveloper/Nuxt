<template>
  <div>
    <div class="py-6">
      <div class="w-full max-w-3xl mx-auto">
        <label for="search" class="sr-only">Search Places</label>
        <div class="relative text-blueGray-500 focus-within:text-blueGray-600">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <UiIconSearch />
          </div>
          <input @input="getGeoLocation" v-model="search_location" id="search" class="block w-full p-2 pl-8 border border-gray-600 rounded focus:bg-white focus:outline-none focus:ring-2 focus:ring-nsk-primary focus:border-transparent" placeholder="Search Places" type="search" name="search">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: ["clear_search"],
  data(){
    return {
      search_location: null,
    }
  },
  methods: {
    async getGeoLocation() {
      clearTimeout(this.debounce)
      if(this.search_location){
        this.debounce = setTimeout(async () => {
          const { data } = await this.$axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.search_location.replace(/ /g, "+")}.json?access_token=${process.env.MAPBOX_TOKEN}`
          );
          const [relevantAddress] = data.features;
          if (!relevantAddress) return alert("Address geolocation not found");
          const [lng, lat] = relevantAddress.center;
          this.$emit('search', [lng, lat])
        }, 500)
      } else {
        this.$emit('resetFilters')
      }
    },
  },
  watch: {
    clear_search: function(newVal, oldVal){
      if(!newVal) this.search_location = null
    }
  }
} 
</script>
