<template>
  <span>
    <nuxt-link v-if="tag" :to="'/tag-results/' + tag.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')">
      <span v-bind="$attrs" v-on="$listeners" :class="badgeStyle">{{ tag }}</span>
    </nuxt-link>
    <span v-else v-bind="$attrs" v-on="$listeners" :class="badgeStyle">{{ tag }}</span>
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
    tag: {
      type: String,
      required: true
    },
  },
  computed: {
    // CD (EV on 20210302): Return value for  btnStyle computed property
    badgeStyle: function() {
      if (this.className == "green")
        return "whitespace-nowrap inline-flex items-center px-2.5 py-0.5 rounded-full text-xs my-1 font-medium bg-green-100 text-green-800";
      else if (this.className == "yellow")
        return "whitespace-nowrap inline-flex items-center px-2.5 py-0.5 rounded-full text-xs my-1 font-medium bg-yellow-100 text-yellow-800";
      else if (this.className == "red")
        return "whitespace-nowrap inline-flex items-center px-2.5 py-0.5 rounded-full text-xs my-1 font-medium bg-red-100 text-red-800";
      else if (this.className == "blue")
        return "whitespace-nowrap inline-flex items-center px-2.5 py-0.5 rounded-full text-xs my-1 font-medium bg-blue-100 text-blue-800";
      else if (this.className == "grey")
        return "whitespace-nowrap inline-flex items-center px-2.5 py-0.5 rounded-full text-xs my-1 font-medium bg-blueGray-200 text-blueGray-800";
      else if (this.className == "grey-border")
        return "whitespace-nowrap inline-flex items-center px-2.5 py-0.5 rounded-full text-xs my-1 font-medium border border-blueGray-500 text-blueGray-800";
    }
  }
};
</script>