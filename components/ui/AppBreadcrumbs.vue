<template>
  <nav aria-label="breadcrumbs" class="flex">
    <!-- {{crumbs}} -->

    <!--CD (CT on 20210817): Last crumb is full title -->
    <div class="hidden md:block">
      <ol vocab="http://schema.org/" typeof="BreadcrumbList" class="flex items-center mt-6 text-sm">
        <!-- Home Link -->
        <li class="">
          <div class="flex">
            <nuxt-link :to="'/'" class="text-gray-400 uppercase hover:text-gray-500">Home</nuxt-link>
              <span v-if ="crumbs.length > 0">
                <UiIconSlash class="flex-shrink-0 text-gray-300" />
              </span>
          </div>
        </li>
        <!-- Path items -->
        <li v-for="(item, i) in crumbs" :key="i" :class="['flex items-center',item.classes]" class="truncate ...">

          <!-- If it's a dynamic page with slug -->
          <div v-if="item.name.includes(':slug') || item.name.includes(':id') || item.name.includes(':tag')">
            <!-- If it has a name -->
            <span class="flex text-gray-400 uppercase hover:text-gray-500" v-if="item.name">
              <!-- If its not the last item -->
              <span v-if ="crumbs.length > i + 1">
                <nuxt-link v-if="item.name.length > 50" > {{ item.name.replace(/-/g," ").slice(0, 50) }} ... </nuxt-link>
                <nuxt-link v-else> {{ item.name.replace(/-/g," ") }}</nuxt-link>
              </span>
              <span v-if ="crumbs.length > i + 1">
                <UiIconSlash class="flex-shrink-0 text-gray-300" />  
              </span>

              <!-- If it's the last item -->
              <span v-else>
                <span class="truncate ...">{{ $store.state.breadcrumb.name }}</span>
              </span>
            </span>

            <!-- If it has no name its only the / -->
            <span class="flex text-gray-400 uppercase hover:text-gray-500" v-else>
              <span v-if ="crumbs.length > i + 1">
                <UiIconSlash class="flex-shrink-0 text-gray-300" />
              </span>
            </span>
          </div>

          <!-- If it's not a dynamic page with slug -->
          <div v-else class="flex text-gray-400 uppercase hover:text-gray-500">
            <!-- If its not the last item -->
            <span v-if="crumbs.length > i + 1">
              <nuxt-link :to="item.path">{{ item.name.replace(/-/g," ") }}</nuxt-link>
            </span>
            <span v-if ="item.path && crumbs.length > i + 1">
              <UiIconSlash class="flex-shrink-0 text-gray-300" />
            </span>
            
            <!-- If its the last item -->
            <span v-else class="truncate ...">{{ item.name.replace(/-/g," ") }}</span>
          </div>

        </li>
      </ol>
    </div>

    <!--CD (CT on 20210817): working version but messed up UI. Last crumb is cut, last 2 words of the child page is showing. -->
    <div class="hidden">
      <ol
      vocab="http://schema.org/"
      typeof="BreadcrumbList"
      class="flex mt-2 text-sm">
        <!-- Home Link -->
        <li class="mr-1">
          <nuxt-link :to="'/'" class="uppercase">Home</nuxt-link>
            <span v-if ="crumbs.length > 0" class="text-gray-400"> / </span>
        </li>
        <!-- Path items -->
        <li v-for="(item, i) in crumbs" :key="i" :class="['mr-1',item.classes]" class="truncate">

          <!-- If it's a dynamic page with slug -->
          <div v-if="item.name.includes(':slug') || item.name.includes(':id')">
            <!-- If it has a name -->
            <span class="uppercase" v-if="item.name">
              <!-- If its not the last item -->
              <span  v-if ="crumbs.length > i + 1">
                <nuxt-link v-if="item.name.length > 50" > {{ item.name.replace(/-/g," ").slice(0, 50) }} ... </nuxt-link>
                <nuxt-link v-else > {{ item.name.replace(/-/g," ") }}</nuxt-link>
              </span>
              <span v-if ="crumbs.length > i + 1" class="text-gray-400"> / </span>

              <!-- If it's the last item -->
              <span  v-else>
                <div class="last-item">{{ $store.state.breadcrumb.name.split(" ").splice(-2).join(" ") }}</div>
              </span>
            </span>

            <!-- If it has no name its only the / -->
            <span class="uppercase" v-else>
              <span v-if ="crumbs.length > i + 1" class="text-gray-400"> / </span>
            </span>
          </div>

          <!-- If it's not a dynamic page with slug -->
          <div v-else class="uppercase">
            <!-- If its not the last item -->
            <span  v-if="crumbs.length > i + 1">
              <nuxt-link :to="item.path">{{ item.name.replace(/-/g," ") }}</nuxt-link>
            </span>
            <span v-if ="item.path && crumbs.length > i + 1" class="text-gray-400"> / </span>
            
            <!-- If its the last item -->
            <span v-else class="last-item">{{ item.name.replace(/-/g," ").split(" ").splice(-2).join(" ") }}</span>
          </div>

        </li>
      </ol>
    </div>
  </nav>
</template>

<script>
export default {
  props:['item.name'],
  computed: {
    crumbs() {
      const crumbs = []

      this.$route.matched.map((item, i, { length }) => {
        const crumb = {}
        crumb.path = item.path
        crumb.name = item.path.substring(item.path.lastIndexOf('/') + 1);

        // is last item?
        if (i === length - 1) {
          // is param route? .../.../:id
          if (item.regex.keys.length > 0) {

            //add specific condition for dashboard pages so it won't skip Page name (ex. admin>listings)
            if(item.path.includes('dashboard/')){
              var crumbName =  item.path.replace(/\/[^/]*$/, '')
              if(item.path.includes('admin')){
                crumbs.push({
                  path: '/admin',
                  name: 'admin'
                })
                crumbs.push({
                  path: '/dashboard/admin/'+crumbName.split('/')[3],
                  name: crumbName.split('/')[3]
                })
              } else {
                crumbs.push({
                  path: '/dashboard/'+crumbName.split('/')[2],
                  name: crumbName.split('/')[2]
                })
              }
            }

            if(item.path.includes('/solutions') && item.path.split('/').length === 4){
                crumbs.unshift({
                  path: '/solutions',
                  name: 'SOLUTIONS'
                })
            }

            var crumbName =  item.path.replace(/\/[^/]*$/, '')
            crumbs.push({
              path: item.path.replace(/\/:[^/:]*$/, ''),
              name: crumbName.substring(crumbName.lastIndexOf('/') + 1)
            })

            crumb.path = this.$route.path
            crumb.name =item.path.substring(item.path.lastIndexOf('/') + 1), [
            crumb.path.match(/[^/]*$/)[0]
            ]
          } else if (item.regex.keys.length == 0 && item.name.includes('-')) {
            item.path.replace(/\/[^/]*$/, '')
            var crumbName =  item.path.replace(/\/[^/]*$/, '')
            crumbs.push({
              path: crumbName.substring(crumbName.lastIndexOf('/')),
              name: crumbName.substring(crumbName.lastIndexOf('/') + 1)
            })

            item.path.substring(item.path.lastIndexOf('/') + 1)
            crumb.path = this.$route.path
            crumb.name =item.path.substring(item.path.lastIndexOf('/') + 1), [
            crumb.path.match(/[^/]*$/)[0]
            ]
          }
          crumb.classes = 'text-gray-500'
        }

        if (crumb.name.length > 0) {
          crumbs.push(crumb)
        }else{
          if (i>0) {
            crumbs[i-1].classes = 'text-gray-500';
          }
        }

      })

      return crumbs
    }
  }
}
</script>