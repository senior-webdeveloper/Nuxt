// CD (KO on 20210228): component used in the UI as part of another comonent

<template>
  <div>
    <form v-on:submit.prevent="onSubmit">
      <div class="mb-4" v-for="(item, index) in formInput" :key="index">
        <!--  CD (EV on 20210302): if item is input type text,email or password -->
        <label
          class="block mb-2 text-sm font-bold text-blueGray-700"
          v-if="['text', 'email', 'password'].includes(item.type)"
        >
          {{ item.label }}
          <input
            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm"
            :type="item.type"
            :placeholder="item.placeholder"
            :required="item.required"
            :disabled="item.disabled"
            v-model="item.model"
          />
        </label>
        <!--  CD (EV on 20210302): if item is input type radio -->
        <div class="mt-4" v-else-if="['radio', 'checkbox'].includes(item.type)">
          <span class="text-blueGray-700">{{ item.label }}</span>
          <div class="mt-2">
            <label
              class="inline-flex items-center"
              v-for="(inputItem, inputIndex) in item.items"
              :key="inputIndex"
            >
              <input
                :type="item.type"
                class="form-radio"
                v-model="item.model"
                :value="inputItem.value"
                :id="item.name + inputIndex"
              />
              <span class="ml-2">{{ inputItem.label }}</span>
            </label>
          </div>
          {{ item.model }}
        </div>
        <!--  CD (EV on 20210302): if item is input type textarea -->

        <label
          class="block mb-2 text-sm font-bold text-blueGray-700"
          v-else-if="item.type == 'textarea'"
        >
          {{ item.label }}
          <br />
          <textarea
            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blueGray-400 focus:border-blueGray-400 sm:text-sm"
            rows="4"
            v-model="item.model"
            :placeholder="item.placeholder"
            :required="item.required"
            :disabled="item.disabled"
          ></textarea>
        </label>

        <!--  CD (EV on 20210302): if item is input type select -->
        <div v-else-if="item.type == 'select'">
          <select v-model="item.model">
            <option disabled value="">Please select</option>
            <option
              v-for="(inputItem, inputIndex) in item.items"
              :key="inputIndex"
              :value="inputItem.value"
              >{{ inputItem.label }}</option
            >
          </select>
        </div>

        <!--  CD (EV on 20210302): if item is input type submit -->

        <UiAppButton v-else-if="item.type == 'submit'" className="primary">{{
          item.label
        }}</UiAppButton>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    // CD (EV on 20210302): Declare formInput props as required array
    formInput: {
      type: Array,
      required: true
    },
    onSubmit: {
      type: Function,
      required: true
    }
  }
};
</script>
