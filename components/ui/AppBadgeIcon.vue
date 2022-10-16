// CD (KO on 20210228): component used in the UI as part of another comonent

<template>
  <span>
    <nuxt-link v-if="tag" :to="'/tag-results/' + tag.slug">
      <span v-bind="$attrs" v-on="$listeners">
        <div class="flex mt-2">
          <div class="w-5 h-5 mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </div>
          {{ label }}
        </div>
      </span>
    </nuxt-link>
    <span v-else v-bind="$attrs" v-on="$listeners">
      <div class="flex mt-2">
        <div class="w-5 h-5 mr-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
        </div>
        {{ label }}
      </div>
    </span>
  </span>
</template>
<script>
export default {
  props: {
    // CD (EV on 20210302): Declare className props as required String
    className: {
      type: String,
      required: true
    },
    // CD (EV on 20210302): Declare label props as required String
    label: {
      type: String,
      required: true
    },
    tag: Object,
  },
  computed: {
    // CD (EV on 20210302): Return value for  btnStyle computed property
    badgeStyle: function() {
      if (this.className == "green")
        return "whitespace-nowrap inline-flex items-center px-2.5 py-0.5 my-1 rounded-full text-xs font-medium bg-green-100 text-green-800";
      else if (this.className == "yellow")
        return "whitespace-nowrap inline-flex items-center px-2.5 py-0.5 my-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800";
      else if (this.className == "red")
        return "whitespace-nowrap inline-flex items-center px-2.5 py-0.5 my-1 rounded-full text-xs font-medium bg-red-100 text-red-800";
      else if (this.className == "blue")
        return "whitespace-nowrap inline-flex items-center px-2.5 py-0.5 my-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800";
      else if (this.className == "grey")
        return "whitespace-nowrap inline-flex items-center px-2.5 py-0.5 my-1 rounded-full text-xs font-medium bg-blueGray-200 text-blueGray-800";
      else if (this.className == "grey-border")
        return "whitespace-nowrap inline-flex items-center px-2.5 py-0.5 my-1 rounded-full text-xs font-medium border border-blueGray-500 text-blueGray-800";
    }
  }
};
</script>
