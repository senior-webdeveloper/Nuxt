<template>
  <div
    class="find-distributors-map"
  >
    <client-only>
      <MglMap
        :access-token="accessToken"
        :map-style="mapStyle"
        :center="center"
        :zoom="zoom"
      >
        <MglGeolocateControl ref="geolocateControl" />
        <MglMarker
            v-for="distributor in distributors.filter(x => x._geoloc.lng && x._geoloc.lat)" 
            :key="distributor._id"
            :coordinates="[distributor._geoloc.lng, distributor._geoloc.lat]" 
            :color="distributor.category == 'Distributor' ? distributorColor : '#55FF33'"
            @click="$emit('openDistributorsPopup', distributor)"
         >
        </MglMarker>
       </MglMap>
    </client-only>
  </div>
</template>


<script>
const accessToken = process.env.MAPBOX_TOKEN
const mapStyle = process.env.MAPBOX_STYLE || 'mapbox://styles/mapbox/streets-v11'
const zoom = process.env.MAPBOX_ZOOM || 3
const lat = process.env.MAPBOX_LAT
const lng = process.env.MAPBOX_LNG
const salesRepColor = process.env.MAPBOX_MARKER_COLOR_SALES_REPRESENTATIVE || '#165F89'
const distributorColor = process.env.MAPBOX_MARKER_COLOR_DISTRIBUTOR || '#000000'


export default {
    props: ["distributors"],
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
    mounted(){
                this.distributors.forEach(element => {
            console.log(element.category == 'Sales Representative')
        });
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
.find-distributors-map{
    height: 600px !important;
}
</style>