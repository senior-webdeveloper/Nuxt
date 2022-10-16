<template>
  <div>

    <UiAppModal
      v-if="modal"
      :show="modal"
      @close="closeModal"
      @confirm="deleteFaq"
      :title="`Are you sure you want to delete?`"
      content="This action is irreversable."
    />

    <div>
      <section class="mt-10">
        <h2 class="pb-4 text-xl text-white">Add FAQ</h2>
        <div class="shadow sm:rounded-md">
          <div class="px-4 py-6 bg-white sm:p-6">
              
            <form @submit.prevent="formSubmitAdd">
              <div class="space-y-6">
                <div>
                  <UiAppFormTextArea
                    v-model="form.question"
                    label="Question *"
                    :required="true"
                  />
                </div>
                <div>
                  <UiAppFormTextArea
                    v-model="form.answer"
                    label="Answer *"
                    :required="true"
                  />
                </div>
                <div>
                  <p class="block mb-2 text-sm font-medium text-blueGray-700">Tags *</p>
                  <vue-tags-input
                    v-model="tags.tag"
                    :tags="tags.tags"
                    :autocomplete-items="filteredItems"
                    :add-only-from-autocomplete="true"
                    @tags-changed="newTags => (tags.tags = newTags)"
                    class="h-64 overflow-y-auto"
                  />
                  <!-- :autocomplete-items="filteredItems" -->
                </div>
              </div>

              <div class="px-4 py-3 mt-10 text-right bg-gray-50 sm:px-6">
                <UiAppFormSubmit className="primary" label="ADD FAQ" />
              </div>
            </form>
          </div>
        </div>
      </section>
      <section class="mt-10">
        <h2 class="pb-4 text-xl text-white">List of FAQ</h2>
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-6 bg-white sm:p-6">
            
            <form @submit.prevent="formSubmit">
              <div v-if="faqs.length > 0">
                <section
                  class="mt-10"
                  v-for="(faq, index) in faqs"
                  :key="index"
                >
                  <div class="shadow sm:rounded-md">
                    <div class="px-4 py-6 bg-blueGray-100 sm:p-6">
                      <div class="space-y-6">
                        <div>
                          <UiAppFormTextArea
                            v-model="faq.question"
                            label="Question *"
                            :required="true"
                          />
                        </div>
                        <div>
                          <UiAppFormTextArea
                            v-model="faq.answer"
                            label="Answer *"
                            :required="true"
                          />
                        </div>
                        <div>
                          <p class="block mb-2 text-sm font-medium text-blueGray-700">Tags *</p>
                          <vue-tags-input
                            v-model="tag[index]"
                            @input="setFilteredEditItems(tag[index])"
                            :tags="faq.tags"
                            :autocomplete-items="filteredItemsEdit"
                            :add-only-from-autocomplete="true"
                            @tags-changed="newTags => (faq.tags = newTags)"
                          />
                        </div>
                        <div>
                          <UiAppButton
                          className="warning"
                          label="Delete"
                          type="button"
                          @click="openDeleteModal(faq)"
                          />
                        </div>
                        <div>
                          <UiAppButton
                            className="primary"
                            label="Save"
                            type="button"
                            @click="updateOneFaq(faq)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </form>
          </div>
        </div>
      </section>
     </div>
  </div>
</template>
<script>
import algoliasearch from "algoliasearch";
import {
  FETCH_FAQS,
  UPDATE_ONE_FAQ,
  INSERT_ONE_FAQ,
  DELETE_ONE_FAQ
} from "../../../../graphql/dashboard/admin/faqs/index";
import {FETCH_ALL_TAGS} from "~/graphql/dashboard/admin/cms/tags";
import notificationMixin from "~/mixins/notification";
export default {
  mixins: [notificationMixin],
  async fetch() {
    const tags = await this.$apollo.query({ query: FETCH_ALL_TAGS });
    this.tags.all = tags.data.tags
    this.autocompleteItems = tags.data.tags.map(x => {return {text: x.title}});
    this.filteredItemsEdit = this.autocompleteItems
  },
  async mounted(){
    this.algolia.client = await algoliasearch(
          process.env.ALGOLIA_APP_ID,
          process.env.ALGOLIA_API_KEY
        )
  },
  data() {
    return {
    filteredItemsEdit: [],
    algolia: {
        client: algoliasearch(
          process.env.ALGOLIA_APP_ID,
          process.env.ALGOLIA_API_KEY
        )
      },
      faqToBeDeleted: null,
      resetTags: 1,
      modal: false,
      form: {
        question: "",
        answer: "",
        tags: [],
        tag: ""
      },
      faqs: [],
      tag: [],
      tags: {
        tags: [],
        tag: "",
        all: [],
        ids: {
          link: [],
        },
      },
      autocompleteItems: [],
    };
  },
  created() {
    /* CD (EV on 20210508): Declare query variable*/
    const query = FETCH_FAQS;
    /* CD (EV on 20210508): Fetch faqs*/
    this.$apollo.query({ query }).then(({ data }) => {
      /* CD (EV on 20210329): Update faqs []*/
      this.faqs = data.faqs;
      if(this.faqs.some(faq => faq.tags.some(tag => tag.slug ))){
        data.faqs.forEach((faq, index) => {
          this.faqs[index].tags = faq.tags.map(tag => {return {text: tag.title}})
        })
      }
    });
  },
  methods: {
    closeModal() {
      this.modal = false;
      this.faqToBeDeleted = null;
    },
    openDeleteModal(faq) {
      this.faqToBeDeleted = faq;
      this.modal = true;
    },
    async deleteFaq() {
      await this.$apollo.mutate({
        mutation: DELETE_ONE_FAQ,
        variables: {
          query: { _id: this.faqToBeDeleted._id }
        }
      });
      await this.algolia.client
      .initIndex("faq-mongodb")
      .deleteObjects([this.faqToBeDeleted._id])
      const index = this.faqs.findIndex($faq => $faq._id === this.faqToBeDeleted._id );
      this.$delete(this.faqs, index, 1);
      this.setNotification({
        show: true,
        title: "Success",
        content: "Deleted"
      });
      this.closeModal()
    },

    async updateOneFaq(faq){
      if(!faq.tags.length) {
        this.setNotification({
          show: true,
          title: "Error",
          content: "Add at least one tag"
        });
        return
      }
      /* CD (AN on 20210715): Map tags from vue input tags to the correct format*/
      faq.tags.forEach(tag => {
        let actual_tag = this.tags.all.find(element => element.title == tag.text)
        this.tags.ids.link.unshift(actual_tag._id)
      })
      faq.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name,
      await this.$apollo.mutate({
      mutation: UPDATE_ONE_FAQ,
      variables: { query: { _id: faq._id }, set: {...faq, tags: this.tags.ids}}
      });

      await this.algolia.client
      .initIndex("faq-mongodb")
      .saveObject(
        { ...faq, _id: {$oid: faq._id},tags: this.tags.ids, objectID: faq._id },
        { autoGenerateObjectIDIfNotExist: true }
      );
      this.setNotification({
        show: true,
        title: "Update Successful",
        content: ""
      });
      this.tags.ids = {
        link: []
      }
    },
    async formSubmitAdd() {
      if(!this.tags.tags.length) {
        this.setNotification({
          show: true,
          title: "Error",
          content: "Add at least one tag"
        });
        return
      }
      this.tags.tags.forEach(tag => {
        let actual_tag = this.tags.all.find(element => element.title == tag.text)
        console.log("actual tag", actual_tag)
        this.tags.ids.link.unshift(actual_tag._id)
      })
      const mutation = INSERT_ONE_FAQ;
      var variables = {
        data: {
          question: this.form.question,
          answer: this.form.answer,
          createdBy: this.$auth.user.given_name + ' ' + this.$auth.user.family_name,
          updatedBy: this.$auth.user.given_name + ' ' + this.$auth.user.family_name,
          tags: this.tags.ids
        }
      };

      const mutatate = await this.$apollo.mutate({ mutation, variables });

      if (mutatate.data.insertOneFaq) {
        this.faqs.push({
          _id: mutatate.data.insertOneFaq._id,
          question: this.form.question,
          answer: this.form.answer,
          tags: this.tags.tags
        });
        await this.algolia.client
        .initIndex("faq-mongodb")
        .saveObject(
          { ...this.form,  _id: {$oid: mutatate.data.insertOneFaq._id}, objectID: mutatate.data.insertOneFaq._id },
          { autoGenerateObjectIDIfNotExist: true }
        );
        this.form = {
          question: "",
          answer: "",
          tags: [],
          tag: ""
        };
        this.tags.ids = {
          link: []
        }
        this.tags.tags = []
        this.tags.tag = ""

        this.setNotification({
          show: true,
          title: "Success",
          content: "Saved"
        });
      }
    },
    setFilteredEditItems(tag){
      console.log("computing")
      this.filteredItemsEdit = this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(tag.toLowerCase()) !== -1;
      });
    }
  },
  computed: {
    filteredItems() {
      return this.autocompleteItems.filter(i => {
        return i.text.toLowerCase().indexOf(this.tags.tag.toLowerCase()) !== -1;
      });
    },
  },
};
</script>
