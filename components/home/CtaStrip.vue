// CD (KO on 20210228): component used in only "/pages/index.vue"


<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-blueGray-100">
      <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div class="flex justify-center col-span-1 transition duration-300 ease-in-out md:col-span-2 lg:col-span-1 transform-gpu hover:scale-110">
            <NuxtLink to="/support/contact-us">
            <div class="flex items-center space-x-3">
              <UiIconChatGroup class="h-10" />
              <p>Customer Support</p>
            </div>
            </NuxtLink>
          </div>
          <div class="flex justify-center col-span-1 transition duration-300 ease-in-out md:col-span-2 lg:col-span-1 transform-gpu hover:scale-110">
            <a href="https://nsk-cdn.cinnamondigital.app/NSK-2021-Catalog.pdf" target="_blank" title="Download the NSK product catelog">
            <div class="flex items-center space-x-3">
              <UiIconFolderDownload class="h-10" />
              <p>Download Catalog</p>
            </div>
            </a>
          </div>
          <div class="flex justify-center col-span-1 transition duration-300 ease-in-out md:col-span-2 lg:col-span-1 transform-gpu hover:scale-110">
            <NuxtLink to="/support/cost-savings-evaluation">
            <div class="flex items-center space-x-3">
              <UiIconCurrencyDollar class="h-10" />
              <p>Cost Savings Analysis</p>
            </div>
            </NuxtLink>
          </div>
          <div class="flex justify-center col-span-1 transition duration-300 ease-in-out md:col-span-2 lg:col-span-1 transform-gpu hover:scale-110">
            <NuxtLink to="/find-distributors">
            <div class="flex items-center space-x-3">
              <UiIconMapPin class="h-10" />
              <p>Find a Distributor</p>
            </div>
            </NuxtLink>
          </div>
          <!--<div class="flex justify-center col-span-1 transition duration-300 ease-in-out md:col-span-2 lg:col-span-1 transform-gpu hover:scale-110">
            <svg class="h-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
            </svg>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>
