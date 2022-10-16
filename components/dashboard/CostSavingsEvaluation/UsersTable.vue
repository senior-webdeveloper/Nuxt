<template>
  <div>
    <div class="mt-20">
      <h2 class="text-gray-200">Users who completed Step 1</h2>
      <p class="text-blueGray-400">This table consists of users who completed step one of the Cost Savings Analysis form regardless of if they completed step 2.</p>
    </div>
    <UiAppTable :headers="headings" title="Users">
      <!-- CD (EV on 20210302): Body of the table  -->
      <tbody v-if="pagination.items && pagination.items.length">
        <!-- CD (EV on 20210302): Render table row -->
        <tr
          class="trClass"
          v-for="(user, index) in pagination.items"
          :key="index"
        >
          <td class="tdClass">
            {{ user.firstName }}
          </td>
          <td class="tdClass">
            {{ user.lastName }}
          </td>
          <td class="tdClass">
            {{ user.email }}
          </td>
        </tr>
        <!-- CD (EV on 20210302): Render table row  END-->
      </tbody>
      <template #pagination>
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
      </template>
    </UiAppTable>
  </div>
</template>

<script>
/* CD (EV on 20210329): Import fetch technical questions query */
import { FETCH_ALL_USER } from "~/graphql/cost-savings-evaluation";
import paginationMixin from '~/mixins/pagination'
export default {
  mixins: [paginationMixin],
  data() {
    return {
      /* CD (EV on 20210329): Header of the table (some values are commented because table ui is not fixed) */
      headings: [
          "First Name",
          "Last Name",
          "Email"
      ],
      users: [],
    };
  },
  async fetch() {
    /* CD (EV on 20210329): Declare query variable*/
    const query = FETCH_ALL_USER;

    /* CD (EV on 20210329): Fetch technical questions*/
    const { data } = await this.$apollo.query({ query });
    console.log(data.users)
    this.users = data.users
  },
  computed: {
    paginationItems() {
      return this.users;
    }
  },};
</script>
