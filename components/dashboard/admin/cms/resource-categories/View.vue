<template>
  <div>
    <main class="relative flex-1 overflow-y-auto focus:outline-none" tabindex="-1">
      <div class="py-4">
        <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3">
          <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
            <div class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
              <div>
                <h1>Resource Categories</h1>
              </div>
              <div class="flex mt-4 space-x-3 md:mt-0">
              </div>
            </div>

            <div>
              <!-- Main Details-->
              <div class="divide-y divide-gray-200">
                <div class="py-5">
                  <div>
                    <!-- categories field here, text type. -->
                    <!-- add Add (to add new category) and Delete (to delete existing category) buttons -->
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside class="xl:block xl:pl-8">
            <h2 class="sr-only">Submission Details</h2>
            <div>
              <div class="py-6 mt-6 space-y-5 border-t border-gray-200 lg:mt-0 lg:border-none">
                <div class="space-y-6">
                  <h2>Status</h2>
                  <!-- no status field here. -->
                  <!-- submit button using AppForm-->
                  <!-- <UiAppForm :formInput="formInput" :onSubmit="onSubmit" /> -->
                  <!-- Old code <form @submit.prevent="formSubmit">
                    <div class="mt-3">
                      <UiAppFormSubmit className="primary-full" label="Save" />
                    </div>
                  <!-- </form> -->
                </div>
              </div>
              <div class="py-6 mt-6 space-y-5 border-t border-gray-200">
                <div class="flex items-center space-x-2">
                  <UiIconCalendar class="text-gray-400 flex-shrink-0 w-6 h-6" />
                  <span class="text-sm font-medium text-gray-900">Created on <time datetime="2020-12-02">[CreatedAt date]</time></span>
                </div>
                <div class="flex items-center space-x-2">
                  <UiIconRefresh class="text-gray-400 flex-shrink-0 w-6 h-6" />
                  <span class="text-sm font-medium text-gray-900">Updated on
                    <time datetime="2020-12-02"></time></span>
                </div>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </main>
  </div>
</template>