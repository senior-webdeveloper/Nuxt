// CD (KO on 20210228): component used in the UI as part of another comonent

<template>
  <div>
    <div class="flex items-center justify-end">
      <p class="sr-only">{{ title }} Table</p>
      <slot name="toolbar" />
      <UiAppTableSort v-if="sort" />
    </div>
    <div class="flex flex-col mt-4 bg-white sm:rounded-t-md">
      <div class="-my-2 sm:-mx-6 lg:-mx-8">
        <div class="inline-block w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="overflow-auto shadow h-120">
            <table class="relative w-full divide-y divide-blueGray-200">
              <thead>
                <tr class="trClass">
                  <th scope="col" class="sticky top-0 px-6 py-3 text-xs font-medium tracking-wider text-left uppercase whitespace-nowrap bg-blueGray-200 text-blueGray-500" v-for="(item, index) in headers" :key="index">
                    {{ item }}
                  </th>
                </tr>
              </thead>
              <slot />
            </table>
          </div>
        </div>
      </div>
    </div>
    <div>
      <slot name="pagination" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // CD (EV on 20210302): Declare headers props as required array
    headers: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: false
    },
    sort: {
      type: Boolean,
      required: false
    },
    thClass: {
      type: String,
      default:
        "px-6 py-3 text-xs font-medium tracking-wider text-left uppercase bg-blueGray-200 text-blueGray-500 whitespace-nowrap"
    }
  }
};
</script>
