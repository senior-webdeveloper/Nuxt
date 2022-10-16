<template>
  <div>
    <ais-instant-search
      :search-client="searchClient"
      index-name="products-content"
    >
      <h1>toolType</h1>
      <ais-refinement-list attribute="toolType" />
      <hr />
      <h1>productCategory</h1>
      <ais-refinement-list attribute="productCategory" />
      <hr />
      <h1>productType</h1>
      <ais-refinement-list attribute="productType" />
      <h1>tags</h1>
      <ais-refinement-list attribute="tags" />
      <h1>isAccessoryOrSparePartFor</h1>

      <ais-refinement-list attribute="isAccessoryOrSparePartFor" />
      <ais-search-box />
      <ais-hits>
        <template slot="item" slot-scope="{ item }">
          <h3><ais-highlight :hit="item" attribute="details.name" /></h3>
          <p>{{ item.details.description }}</p>

          <img :src="item.details.image" />
        </template>
      </ais-hits>
      <ais-pagination />
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
  },
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href:
            "https://unpkg.com/instantsearch.css@7.1.0/themes/algolia-min.css"
        }
      ]
    };
  }
};
</script>
