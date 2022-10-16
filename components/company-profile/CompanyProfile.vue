<template>
  <div class="overflow-hidden bg-white">
    <div class="relative mx-auto">
      <!--<div class="absolute top-0 bottom-0 hidden w-screen lg:block bg-gray-50 left-3/4" />-->
      <div class="mx-auto text-base max-w-prose lg:max-w-none">
        <div>
          <h1>Company Profile</h1>
        </div>
      </div>

      <div class="relative mx-auto text-base max-w-prose lg:max-w-none">
        
        <div class="flow-root mt-4">
          <div class="-my-2">
            <div class="box-content relative py-2 overflow-x-auto xl:overflow-visible">
              <div class="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2">
                <nuxt-link to="/company-profile/america" class="relative flex flex-col p-6 overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-lg h-80 group border-blueGray-300 hover:border-blueGray-800 transform-gpu hover:scale-101">
                  <span aria-hidden="true" class="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1464660756002-dd9f9a92b01b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2068&q=80" alt="" class="object-cover object-center w-full h-full">
                  </span>
                  <span aria-hidden="true" class="absolute inset-x-0 bottom-0 opacity-50 h-2/3 bg-gradient-to-t from-gray-800"></span>
                  <span class="relative mt-auto text-center"><h2 class="text-white">America</h2></span>
                </nuxt-link>

                <nuxt-link to="/company-profile/japan" class="relative flex flex-col p-6 overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-lg h-80 group border-blueGray-300 hover:border-blueGray-800 transform-gpu hover:scale-101">
                  <span aria-hidden="true" class="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1528884089-4582fe06c516?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" alt="" class="object-cover object-center w-full h-full">
                  </span>
                  <span aria-hidden="true" class="absolute inset-x-0 bottom-0 opacity-50 h-2/3 bg-gradient-to-t from-gray-800"></span>
                  <span class="relative mt-auto text-center"><h2 class="text-white">Japan</h2></span>
                </nuxt-link>

              </div>
            </div>
          </div>
        </div>

      </div>
    
    </div>
  </div>
</template>

