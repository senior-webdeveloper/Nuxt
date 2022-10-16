<template>
  <!-- <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Back Home</NuxtLink>
  </div> -->
  <div class="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
    <div class="max-w-max mx-auto">
      <main class="sm:flex">
        <h1 class="text-4xl font-extrabold text-gray-600 sm:text-5xl">404</h1>
        <div class="sm:ml-6">
          <div class="sm:border-l sm:border-gray-200 sm:pl-6">
            <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found</h1>
            <p class="mt-1 text-base text-gray-500">Please check the URL in the address bar and try again.</p>
          </div>
          <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <NuxtLink to="/" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"> Go back home </NuxtLink>
            <NuxtLink to="/support/contact-us" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"> Contact support </NuxtLink>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  export default {
    head: {
    titleTemplate: '404 - NSK America Corporation',
  },
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>