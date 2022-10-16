<template>
  <div>
    <div class="text-center">
      <h1>
        Results for <span class="text-nsk-primary">{{tag ? tag.title : 'tag'}}</span><!-- Tag clicked here-->
      </h1>
      <!--<p class="max-w-2xl mx-auto mt-3 text-xl text-blueGray-500 sm:mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
        labore natus atque, ducimus sed.
      </p>-->
    </div>

    <div class="flex justify-center space-x-4 xl:max-w-7xl xl:mx-auto xl:px-8">
      <div class="py-2 space-y-4" v-if="tag.title && products && products.length > 0">
        <a href="#products">
          <h2 class="hover:text-blueGray-900">Products</h2>
        </a>
      </div>
      <div class="py-2 space-y-4" v-if="tag.title && series && series.length > 0">
        <a href="#series">
          <h2 class="hover:text-blueGray-900">Series</h2>
        </a>
      </div>
      <div class="py-2 space-y-4" v-if="news && news.filter(news => news.tags.some(item_tag => item_tag.title === tag.title)).length > 0">
        <a href="#news">
          <h2 class="hover:text-blueGray-900">News</h2>
        </a>
      </div>
      <div class="py-2 space-y-4" v-if="faqs.length > 0 && faqs.filter(faq => faq.tags.some(faqtag => faqtag.title === tag.title)).length > 0">
        <a href="#faq">
          <h2 class="hover:text-blueGray-900">FAQ</h2>
        </a>
      </div>
      <div class="py-2 space-y-4" v-if="events.length > 0 && events.filter(event => event.tags.some(eventtag => eventtag.title === tag.title)).length > 0">
        <a href="#events">
          <h2 class="hover:text-blueGray-900">Events</h2>
        </a>
      </div>
      <div class="py-2 space-y-4" v-if="ads.length > 0 && ads.filter(ad => ad.tags.some(adtag => adtag.title === tag.title)).length > 0">
        <a href="#ads">
          <h2 class="hover:text-blueGray-900">Ads</h2>
        </a>
      </div>
      <div class="py-2 space-y-4" v-if="videos && videos.filter(video => video.tags.some(videotag => videotag.title === tag.title)).length > 0">
        <a href="#videos">
          <h2 class="hover:text-blueGray-900">Videos</h2>
        </a>
      </div>
    </div>
    
    <div class="bg-white">
      <div class="py-8 mt-10 xl:max-w-7xl xl:mx-auto xl:px-8">
        <VideosYoutubePlayerPopup
        v-if="youtubePlayer"
        :video="selectedVideo"
        @closeModal="youtubePlayer = false"
        />
        <VideosVideoPlayerPopup
        v-if="uploadPlayer"
        :video="selectedVideo"
        @closeModal="uploadPlayer = false"
        />

        <!-- Products -->
        <ul class="py-2 space-y-4" v-if="tag.title && products && products.length > 0">
          <h2 id="products">Products</h2>
          <li
              class="p-2 transition duration-300 ease-in-out rounded cursor-pointer hover:bg-gray-200 transform-gpu"
              v-for="hit in products"
              :key="hit.objectID"
              @click="redirect('/products/' + hit.slugForUrl)"
          >
            <div class="flex">
              <img
                  v-if="hit.details.image"
                  :src="hit.details.image"
                  :alt="hit.name"
                  class="w-[80px] h-[80px]"
              />
              <div class="flex flex-col ml-3">
                  <h3>Product</h3>
                  <h4>{{hit.details.name}}</h4>
                  <p v-html="hit.details.description"></p>
              </div>
            </div>
          </li>
        </ul>

        <!-- Series -->
        <ul class="py-2 space-y-4" v-if="tag.title && series && series.length > 0">
          <h2 id="series">Series</h2>
          <li
              class="p-2 transition duration-300 ease-in-out rounded cursor-pointer hover:bg-gray-200 transform-gpu"
              v-for="hit in series"
              :key="hit.objectID"
              @click="redirect('/series/' + hit.slugForUrl)"
          >
            <div class="flex">
              <img
                  v-if="hit.image"
                  :src="hit.image"
                  :alt="hit.name"
                  class="w-[80px] h-[80px]"
              />
              <div class="flex flex-col ml-3">
                  <h3>Series</h3>
                  <h4>{{hit.name}}</h4>
                  <p v-html="hit.description"></p>
              </div>
            </div>
          </li>
        </ul>

        <!-- News -->
        <ul class="py-2 space-y-4" v-if="news && news.filter(news => news.tags.some(item_tag => item_tag.title === tag.title)).length > 0">
          <h2 id="news">News</h2>
          <li
              class="p-2 transition duration-300 ease-in-out rounded cursor-pointer hover:bg-gray-200 transform-gpu"
              v-for="hit in news.filter(news => news.tags.some(item_tag => item_tag.title === tag.title))"
              :key="hit.objectID"
              @click="redirect('/news/' + hit.slug)"
          >
            <div class="flex">
              <img
                  v-if="hit.image"
                  :src="hit.image"
                  :alt="hit.headline"
                  class="w-[80px] h-[80px]"
              />
              <div class="flex flex-col ml-3">
                  <h3>News</h3>
                  <h4>{{hit.headline}}</h4>
                  <p v-html="hit.articleBody"></p>
              </div>
            </div>
          </li>
        </ul>

        <!-- Faq -->
        <ul class="py-2 space-y-4" v-if="faqs.length > 0 && faqs.filter(faq => faq.tags.some(faqtag => faqtag.title === tag.title)).length > 0">
          <h2 id="faq">FAQ</h2>
          <li
              class="p-2 transition duration-300 ease-in-out rounded cursor-pointer hover:bg-gray-200 transform-gpu"
              v-for="hit in faqs.filter(faq => faq.tags.some(faqtag => faqtag.title === tag.title))"
              :key="hit.objectID"
              @click="redirect('/faq?id=' + hit._id.$oid)"
          >
            <div>
              <div class="flex flex-col ml-3">
                  <h3>FAQ</h3>
                  <h4>{{hit.question}}</h4>
                  <p v-if="hit" v-html="hit.answer"></p>
              </div>
            </div>
          </li>
        </ul>

        <!-- Events -->
        <ul class="py-2 space-y-4" v-if="events.length > 0 && events.filter(event => event.tags.some(eventtag => eventtag.title === tag.title)).length > 0">
          <h2 id="events">Events</h2>
          <li
              class="p-2 transition duration-300 ease-in-out rounded cursor-pointer hover:bg-gray-200 transform-gpu"
              v-for="hit in events.filter(event => event.tags.some(eventtag => eventtag.title === tag.title))"
              :key="hit.objectID"
              @click="redirect('/events/' + hit.slug)"
          >
            <div class="flex">
              <img
                  v-if="hit.image"
                  :src="hit.image"
                  :alt="hit.headline"
                  class="w-[80px] h-[80px]"
              />
              <div class="flex flex-col ml-3">
                  <h3>Events</h3>
                  <h4>{{hit.name}}</h4>
                  <p v-html="hit.description"></p>
              </div>
            </div>
          </li>
        </ul>
        
        <!-- Ads -->
        <ul class="py-2 space-y-4" v-if="ads.length > 0 && ads.filter(ad => ad.tags.some(adtag => adtag.title === tag.title)).length > 0">
          <h2 id="ads">Ads</h2>
          <li
              class="p-2 transition duration-300 ease-in-out rounded cursor-pointer hover:bg-gray-200 transform-gpu"
              v-for="hit in ads.filter(ad => ad.tags.some(adtag => adtag.title === tag.title))"
              :key="hit.objectID"
              @click="redirect('/ads/' + hit.slug)"
          >
            <div class="flex">
              <img
                  v-if="hit.image"
                  :src="hit.image"
                  :alt="hit.headline"
                  class="w-[80px] h-[80px]"
              />
              <div class="flex flex-col ml-3">
                  <h3>Ads</h3>
                  <h4>{{hit.headline}}</h4>
                  <p v-html="hit.description"></p>  
              </div>
            </div>
          </li>
        </ul>

        <!-- Videos -->
        <ul class="py-2 space-y-4" v-if="videos && videos.filter(video => video.tags.some(videotag => videotag.title === tag.title)).length > 0">
          <h2 id="videos">Videos</h2>
          <li
              class="p-2 transition duration-300 ease-in-out rounded cursor-pointer hover:bg-gray-200 transform-gpu"
              v-for="hit in videos.filter(video => video.tags.some(videotag => videotag.title === tag.title))"
              :key="hit.objectID"
              @click="redirect('/videos')"
          >
            <div class="flex">
              <img
                  v-if="hit.youtubeThumbnail"
                  :src="hit.youtubeThumbnail"
                  :alt="hit.headline"
                  class="w-[80px] h-[80px]"
              />
              <img
                  v-else-if="hit.streamCustomThumbnail"
                  :src="hit.streamCustomThumbnail"
                  :alt="hit.headline"
                  class="w-[80px] h-[80px]"
              />
              <img
                  v-else-if="hit.streamThumbnail"
                  :src="hit.streamThumbnail"
                  :alt="hit.headline"
                  class="w-[80px] h-[80px]"
              />
              <div class="flex flex-col ml-3">
                  <h3>Videos</h3>
                  <h4>{{hit.title}}</h4>
                  <p v-html="hit.description"></p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  
  </div>
</template>

<script>
import {
    FETCH_ALL_VIDEOS, 
    FETCH_ALL_EVENTS, 
    FETCH_ALL_NEWS,
    FETCH_ALL_ADS, 
    FETCH_ALL_FAQS, 
    FETCH_ALL_TAGS,
} from "./../../graphql/tag-results";
import breadcrumbMixin from "~/mixins/breadcrumb"

export default {
    mixins: [breadcrumbMixin],
    data(){
        return{
            products: [],
            series: [],
            videos: [],
            events: [],
            news: [],
            ads: [],
            faqs: [],
            tags: [],
            tag: {},
            youtubePlayer: false,
            uploadPlayer: false,
            selectedVideo: {},
        }
    },
    async created(){
        const {data: { tags }} = await this.$apollo.query({ query: FETCH_ALL_TAGS });
        this.tags = tags;
        for (var i=0; i < tags.length; i++) {
            if (tags[i].slug === this.$route.path.split("/")[2]) {
                this.tag = tags[i];
            }
        }
        this.setBreadcrumb(this.tag.title)
        const products = await this.$content("products").where({tags: { $contains: this.tag.title }})
        .fetch();
        console.log("products", this.tag, products)
        const series = await this.$content("series").where({tags: { $contains: this.tag.title.toLowerCase() }})
        .fetch();
        console.log("series")
        this.products = products
        this.series = series
        const {data: { videos }} = await this.$apollo.query({ query: FETCH_ALL_VIDEOS });
        this.videos = videos;
        const {data: { events }} = await this.$apollo.query({ query: FETCH_ALL_EVENTS });
        this.events = events;
        const {data: { news }} = await this.$apollo.query({ query: FETCH_ALL_NEWS });
        this.news = news;
        const {data: { ads }} = await this.$apollo.query({ query: FETCH_ALL_ADS });
        this.ads = ads;
        const {data: { faqs }} = await this.$apollo.query({ query: FETCH_ALL_FAQS });
        this.faqs = faqs;
        console.log("everything else")
    },
    async fetch() {
        const tag = this.$route.params.tag; // When calling /abc the slug will be "abc"
        // const relatedProducts = await $content("products")
        // .where({ sku: { $in: product.isRelatedTo } })
        // .fetch();

        // const options = relatedProducts
        // .map(item => item.productCategory)
        // .filter((value, index, self) => self.indexOf(value) === index);
        // relatedProducts: relatedProducts,
        // options: options,
        // checkedproductCategory: []
    },
    methods: {
        playVideo(video){
        console.log("playvideo")
        if(video.provider == 'upload'){
            this.uploadPlayer = true
            this.selectedVideo = video
        } else {
            this.selectedVideo = video
            this.youtubePlayer = true
        }
        },
        goToEvent(event) {
        this.$router.push(`/events/${event.slug}`);
        },
        goToArticle(article) {
        this.$router.push(`/news/${article.slug}`);
        },
        goToAd(ad) {
        this.$router.push(`/ads/${ad.slug}`);
        },
        redirect(url){
            window.location.href = url
        },
        goToMap(category, region) {
            const qs = stringify({'distributors_and_sales_representatives-mongodb': { query: region, facetFilters: {  category } }})
            this.redirect(`/find-distributors?${qs}`)
        },
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
        return `${startDate} to ${endDate}, ${event.location}`
        }
    }
}
</script>