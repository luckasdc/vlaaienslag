<template>
  <div id="app">
      <div class="the_container pt-5" style="padding: 0px">
          <div class="sliding-background mx-0"></div>
      </div>
      <section class="hero is-white has-text-centered">
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
      <div class="container is-mobile" style="max-width: 810px">
        <div class="content has-text-left px-5">
          <p>Welkom bij de <b>jaarlijkse vlaaienslag </b> van Scouts Hellegat! Elk jaar gaan we deur aan deur met onze leden en verkopen we heerlijke limburgse vlaaien. Dit jaar zal het er een beetje anders uitzien, maar geen paniek: de scouts zal u zeker van uw hoogverwachte jaarlijkse taart voorzien.</p>

          <p>Dit jaar leveren wij je taarten contactloos <b>aan huis</b> op <b>zaterdag 14 november</b> tussen 10u en 17u, of kom je ze die dag aan onze scoutslokalen ophalen tussen 10u en 15u!</p>
          <p>Omdat we dit jaar onze taarten via een online platform verkopen, zijn we genoodzaakt een servicekost van 0.60 euro te vragen. Hiermee laten we de website waar u nu naar kijkt vlotjes draaien en krijgt u na het afrekenen een mailtje in uw mailbox waarop alle details van uw bestelling terug te vinden zijn. Bij vragen kan je ons steeds contacteren op <a href="mailto:vlaaienslag@scoutshellegat.be">vlaaienslag@scoutshellegat.be</a>. Bedankt voor uw begrip.</p>


        </div>
        <div class="pretix-widget-compat" event="https://tickets.scoutshellegat.be/vlaaienslag/"> </div>
        <noscript>
           <div class="pretix-widget ">
                <div class="pretix-widget-info-message">
                    JavaScript is disabled in your browser. To access our ticket shop without JavaScript, please <a target="_blank" rel="noopener" href="https://tickets.scoutshellegat.be/vlaaienslag/">click here</a>.
                </div>
            </div>
        </noscript>
   </div>
  </section>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Een jaarlijkse actie van © <a href="https://scoutshellegat.be/">Scouts Hellegat</a> ⚜️ Keep it safe ❤️
        </p>
      </div>
    </footer>





  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="scss">


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
    border: 0px solid #3c4c60;

  .pretix-widget-info-message  {
    border: 1px solid #3c4c60;
    color: #3c4c60;
    margin-left:  10px;
    margin-right: 10px;
}
}
.pretix-widget-info-message  {
  border: #3c4c60;
  color: #3c4c60;
}

.pretix-widget-attribution {
  display: none;
}



</style>
