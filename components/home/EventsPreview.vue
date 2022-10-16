// CD (KO on 20210228): component used in only "/pages/index.vue"

<template>
  <div>
    <div class="overflow-hidden bg-gradient-to-b from-blueGray-400 to-blueGray-500" v-if="events.length">
      <div class="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center text-white">
          <h2>Events</h2>
          <!-- <p class="mx-auto description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> -->
          <div class="grid gap-5 mx-auto mt-12 sm:grid-cols-2 lg:max-w-none">
            <template v-for="event in events">
              <UiAppCardLandscape2
              :key="event._id"
              :type="{ whole: false, line: true }"
              :title="event.name"
              :subtitle="event|subtitle"
              :subtitle2="event.location"
              :image="event.image|image"
              :tags="event.tags"
              :imgAlt="event.name"
              :content="event.description"
              :date="event.startDate"
              :to="`/events/${event.slug}`"
              @click="goToEvent(event)"
            >
              <template v-slot:footer>
                <div class="flex justify-end p-2">
                  <UiAppButton className="icon">
                    <UiIconArrowPointingToRight />
                  </UiAppButton>
                </div>
              </template>
            </UiAppCardLandscape2>
            </template>
          </div>
          <nuxt-link to="/events">
            <p>View More</p>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { FETCH_ALL_EVENT } from "~/graphql/dashboard/admin/event";
export default {
  async fetch() {
    let {
      data: { events }
    } = await this.$apollo.query({ query: FETCH_ALL_EVENT });
    events = events.filter(event => {
      const end_date = new Date(event.endDate)
      return end_date > new Date() 
    })
      // this.events = events
    const ongoing = events.filter(event => {
      const a_start_date = new Date(event.startDate).getTime()
      const a_end_date = new Date(event.endDate).getTime()
      const now = new Date().getTime()    
      return a_start_date <= now && now <= a_end_date
    }).sort(function (a, b){
      const a_start_date = new Date(a.startDate).getTime()
      const b_start_date = new Date(b.startDate).getTime()
      return a_start_date - b_start_date
    })
    const future = events.filter(event => {
      const a_start_date = new Date(event.startDate).getTime()
      const now = new Date().getTime()    
      return a_start_date > now
    }).sort(function (a, b) {
      const a_start_date = new Date(a.startDate).getTime()
      const b_start_date = new Date(b.startDate).getTime()
      return a_start_date - b_start_date
    })
    this.events = ongoing.concat(future).slice(0, 4)
  },
  data: () => ({
    events: []
  }),
  methods: {
    goToEvent(event) {
      this.$router.push(`/events/${event.slug}`);
    }
  },
  filters: {
    formatDate(date) {
      return new Date(date).toLocaleString();
    },
    image(image) {
      return image.includes("http") ? image : `https://${image}`;
    },
    subtitle(event) {
      const startDate = new Date(event.startDate).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute:'2-digit'})
      const endDate = new Date(event.endDate).toLocaleString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute:'2-digit'})
      return `${startDate} - ${endDate}`
    }
  }
};
</script>
