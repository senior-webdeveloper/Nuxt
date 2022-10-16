<template>
  <MglPopup :closeButton="false" :focusAfterOpen="false">
    <div>
      <div class="w-full px-4 py-2">
        <div class="space-y-1 text-lg font-medium leading-5">
          <!-- CD (CT on 20210729): If the field has no value, don't show the field -->
          <div class="cursor-default">
            <h3 class="mt-6 text-base font-semibold text-blueGray-800">{{distributor.name}}</h3>
          </div>
          <div class="mt-1 text-sm text-blueGray-500">
            <div>
              <div class="text-xs">
                <p>{{distributor.categoryType}}</p>
              </div>
              <div class="absolute right-0 p-2 text-xs top-1">
                <div class="flex flex-row space-x-1">
                  <div>
                    <UiAppBadge :className="'blue'" label='Top Speed' v-if="distributor.isTopSpeed"/> 
                  </div>
                  <div>
                    <UiAppBadge :className="'yellow'" v-if="distributor.isNationalDistributor && distributor.isNationalDistributor == true || distributor.isNationalDistributor == 'True'" label='National Distributor'/>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="flex flex-col justify-end flex-1 mt-2">
              <ul class="text-sm font-medium text-blueGray-800">
                <li>{{distributor.company}}</li>
                <li class="hidden md:block">{{distributor.address.streetAddress}}</li>
                <li class="hidden md:block">{{distributor.address.addressLocality + ","}} {{distributor.address.addressRegion + " " + distributor.address.postalCode}}</li>
                
                <li class="md:hidden">{{distributor.address.streetAddress + ","}}
                {{distributor.address.addressLocality + ","}} {{distributor.address.addressRegion + " " + distributor.address.postalCode}}</li>
                <li>{{distributor.address.country}}</li>
                <li><a class="cursor-pointer text-nsk-primary" :href="'tel:' + distributor.telephone">{{ distributor.telephone }}</a></li>
                <div class="flex flex-row flex-1 mt-2 mb-4 space-x-6 text-nsk-primary">
                  <!--<li> {{distributor.faxNumber}} </li> -->
                  <div v-if="distributor.email">
                    <li><a class="cursor-pointer" :href="'mailto:' + distributor.email"><UiIconMail class="w-5 h-5" /></a></li>
                  </div>
                  <div v-if="distributor.url">
                    <li><a :href="distributor.url" target="_blank"><UiIconLink class="w-5 h-5" /></a></li>
                  </div>  
                </div>
                <div class="absolute bottom-0 right-0 flex p-2 pr-4 text-xs text-blueGray-500" v-if="distributor.d && search_location">
                  <div class="flex">
                    <UiIconRuler class="w-4 h-4 mr-2" />
                    <p>{{Math.round(distributor.d)}} Miles</p>
                  </div>
                </div>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </MglPopup>
</template>

<script>
export default {
  props: ["distributor", "search_location"],
}
</script>
