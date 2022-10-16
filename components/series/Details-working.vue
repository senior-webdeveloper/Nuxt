// Details components used in series prior the new layout. New layout was replicated from product details page
// SeriesSeriesDetails was not working on _slug but when the same code was copied to /Details component, SeriesDetails worked in _slug

<template>
  <div>
    <section aria-labelledby="series-details">
      <h2 class="sr-only" id="series-details">Series Details</h2>
      <div class="overflow-hidden bg-white">
        <div class="space-y-6">
          <!-- <pre>{{product}}</pre> -->
          <div class="hidden md:block">
            <h1>{{series.name}}</h1>
          </div>
          <div class="flex space-x-2">
            <!-- CD (CD on 20210421): Use appbadge here for tags for this product -->
            <UiAppBadgeProducts class="mx-1 my-1" v-for="tag in series.tags" :key="tag" :tag="tag" className="blue"/>
          </div>
          <div>
            <p>{{ series.description }}</p>
          </div>
          <div class="pt-10" v-if="series.features">
            <ul>
              <li v-for="feature in series.features" :key="feature">{{feature}}</li>
            </ul>
          </div>
          <div class="pt-10">
            <table class="table-auto">
              <thead>
                <tr>
                  <th v-for="(column, index) in series.specifications[0]" :key="index">{{column}}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, index) in series.specifications.slice(1)" :key="index">
                  <td v-for="(column, index) in row" :key="index">{{column}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {stringify} from 'qs'
export default {
  props: ["series"],
  methods: {
    redirect(tag) {
      const qs = stringify({'series-content': { refinementList: { tags: [tag] } }})
      this.$router.push(`/series?${qs}`)
    }
  }
};
</script>


