// CD (KO on 20210228): component used in only "/pages/index.vue"

<template>
  <div>
    <div class="relative overflow-hidden text-white bg-gray-800">
      <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 sm:static">
          <div class="sm:max-w-lg">
            <h1 class="text-4xl font-extrabold tracking-tight text-white font sm:text-6xl">NSK America Corporation</h1>
            <p class="mt-4 text-xl text-blueGray-400">Premium High-Speed Electric and Pneumatic Spindles and Micro Grinders</p>
          </div>
          <div>
            <div class="mt-10">
              <!-- Decorative image grid -->
              <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
                <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="overflow-hidden bg-white border-2 rounded-md border-blueGray-200 w-44 sm:opacity-0 lg:opacity-100">
                        <nuxt-img 
                          format="webp"
                          src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/e4000.png" 
                          alt="e4000"
                          quality="80"
                          width="140"
                          height="140"
                          class="object-center w-full p-4" 
                        />
                      </div>
                      <div class="overflow-hidden bg-white border-2 rounded-md border-blueGray-200 w-44">
                        <nuxt-img 
                          format="webp"
                          src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/sonic-cutter-zero.png" 
                          alt="Sonic Cutter"
                          quality="80"
                          width="140"
                          height="140"
                          class="object-center w-full p-4" 
                        />
                      </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="overflow-hidden bg-white border-2 rounded-md border-blueGray-200 w-44">
                        <nuxt-img 
                          format="webp"
                          src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/hes.png" 
                          alt="HES 510"
                          quality="80"
                          width="140"
                          height="140"
                          class="object-center w-full p-4" 
                        />
                      </div>
                      <div class="overflow-hidden bg-white border-2 rounded-md border-blueGray-200 w-44">
                        <nuxt-img 
                          format="webp"
                          src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/ispeed5.png" 
                          alt="iSpeed5"
                          quality="80"
                          width="140"
                          height="140"
                          class="object-center w-full p-4" 
                        />
                      </div>
                      <div class="overflow-hidden bg-white border-2 rounded-md border-blueGray-200 w-44">
                        <nuxt-img 
                          format="webp"
                          src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/emax-evolution.png" 
                          alt="Emax EVOlution"
                          quality="80"
                          width="140"
                          height="140"
                          class="object-center w-full p-4" 
                        />
                      </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="overflow-hidden bg-white border-2 rounded-md border-blueGray-200 w-44">
                        <nuxt-img 
                          format="webp"
                          src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/ispeed3.png" 
                          alt="iSpeed3"
                          quality="80"
                          width="140"
                          height="140"
                          class="object-center w-full p-4" 
                        />
                      </div>
                      <div class="overflow-hidden bg-white border-2 rounded-md border-blueGray-200 w-44">
                        <nuxt-img 
                          format="webp"
                          src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/sheenus.png" 
                          alt="Sheenus Zero"
                          quality="80"
                          width="140"
                          height="140"
                          class="object-center w-full p-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href="/products">
                <UiAppButton className="primary">Browse products</UiAppButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>