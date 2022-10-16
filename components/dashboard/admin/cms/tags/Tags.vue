<template>
  <div>
    <div>
        <UiAppSlideOverPanel
          :show="slider.show"
          @close="resetSliderData"
        >
          <DashboardAdminCmsTagsView
            @submit="addTags"
            @update="updateTag"
            @deleteTag="deleteTag"
            :action="action"
            :tag="tags.selected"
            :tags="tags.all"
          />
        </UiAppSlideOverPanel>

        <UiAppTable :headers="headings" title="Tags">

          <template #toolbar>
            <UiAppButton
              className="primary"
              label="Add Tag"
              @click="showAddTags"
            />
          </template>

          <!-- CD (CT on 20210614): Body of the table  -->
          <tbody>
            <template v-if="$fetchState.pending">
              <tr>
                <td :colspan="headings.length">Loading ...</td>
              </tr>
            </template>
            <!-- CD (CT on 20210614): Render table row -->
            <template v-for="data in pagination.items">
              <tr class="trClass" :key="data.id">
                <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  <!-- title field here -->
                    {{ data.title }}

                </td>
                <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {{data.createdAt}}
                </td>
                <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  {{data.updatedAt}}
                </td>
                <td class="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                  <!-- tags field here -->
                  <UiAppButton className="icon-tables" @click="showUpdateTag(data)"
                    ><UiIconView />
                  </UiAppButton>
                </td>
              </tr>
              </template>
          </tbody>
          <!-- CD (CT on 20210614): This area for pagination -->
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
  </div>
</template>

<script>
import {
  INSERT_MANY_TAGS,
  FETCH_ALL_TAGS,
  UPDATE_ONE_TAGS,
  DELETE_ONE_TAGS
} from "~/graphql/dashboard/admin/cms/tags";
import paginationMixin from '~/mixins/pagination'
import notificationMixin from "~/mixins/notification";
import sliderMixin from "~/mixins/slider";
const APP_URL = process.env.APP_URL

export default {
  mixins: [paginationMixin, notificationMixin, sliderMixin],

  async fetch() {
    const tags = await this.$apollo.query({ query: FETCH_ALL_TAGS });
    this.tags.all = tags.data.tags
  },

  data() {
    return {
      tags: {
        all: [],
        selected: null,
      },
      action: "",
      headings: [
        "Title",
        "Date Created",
        "Date Updated",
        "Actions",
      ],
    };
  },
  methods: {
    async addTags(tags) {
      /* CD (AN on 20210715): Map tags from vue input tags to the correct format*/
      const data = tags.map(x =>  {return {
        title: x.text, 
        createdAt: new Date().toLocaleString(), 
        updatedAt: new Date().toLocaleString(),
        createdBy: this.$auth.user.given_name + ' ' + this.$auth.user.family_name,
        updatedBy: this.$auth.user.given_name + ' ' + this.$auth.user.family_name,
        slug: this.Slug(x.text)
        }
      })
      console.log(data)
      const {
        data: { insertManyTags }
      } = await this.$apollo.mutate({
        mutation: INSERT_MANY_TAGS,
        variables: {data}
      });
      // CD (JE on 20210615): push the new data to first index of the array
      this.tags.all = data.concat(this.tags.all);
      this.setNotification({
        show: true,
        title: "Success",
        content: "Saved"
      });
      this.resetSliderData();
    },
    async updateTag(data) {
      await this.$apollo.mutate({
        mutation: UPDATE_ONE_TAGS,
        variables: { query: { _id: this.tags.selected._id }, set: {title: data, slug: this.Slug(data), updatedAt: new Date().toLocaleString(), updatedBy: this.$auth.user.given_name + ' ' + this.$auth.user.family_name,}}
      });
      const index = this.tags.all.indexOf(this.tags.selected);
      const { _id } = this.tags.selected;
      this.tags.all.splice(index, 1, { ...this.tags.selected, _id, title: data, updatedAt: new Date().toLocaleString() });
      this.setNotification({
        show: true,
        title: "Update Successful",
        content: ""
      });
      this.resetSliderData();
    },
    async deleteTag() {
      await this.$apollo.mutate({
        mutation: DELETE_ONE_TAGS,
        variables: {
          query: { _id: this.tags.selected._id }
        }
      });
      const index = this.tags.all.indexOf(this.tags.selected);
      this.tags.all.splice(index, 1);
      this.setNotification({
        show: true,
        title: "Success",
        content: "Deleted"
      });
      this.resetSliderData();
    },
    showAddTags() {
      this.setSlider({
        show: true,
        title: ""
      });
      this.action = "add";
    },
    showUpdateTag(data) {
      this.tags.selected = data;
      this.setSlider({
        show: true,
        title: ""
      });
      this.action = "update";
    },
    resetSliderData() {
      this.resetSlider();
      this.action = "";
      this.tags.selected = null;
    },
    Slug(str) {
        str = str.replace(/^\s+|\s+$/g, ''); // trim
        str = str.toLowerCase();
      
        // remove accents, swap ñ for n, etc
        var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
        var to   = "aaaaeeeeiiiioooouuuunc------";
        for (var i=0, l=from.length ; i<l ; i++) {
            str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
        }

        str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
            .replace(/\s+/g, '-') // collapse whitespace and replace by -
            .replace(/-+/g, '-'); // collapse dashes

        return str;
    }
  },
  computed: {
    paginationItems() {
      return this.tags.all;
    }
  }
};
</script>
