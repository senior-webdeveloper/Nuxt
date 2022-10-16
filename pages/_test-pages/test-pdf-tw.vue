<template>
  <div> 
        
    <div class="max-w-5xl px-8 mx-auto">
      <div class="flex-1 min-w-0 mt-6">
        <h1 class="text-2xl font-bold text-gray-900 truncate">
          Technical Questions
        </h1>
      </div>
    </div>
         
    <div class="max-w-5xl px-8 mx-auto mt-6">
      <dl class="grid grid-cols-2 gap-x-4 gap-y-8">
        <div class="col-span-1">
          <dt class="text-sm font-medium text-gray-500">
            Name
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            ${this.form.name}
          </dd>
        </div>

        <div class="col-span-1">
          <dt class="text-sm font-medium text-gray-500">
            Title
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            ${this.form.title}
          </dd>
        </div>

        <div class="col-span-1">
          <dt class="text-sm font-medium text-gray-500">
            Company
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            ${this.form.company}
          </dd>
        </div>

        <div class="col-span-1">
          <dt class="text-sm font-medium text-gray-500">
            Email
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            {this.form.email}
          </dd>
        </div>

        <div class="col-span-1">
          <dt class="text-sm font-medium text-gray-500">
            Phone
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            ${this.form.phone}
          </dd>
        </div>

        <div class="col-span-1">
          <dt class="text-sm font-medium text-gray-500">
            Product of Interest
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            {this.form.product}
          </dd>
        </div>

        <div class="col-span-1">
          <dt class="text-sm font-medium text-gray-500">
            Machine Type
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            ${this.form.machineType}
          </dd>
        </div>

        <div class="col-span-1">
          <dt class="text-sm font-medium text-gray-500">
            Application
          </dt>
          <dd class="mt-1 text-sm text-gray-900">
            ${this.form.application}
          </dd>
        </div>

        <div class="col-span-2">
          <dt class="text-sm font-medium text-gray-500">
            Question
          </dt>
          <dd class="mt-1 space-y-5 text-sm text-gray-900 max-w-prose">
            <p>
              ${this.form.question}
            </p>
          </dd>
        </div>
      </dl>
    </div>

   
  </div>
</template>     