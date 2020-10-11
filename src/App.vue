<template>
  <div id="app">
      <div class="container pt-5">
          <div class="sliding-background"></div>
      </div>
      <section class="hero is-white">
          <div class="hero-body">
              <div class="container">
                  <h1 class="title is-size-1 has-text-primary">
                  Vlaaienslag
                  </h1>
                  <h1 class="subtitle has-text-primary">
                  Scouts Hellegat
                  </h1>
              </div>
          </div>

    </section>
         <b-tabs type="is-boxed" position="is-centered">
              <b-tab-item label="Bestel nu" class="has-text-left">
                 <div class="pretix-widget-compat" skip-ssl-check event="https://tickets.scoutshellegat.be/vlaaienslag/">
                    <noscript>
                       <div class="pretix-widget">
                            <div class="pretix-widget-info-message">
                                JavaScript is disabled in your browser. To access our ticket shop without JavaScript, please <a target="_blank" rel="noopener" href="https://tickets.scoutshellegat.be/vlaaienslag/">click here</a>.
                            </div>
                        </div>
                    </noscript>
                  </div>

              </b-tab-item>
              <b-tab-item label="Onze taarten">

                Wij hebben veel taarten in ons assortiment!

              </b-tab-item>
    </b-tabs>



  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.title{
     font-family: Didot, Helvetica, Arial, 'serif';
  }

.container {
  overflow: hidden;
}

.sliding-background {
  height: 100px;
  width: 1590px;
}

.sliding-background {
  background: url("assets/taarten_half.png")  repeat-x;
  height: 100px;
  width: 1590px; /* The image width times 3 */
  animation: slide 40s linear infinite;
}

@keyframes slide {
  0%{
    transform: translate3d(0, 0, 0);
  }
  100%{
    transform: translate3d(-530px, 0, 0); /* The image width */
  }
}



</style>
