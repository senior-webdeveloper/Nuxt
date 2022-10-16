<template>
  <div>
    <!-- Add appnotification after saving edits -->
    <!-- NOtes for each field:
      From > an nsk email ad
      To - User > customer's email ad but this is not in this form. You can find the value of this in the forms. Let me know if there is a form that has no email address field.
      To - NSK > an nsk email ad(s)
      CC > optional email ad(s)
      BCC > optional email ad(s)
      Email for User
        Subject, Body > email template that is sent to the user
      Email for NSK
        Subject, Body > email template that is sent to NSK
      -->

    <div>
      <!-- CD (JE on 20210511): Use AppNotification -->
      <UiAppNotification
        :show="notification.show"
        :title="notification.title"
        :content="notification.content"
        @close="hideNotification"
      />
      <form @submit.prevent="formSubmit">
        <div v-if="form_notifications.length > 0">
          <section
            aria-labelledby="mt-10 technical-questions-form-email-notifications"
            v-for="(form_notification, index) in form_notifications"
            :key="index"
          >
            <div class="shadow sm:rounded-md sm:overflow-hidden">
              <div class="px-4 py-6 bg-white sm:p-6">
                <div>
                  <h2 id="payment_details_heading">
                    {{ form_notification.name }}
                  </h2>
                  <!--<p class="mt-1 text-sm text-gray-500">Lorem Ipsum dolor</p>-->
                </div>

                <div class="grid grid-cols-4 gap-6 mt-6">
                  <template v-if="form_notification.toNsk">
                    <div class="col-span-4 mt-5">
                      <h3>Email to NSK</h3>
                    </div>
                    <div class="col-span-4 sm:col-span-2">
                      <UiAppFormField
                        type="text"
                        label="From *"
                        :required="true"
                        v-model="form_notification.toNsk.from"
                      />
                    </div>
                    <div class="col-span-4 sm:col-span-2">
                      <UiAppFormField
                        v-model="form_notification.toNsk.to"
                        type="text"
                        label="To"
                        :required="true"
                      />
                    </div>
                    <div class="col-span-4 sm:col-span-2">
                      cc
                      <vue-tags-input
                        v-model="tag.toNsk.cc"
                        :tags="form_notification.toNsk.cc"
                        @tags-changed="
                          newTags => (form_notification.toNsk.cc = newTags)
                        "
                        placeholder="Add Email Address"
                      />
                    </div>
                    <div class="col-span-4 sm:col-span-2">
                      bcc
                      <vue-tags-input
                        v-model="tag.toNsk.bcc"
                        :tags="form_notification.toNsk.bcc"
                        @tags-changed="
                          newTags => (form_notification.toNsk.bcc = newTags)
                        "
                        placeholder="Add Email Address"
                      />
                    </div>
                    <div class="col-span-4 sm:col-span-3">
                      <UiAppFormField
                        v-model="form_notification.toNsk.emailContent.subject"
                        type="text"
                        label="Subject *"
                        :required="true"
                      />
                    </div>
                    <div class="col-span-4">
                      <UiAppFormTextArea
                        v-model="form_notification.toNsk.emailContent.body"
                        label="Body *"
                        :required="true"
                      />
                    </div>
                  </template>
                  <template v-if="form_notification.toUser">
                    <div class="col-span-4 mt-5">
                      <h3>Email content to User</h3>
                    </div>
                    <div class="col-span-4 sm:col-span-2">
                      <UiAppFormField
                        type="text"
                        label="From *"
                        :required="true"
                        v-model="form_notification.toUser.from"
                      />
                    </div>
                    <div class="col-span-4 sm:col-span-2">
                      <UiAppFormField
                        type="text"
                        label="To"
                        :disabled="true"
                        placeholder="Sent to user who submitted form"
                      />
                    </div>
                    <div class="col-span-4 sm:col-span-2">
                      cc
                      <vue-tags-input
                        v-model="tag.toUser.cc"
                        :tags="form_notification.toUser.cc"
                        @tags-changed="
                          newTags => (form_notification.toUser.cc = newTags)
                        "
                        placeholder="Add Email Address"
                      />
                    </div>
                    <div class="col-span-4 sm:col-span-2">
                      bcc
                      <vue-tags-input
                        v-model="tag.toUser.bcc"
                        :tags="form_notification.toUser.bcc"
                        @tags-changed="
                          newTags => (form_notification.toUser.bcc = newTags)
                        "
                        placeholder="Add Email Address"
                      />
                    </div>
                    <div class="col-span-4 sm:col-span-3">
                      <UiAppFormField
                        v-model="form_notification.toUser.emailContent.subject"
                        type="text"
                        label="Subject *"
                        :required="true"
                      />
                    </div>
                    <div class="col-span-4">
                      <UiAppFormTextArea
                        v-model="form_notification.toUser.emailContent.body"
                        label="Body *"
                        :required="true"
                      />
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <br />
          </section>
        </div>

        <div class="px-4 py-3 text-right sm:px-6">
          <UiAppFormSubmit className="primary" label="Save" />
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import {
  FETCH_FORM_NOTIFICATIONS,
  UPDATE_ONE_FORM_NOTIFICATION
} from "./../../../../graphql/dashboard/admin/cms/form_notifications";
export default {
  data() {
    return {
      notification: {
        show: false,
        title: "",
        content: ""
      },
      loading: false,
      form_notifications: [],
      tag: {
        toNsk: {
          cc: "",
          bcc: ""
        },
        toUser: {
          cc: "",
          bcc: ""
        }
      }
    };
  },
  created() {
    /* CD (EV on 20210329): Declare query variable*/
    const query = FETCH_FORM_NOTIFICATIONS;
    /* CD (EV on 20210329): Fetch demonstration-requests*/
    this.$apollo.query({ query }).then(({ data }) => {
      /* CD (EV on 20210329): Update demonstration-requests []*/
      this.form_notifications = data.form_notifications;
    });
  },
  watch: {
    '$route' (val){
      console.log("route", val)
      /* CD (EV on 20210329): Declare query variable*/
      const query = FETCH_FORM_NOTIFICATIONS;
      /* CD (EV on 20210329): Fetch demonstration-requests*/
      this.$apollo.query({ query }).then(({ data }) => {
        /* CD (EV on 20210329): Update demonstration-requests []*/
        this.form_notifications = data.form_notifications;
      });
    }
  },
  methods: {
    hideNotification() {
      this.notification.show = false;
    },
    async formSubmit() {
      try {
        this.loading = true;
        Promise.all(
          this.form_notifications.map(async form_notification => {
            var query = {
              _id: form_notification._id
            };
            var set = {
              name: form_notification.name,
              toUser: form_notification.toUser,
              toNsk: form_notification.toNsk,
              updatedBy: this.$auth.user.given_name + ' ' + this.$auth.user.family_name
            };
            var variables = {
              query: query,
              set: set
            };
            const mutation = UPDATE_ONE_FORM_NOTIFICATION;
            await this.$apollo.mutate({ mutation, variables });
          })
        ).then(() => {
          this.notification = {
            show: true,
            title: "Update Successful",
            content: ""
          };
        });
      } catch (err) {
        this.notification = {
          show: true,
          title: "Error",
          content: "Update failure"
        };
      }
      this.loading = false;
    }
  }
};
</script>
