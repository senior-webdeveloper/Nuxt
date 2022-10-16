<template>
  <div>
    <div class="max-w-3xl py-10 mx-auto sm:px-6 lg:px-0 lg:col-span-9">
      <!--<div>
        <h1>Add new resource</h1>
      </div>-->
      <form>
        <div class="space-y-6">
        <div>
          <UiAppFormField
            v-model="form.title"
            type="text"
            required
            label="Title"
          />
          <p v-if="title_taken" class="text-xs text-red-500">
            Duplicate Error: There's another entry with the same title, please
            choose a different title then save your entry.
          </p>
        </div>
        <div>
          <UiAppFormSelect
            v-model="form.category"
            label="Category"
            :options="categories"
            class="mt-5"
          />
        </div>
        <div>
          <UiAppUpload v-model="form.fileUpload" required label="Upload" />
        </div>
        <div>
          <UiAppFormTextArea
            v-model="form.description"
            required
            label="Description"
          />
        </div>
        <div>
          <UiAppFormSelect
            v-model="form.status"
            label="Status"
            :options="status"
          />
        </div>
        <div class="px-4 py-3 mt-10 text-right bg-gray-50 sm:px-6">
          <UiAppFormSubmit className="primary" label="Save" @click.prevent="formSubmit"/>
        </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ['resource', 'titles', 'isEdit'],
  data() {
    return {
      form: {
        title: "",
        category: "",
        fileUpload: "",
        description: "",
        fileURL: "",
        status: "Active",
        createdAt: this.resource ? this.resource.createdAt : new Date(),
        updatedAt: new Date()
      },
      title_taken: false,
      categories: [{value: '2-D CAD Files', label: '2-D CAD Files'}, {value: '3-D CAD Files', label: '3-D CAD Files'}, {value: 'Example Applications', label: 'Example Applications'}, {value: 'Manuals', label: 'Manuals'}, {value: 'Marketing', label: 'Marketing'}, {value: 'Presentations', label: 'Presentations'}, {value: 'Reports', label: 'Reports'}, {value: 'Tools', label: 'Tools'}],
      status: [{label: 'Active', value: 'Active'}, { label: 'Inactive', value: 'Inactive' }]
    };
  },
  methods: {
    formSubmit() {
      if(!this.title_taken){
        if(this.resource) {
          delete this.form._id
          this.form.updatedAt = new Date()
          this.$emit('submit:update', this.form)
        } else {
          this.$emit('submit:create', this.form)
        }
      }
    }
  },
  mounted() {
    this.form = this.resource ? {...this.resource} : this.form
    this.form.createdBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
    this.form.updatedBy = this.$auth.user.given_name + ' ' + this.$auth.user.family_name
  },
  watch: {
    "form.title": function (val) {
      if(this.isEdit){
        if (this.titles.filter(title => title === val.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')).length && val !== this.resource.title){
          this.title_taken = true
        } else {
          this.title_taken = false
        }
      } else {
        if (this.titles.filter((title) => title === val.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')).length) {
          this.title_taken = true;
        } else {
          this.title_taken = false;
        }
      }
    },
  },
};
</script>
