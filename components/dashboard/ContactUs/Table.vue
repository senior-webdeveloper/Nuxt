<template>
  <div>
    <UiAppSlideOverPanel
      :show="slider.show"
      @close="resetSliderData"
      :title="slider.title"
    >
      <!-- CD (CT on 20210615): Use ContactUsView for as slider content -->
      <DashboardContactUsView
          :contact="contacts.selected" 
          @deleteContact="deleteContact"
          @submit="updateContact"
       />
    </UiAppSlideOverPanel>
    <!-- CD (CT on 20210615): Use AppTable -->
    <UiAppTable :headers="headings" title="Distributorship Applications">
      <!-- CD (CT on 20210615): Body of the table  -->
      <tbody v-if="$fetchState.pending">
        <tr class="bg-gray-50">
          <td
            :colspan="headings.length"
            class="px-6 py-4 text-sm font-medium text-center text-blueGray-900 whitespace-nowrap"
          >
            Loading Data
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <!-- CD (CT on 20210615): Render table row -->
        <tr
          class="trClass"
          v-for="(contact,
          index) in pagination.items"
          :key="index"
        >
          <td class="tdClass">
            <UiAppBadge
              :className="contact.status === 'Pending' ? 'red' : 'green'"
              :label="contact.status"
            />
          </td>
          <td class="tdClass">
            {{contact.firstName}}
          </td>
          <td class="tdClass">
            {{contact.lastName}}
          </td>
          <td class="tdClass">
            {{contact.email}}
          </td>
          <td class="tdClass">
            {{contact.phone}}
          </td>
          <td class="tdClass">
            {{contact.company}}
          </td>
          <td class="tdClass">
            <UiAppButton
              className="icon-tables"
              @click="showView(contact)"
              ><UiIconView />
            </UiAppButton>
          </td>
        </tr>
        <!-- CD (CT on 20210615): Render table row  END-->
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
import { FETCH_ALL_CONTACT, UPDATE_ONE_CONTACT, DELETE_ONE_CONTACT } from "~/graphql/contact-us"
import paginationMixin from "~/mixins/pagination";
import notificationMixin from "~/mixins/notification";
import sliderMixin from "~/mixins/slider";

export default {
  mixins: [notificationMixin, sliderMixin, paginationMixin],
  data() {
    return {
      /* CD (EV on 20210329): Header of the table (some values are commented because table ui is not fixed) */
      headings: [
        "Status",
        "First Name",
        "Last Name",
        "Email",
        "Phone",
        "Company",
        "Actions"
      ],
      contacts: {
        all: [],
        selected: null,
      },
    };
  },
  async fetch() {
    const { data : { contacts } } = await this.$apollo.query({ query: FETCH_ALL_CONTACT });
    this.contacts.all = contacts
  },
  methods: {
    showView(contact) {
      this.contacts.selected = contact
      this.setSlider({
        show: true,
        title: "View Contact"
      });
      this.action = "view";
    },
    resetSliderData() {
      this.resetSlider();
      this.action = "";
      this.contacts.selected = null;
    },
    async deleteContact(){
      await this.$apollo.mutate({
        mutation: DELETE_ONE_CONTACT,
        variables: {
          query: { _id: this.contacts.selected._id }
        }
      });
      const index = this.contacts.all.indexOf(this.contacts.selected);
      this.contacts.all.splice(index, 1);
      this.contacts.selected = null;
      this.setNotification({
        show: true,
        title: "Success",
        content: "Deleted"
      });
      this.resetSliderData();
    },
    async updateContact(contact){
      contact.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
      contact.updatedAt = new Date()

      await this.$apollo.mutate({
        mutation: UPDATE_ONE_CONTACT,
        variables: {
          query: { _id: this.contacts.selected._id },
          set: { ...contact }
        }
      });

      const index = this.contacts.all.indexOf(this.contacts.selected);
      this.contacts.all.splice(index, 1, { ...contact });
      this.setNotification({
        show: true,
        title: "Update Successful",
        content: ""
      });
      this.resetSliderData();
    }
  },
  computed: {
    paginationItems() {
      return this.contacts.all;
    }
  },
};
</script>
