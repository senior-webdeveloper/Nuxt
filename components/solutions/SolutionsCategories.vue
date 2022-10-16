<template>
  <div>
    <div class="text-center">
      <h1>
        Solutions
      </h1>
      <!--<p class="max-w-2xl mx-auto mt-3 text-xl text-blueGray-500 sm:mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
        labore natus atque, ducimus sed.
      </p>-->
    </div>

    <div class="bg-white">

      <div class="py-8 lg:py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8" v-for="(solution, i) in solutions" :key="i">
        <div class="sm:flex sm:items-center sm:justify-between">
          <nuxt-link :to="'/solutions/' + i.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')">
            <h2>{{i}}</h2>
          </nuxt-link>
        </div>

        <div class="flow-root mt-5 md:mt-10">
          <div class="-my-2">
            <div class="box-content relative py-2">
              <div class="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5 min-w-screen-xl">

                <nuxt-link v-for="(example, i) in solution" :key="i" :to="'/solutions/' + example.category.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'') + '/' + example.slug" class="relative flex flex-col h-56 py-6 overflow-hidden transition duration-300 ease-in-out delay-100 border rounded-sm lg:h-64 xl:w-auto bg-blueGray-100 group border-blueGray-300 hover:border-blueGray-800 transform-gpu hover:scale-101">
                  <span aria-hidden="true" class="absolute inset-0">
                    <img :src="example.image" :alt="example.name" class="object-cover object-center w-full h-full">
                  </span>
                  <span aria-hidden="true" class="absolute inset-x-0 bottom-0 opacity-50 h-2/3 bg-gradient-to-t from-gray-800"></span>
                  <span class="relative mt-auto text-center"><h3 class="text-white">{{example.name}}</h3></span>
                </nuxt-link>

              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  </div>
</template>


<script>
import groupBy from "../../utils/groupBy"

export default {
  data() {
    return {
      solutions: [],
    }
  },
  async fetch(){
    const solutions = await this.$content('solutions').fetch()
    this.solutions = groupBy(solutions, "category")
  }
}
</script>
