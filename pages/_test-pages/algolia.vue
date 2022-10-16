<template>
  <div>
    <ais-instant-search :search-client="searchClient" index-name="products">
      <ais-search-box />
      <b>PRODUCTS</b>
      <ais-hits>
        <template slot="item" slot-scope="{ item }">
          <h3><ais-highlight :hit="item" attribute="product_name" /></h3>
        </template>
      </ais-hits>
      <hr />
      <b>MOUNTAINS</b>
      <ais-index index-name="mountains">
        <ais-hits>
          <template slot="item" slot-scope="{ item }">
            <h3><ais-highlight :hit="item" attribute="title" /></h3>
            <img :src="item.image" :style="{ height: '100px' }" />
          </template>
        </ais-hits>
      </ais-index>
      <hr />
      <b>MOVIES</b>
      <ais-index index-name="movies">
        <ais-hits>
          <template slot="item" slot-scope="{ item }">
            <h3><ais-highlight :hit="item" attribute="title" /></h3>
          </template>
        </ais-hits>
      </ais-index>
      <b>RIVERS</b>
      <ais-index index-name="rivers">
        <ais-hits>
          <template slot="item" slot-scope="{ item }">
            <h3><ais-highlight :hit="item" attribute="title" /></h3>
            <img :src="item.image" :style="{ height: '100px' }" />
          </template>
        </ais-hits>
      </ais-index>
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
      )
    };
  }
};
</script>
