// CD (KO on 20210228): component used in the UI as part of another comonent

<template>
  <button
    type="button"
    class="Button"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"
  >
    {{ label }}
    <slot></slot>
  </button>
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
      // CD (EV on 20210302): Return value for btnStyle computed property if className is "primary, ..."
      if (this.className == "primary")
        return "duration-300 ease-in-out inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
      else if (this.className == "primary-full")
        return "duration-300 ease-in-out inline-flex items-center w-full px-4 py-2 border justify-center border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
      else if (this.className == "secondary")
        return "duration-300 ease-in-out inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blueGray-700 bg-blueGray-100 hover:bg-blueGray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueGray-500";
      else if (this.className == "secondary-full")
        return "duration-300 ease-in-out inline-flex items-center px-4 w-full justify-center py-2 border border-transparent text-sm font-medium rounded-md text-blueGray-700 bg-blueGray-100 hover:bg-blueGray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blueGray-500";
      else if (this.className == "tertiary")
        return "duration-300 ease-in-out inline-flex items-center px-4 py-2 border border-blueGray-300 shadow-sm text-sm font-medium rounded-md text-blueGray-700 bg-white hover:bg-blueGray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
      else if (this.className == "tertiary-full")
        return "duration-300 ease-in-out inline-flex items-center px-4 w-full justify-center py-2 border border-blueGray-300 shadow-sm text-sm font-medium rounded-md text-blueGray-700 bg-white hover:bg-blueGray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
      else if (this.className == "warning")
        return "duration-300 ease-in-out w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm";
      else if (this.className == "warning-full")
        return "duration-300 ease-in-out w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm";
      else if (this.className == "icon-arrow")
        return "bg-gray-700 p-4 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
      else if (this.className == "icon-tables")
        return "px-1 duration-300 ease-in-out transform-gpu hover:scale-105 text-blueGray-500 hover:text-blueGray-600";
    }
  }
};
</script>
