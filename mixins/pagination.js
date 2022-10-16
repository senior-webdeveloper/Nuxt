export default {
  data: () => ({
    pagination: {
      current: 1,
      size: Number(process.env.TABLE_ITEMS_PER_PAGE),
      from: 0,
      to: Number(process.env.TABLE_ITEMS_PER_PAGE),
      pages: 1,
      items: []
    }
  }),
  computed: {
    paginationItems: []
  },
  created() {
    if (this.paginationItems === undefined) {
      throw new Error(
        "`paginationItems` should be declared if using pagination mixin"
      );
    }
  },
  methods: {
    setPaginationSize(size) {
      this.pagination.size = size;
    },
    setPaginationPage(page) {
      this.pagination.current = page;
    },
    watchPaginationPageAndSize() {
      this.pagination.from =
        (this.pagination.current - 1) * this.pagination.size;
      this.pagination.to = this.pagination.current * this.pagination.size;
      const isPerfect = !(this.paginationItems.length % this.pagination.size);
      this.pagination.pages = Math.floor(
        this.paginationItems.length / this.pagination.size
      );
      if (!isPerfect) {
        this.pagination.pages += 1;
      }

      this.watchPaginationItems(this.paginationItems);
    },
    watchPaginationItems(data) {
      if (!Array.isArray(data))
        return console.error("watchPaginationItems data is not an array");
      this.pagination.items = data
        .slice(this.pagination.from, this.pagination.to)
        .filter(Boolean);

      const isPerfect = !(this.paginationItems.length % this.pagination.size);
      this.pagination.pages = Math.floor(data.length / this.pagination.size);
      if (!isPerfect) {
        this.pagination.pages += 1;
      }
    }
  },
  watch: {
    "pagination.current": {
      deep: true,
      immediate: true,
      handler: "watchPaginationPageAndSize"
    },
    "pagination.size": {
      deep: true,
      immediate: true,
      handler: "watchPaginationPageAndSize"
    },
    paginationItems: {
      deep: true,
      immediate: true,
      handler: "watchPaginationItems"
    }
  }
};
