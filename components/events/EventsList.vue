<template>
  <div>
    <div class="text-center">
      <h1>
        Events
      </h1>
      <!--<p class="max-w-2xl mx-auto mt-3 text-xl text-blueGray-500 sm:mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
        libero labore natus atque, ducimus sed.
      </p>-->
    </div>
    <div class="grid gap-5 mx-auto mt-12 sm:grid-cols-2 lg:max-w-none">
      <!-- Use the following fields
        Title - name
        Subtitle - startDate to endDate, location
        Content - description
        image - image
        imageAlt - name
      -->
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
        :to="`/events/${event.slug}`"
        @click="goToEvent(event)"
        :date="event.startDate"
        :past="event.past"
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
  </div>
</template>


<script>
import { FETCH_ALL_EVENT } from "~/graphql/dashboard/admin/event";
export default {
  async fetch() {
    let {
      data: { events }
    } = await this.$apollo.query({ query: FETCH_ALL_EVENT });
    events = events.map(event => {
      const end_date = new Date(event.endDate)
      const today = new Date()
      if(end_date < today){
        return {...event, past: true}
      } else {
        return event
      }
    })
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
    const past = events.filter(event => {
      const a_end_date = new Date(event.endDate).getTime()
      const now = new Date().getTime()    
      return now > a_end_date
    }).sort(function (a, b) {
      const a_start_date = new Date(a.startDate).getTime()
      const b_start_date = new Date(b.startDate).getTime()
      return b_start_date - a_start_date
    })
    this.events = ongoing.concat(future).concat(past)
    
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
      return new Date(date).toLocaleTimeString();
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
