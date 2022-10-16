<template>
    <div>
        <splide :options="options">
        <splide-slide>
            <h1>App Slider Demo 1</h1>
            <!-- <img src="../assets/img/mw-logo.png" alt="">         -->
        </splide-slide>
        <splide-slide>
            <h1>App Slider Demo 2</h1> 
            <!-- <img src="../assets/img/mw-logo.png" alt="">         -->
        </splide-slide>
        <splide-slide>
            <h1>App Slider Demo 3</h1> 
            <!-- <img src="../assets/img/mw-logo.png" alt="">         -->
        </splide-slide>
        </splide>
    </div>
</template>

<script>
  export default {
      data() {
          return {
              options: {
                  rewind : true,
                  width  : 800,
                  perPage: 2,
                  gap    : '1rem',
                  
              },
          };
      },
  }
</script>