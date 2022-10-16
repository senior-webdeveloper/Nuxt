// CD (KO on 20210228): component used in the UI as part of another comonent //
// CD (JE on 20210504): attach additional attributes and handlers to base input
element //
<template>
  <input
    :class="btnStyle"
    type="submit"
    :value="label"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>
​
<script>
export default {
  props: {
    // CD (EV on 20210302): Declare className props as required String
    className: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: false
    }
  },
  computed: {
    // CD (EV on 20210302): Return value for btnStyle computed property
    btnStyle: function() {
      // CD (EV on 20210302): Return value for btnStyle computed property if className is "primary"
      if (this.className == "primary")
        return "cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
      // CD (CT on 20210412): Return value for btnStyle computed property if className is "primary-full". Button has full width.
      else if (this.className == "primary-full")
        return "cursor-pointer inline-flex justify-center items-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
      // CD (EV on 20210302): Return value for btnStyle computed property if className is "secondary"
      else if (this.className == "secondary")
        return "cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blueGray-700 bg-blueGray-100 hover:bg-blueGray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueGray-500";
      // CD (CT on 20210412): Return value for btnStyle computed property if className is "secondary-full. Button has full width"
      else if (this.className == "secondary-full")
        return "cursor-pointer inline-flex items-center justify-center px-4 w-full py-2 border border-transparent text-sm font-medium rounded-md text-blueGray-700 bg-blueGray-100 hover:bg-blueGray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueGray-500";
      // CD (EV on 20210302): Return value for btnStyle computed property if className is "tertiary"
      else if (this.className == "tertiary")
        return "cursor-pointer inline-flex items-center px-4 py-2 border border-blueGray-300 shadow-sm text-sm font-medium rounded-md text-blueGray-700 bg-white hover:bg-blueGray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
      // CD (CT on 20210412): Return value for btnStyle computed property if className is "tertiary-full". Button has full width.
      else if (this.className == "tertiary-full")
        return "cursor-pointer inline-flex items-center px-4 w-full py-2 justify-center border border-blueGray-300 shadow-sm text-sm font-medium rounded-md text-blueGray-700 bg-white hover:bg-blueGray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
      else if (this.className == "icon")
        return "cursor-pointer bg-gray-700 p-4 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
    }
  }
};
</script>
