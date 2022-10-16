// CD (KO on 20210228): component used in only "/pages/index.vue"


<template>
  <div>
    <div class="relative bg-nsk-primary">
        <div class="h-56 bg-blue-800 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
            <img class="object-cover w-full h-full" src="https://images.unsplash.com/photo-1645418093090-e6f8497aecbd?ixlib=rb-1.2.1&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80&auto=format&fit=crop&w=1920&q=60&blend=0079C1&sat=-100&blend-mode=multiply" alt="airplane turbine">
        </div>
        <div class="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
            <div class="md:ml-auto md:w-1/2 md:pl-10">
            <h2 class="text-blueGray-300 pre-header">
                Featured Product
            </h2>
            <p class="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                iSpeed5
            </p>
            <p class="description">
                <span class="text-white">The iSpeed5 is a 60,000 or 80,000 RPM, 350-Watt, Brushless DC Electric System eliminates the need for any operator intervention by using a special designed stop block connection under that machine spindle that can withstand coolant, chips, dust and other machining debris from contaminating the stop block.</span>
            </p>
            <div class="mt-8">
                <div class="inline-flex rounded-md shadow">
                <a href="/series/ispeed5" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium bg-white border border-transparent rounded-md text-blueGray-900 hover:bg-blueGray-50">
                    Learn more
                    <!-- Heroicon name: solid/external-link -->
                    <svg class="w-5 h-5 ml-3 -mr-1 text-blueGray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                </a>
                </div>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>
