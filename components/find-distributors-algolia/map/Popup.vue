<template>
  <div class="flex flex-col">
    <p class="font-bold">{{ data.name }}</p>
    <p class="my-2 text-xs">{{ data.category }}</p>
    <!-- <p><span>Category Type: </span>{{ data.categoryType }}</p> -->
    <p>
      <span></span>{{ data.address | address }}
    </p>
    <p>
      <span class="font-bold" v-if="data.company"></span
      >{{ data.company }}
    </p>
    <p>
      <span v-if="data.territroyTitle"></span
      >{{ data.territroyTitle }}
    </p>
    <p>
      <span v-if="data.territoryState"></span
      >{{ data.territoryState }}
    </p>
    <p>
      <span v-if="data.email"></span>{{ data.email }}
    </p>
    <p>
      <span v-if="data.telephone"></span
      >{{ data.telephone }}
    </p>
    <p>
      <span v-if="data.faxNumber"></span
      >{{ data.faxNumber }}
    </p>
    <p><span v-if="data.url"></span>{{ data.url }}</p>
    <!-- <p>
      <span
        v-if="data.category === 'Distributor' && data.isNationalDistributor"
        >Is National Distributor: </span
      >{{ data.isNationalDistributor | isNationationalDistributor }}
    </p> -->
    <button
      @click="$emit('close')"
      class="absolute top-0 right-0 pt-2 pr-4 text-lg font-bold focus:outline-none"
    >
      &times;
    </button>
  </div>
</template>

<script>
export default {
  props: ["data", "hasCloseButton"],
  filters: {
    isNationationalDistributor(value) {
      return value === "True" ? "Yes" : value === "False" ? "No" : "";
    },
    address(address) {
      return `${[
        address.streetAddress,
        address.addressLocality,
        address.addressRegion,
        address.country
      ].join(", ")} ${address.postalCode || ""}`;
    }
  }
};
</script>
