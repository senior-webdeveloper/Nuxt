// CD (KO on 20210228): component used in the UI as part of another comonent

<template>
  <div class="flex items-center justify-between px-4 bg-white shadow sm:overflow-hidden sm:rounded-md sm:rounded-t-none sm:px-6">
    <!-- pagination -->
    <div class="items-center py-3 mt-2">
      <!-- mobile pagination -->
      <div class="flex justify-between flex-1 sm:hidden">
        <a
          href="#"
          class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
          :class="!hasPrev ? 'disabled' : ''"
          @click.prevent="setPage(Math.max(current - 1, 1))"
        >
          Previous
        </a>
        <a
          href="#"
          class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
          :class="!hasNext ? 'disabled' : ''"
          @click.prevent="setPage(Math.min(current + 1, pages))"
        >
          Next
        </a>
      </div>
      <!-- ipad and up pagination -->
      <div class="justify-between flex-1 hidden sm:flex">
        <div class="sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <p class="text-sm text-gray-700">
            Showing
            <span class="font-medium">{{ from + 1 }}</span>
            to
            <span class="font-medium">{{ total > to ? to : total }}</span>
            of
            <span class="font-medium">{{ total }}</span>
            results
          </p>
        </div>
      </div>
    </div>
  
        <div class="items-center hidden py-3 mt-2 sm:flex">
          <nav class="inline-flex -space-x-px shadow-sm" aria-label="Pagination">
            <a
              href="#"
              class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
              :class="!hasPrev ? 'disabled' : ''"
              @click.prevent="prevPage"
            >
              <span class="sr-only">Previous</span>
              <UiIconChevronLeft class="flex-shrink-0 w-5 h-5 text-gray-500" />
            </a>
            <template v-for="page in pagesDisplay">
              <a
                :key="`page-${page}`"
                href="#"
                class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-500 bg-indigo-50"
                :class="active(page) ? 'bg-indigo-50 border-indigo-500 text-indigo-60 active-page' : ''"
                @click.prevent="setPage(page)"
              >
                {{ page }}
              </a>
            </template> 
            <a
              href="#"
              class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50"
              :class="!hasNext ? 'disabled' : ''"
              @click.prevent="nextPage()"
            >
              <span class="sr-only">Next</span>
              <UiIconChevronRight class="flex-shrink-0 w-5 h-5 text-gray-500" />
            </a>
          </nav>
        </div>
    
    <!-- number of results per page -->
    <div class="flex items-center py-3 text-sm">
      <span class="hidden xl:block">Items per page</span>
      <UiAppFormSelect
        class="w-24 mx-2"
        id="pagination-page"
        :options="options"
        :value="String(size)"
        @input="$emit('change:size', Number($event)); current = 1"
        :required="true"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: [Number, String],
      required: true
    },
    from: {
      type: [Number, String],
      required: true
    },
    to: {
      type: [Number, String],
      required: true
    },
    total: {
      type: [Number, String],
      required: true
    },
    items: {
      type: [Number, String],
      required: true
    },
    pages: {
      // number of pages
      type: Number,
      required: true,
      default: 1
    }
  },
  data: () => ({
    current: 1,
    pageLists: process.env.TABLE_ITEMS_PER_PAGE_LIST
  }),
  methods: {
    nextPage(){
      if(this.current < this.pages){
        this.current++;
      }
    },
    prevPage(){
      if(this.current !== 1){
        this.current--;
      }
    },
    setPage(page) {
      this.current = page;
    },
    active(page) {
      return this.current === page;
    }
  },
  computed: {
    options () {
      return this.pageLists.split(',').map(n => ({ label: String(n), value: Number(n) }))
    },
    hasPrev() {
      return this.current > 1;
    },
    hasNext() {
      return this.pages < this.current;
    },
    pagesCount() {
      return Array(this.pages)
        .fill(0)
        .map((_, index) => index + 1);
    },
    pagesDisplay() {
      if(this.pages < 4){
        return this.pages
      } else if(this.pages > this.current + 3){
        return [this.current, this.current + 1, this.current + 2, this.current + 3]
      } else {
        return [this.pages - 3, this.pages - 2, this.pages - 1, this.pages]
      }
    }
  },
  watch: {
    current: {
      deep: true,
      immediate: true,
      handler(value) {
        this.$emit("change:page", value);
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.active-page {
  @apply bg-blue-500 text-white;
}
</style>
