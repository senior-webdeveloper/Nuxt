<template>
  <div>
    <!-- CD (CT on 20210628): Use AppSlideOverPanel for viewing/editing content-->

    <!-- CD (CT on 20210628): Use AppTable -->
    <UiAppTable :headers="headings">
      <template #toolbar>
        <!-- CD (CT on 20210628): Add UiAppButton here for Add Resource Button. Class = primary -->
      </template>
      <!-- CD (CT on 20210628): Body of the table  -->
      <tbody>
        <template>
          <tr>
            <td class="text-center">Loading ... </td>
          </tr>
        </template>
        <!-- CD (CT on 20210628): Start table row -->
        <template>
          <tr class="trClass">
            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
              <!-- category here -->
            </td>
            <td class="px-6 py-4 text-sm font-medium text-blueGray-900 whitespace-nowrap">
              <!-- @click here is inconsistent with codes on forms. Should be ShowSliderView instead of viewEvent(data) -->
              <UiAppButton className="icon-tables"
                ><UiIconView />
              </UiAppButton>
              <UiAppButton className="icon-tables"
                ><UiIconCloudDownload />
              </UiAppButton>
            </td>
          </tr>
        </template>
        <!-- CD (CT on 20210628): END table row-->
      </tbody>
      <!--<template #pagination>
        <UiAppPagination
          @change:page="setPaginationPage"
          @change:size="setPaginationSize"
          :pages="pagination.pages"
          :from="pagination.from"
          :to="pagination.to"
          :items="pagination.items.length"
          :size="pagination.size"
          :total="paginationItems.length"
        />
      </template>-->
    </UiAppTable>
  </div>
</template>

<!-- Table Headers are "Text", "Status", "Actions" -->
<script>
export default {
  data() {
    return {
      headings: [
        "Category",
        "Actions"
      ]
    };
  },
}
</script>