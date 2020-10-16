<template>
  <div id="app">
      <div class="the_container pt-5" style="padding: 0px">
          <div class="sliding-background mx-0"></div>
      </div>
      <section class="hero is-white">
          <div class="hero-body pt-5 pb-5">
              <div class="container">
                  <h1 class="title is-size-1 has-text-primary">
                  Vlaaienslag
                  </h1>
                  <h1 class="subtitle has-text-primary">
                  Scouts Hellegat
                  </h1>
              </div>
          </div>

    </section >



    <section class="section pt-0" >
      <div class="container has-text-left" style="max-width: 810px">
        <div class="content px-5">
          <p>Dit jaar ziet onze vlaaienslag er echter iets anders uit, maar de taarten zijn even lekker! Je kan ze op deze website of telefonisch bestellen, en wij brengen ze réchtstreeks tot aan je deur. </p>

          <p>Wij leveren je taarten <b>aan huis</b> op <b>zaterdag 14 november </b>, of jij komt ze bij ons ophalen tussen 10u en 15u! Bij vragen can je ons steeds contacteren op <a href="mailto:vlaaienslag@scoutshellegat.be">vlaaienslag@scoutshellegat.be</a>.</p>

        </div>
         <div class="pretix-widget-compat has-text-left" event="https://tickets.scoutshellegat.be/vlaaienslag/">
            <noscript>
               <div class="pretix-widget">
                    <div class="pretix-widget-info-message">
                        JavaScript is disabled in your browser. To access our ticket shop without JavaScript, please <a target="_blank" rel="noopener" href="https://tickets.scoutshellegat.be/vlaaienslag/">click here</a>.
                    </div>
                </div>
            </noscript>
          </div>
   </div>
  </section>





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

.the_container {
  overflow: hidden;
}

.sliding-background {
  height: 100px;
  width: 2120px;
}

.sliding-background {
  background: url("assets/taarten_half.png")  repeat-x;
  height: 100px;
  width: 2120px; /* The image width times 3 */
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

.pretix-widget {
    border: 0px;

}



</style>
