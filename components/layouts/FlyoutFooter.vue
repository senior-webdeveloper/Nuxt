<template>
    <div class="flex rounded-b-lg justify-items-center bg-gray-50">
          <div class="px-4 py-5 mx-auto space-y-6 max-w-7xl sm:flex sm:space-y-0 sm:space-x-14 sm:px-6 lg:px-8">
            <div class="flow-root">
              <a href="https://nsk-cdn.cinnamondigital.app/NSK-2021-Catalog.pdf" target="_blank" title="Download the NSK product catelog" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition duration-300 ease-in-out rounded-md hover:bg-gray-100">
                <UiIconFolderDownload class="flex-shrink-0 w-6 h-6 text-gray-800" />
                <span class="ml-2">Download Catalog (2021)</span>
              </a>
            </div>

            <div class="flow-root">
              <NuxtLink to="/find-distributors" title="Find Distributors and Sales Representitives" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition duration-300 ease-in-out rounded-md hover:bg-gray-100">
                <UiIconMapPin class="flex-shrink-0 w-6 h-6 text-gray-800" />
                <span class="ml-2">Find Distributors</span>
              </NuxtLink>
            </div>

            <div class="flow-root">
              <a href="tel:8005854675" title="Call us" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition duration-300 ease-in-out rounded-md hover:bg-gray-100">
                <UiIconPhone class="flex-shrink-0 w-6 h-6 text-gray-800" />
                <span class="ml-2">(800) 585-4675</span>
              </a>
            </div>

            <div class="flow-root">
              <a href="mailto:info@nskamericacorp.com" title="Email" class="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition duration-300 ease-in-out rounded-md hover:bg-gray-100">
                <UiIconMailv2 class="flex-shrink-0 w-6 h-6 text-gray-800" />
                <span class="ml-2">info@nskamericacorp.com</span>
              </a>
            </div>
        </div>
    </div>
</template>