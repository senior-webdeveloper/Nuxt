<template>
  <div class="mt-12 find-distributors-map">
    <client-only>
      <MglMap
        :access-token="accessToken"
        :map-style="mapStyle"
        :center="center"
        :zoom="zoom"
        ref="map"
        id="map"
      >
        <MglNavigationControl />
        <MglGeolocateControl ref="geolocateControl" />
        <MglMarker
            v-for="distributor in distributors.filter(x => x._geoloc.lng && x._geoloc.lat)" 
            :key="distributor._id"
            :coordinates="[distributor._geoloc.lng, distributor._geoloc.lat]" 
            :color="distributor.category == 'Distributor' ? distributorColor : salesRepColor"
            :ref="distributor._id"
            @click="center = [distributor._geoloc.lng, distributor._geoloc.lat]"
         >
          <FindDistributorsMapPopup :distributor="distributor" :search_location="search_location" id="poopup"/>
        </MglMarker>
       </MglMap>
    </client-only>
  </div>
</template>


<script>
const accessToken = process.env.MAPBOX_TOKEN
const mapStyle = process.env.MAPBOX_STYLE || 'mapbox://styles/mapbox/streets-v11'
const zoom = parseInt(process.env.MAPBOX_ZOOM) || 3
const lat = process.env.MAPBOX_LAT
const lng = process.env.MAPBOX_LNG
const salesRepColor = process.env.MAPBOX_MARKER_COLOR_SALES_REPRESENTATIVE || '#165F89'
const distributorColor = process.env.MAPBOX_MARKER_COLOR_DISTRIBUTOR || '#000000'


export default {
    props: ["distributors", "selected_distributor" , "search_location", "filters"],
    data(){
        return {
            accessToken: null,
            mapStyle: null,
            center: null,
            zoom: null,
        }
    },
    created(){
        this.accessToken = accessToken
        this.mapStyle = mapStyle 
        this.zoom = zoom 
        this.center = [lng, lat]
        this.salesRepColor = salesRepColor
        this.distributorColor = distributorColor
    },
    watch: {
      selected_distributor: function(newVal, oldVal) {
      if(newVal){
        const popup = document.getElementsByClassName('mapboxgl-popup');
        if ( popup.length ) {
            popup[0].remove();
        }
        this.$refs[newVal._id][0].togglePopup()
        this.center = [newVal._geoloc.lng, newVal._geoloc.lat]
        this.zoom = 7
      } else {
        this.center = [lng, lat]
        this.zoom = zoom
      }
      },
      search_location: function(newVal, oldVal) {
      if(newVal){
        this.center = newVal
        this.zoom = parseInt(process.env.MAPBOX_SEARCH_ZOOM)
      } else {
        this.center = [lng, lat]
        this.zoom = zoom
      }
      },
      filters: function(newVal, oldVal){
        if(!newVal.selected_categories.length && !newVal.selected_category_types.length && newVal.national_distributor == false){
          console.log("reset")
          this.center = [lng, lat]
          this.zoom = zoom
          }
        }
    },
    head() {
        return {
            link: [{
                href: "https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css",
                rel: "stylesheet"
            }]
        }
    },
}

</script>

<style>
@import '../../node_modules/mapbox-gl/dist/mapbox-gl.css';
.find-distributors-map{
    height: 600px !important;
}
</style>