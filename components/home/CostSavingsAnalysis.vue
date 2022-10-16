// CD (KO on 20210228): component used in only "/pages/index.vue"


<template>
  <div>
    <div class="relative bg-nsk-primary">
        <div class="h-56 bg-blue-800 sm:h-72 md:absolute md:right-0 md:h-full md:w-1/2">
            <!-- <UiIconTrendingUp class="h-full w-full p-8 text-nsk-primary" /> -->
            <img class="object-cover w-full h-full" src="/img/csa-arrow-graphic.jpg" alt="Cost Savings Analysis chart">
        </div>
        <div class="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16">
            <div class="md:mr-auto md:w-1/2 md:pr-10">
            <h2 class="text-blueGray-300 pre-header">
                <!-- pre header -->
            </h2>
            <p class="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Cost Savings Analysis
            </p>
            <p class="description">
                <span class="text-white">With NSK, you can get an idea of potential cost savings using our online Cost Savings Analysis form. The form was created to give you, the end user, a glimpse into the impact of using Nakanishi spindles with your micro tools, running at a manufacturers recommended speeds. The form takes into consideration the savings created annually, but also during payoff of the investment of Nakanishi spindles. Take it for a spin!</span>
            </p>
            <div class="mt-8">
                <div class="inline-flex rounded-md shadow">
                <a href="/support/cost-savings-evaluation" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium bg-white border border-transparent rounded-md text-blueGray-900 hover:bg-blueGray-50">
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
