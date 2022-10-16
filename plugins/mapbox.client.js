/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { MglMap, MglMarker, MglPopup, MglNavigationControl, MglGeolocateControl, MglScaleControl } from 'vue-mapbox';
import Mapbox from '!mapbox-gl';

Vue.component('MglMap', MglMap);
Vue.component('MglMarker', MglMarker)
Vue.component('MglPopup', MglPopup)

Vue.component('MglNavigationControl', MglNavigationControl);
Vue.component('MglGeolocateControl', MglGeolocateControl)
Vue.component('MglScaleControl', MglScaleControl)


Vue.prototype.$mapbox = Mapbox;
