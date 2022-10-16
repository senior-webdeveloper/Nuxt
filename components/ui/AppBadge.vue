// CD (KO on 20210228): component used in the UI as part of another comonent

<template>
  <span>
    <nuxt-link v-if="tag" :to="'/tag-results/' + tag.slug">
      <span v-bind="$attrs" v-on="$listeners" :class="badgeStyle">{{ label }}</span>
    </nuxt-link>
    <span v-else v-bind="$attrs" v-on="$listeners" :class="badgeStyle">{{ label }}</span>
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
