// CD (KO on 20210228): component used in the UI as part of another comonent

<template>
    <!--
      Off-canvas menu, show/hide based on off-canvas menu state.

      Entering: "transition ease-in-out duration-300 transform"
        From: "-translate-x-full"
        To: "translate-x-0"
      Leaving: "transition ease-in-out duration-300 transform"
        From: "translate-x-0"
        To: "-translate-x-full"
    -->
   <transition
      enter-active-class="duration-500 ease-in-out transform sm:duration-700"
      enter-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="duration-500 ease-in-out transform sm:duration-700"
      leave-class="translate-x-0"
      leave-to-class="translate-x-full"
   >
    <slot></slot>
  </transition>
</template>
         