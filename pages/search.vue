
<template>
  <div>
    <ais-instant-search :search-client="searchClient" index-name="products-content">
      <ais-autocomplete>
        <div slot-scope="{ currentRefinement, indices, refine }">
          <input
            type="search"
            :value="currentRefinement"
            placeholder="Search for a product"
            @input="refine($event.currentTarget.value)"
          />

          <div v-if="currentRefinement">
            <ul v-for="index in indices" :key="index.indexId">
              <li>
                <ul>
                  <li v-for="hit in index.hits" :key="hit.objectID">
                    <ais-highlight attribute="details.name" :hit="hit" />

                    <p>{{ hit.details.description }}</p>
                    <hr />
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </ais-autocomplete>
    </ais-instant-search>
  </div>
</template>

<script>
import algoliasearch from "algoliasearch/lite";

export default {
  data() {
    return {
      searchClient: algoliasearch(
        process.env.ALGOLIA_APP_ID,
        process.env.ALGOLIA_API_KEY
      ),
      currentRefinement: ""
    };
  }
};
</script>
