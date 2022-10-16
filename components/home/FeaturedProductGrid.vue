// CD (KO on 20210228): component used in only "/pages/index.vue" // Use
AppCardPortrait1

<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative px-4 pt-16 pb-20 bg-white sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div class="absolute inset-0">
        <div class="h-1/3 sm:h-2/3"></div>
      </div>
      <div class="relative mx-auto max-w-7xl">
        <div class="text-center">
          <h2>Our Products</h2>
          <!--<p class="max-w-2xl mx-auto mt-3 description sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>-->
        </div>
        <div class="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-5 lg:max-w-none">
     
          <div class="relative flex flex-col h-full overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm bg-blueGray-100 group border-blueGray-300 hover:border-blueGray-800 transform-gpu hover:scale-101">
            <div class="p-4 bg-white">
              <div class="aspect-w-1 aspect-h-1">
                <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/products/8224.jpg" alt="NE249 120" class="object-cover object-center w-full h-full" >
              </div>
            </div>
            <div class="flex flex-col flex-1 p-4 space-y-2">
              <h3>
                <nuxt-link to="/products/ne249-120" class="pointer-default">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  NE249 120
                </nuxt-link>
              </h3>
              <p class="text-sm text-gray-500">NE249 120V EVO Control Unit</p>
            </div>
            <div class="p-2">
              <div class="flex justify-end p-2">
                <UiAppButton className="icon">
                  <UiIconArrowPointingToRight />
                </UiAppButton>
              </div>
            </div>
          </div>

          <div class="relative flex flex-col h-full overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm bg-blueGray-100 group border-blueGray-300 hover:border-blueGray-800 transform-gpu hover:scale-101">
            <div class="p-4 bg-white">
              <div class="aspect-w-1 aspect-h-1">
                <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/products/7097.jpg" alt="IH-300" class="object-cover object-center w-full h-full" >
              </div>
            </div>
            <div class="flex flex-col flex-1 p-4 space-y-2">
              <h3>
                <nuxt-link to="/products/ih-300" class="pointer-default">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  IH-300
                </nuxt-link>
              </h3>
              <p class="text-sm text-gray-500">IH-300 φ3.175 Lever Type Attachment</p>
            </div>
            <div class="p-2">
              <div class="flex justify-end p-2">
                <UiAppButton className="icon">
                  <UiIconArrowPointingToRight />
                </UiAppButton>
              </div>
            </div>
          </div>

          <div class="relative flex flex-col h-full overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm bg-blueGray-100 group border-blueGray-300 hover:border-blueGray-800 transform-gpu hover:scale-101">
            <div class="p-4 bg-white">
              <div class="aspect-w-1 aspect-h-1">
                <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/products/8087.jpg" alt="ENK-250T" class="object-cover object-center w-full h-full" >
              </div>
            </div>
            <div class="flex flex-col flex-1 p-4 space-y-2">
              <h3>
                <nuxt-link to="/products/enk-250t" class="pointer-default">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  ENK-250T
                </nuxt-link>
              </h3>
              <p class="text-sm text-gray-500">ENK-250T Emax EVOlution Torque Motor</p>
            </div>
            <div class="p-2">
              <div class="flex justify-end p-2">
                <UiAppButton className="icon">
                  <UiIconArrowPointingToRight />
                </UiAppButton>
              </div>
            </div>
          </div>

          <div class="relative flex flex-col h-full overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm bg-blueGray-100 group border-blueGray-300 hover:border-blueGray-800 transform-gpu hover:scale-101">
            <div class="p-4 bg-white">
              <div class="aspect-w-1 aspect-h-1">
                <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/products/8232.jpg" alt="EV250-IR" class="object-cover object-center w-full h-full" >
              </div>
            </div>
            <div class="flex flex-col flex-1 p-4 space-y-2">
              <h3>
                <nuxt-link to="/products/ev250-ir" class="pointer-default">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  EV250-IR
                </nuxt-link>
              </h3>
              <p class="text-sm text-gray-500">EV250-IR Emax EVOlution Torque Set - Ring Type</p>
            </div>
            <div class="p-2">
              <div class="flex justify-end p-2">
                <UiAppButton className="icon">
                  <UiIconArrowPointingToRight />
                </UiAppButton>
              </div>
            </div>
          </div>

          <div class="relative flex flex-col h-full overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm bg-blueGray-100 group border-blueGray-300 hover:border-blueGray-800 transform-gpu hover:scale-101">
            <div class="p-4 bg-white">
              <div class="aspect-w-1 aspect-h-1">
                <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/products/1302.jpg" alt="LS-100" class="object-cover object-center w-full h-full" >
              </div>
            </div>
            <div class="flex flex-col flex-1 p-4 space-y-2">
              <h3>
                <nuxt-link to="/products/ls-100" class="pointer-default">
                  <span aria-hidden="true" class="absolute inset-0"></span>
                  LS-100
                </nuxt-link>
              </h3>
              <p class="text-sm text-gray-500">LS-100 Luster Attachment</p>
            </div>
            <div class="p-2">
              <div class="flex justify-end p-2">
                <UiAppButton className="icon">
                  <UiIconArrowPointingToRight />
                </UiAppButton>
              </div>
            </div>
          </div>      
        
        </div>
        <div class="mt-8 text-center">
          <nuxt-link 
            to="/products"
            title="Browse Other Series" 
            class="font-semibold text-nsk-primary hover:text-gray-900">
            view all Products
            <span class="sr-only">view all Products</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // CD (EV on 20210302): onClick function for UiAppButton
    consoleClick() {
      console.log("Button clicked");
    }
  }
};
</script>
