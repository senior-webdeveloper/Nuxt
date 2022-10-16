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
          <h2>
            Our Series
          </h2>
          <!--<p class="max-w-2xl mx-auto mt-3 text-xl text-blueGray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>-->
        </div>
       
        <!-- default-->
        <div class="flex md:hidden">
          <vue-glide type="slider" :per-view="2" :bound="true" :peek="{before: 0, after: 50}">
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/emax-evolution">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/emax-evolution.png" alt="Emax EVOlution" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>Emax EVOlution</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">Digital display enhances safety and efficiency. Compact and functional design makes the unit portable. Soft-touch switches permit easy operation and long service life.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/espert-500">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/espert.png" alt="ESPERT 500" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>ESPERT 500</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The ESPERT 500 Brushless Motor takes motor technology to an even higher level. This new state of the art motor has dramatically increased efficiency and torque output.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/rotus">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/rotus.png" alt="Rotus" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>Rotus</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The ROTUS system is a hand-held grinder with an energy saving air motor.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/impulse">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/impulse.png" alt="IMPULSE" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>IMPULSE</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The IMPULSE is a high torque pencil type air grinder. It is a durable and quiet high-efficiency air grinder.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/presto-2">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/presto.png" alt="PRESTO II" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>PRESTO II</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">PRESTO II is an ultra high speed non-lube air turbine.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="series/sheenus-zero">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/sheenus.png" alt="Sheenus ZERO" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>Sheenus ZERO</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The Sheenus ZERO can be used for grinding, polishing and mirror finishing on a wide range of materials from aluminum dies to cemented carbide dies.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/sonic-cutter-zero">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/sonic-cutter-zero.png" alt="Sonic Cutter ZERO" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>Sonic Cutter ZERO</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The vibration free SONIC CUTTER ensures accurate and sharp cutting finishes.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/ispeed3">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/ispeed3.png" alt="iSpeed3" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>iSpeed3</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The shorter spindle length is suitable for compact sized automatic CNC lathes.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/e2000">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/e2000.png" alt="E2000" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>E2000</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The E2000 Series employs a high-speed, ultra-quiet brushless motor.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/e3000">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/e3000.png" alt="E3000" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>E3000</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">New compact, high speed, precision spindles for upgrading your CNC turning, milling, and swiss style machines.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/e4000">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/e4000.png" alt="E4000" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>E4000</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">Designed for use on CNC lathes, robots and special application machines for precision milling, drilling, grinding, slitting deburring applications.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/ma">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/ma.png" alt="MA Series" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>MA Series</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The MA Series has been designed to operate smoothly at high speeds for long continuous cutting and grinding by connecting an air line kit directly between the air compressor and the air motor.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/ms">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/ms.png" alt="MS Series" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>MS Series</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The MA Series has been designed to operate smoothly at high speeds for long continuous cutting and grinding by connecting an air line kit directly between the air compressor and the air motor.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/hes">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/hes.png" alt="HES" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>HES</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">Ultra-precision, high-speed HES Spindles allow you to use your existing equipment for a much larger variety of operations.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/ispeed5">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/ispeed5.png" alt="iSpeed5" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>iSpeed5</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">Fully tool-changeable electric spindles increase machine tool speed.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/hts">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/hts.png" alt="HTS" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>HTS</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The HTS Series' high-speed operation is suitable for cutting tool diameters of less than R0.5mm in reference to ball end mills.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/planet">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/planet.png" alt="Planet" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>Planet</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3"></p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/xpeed">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/xpeed.png" alt="Xpeed" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>Xpeed</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3"></p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/abt">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/abt.png" alt="ABT" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>ABT</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3"></p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
                  
            <template slot="control">
              <button data-glide-dir="<" v-text="'<'"></button>
              <button data-glide-dir=">" v-text="'>'"></button>
            </template>
          </vue-glide>
        </div>

        <!-- between md and lg-->
        <div class="hidden md:flex lg:hidden">
          <vue-glide type="slider" :per-view="3" :bound="true" :peek="{before: 0, after: 100}">
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/emax-evolution">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/emax-evolution.png" alt="Emax EVOlution" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>Emax EVOlution</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">Digital display enhances safety and efficiency. Compact and functional design makes the unit portable. Soft-touch switches permit easy operation and long service life.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/espert-500">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/espert.png" alt="ESPERT 500" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>ESPERT 500</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The ESPERT 500 Brushless Motor takes motor technology to an even higher level. This new state of the art motor has dramatically increased efficiency and torque output.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/rotus">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/rotus.png" alt="Rotus" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>Rotus</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The ROTUS system is a hand-held grinder with an energy saving air motor.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/impulse">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/impulse.png" alt="IMPULSE" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>IMPULSE</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The IMPULSE is a high torque pencil type air grinder. It is a durable and quiet high-efficiency air grinder.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/presto-2">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/presto.png" alt="PRESTO II" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>PRESTO II</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">PRESTO II is an ultra high speed non-lube air turbine.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/sheenus-zero">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/sheenus.png" alt="Sheenus ZERO" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>Sheenus ZERO</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The Sheenus ZERO can be used for grinding, polishing and mirror finishing on a wide range of materials from aluminum dies to cemented carbide dies.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/sonic-cutter-zero">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/sonic-cutter-zero.png" alt="Sonic Cutter ZERO" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>Sonic Cutter ZERO</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The vibration free SONIC CUTTER ensures accurate and sharp cutting finishes.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/ispeed3">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/ispeed3.png" alt="iSpeed3" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>iSpeed3</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The shorter spindle length is suitable for compact sized automatic CNC lathes.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/e2000">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/e2000.png" alt="E2000" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>E2000</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The E2000 Series employs a high-speed, ultra-quiet brushless motor.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/e3000">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/e3000.png" alt="E3000" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>E3000</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">New compact, high speed, precision spindles for upgrading your CNC turning, milling, and swiss style machines.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/e4000">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/e4000.png" alt="E4000" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>E4000</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">Designed for use on CNC lathes, robots and special application machines for precision milling, drilling, grinding, slitting deburring applications.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/ma">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/ma.png" alt="MA Series" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>MA Series</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The MA Series has been designed to operate smoothly at high speeds for long continuous cutting and grinding by connecting an air line kit directly between the air compressor and the air motor.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/ms">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/ms.png" alt="MS Series" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>MS Series</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The MA Series has been designed to operate smoothly at high speeds for long continuous cutting and grinding by connecting an air line kit directly between the air compressor and the air motor.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/hes">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/hes.png" alt="HES" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>HES</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">Ultra-precision, high-speed HES Spindles allow you to use your existing equipment for a much larger variety of operations.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/ispeed5">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/ispeed5.png" alt="iSpeed5" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>iSpeed5</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">Fully tool-changeable electric spindles increase machine tool speed.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/hts">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/hts.png" alt="HTS" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>HTS</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The HTS Series' high-speed operation is suitable for cutting tool diameters of less than R0.5mm in reference to ball end mills.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/planet">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/planet.png" alt="Planet" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>Planet</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3"></p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/xpeed">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/xpeed.png" alt="Xpeed" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>Xpeed</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3"></p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/abt">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-96">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/abt.png" alt="ABT" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>ABT</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3"></p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
                  
            <template slot="control">
              <button data-glide-dir="<" v-text="'<'"></button>
              <button data-glide-dir=">" v-text="'>'"></button>
            </template>
          </vue-glide>
        </div>

        <!-- lg and above-->
        <div class="hidden lg:flex">
          <vue-glide type="slider" :per-view="3" :bound="true" :peek="{before: 0, after: 100}">
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/emax-evolution">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-120">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/emax-evolution.png" alt="Emax EVOlution" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>Emax EVOlution</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">Digital display enhances safety and efficiency. Compact and functional design makes the unit portable. Soft-touch switches permit easy operation and long service life.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/espert-500">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-120">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/espert.png" alt="ESPERT 500" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>ESPERT 500</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The ESPERT 500 Brushless Motor takes motor technology to an even higher level. This new state of the art motor has dramatically increased efficiency and torque output.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/rotus">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-120">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/rotus.png" alt="Rotus" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>Rotus</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The ROTUS system is a hand-held grinder with an energy saving air motor.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/impulse">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-120">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/impulse.png" alt="IMPULSE" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>IMPULSE</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The IMPULSE is a high torque pencil type air grinder. It is a durable and quiet high-efficiency air grinder.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/presto-2">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-120">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/presto.png" alt="PRESTO II" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>PRESTO II</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">PRESTO II is an ultra high speed non-lube air turbine.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/sheenus-zero">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-120">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/sheenus.png" alt="Sheenus ZERO" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>Sheenus ZERO</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The Sheenus ZERO can be used for grinding, polishing and mirror finishing on a wide range of materials from aluminum dies to cemented carbide dies.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/sonic-cutter-zero">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-120">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/sonic-cutter-zero.png" alt="Sonic Cutter ZERO" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>Sonic Cutter ZERO</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The vibration free SONIC CUTTER ensures accurate and sharp cutting finishes.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/ispeed3">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-120">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/ispeed3.png" alt="iSpeed3" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>iSpeed3</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The shorter spindle length is suitable for compact sized automatic CNC lathes.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/e2000">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-120">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/e2000.png" alt="E2000" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>E2000</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The E2000 Series employs a high-speed, ultra-quiet brushless motor.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/e3000">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-120">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/e3000.png" alt="E3000" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>E3000</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">New compact, high speed, precision spindles for upgrading your CNC turning, milling, and swiss style machines.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/e4000">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-120">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/e4000.png" alt="E4000" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>E4000</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">Designed for use on CNC lathes, robots and special application machines for precision milling, drilling, grinding, slitting deburring applications.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/ma">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-120">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/ma.png" alt="MA Series" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>MA Series</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The MA Series has been designed to operate smoothly at high speeds for long continuous cutting and grinding by connecting an air line kit directly between the air compressor and the air motor.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/ms">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-120">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/ms.png" alt="MS Series" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>MS Series</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The MA Series has been designed to operate smoothly at high speeds for long continuous cutting and grinding by connecting an air line kit directly between the air compressor and the air motor.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/hes">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-120">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/hes.png" alt="HES" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>HES</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">Ultra-precision, high-speed HES Spindles allow you to use your existing equipment for a much larger variety of operations.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/ispeed5">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-120">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/ispeed5.png" alt="iSpeed5" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>iSpeed5</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">Fully tool-changeable electric spindles increase machine tool speed.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/hts">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-120">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/hts.png" alt="HTS" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>HTS</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3">The HTS Series' high-speed operation is suitable for cutting tool diameters of less than R0.5mm in reference to ball end mills.</p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/planet">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-120">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/planet.png" alt="Planet" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>Planet</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3"></p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/xpeed">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-120">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/xpeed.png" alt="Xpeed" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>Xpeed</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3"></p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
            <vue-glide-slide class="py-8">
              <nuxt-link to="/series/abt">
                <div class="relative flex flex-col overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-lg hover:shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-101 h-120">
                  <div class="bg-white aspect-w-3 aspect-h-2">
                    <img src="https://nsk.nyc3.cdn.digitaloceanspaces.com/series/abt.png" alt="ABT" class="object-cover">
                  </div>
                  <div class="flex flex-col flex-1 p-4 space-y-2">
                    <h3>ABT</h3>
                    <div class="mt-2 leading-normal">
                      <p class="text-blueGray-500 line-clamp-3"></p>
                    </div>
                    <div class="flex flex-col justify-end flex-1 place-items-end">
                      <UiAppButton className="icon-arrow">
                        <UiIconArrowPointingToRight />
                      </UiAppButton>
                    </div>
                  </div>
                </div>
              </nuxt-link>
            </vue-glide-slide>
                  
            <template slot="control">
              <button data-glide-dir="<" v-text="'<'"></button>
              <button data-glide-dir=">" v-text="'>'"></button>
            </template>
          </vue-glide>
        </div>

        <div class="mt-8 text-center">
          <nuxt-link 
            to="/series"
            title="Browse Other Series" 
            class="font-semibold text-nsk-primary hover:text-gray-900">
            view all Series
            <span class="sr-only">view all Series</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js'
import "vue-glide-js/dist/vue-glide.css";

export default {
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  methods: {
    // CD (EV on 20210302): onClick function for UiAppButton
    consoleClick() {
      console.log("Button clicked");
    }
  }
};
</script>

<style>
.glide__bullet {
    height: 16px;
    width: 16px;
    background-color: lightgrey;
    border-radius: 100%;
    cursor: pointer;
    margin-right: 8px;
}
.glide__bullet--active {
  background: linear-gradient(270deg, lightgrey, darkgrey);
  background-size: 400% 400%;
  -webkit-animation: movegradient 1.5s ease infinite;
  -moz-animation: movegradient 1.5s ease infinite;
  animation: movegradient 1.5s ease infinite;
}
.glide__bullets{
    text-align: center;
    margin-top: 20px;
}
div[data-glide-el=controls] {
  position: absolute;
  left: 0;
  right: 0;
  top: 100px;
}
button[data-glide-dir="<"], button[data-glide-dir=">"] {
  position: absolute;
  border: 0;
  outline: 0;
  padding: 16px;
  border-radius: 3px;
  background-color: #0079C1;
  opacity: 1;
  color: #fff;
  cursor: pointer;
  font-size: 5;
  margin: 140px -20px 0 -20px;
}

button[data-glide-dir=">"] {
  right: 5px;
}

button[data-glide-dir="<"] {
  left: 5px;
}
</style>