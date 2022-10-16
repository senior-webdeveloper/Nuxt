// CD (KO on 20210228): UI Kit for dev reference

<template>
  <div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <h1>UiAppTabs</h1>
    <UiAppTabs
      v-model="selected"
      :tabs="['My Account', 'Company']"
      :withViewOption="true"
      @changeViewOption="changeViewOption"
    >
      {{ viewOption }}
      <h1>{{ selected }}</h1>
      <div v-if="selected == 0">
        <div v-if="viewOption == 'grid'">
          if first tab is selected grid
        </div>
        <div v-if="viewOption == 'list'">
          if first tab is selected list
        </div>
      </div>
      <div v-if="selected == 1">
        <div v-if="viewOption == 'grid'">
          if second tab is selected grid
        </div>
        <div v-if="viewOption == 'list'">
          if second tab is selected list
        </div>
      </div>
    </UiAppTabs>

    <br />
    <br />
    <UiAppPanel v-model="e1" :steps="steps"> </UiAppPanel>
    <UiAppNotification
      :show="notification.show"
      @close="notification.show = false"
      :title="notification.title"
      :content="notification.content"
    />
    <h1>APP BUTTONS</h1>
    <UiAppButton @click="consoleClick" className="primary" label="primary" />
    <UiAppButton
      @click="consoleClick"
      className="secondary"
      label="secondary"
    />
    <UiAppButton @click="consoleClick" className="tertiary" label="tertiary" />
    <!-- For the icon, pls use the icon "IconAdd" in the /components/ui folder as an example. No text, just the icon should act as a button -->
    <UiAppButton @click="consoleClick" className="icon" label="icon" />
    <UiAppButton
      @click="consoleClick"
      className="text-only"
      label="text only"
    />

    <div class="m-8">
      <UiAppTable :headers="headings" title="Sample App Table">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>
              <UiAppButton
                className="text-only"
                label="View"
                @click="consoleClick"
              />
              <UiAppButton
                className="tertiary"
                label="Edit"
                @click="consoleClick"
              />
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>
              <UiAppButton
                className="text-only"
                label="View"
                @click="consoleClick"
              />
              <UiAppButton
                className="tertiary"
                label="Edit"
                @click="consoleClick"
              />
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>
              <UiAppButton
                className="text-only"
                label="View"
                @click="consoleClick"
              />
              <UiAppButton
                className="tertiary"
                label="Edit"
                @click="consoleClick"
              />
            </td>
          </tr>
        </tbody>
      </UiAppTable>
    </div>
    <h1>APP FORM (deprecated update with AppFormField etc..)</h1>
    <UiAppForm :formInput="formInput" :onSubmit="onSubmit" />
    <h1>APP FORM FIELDS</h1>
    <form @submit.prevent="formSubmit">
      <UiAppFormField
        v-model="form.name"
        type="text"
        label="Name"
        :required="true"
      />
      <UiAppFormField
        v-model="form.email"
        type="email"
        label="Email"
        :required="true"
      />
      <UiAppFormField
        v-model="form.password"
        type="password"
        label="Password"
        :required="true"
      />
      <UiAppFormTextArea
        v-model="form.question"
        label="Text Area"
        :required="true"
      />
      <UiAppFormSubmit className="primary" label="Submit" />
    </form>
    <h1>APP BADGE</h1>
    <UiAppBadge className="green" label="Success" />
    <UiAppBadge className="yellow" label="Warning" />
    <UiAppBadge className="red" label="Danger" />
    <UiAppBadge className="grey" label="Null" />
    <br />
    <br />
    <h1>App Modal</h1>
    <UiAppButton
      @click="toggleModal"
      className="primary"
      label="Toggle modal"
    />

    <UiAppModal
      :show="modal"
      @close="modal = false"
      @confirm="modal = false"
      title="Deactivate Account"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
    />

    <h1>App Slide Over Panel</h1>
    <UiAppButton @click="openSlider" className="primary" label="Open slider" />

    <UiAppSlideOverPanel
      :show="slider"
      @close="slider = false"
      title="Lorem Ipsum"
    >
      <div class="mt-2">
        <p class="text-sm text-gray-500">
          Are you sure you want to deactivate your account? All of your data
          will be permanently removed from our servers forever. This action
          cannot be undone.
        </p>
      </div>
      <template v-slot:footer>
        <div class="flex justify-end flex-shrink-0 px-4 py-4">
          <UiAppButton @click="closeSlider" className="primary"
            >Close slider
          </UiAppButton>
        </div>
      </template>
    </UiAppSlideOverPanel>
    <h1>App Alert</h1>
    <UiAppAlert className="green" title="Order completed">
      <p>
        Are you sure you want to deactivate your account? All of your data will
        be permanently removed from our servers forever. This action cannot be
        undone.
      </p>

      <template v-slot:footer>
        <div class="-mx-2 -my-1.5 flex">
          <button
            class="bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
          >
            View status
          </button>
          <button
            class="ml-3 bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
          >
            Dismiss
          </button>
        </div>
      </template>
    </UiAppAlert>
    <UiAppAlert className="yellow" title="Alert Warning">
      <p>
        Are you sure you want to deactivate your account? All of your data will
        be permanently removed from our servers forever. This action cannot be
        undone.
      </p>
    </UiAppAlert>
    <UiAppAlert className="red" title="Alert Danger">
      <p>
        Are you sure you want to deactivate your account? All of your data will
        be permanently removed from our servers forever. This action cannot be
        undone.
      </p>
    </UiAppAlert>
    <h1>App Accordion</h1>
    <UiAppAccordion>
      <template v-slot:header>
        <span class="font-medium text-gray-900">
          How do you make holy water?
        </span>
      </template>
      <template v-slot:content>
        <p class="text-base text-gray-500">
          You boil the hell out of it. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam
          nostrum quod porro. Delectus quia facere id sequi expedita natus.
        </p>
      </template>
    </UiAppAccordion>
    <UiAppAccordion>
      <template v-slot:header>
        <span class="font-medium text-gray-900">
          How do you make holy water?
        </span>
      </template>
      <template v-slot:content>
        <p class="text-base text-gray-500">
          You boil the hell out of it. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam
          nostrum quod porro. Delectus quia facere id sequi expedita natus.
        </p>
      </template>
    </UiAppAccordion>
    <UiAppAccordion>
      <template v-slot:header>
        <span class="font-medium text-gray-900">
          How do you make holy water?
        </span>
      </template>
      <template v-slot:content>
        <p class="text-base text-gray-500">
          You boil the hell out of it. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam
          nostrum quod porro. Delectus quia facere id sequi expedita natus.
        </p>
      </template>
    </UiAppAccordion>
    <h1>App Toggle</h1>
    <UiAppToggle :enable="toggle" @toggle="appToggle" />
    <h1>App Card Landscape</h1>
    <!--<UiAppCardLandscape
      :type="{ whole: false, line: true }"
      title="Sample title UiAppCardPortrait1"
      subtitle="Tempor orci hac"
      image="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixqx=DquD8FxC5C&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
      imgAlt="Hand Tools"
      content="Ultricies massa malesuada viverra cras lobortis. Tempor orci hac
          ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl
          dictum."
    >
      <template v-slot:footer>
        <div class="mt-2">
          <UiAppButton
            @click="consoleClick"
            className="primary"
            label="hello"
          />
        </div>
      </template>
    </UiAppCardLandscape>-->
    <h1>App Card Portrait1</h1>
    <!--<UiAppCardPortrait1
      :type="{ whole: false, line: true }"
      title="Sample title UiAppCardPortrait1"
      subtitle="Tempor orci hac"
      image="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixqx=DquD8FxC5C&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
      imgAlt="Hand Tools"
      content="Ultricies massa malesuada viverra cras lobortis. Tempor orci hac
          ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl
          dictum."
    >
      <template v-slot:footer>
        <div class="mt-2">
          <UiAppButton
            @click="consoleClick"
            className="primary"
            label="hello"
          />
        </div>
      </template>
    </UiAppCardPortrait1>-->
    <h1>AppStickyTab</h1>
    <UiAppStickyTab>
      <template v-slot:header>
        <h1>
          Sticky Header
        </h1>
      </template>
      <p v-for="index in 50" :key="index">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hoc ne statuam
        quidem dicturam pater aiebat, si loqui posset. Scaevolam M. Aliter enim
        explicari, quod quaeritur, non potest. At hoc in eo M.
      </p>
    </UiAppStickyTab>
    <h1>App Breadcrumbs</h1>
    <UiAppBreadcrumbs />
    <h1>UiAppMenuButton</h1>
    <UiAppMenuButton value="" :options="options" />
    <UiAppCardPortrait2 />
    <hr />
  </div>
</template>
<script>
export default {
  layout: 'default',
  data() {
    return {
      viewOption: "grid",
      selected: 0,
      steps: [
        {
          step: 1,
          title: "Name of step 1"
        },
        {
          step: 2,
          title: "Name of step 2"
        },
        {
          step: 3,
          title: "Name of step 3"
        }
      ],
      e1: 2,
      form: {
        name: "",
        email: "",
        password: "",
        question: ""
      },
      modal: false,
      notification: {
        show: false,
        title: "",
        content: ""
      },
      slider: false,
      toggle: false,
      options: [
        {
          label: "Your Profile",
          function: () => console.log('Your Profile"')
        },
        {
          label: "Settings",
          function: () => console.log("Settings")
        },
        {
          label: "Sign Out",
          function: () => console.log("Sign Out")
        }
      ],
      // CD (EV on 20210302): rows data for UiAppTable
      rows: [
        ["Emerald Silk Gown", "$875.00", 124689, 140, "$122,500.00"],
        ["Mauve Cashmere Scarf", "$230.00", 124533, 83, "$19,090.00"],
        [
          "Navy Merino Wool Blazer with khaki chinos and yellow belt",
          "$445.00",
          124518,
          32,
          "$14,240.00"
        ]
      ],
      // CD (EV on 20210302): headings data for UiAppTable
      headings: ["Product", "Price", "SKU Number", "Net quantity", "Action"],
      // CD (EV on 20210302): initial formInput value,
      formInput: [
        {
          type: "email",
          label: "Email",
          model: "",
          placeholder: "App Url"
        },
        {
          type: "password",
          label: "Password",
          model: "",
          placeholder: "App Url2"
        },
        {
          type: "textarea",
          label: "Text Area",
          model: "",
          placeholder: "add multiple lines"
        },
        {
          type: "radio",
          label: "Password",
          model: "",
          name: "accountType",
          items: [
            { label: "Personal", value: "personal" },
            { label: "Business", value: "business" }
          ]
        },
        {
          type: "checkbox",
          label: "checkedNames",
          model: [],
          name: "checkedNames",
          items: [
            { label: "Personal", value: "personal" },
            { label: "Business", value: "business" }
          ]
        },
        {
          type: "select",
          label: "Password",
          model: "",
          name: "accountType",
          items: [
            { label: "Personal", value: "personal" },
            { label: "Business", value: "business" }
          ]
        },
        {
          type: "submit",
          label: "Save and toggle Notification"
        }
      ]
    };
  },
  methods: {
    // CD (EV on 20210302): onClick function for UiAppButton
    consoleClick() {
      console.log("Button clicked");
    },
    onSubmit() {
      console.log("Button submitted");
    },
    formSubmit() {
      this.notification = {
        show: true,
        title: "Form Submitted",
        content: "Form is submitted, form fields will be blank"
      };

      this.form = {
        name: "",
        email: "",
        password: "",
        question: ""
      };
    },
    appToggle() {
      this.toggle = !this.toggle;
    },
    toggleModal() {
      this.modal = !this.modal;
    },
    openSlider() {
      this.slider = true;
    },
    closeSlider() {
      this.slider = false;
    },
    changeViewOption(value) {
      console.log(value);
      this.viewOption = value;
    }
  },
  // CD (EV on 20210302): AppForm sample initial model value
  async fetch() {}
};
</script>
