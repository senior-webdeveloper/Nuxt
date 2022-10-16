<template>
  <div>
    <UiAppModal
      :show="modal"
      @close="modal = false"
      @confirm="deleteTechnicalQuestion"
      title="Are you sure you want to delete this item?"
      content="Items deleted cannot be recovered."
    />

    <main class="relative flex-1 overflow-y-auto focus:outline-none" tabindex="-1">
      <div class="py-4">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
          <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
            <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
              <div>
                <h1>Technical Support Questions</h1>
                <p>#{{technical_question.formId}}</p>
              </div>
              <div class="flex mt-4 space-x-3 md:mt-0">
                <UiAppBadge
                  :className="statusColor(technical_question.status)"
                  :label="technical_question.status"
                />
              </div>
            </div>

            <div>
              <!-- Main Details-->
              <div class="divide-y divide-gray-200">
                <div class="py-5">
                  <dl class="space-y-8 sm:space-y-0">
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Name
                      </dt>
                      <dd class="details-dd">
                        {{ technical_question.name }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Title
                      </dt>
                      <dd class="details-dd">
                        {{ technical_question.title }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Company
                      </dt>
                      <dd class="details-dd">
                        {{ technical_question.company }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Email
                      </dt>
                      <dd class="details-dd">
                        {{ technical_question.email }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Phone
                      </dt>
                      <dd class="details-dd">
                        {{ technical_question.phone }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Product
                      </dt>
                      <dd class="details-dd">
                        {{ technical_question.product }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Machine Type
                      </dt>
                      <dd class="details-dd">
                        {{ technical_question.machineType }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Application
                      </dt>
                      <dd class="details-dd">
                        {{ technical_question.application }}
                      </dd>
                    </div>
                    <div class="sm:flex sm:py-1">
                      <dt class="details-dt">
                        Question
                      </dt>
                      <dd class="details-dd">
                        {{ technical_question.question }}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <aside class="xl:block xl:pl-8">
            <h2 class="sr-only">Status and Submission Details</h2>
            <div>
              <div class="py-6 mt-6 space-y-5 border-t border-gray-200 lg:mt-0 lg:border-none">
                <div class="space-y-6">
                  <h2>Status</h2>
                  <!-- CD (EV on 20210329): form for status dropdown and submit button using AppForm-->
                  <!-- <UiAppForm :formInput="formInput" :onSubmit="onSubmit" /> -->
                  <form @submit.prevent="formSubmit">
                    <div>
                      <UiAppFormSelect
                        :options="options"
                        v-model="form.status"
                        label="Status"
                        :required="true"
                      />
                    </div>
                    <div class="mt-3">
                      <UiAppFormSubmit className="primary-full" label="Save" />
                    </div>
                  </form>
                </div>
              </div>
              <div class="py-6 mt-6 space-y-5 border-t border-gray-200">
                <!--<div class="flex items-center space-x-2">
                  <UiIconUser2 class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated by {{technical_question.updatedBy}}</span>
                </div>-->
                <div class="flex items-center space-x-2">
                  <UiIconCalendar class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Created on <time datetime="2020-12-02">{{technical_question.createdAt|formatDate}}</time></span>
                </div>
                <div class="flex items-center space-x-2">
                  <UiIconRefresh class="flex-shrink-0 w-6 h-6 text-gray-400" />
                  <span class="text-sm font-medium text-gray-900">Updated on <time datetime="2020-12-02">{{technical_question.updatedAt|formatDate}}</time></span>
                </div>
              </div>
            </div>
            <div class="mt-6">
              <!-- CD (CT on 20210412): Delete button-->
              <UiAppButton
                className="secondary-full"
                @click="modal = true"
                label="DELETE"
              />
            </div>
            <!--<div class="mt-6">-->
            <!-- CD (CT on 20210413): Cancel button-->
            <!--<UiAppButton className="tertiary" @click="$store.dispatch('dashboard/technical-questions/hideSlider')" label="Cancel" />
            </div>-->
          </aside>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
/* CD (EV on 20210329): Import query for delete and update technical question*/
import {
  UPDATE_ONE_TECHNICAL_QUESTION,
  DELETE_ONE_TECHNICAL_QUESTION,
  FETCH_FORM_NOTIFICATION
} from "./../../../graphql/dashboard/technical-questions/technical_questions";
export default {
  computed: mapGetters({
    /* CD (EV on 20210329): get the selected technical question (to be updated or deleted)*/
    technical_question: "dashboard/technical-questions/technicalQuestion"
  }),
  data() {
    return {
      modal: false,
      form: {
        status: ""
      },
      options: [
        { label: "Pending Response", value: "Pending Response" },
        { label: "Missing Info", value: "Missing Info" },
        { label: "Done", value: "Done" }
      ],
      // CD (EV on 20210427): email sending state
      email: {
        submitting: false,
        isSubmitted: false,
        error: false
      }
    };
  },
  created() {
    this.form.status = this.technical_question.status;
  },

  methods: {
    async formSubmit() {
      this.form.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
      /* CD (EV on 20210429): Get the updated status*/
      // const status = this.selectedStatus;
      /* CD (EV on 20210429): Get _id of the technical question*/
      const _id = this.technical_question._id;
      /* CD (EV on 20210429): Declare variable for query and set (query what data to update [_id] ) (set what field to update [status])*/
      const variables = {
        /* CD (EV on 20210429): _id of technical question to be updated*/
        query: {
          _id: _id
        },
        /* CD (EV on 20210429): field of technical question want to update*/
        set: this.form
      };

      /* CD (EV on 20210429): Declare mutation*/
      const mutation = UPDATE_ONE_TECHNICAL_QUESTION;
      /* CD (EV on 20210429): Update the technical question*/
      const mutatate = await this.$apollo.mutate({ mutation, variables });
      /* CD (EV on 20210429): If update is success*/
      if (mutatate.data.updateOneTechnical_question) {
        const updated_status = this.form.status;
        const initial_status = this.technical_question.status;
        /* CD (EV on 20210429): update the selected technical question*/
        this.$store.dispatch(
          "dashboard/technical-questions/updateTechnicalQuestion",
          mutatate.data.updateOneTechnical_question
        );
        /* CD (EV on 20210429): close the slider*/
        this.$store.dispatch("dashboard/technical-questions/hideSlider");
        /* CD (EV on 20210429): Show notification of success update*/
        this.$store.dispatch(
          "dashboard/technical-questions/showNotificationUpdate",
          {
            type: "success",
            title: "Update Successful",
            content: "",
            show: true
          }
        );

        if (initial_status !== updated_status) {
          /* CD (EV on 20210429): Declare query variable*/
          const query = FETCH_FORM_NOTIFICATION;
          /* CD (EV on 20210429): Declare variable for query where form name is Technical Questions*/
          const variables = {
            /* CD (EV on 20210429): name of technical question to be fetch*/
            query: {
              name: "Technical Support Questions"
            }
          };

          /* CD (EV on 20210429): Fetch form notification*/
          const form_notification = await this.$apollo.query({
            query,
            variables
          });
          /* CD (EV on 20210429): if fetching of form notification is done, send email*/
          if (form_notification.data.form_notification) {
            try {
              // CD (EV on 20210427): update email sending state
              this.email.submitting = true;
              this.email.error = false;
              // CD (EV on 20210427): send email
              await this.$axios.$post(
                "/api/v1/dashboard/send-email/technical-questions",
                {
                  initial_status: initial_status,
                  updated_status: updated_status,
                  technical_question: this.technical_question,
                  form_notification: form_notification.data.form_notification,
                  email: this.technical_question.email,
                }
              );
              // CD (EV on 20210427): if success sending email update email state
              this.email.submitting = false;
              this.email.isSubmitted = true;

              await new Promise(resolve => setTimeout(resolve, 2500));
            } catch (e) {
              // CD (EV on 20210427): if error sending email update email state
              this.email.submitting = false;
              this.email.error = true;

              console.error(e);
            }
          }
        }
      }
    },
    async deleteTechnicalQuestion() {
      /* CD (EV on 20210429): Get _id of the technical question*/
      const _id = this.technical_question._id;
      const variables = {
        /* CD (EV on 20210429): _id of technical question to be deleted*/
        query: {
          _id: _id
        }
      };
      /* CD (EV on 20210429): Declare mutation*/
      const mutation = DELETE_ONE_TECHNICAL_QUESTION;
      /* CD (EV on 20210429): Delete the technical question*/
      const mutatate = await this.$apollo.mutate({ mutation, variables });
      /* CD (EV on 20210429): If delete is success*/
      if (mutatate.data.deleteOneTechnical_question) {
        /* CD (EV on 20210429): Remove the selected technical question from technical questions (will also reflect on table)*/
        this.$store.dispatch(
          "dashboard/technical-questions/deleteTechnicalQuestion"
        );
        /* CD (EV on 20210429): Hide slider*/
        this.$store.dispatch("dashboard/technical-questions/hideSlider");
        /* CD (EV on 20210429): Show notification of success delete*/
        this.$store.dispatch(
          "dashboard/technical-questions/showNotificationUpdate",
          {
            title: "Success",
            type: "success",
            content: "Deleted",
            show: true
          }
        );
        this.modal = false;
      }
    },
    statusColor(status) {
      /* CD (EV on 20210429): Update color of status column (Using AppBadge)*/
      if (status == "Done") return "green";
      else if (status == "Pending Response") return "red";
      else if (status == "Missing Info") return "yellow";
    }
  },
  filters: {
    formatDate(date) {
      return new Date(date).toLocaleString()
    }
  }
};
</script>
