<template>
  <div>

  <div>
      <div class="relative text-center md:w-3/4 md:mx-auto">
        <h1>Contact Us</h1>
      </div>
      <div class="relative py-4 mt-4 bg-blueGray-100 lg:w-3/4 md:mx-auto sm:p-6">
        <div class="container mx-auto sm:px-4">
          <!-- <UiAppForm :formInput="formInput"  /> -->

          
          <div>
            <form @submit.prevent="formSubmit" class="mt-10">

                <div class="md:grid md:grid-cols-3 md:gap-6">
                  <div class="md:col-span-1">
                    <div class="px-4 sm:px-0">
                      <h3>Contact Us</h3>
                    </div>
                  </div>
                  <div class="mt-5 md:mt-0 md:col-span-2">
                    <div class="overflow-hidden shadow">
                      <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                          <div class="col-span-6">
                            <UiAppFormField
                              v-model="form.firstName"
                              type="text"
                              label="First Name *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormField
                              v-model="form.lastName"
                              type="text"
                              label="Last Name"
                              :required="false"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormField
                              v-model="form.email"
                              type="email"
                              label="Email *"
                              :required="true"
                            />
                          </div>
                          <div class="col-span-6 sm:col-span-4">
                            <UiAppFormField
                              v-model="form.phone"
                              type="text"
                              label="Phone"
                              :required="false"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormField
                              v-model="form.company"
                              type="text"
                              label="Company"
                              :required="false"
                            />
                          </div>
                          <div class="col-span-6">
                            <UiAppFormTextArea
                              v-model="form.message"
                              label="Message *"
                              :required="true"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="px-4 py-3 text-right bg-gray-50 sm:px-6">
                        <UiAppFormSubmit className="primary" label="Submit" />
                      </div>
                    </div>
                  </div>
                </div>
        
            </form>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>


<script>
import { INSERT_ONE_CONTACT } from '~/graphql/contact-us'
import notificationMixin from "~/mixins/notification";
import axios from "axios"
import { FETCH_FORM_NOTIFICATIONS } from "~/graphql/dashboard/admin/cms/form_notifications";

export default {
  data(){
    return {
      form: {
        firstName: null,
        lastName: null,
        email: null,
        company: null,
        phone: null,
        message: null,
        status: 'Pending',
        createdAt: new Date(),
        updatedAt: new Date(),
        updatedBy: null,
      },
      form_notifications: null,
    }
  },
  mixins: [notificationMixin],
  mounted(){
    const query = FETCH_FORM_NOTIFICATIONS;
    this.$apollo.query({ query }).then(({ data }) => {
    this.form_notifications = data.form_notifications;
    });
  },
  methods: {
    async formSubmit() {
      try {
        const data = await this.$apollo.mutate({
          mutation: INSERT_ONE_CONTACT,
          variables: { data: this.form }
        })
        await axios.post('/api/v1/contact-us/send-email', {content: this.form, details: this.form_notifications})
        this.setNotification({
          show: true,
          title: "Sent!",
          content: "Your form has been submitted and you should receive an email confirmation shortly"
        });
        this.form = {
          firstName: null,
          lastName: null,
          email: null,
          company: null,
          phone: null,
          message: null,
          status: 'Pending',
          createdAt: new Date(),
          updatedAt: new Date(),
          updatedBy: null,
        }
      } catch (error) {
        console.log("Error ", error)
        this.setNotification({
          show: true,
          title: "Error",
          content: "An error has ocurred"
        });
      }

    },
  }
}
</script>