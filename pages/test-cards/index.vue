<template>
  <div>
    
    <div class="flex overflow-hidden bg-white">
      <div class="flex flex-col flex-1 min-w-0 overflow-hidden">
        <div class="relative z-0 flex flex-1 overflow-hidden">

          <aside class="hidden border-r border-gray-200 w-72 md:order-first md:flex md:flex-col">
            <div class="px-6 pt-6 pb-4">
              <h2 class="text-lg font-medium text-gray-900">Filters</h2>
              <p class="mt-1 text-sm text-gray-600">
                Sit amet consectetur, adipisicing elit
              </p>
            </div>
   
          </aside>
          <main class="relative z-0 flex-1 focus:outline-none xl:order-last">

            <article>

              <div class="mt-5">
                <div class="w-full p-2 bg-blueGray-100">
                  <div class="items-center">
                    <div>
                      <!-- CD (CT on 20210727): Don't mind this
                      Sort by [dropdown here] to be added later on in the project -->
                    </div>
                  </div>
                </div>
              </div>

              <!-- Number of total results -->
              <div class="mt-5">
                <div class="w-full p-2">
                  <div>
                    <p class="text-blueGray-500" >237 Total locations</p>
                  </div>
                </div>
              </div>

              <!-- Products list for grid view-->
              <div class="max-w-5xl px-4 pb-12 mx-auto mt-8 sm:px-6 lg:px-8">
                <div class="grid gap-4 mt-1 sm:grid-cols-3">

                  <div>
                    <!--<div class="space-y-4 transition duration-300 ease-in-out delay-100 border shadow-xl bg-blueGray-100 border-blueGray-300 transform-gpu hover:scale-105 hover:border-blueGray-800">
                      <div class="px-4 py-2">
                        <div class="space-y-1 text-lg font-medium leading-5">-->
                          <!-- CD (CT on 20210729): If the field has no value, don't show the field -->
                          <!--<div class="cursor-default">
                            <h3>{{listing.name}}</h3>
                          </div>
                          <b v-if="listing.isNationalDistributor && listing.isNationalDistributor == true || listing.isNationalDistributor == 'True'">National Distributor</b>
                          <p>{{listing.category}}</p>
                          <p>{{listing.categoryType}}</p>
                          <p>{{listing.address.streetAddress + ","}} {{listing.address.addressLocality + ","}} {{listing.address.addressRegion + ","}} 
                          {{listing.address.country + " " + listing.address.postalCode}}</p>
                          <p>{{listing.company}}</p>
                          <p><a :href="'tel:' + listing.telephone">{{listing.telephone}}</a></p>
                          <p>{{listing.faxNumber}}</p>
                          <p><a :href="'mailto:' + listing.email">{{listing.email}}</a></p>
                          <p v-if="listing.d && search_location">Distance: {{Math.round(listing.d)}} Miles</p>
                          <p><a :href="listing.url" target="_blank">{{listing.url}}</a></p>
                        </div>
                      </div>
                    </div>
                  </div>-->

                  <div class="relative flex flex-col h-full overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-sm border-blueGray-300 transform-gpu hover:scale-105 group">
                    <div class="col-span-2">
                      <div>
                      </div>
                      <div class="flex flex-col flex-1 p-4">
                        <h3 class="mt-4 text-base font-medium text-gray-900">
                          <div>
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            Mike Willman
                          </div>
                        </h3>
                        <div class="mt-1 text-sm text-blueGray-500">
                          <div class="flex justify-between">
                            <div><p>Distributor
                              <span class="px-1">&bull;</span>
                              <span>Woodworking</span></p></div>
                            
                            <div class="absolute top-0 right-0 p-1 text-xs bg-blueGray-600">
                              <div class="flex text-white"><UiIconCheck class="w-4 h-4 mr-2" /><p>National Distributor</p></div>
                            </div>
                          </div>
                          
                          <div class="flex flex-col justify-end flex-1 mt-2">
                            <p>13073 Charlston Way, Rosemount, MN, United States 55068</p>
                            <div class="flex flex-col justify-end flex-1 mt-2">
                              <p>Rosemount Technology</p>
                              <p class="truncate ..."><a class="cursor-pointer text-nsk-primary">rosemounttechnologyllc@gmail.com</a></p>
                              <p><a class="cursor-pointer text-nsk-primary">(612) 747-1655</a></p>
                              <p>(612) 747-5556</p>
                              <p>https://cinnamon.digital</p>
                            </div>
                            <p class="mt-2">Distance: 100 Miles</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>

                  <div>
                  <div class="relative flex flex-col h-full overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-sm border-blueGray-300 transform-gpu hover:scale-105 group">
                    <div class="col-span-2">
                      <div>
                      </div>
                      <div class="flex flex-col flex-1 p-4 space-y-2">
                        <h3 class="mt-4 text-base font-medium text-gray-900">
                          <div>
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            Mike Willman
                          </div>
                        </h3>
                        <div class="text-sm text-blueGray-500">
                          <div class="flex justify-between">
                            <div><p>Distributor</p></div>
                            
                            <!--<div class="absolute top-0 right-0 p-1 text-xs bg-blueGray-700">
                              <div class="flex text-white"><UiIconCheck class="w-4 h-4 mr-2" /><p>National Distributor</p></div>
                            </div>-->
                          </div>
                          <p>Woodworking</p>
                          <div class="flex flex-col justify-end flex-1 mt-2">
                            <p>13073 Charlston Way, Rosemount, MN, United States 55068</p>
                            <div class="flex flex-col justify-end flex-1 mt-2">
                              <p>Rosemount Technology</p>
                              <p class="truncate ..."><a class="cursor-pointer text-nsk-primary">rosemounttechnologyllc@gmail.com</a></p>
                              <p><a class="cursor-pointer text-nsk-primary">(612) 747-1655</a></p>
                              <p>(612) 747-5556</p>
                              <p class="truncate ..."><a href="https://cinnamon.digital" target="_blank" title="https://cinnamon.digital">https://cinnamon.digitalhttps://cinnamon.digitalhttps://cinnamon.digital</a></p>
                            </div>
                            <p class="mt-2">Distance: 100 Miles</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>

                  <div>
                  <div class="relative flex flex-col h-full overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-sm border-blueGray-300 transform-gpu hover:scale-105 group">
                    <div class="col-span-2">
                      <div>
                      </div>
                      <div class="flex flex-col flex-1 p-4 space-y-2">
                        <h3 class="mt-4 text-base font-medium text-gray-900">
                          <div>
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            Mike Willman
                          </div>
                        </h3>
                        <div class="relative text-sm text-blueGray-500">
                          <div class="flex justify-between">
                            <div><p>Distributor</p></div>
                            <div class="absolute top-0 right-0 text-xs">
                              <UiAppBadge :className="'yellow'" label='National Distributor'/>
                              
                            </div>
                          </div>
                          <p>Woodworking</p>
                          <div class="flex flex-col justify-end flex-1 mt-2">
                            <p>13073 Charlston Way, Rosemount, MN, United States 55068</p>
                            <div class="flex flex-col justify-end flex-1 mt-2">
                              <p>Rosemount Technology</p>
                              <p class="truncate ..."><a class="cursor-pointer text-nsk-primary">rosemounttechnologyllc@gmail.com</a></p>
                              <p><a class="cursor-pointer text-nsk-primary">(612) 747-1655</a></p>
                              <p>(612) 747-5556</p>
                              <p>https://cinnamon.digital</p>
                            </div>
                            <p class="mt-2">Distance: 100 Miles</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div> 

                  <div class="p-2">
                  <div class="relative flex flex-col h-full overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-md border-blueGray-300 transform-gpu hover:scale-105 group">
                    <div class="col-span-2">
                      <div>
                      </div>
                      <div class="flex flex-col flex-1 p-4">
                        <h3 class="mt-4 text-base font-semibold text-blueGray-800">
                          <div>
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            Mike Willman
                          </div>
                        </h3>
                        <div class="mt-1 text-sm text-blueGray-500">
                          <div class="flex justify-between">
                            <div class="text-xs"><p>Distributor
                              <span class="px-1">&bull;</span>
                              <span>Woodworking</span></p>
                            </div>
                            <div class="absolute top-0 right-0 p-2 text-xs">
                              <UiAppBadge :className="'yellow'" label='National Distributor'/>
                            </div>
                          </div>
                          
                          <div class="flex flex-col justify-end flex-1 mt-2">
                            <p>13073 Charlston Way, Rosemount, MN, United States 55068</p>
                            <div class="flex flex-col justify-end flex-1 mt-2">
                              <p>Rosemount Technology</p>
                              <p class="truncate ..."><a class="cursor-pointer text-nsk-primary">rosemounttechnologyllc@gmail.com</a></p>
                              <p><a class="cursor-pointer text-nsk-primary">(612) 747-1655</a></p>
                              <p>(612) 747-5556</p>
                              <p>https://cinnamon.digital</p>
                            </div>
                            <div class="flex mt-6 text-xs font-bold"><UiIconRuler class="w-4 h-4 mr-2" /><p>100 miles</p></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div class="p-2">
                  <div class="relative flex flex-col h-full overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-md border-blueGray-300 transform-gpu hover:scale-105 group">
                    <div class="col-span-2">
                      <div>
                      </div>
                      <div class="flex flex-col flex-1 p-4">
                        <h3 class="mt-4 text-base font-medium text-blueGray-800">
                          <div>
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            Mike Willman
                          </div>
                        </h3>
                        <div class="mt-1 text-sm text-blueGray-500">
                          <div class="flex justify-between">
                            <div class="text-xs"><p>Distributor
                              <span class="px-1">&bull;</span>
                              <span>Woodworking</span></p>
                            </div>
                            <div class="absolute top-0 right-0 p-2 text-xs">
                              <UiAppBadge :className="'yellow'" label='National Distributor'/>
                            </div>
                          </div>
                          
                          <div class="flex flex-col justify-end flex-1 mt-2">
                            <p>13073 Charlston Way, Rosemount, MN, United States 55068</p>
                            <div class="flex flex-col justify-end flex-1 mt-2">
                              <p>Rosemount Technology</p>
                              <p class="truncate ..."><a class="cursor-pointer text-nsk-primary">rosemounttechnologyllc@gmail.com</a></p>
                              <p><a class="cursor-pointer text-nsk-primary">(612) 747-1655</a></p>
                              <p>(612) 747-5556</p>
                              <p>https://cinnamon.digital</p>
                            </div>
                            <div class="flex mt-6 text-xs font-bold"><UiIconRuler class="w-4 h-4 mr-2" /><p>100 miles</p></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div class="p-2">
                  <div class="relative flex flex-col h-full overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm shadow-md border-blueGray-300 transform-gpu hover:scale-105 group">
                    <div class="col-span-2">
                      <div>
                      </div>
                      <div class="flex flex-col flex-1 p-4">
                        <h3 class="mt-4 text-base font-semibold text-blueGray-800">
                          <div>
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            <h3 class="text-blueGray-800" VTooltip="Nuxt is Awesome">Mike Willman</h3>
                          </div>
                        </h3>
                        <div class="mt-1 text-sm text-blueGray-500">
                          <div class="flex justify-between">
                            <div class="text-xs"><p>Distributor
                              <span class="px-1">&bull;</span>
                              <span>Woodworking</span></p>
                            </div>
                            <div class="absolute top-0 right-0 p-2 text-xs">
                              <UiAppBadge :className="'yellow'" label='National Distributor'/>
                            </div>
                          </div>
                          
                          <div class="flex flex-col justify-end flex-1 mt-2">
                            <ul class="text-sm font-medium text-blueGray-800">
                              <li>Rosemount Technology</li>
                              <li>13073 Charlston Way</li>
                              <li>Rosemount, MN</li>
                              <li>United States 55068</li>
                              <div class="flex flex-col justify-end flex-1 mt-2 text-nsk-primary">
                                <li><a>(612) 747-1655</a></li>
                                <li class="truncate ...">https://cinnamon.digital</li>
                                <li class="truncate ..."><a>rosemounttechnologyllc@gmail.com</a></li>
                                
                              </div>
                            <div class="absolute bottom-0 right-0 flex p-2 text-xs text-blueGray-500"><UiIconRuler class="w-4 h-4 mr-2" />
                              <li>100 miles</li>
                            </div>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>

                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

