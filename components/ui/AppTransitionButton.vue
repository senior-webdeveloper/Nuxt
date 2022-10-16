// CD (KO on 20210228): component used in the UI as part of another comonent

<template>
      <!--
        Close button, show/hide based on off-canvas menu state.
        Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
        Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
      -->
   <transition
      enter-active-class="duration-300 ease-in-out"
      enter-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-300 ease-in-out"
      leave-class="opacity-100"
      leave-to-class="opacity-0"
   >
    <slot></slot>
  </transition>
</template>
