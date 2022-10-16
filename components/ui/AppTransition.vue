// CD (KO on 20210228): component used in the UI as part of another comonent

<template>
  <!-- <transition
    enter-active-class="duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  > -->
   <transition
      enter-active-class="duration-300 ease-out"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-300 ease-in"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
   >
    <slot></slot>
  </transition>
</template>
