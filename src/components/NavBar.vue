<template>
  <div>
    <v-app-bar color="white" style="z-index:7; position: relative;">
      <v-spacer class="hidden-md-and-down" />

      <router-link to="/services" class="btn hidden-md-and-down"
        ><v-btn class="px-sm-0 px-md-0 px-lg-3 px-xl-8" text>
          <span class="Text-Style-5 Text-Style-1-table">Услуги</span>
        </v-btn></router-link
      >
      <router-link to="/prices" class="btn hidden-md-and-down">
        <v-btn class="px-sm-0 px-md-0 px-lg-5 px-xl-8" text
          ><span class="Text-Style-5 Text-Style-1-table">Цены</span></v-btn
        ></router-link
      >
      <router-link to="/delivery" class="btn hidden-md-and-down"
        ><v-btn class="px-sm-0 px-md-0 px-lg-5 px-xl-8" text
          ><span class="Text-Style-5 Text-Style-1-table">Доставка</span></v-btn
        ></router-link
      >
      <router-link to="/contacts" class="btn hidden-md-and-down"
        ><v-btn class="px-0" text
          ><span class="Text-Style-5 Text-Style-1-table">Контакты</span></v-btn
        ></router-link
      >

      <router-link to="/" class="btn"
        ><v-img :src="require('../assets/logo.svg')" class="logoSize" contain
      /></router-link>

      <v-btn href="tel:+79961224970" text class="btn hidden-md-and-down">
        <span class="Text-Style-4 Text-Style-2-table Text-Style-3-mobile mx-n2">
          +7 (996) 122-49-70
        </span>
      </v-btn>
      <router-link to="/contacts" class="btn hidden-md-and-down"
        ><v-btn
          rounded
          color="rgba(110,129,212,1)"
          class="buttonSize hidden-sm-and-down"
        >
          <span class="Text-Style-3 Text-Style-3-table mx-1"
            >Заказать кальян</span
          >
          <v-icon color="white" style="transform: rotate(90deg);" small
            >mdi-navigation</v-icon
          >
        </v-btn></router-link
      >
      <v-spacer />
      <navigationDrawer class="hidden-lg-and-up" />
    </v-app-bar>
    <router-view />
  </div>
</template>

<script>
import navigationDrawer from "../components/navigationDrawer";

export default {
  name: "NavBar",
  components: { navigationDrawer }
};
</script>

<style scoped>
.btn {
  text-decoration: none;
}
@media screen and (min-width: 1280px) {
  .buttonSize {
    width: 250px;
    height: 50px;
  }
  .headerHeight {
    height: 100px;
  }
  .logoSize {
    height: 64px;
  }
}
@media screen and (min-width: 700px) and (max-width: 1279px) {
  .buttonSize {
    width: 125px;
    height: 20px;
  }
  .headerHeight {
    height: 64px !important;
  }
  .logoSize {
    height: 29px;
  }
}
@media screen and (max-width: 699px) {
  .headerHeight {
    height: 60px !important;
  }
  .logoSize {
    height: 35px;
  }
}
</style>
