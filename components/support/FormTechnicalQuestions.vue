<template>
  <div>
    <UiAppNotification
      :show="notification.show"
      :title="notification.title"
      :content="notification.content"
      @close="notification.show = false"
    />

    <div>
      <div class="relative text-center md:w-3/4 md:mx-auto">
        <h1>Technical Support Questions Form</h1>
        <p>If you have a technical question, please submit the form and and an NSK Representative will get back to you.</p>
      </div>
      <div class="relative py-4 mt-4 bg-blueGray-100 lg:w-3/4 md:mx-auto sm:p-6">
        <div class="container mx-auto sm:px-4">
          <!-- <UiAppForm :formInput="formInput"  /> -->

          
          <div>
            <UiAppPanel v-model="wizard.step" :steps="wizard.steps" />
            <form @submit.prevent="formSubmit" class="mt-10">
              <template v-if="wizard.step === 1">
                <div class="md:grid md:grid-cols-3 md:gap-6">
                  <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                      <h3>Technical Support Questions</h3>
                      <!-- <p>
                        If you have a technical question, please submit the form and
                        and an NSK Representative will get back to you.
                      </p> -->
                    </div>
                  </div>
                  <div class="mt-5 md:mt-0 md:col-span-2">
                    <div class="overflow-hidden shadow">
                      <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6">
                            <UiAppFormField
                              v-model="form.name"
                              type="text"
                              label="Name *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <UiAppFormField
                              v-model="form.title"
                              type="text"
                              label="Title *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormField
                              v-model="form.company"
                              type="text"
                              label="Company *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6 lg:col-span-4">
                            <UiAppFormField
                              v-model="form.email"
                              type="email"
                              label="Email *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormField
                              v-model="form.phone"
                              type="text"
                              label="Phone *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormField
                              v-model="form.product"
                              type="text"
                              label="Product of Interest"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormField
                              v-model="form.machineType"
                              type="text"
                              label="Machine Type"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormField
                              v-model="form.application"
                              type="text"
                              label="Application"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormTextArea
                              v-model="form.question"
                              label="Question *"
                              :required="true"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                        <UiAppFormSubmit
                          className="tertiary"
                          label="Next"
                          @click="toggle"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </template>
              <template v-if="wizard.step === 2">
                <div class="overflow-hidden shadow">
                  <div class="px-4 py-5 bg-white sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <dl class="space-y-8 sm:space-y-0">
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Name
                          </dt>
                          <dd class="details-dd">
                            {{ form.name }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Title
                          </dt>
                          <dd class="details-dd">
                            {{ form.title }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Company
                          </dt>
                          <dd class="details-dd">
                            {{ form.company }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Email
                          </dt>
                          <dd class="details-dd">
                            {{ form.email }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Phone
                          </dt>
                          <dd class="details-dd">
                            {{ form.phone }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Product
                          </dt>
                          <dd class="details-dd">
                            {{ form.product }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Machine Type
                          </dt>
                          <dd class="details-dd">
                            {{ form.machineType }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Application
                          </dt>
                          <dd class="details-dd">
                            {{ form.application }}
                          </dd>
                        </div>
                        <div class="sm:flex sm:py-5">
                          <dt class="details-dt">
                            Question
                          </dt>
                          <dd class="details-dd">
                            {{ form.question }}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                    <UiAppFormSubmit
                      className="tertiary"
                      label="Back"
                      @click="toggle"
                    />
                    <UiAppFormSubmit className="primary" label="Submit" />
                  </div>
                </div>
              </template>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  INSERT_ONE_TECHNICAL_QUESTION,
  FETCH_FORM_NOTIFICATION,
} from "~/graphql/support/technical-questions";
import { FETCH_ONE_COUNTER, UPDATE_ONE_COUNTER } from "~/graphql/counter";
import { UPDATE_ONE_TECHNICAL_QUESTION } from "~/graphql/dashboard/technical-questions/technical_questions";
// import notificationMixin from "~/mixins/notification";
export default {
  // mixins: [notificationMixin],
  data() {
    return {
      // CD (EV on 20210513): wizard form state
      wizard: {
        step: 1,
        steps: [
          {
            step: 1,
            title: "Technical Question"
          },
          {
            step: 2,
            title: "Preview"
          }
        ],
        toggle: false
      },
      // CD (EV on 20210427): email sending state
      email: {
        submitting: false,
        isSubmitted: false,
        error: false
      },
      // CD (EV on 20210427): notification state
      notification: {
        show: false,
        title: "Sent!",
        content: "Your form has been submitted and you should receive an email confirmation shortly",
        type: ""
      },
      // CD (EV on 20210427): form
      form: {
        name: "",
        title: "",
        company: "",
        email: "",
        phone: "",
        product: "",
        application: "",
        machineType: "",
        question: ""
      }
    };
  },
  methods: {
    // CD (EV on 20210302): onClick function for UiAppButton
    async formSubmit() {
      if (this.wizard.toggle) {
        this.wizard.step = this.wizard.step === 1 ? 2 : 1;
        this.wizard.toggle = false;
        return;
      }

      // CD (JE on 20210621): get the latest technical question formId
      // TECHNICAL_QUESTIONS_ID_PREFIX
      console.log("submitting")
      const {
        data: { counter }
      } = await this.$apollo.query({
        query: FETCH_ONE_COUNTER,
        variables: { query: { field: "Technical Question" } },
        fetchPolicy: 'no-cache',
        nextFetchPolicy: 'no-cache'
      });

      this.form.formId = `${
        process.env.TECHNICAL_QUESTIONS_ID_PREFIX
      }-0000${counter.count + 1}`;

      const mutation = INSERT_ONE_TECHNICAL_QUESTION;
      // CD (EV on 20210427): always make sure that the status is "Pending Response"
      this.form.status = "Pending Response";
      this.form.createdAt = this.form.updatedAt = new Date();
      // CD (EV on 20210427): form variables
      var variables = {
        data: this.form
      };

      // CD (EV on 20210427): insert technical question to database
      const mutatate = await this.$apollo.mutate({ mutation, variables });
      // CD (JE on 20210622): update counter
      await this.$apollo.mutate({
        mutation: UPDATE_ONE_COUNTER,
        variables: {
          query: {
            field: "Technical Question"
          },
          set: { count_inc: 1 }
        }
      });
      // CD (EV on 20210427): if insert to collection success
      // if (mutatate.data.insertOneTechnical_question.application) {
        /* CD (EV on 20210429): Declare query variable*/
        const query = FETCH_FORM_NOTIFICATION;
        /* CD (EV on 20210429): Declare variable for query where form name is Technical Questions*/
        const variables2 = {
          /* CD (EV on 20210429): name of technical question to be fetch*/
          query: {
            name: "Technical Support Questions"
          }
        };

        /* CD (EV on 20210429): Fetch form notification*/
        const form_notification = await this.$apollo.query({
          query,
          variables: variables2
        });

        /* CD (EV on 20210429): if fetching of form notification is done, send email*/
        if (form_notification.data.form_notification) {
          const technical_questions_id =
            mutatate.data.insertOneTechnical_question._id;
          try {
            // CD (EV on 20210427): update email sending state
            this.email.submitting = true;
            this.email.error = false;
            // CD (EV on 20210427): send email
            const uploaded = await this.$axios.$post(
              "/api/v1/support/send-email/technical-questions",
              {
                form_notification: form_notification.data.form_notification,
                technical_questions: this.form,
                filename: `technical-questions-${
                  this.form.name
                }-${Date.now()}.pdf`
              }
            );
            await this.$apollo.mutate({
              mutation: UPDATE_ONE_TECHNICAL_QUESTION,
              variables: {
                query: { _id: technical_questions_id },
                set: {
                  pdf: { location: uploaded.Location, filename: uploaded.Key }
                }
              }
            });
            // CD (EV on 20210427): if success sending email update email state
            this.email.submitting = false;
            this.email.isSubmitted = true;

            // CD (EV on 20210427): show notification
            this.notification.show = true;
            // CD (EV on 20210514): back to initial step
            this.wizard.step = 1;
            // CD (EV on 20210427): clear the form
            this.form = {
              name: "",
              title: "",
              company: "",
              email: "",
              phone: "",
              product: "",
              application: "",
              machineType: "",
              question: ""
            };
            console.log("success")
            // this.setNotification({
            //   show: true,
            //   title: "Success",
            //   content: "Success"
            // });
          } catch (e) {
            // CD (EV on 20210427): if error sending email update email state
            this.email.submitting = false;
            this.email.error = true;
            console.log("error")
            console.error(e);
            // this.setNotification({
            //   show: true,
            //   title: "Error",
            //   content: "Check console for more information."
            // });
          }
        }
      // }
    },
    // CD (JE on 20210513): onClick function for next/back button
    toggle() {
      this.wizard.toggle = true;
    }
  }
};
</script>
