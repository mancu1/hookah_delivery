<template>
  <v-app-bar app color="white" class="headerHeight mx-0 px-0" fixed>
    <v-col class="mx-0 px-0">
      <v-row class="mx-0 px-0">
        <v-spacer class="col-xl-1 hidden-lg-and-down" />
        <div class="d-flex align-center">
          <v-btn
            class="px-sm-0 px-md-0 px-lg-3 px-xl-8"
            @click="scrollIn('service')"
            text
            ><span class="Text-Style-5 Text-Style-1-table">Услуги</span></v-btn
          >
          <v-btn
            class="px-sm-0 px-md-0 px-lg-5 px-xl-8"
            @click="scrollIn('price')"
            text
            ><span class="Text-Style-5 Text-Style-1-table">Цены</span></v-btn
          >
          <v-btn
            class="px-sm-0 px-md-0 px-lg-5 px-xl-8"
            @click="scrollIn('delivery')"
            text
            ><span class="Text-Style-5 Text-Style-1-table"
              >Доставка</span
            ></v-btn
          >
          <v-btn class="px-0" @click="scrollIn('form')" text
            ><span class="Text-Style-5 Text-Style-1-table"
              >Контакты</span
            ></v-btn
          >
        </div>
        <v-spacer class="hidden-lg-and-down" />
        <v-img :src="require('../assets/logo.svg')" class="logoSize" contain />
        <v-spacer class="hidden-lg-and-down" />
        <div class="d-flex align-center justify-center">
          <v-btn href="tel:+79961224970" text>
            <span class="Text-Style-4 Text-Style-2-table">
              +7 (996) 122-49-70
            </span>
          </v-btn>
          <v-btn
            @click="scrollIn('form')"
            rounded
            color="rgba(110,129,212,1)"
            class="buttonSize"
          >
            <span class="Text-Style-3 Text-Style-3-table mx-1"
              >Заказать кальян</span
            >
            <v-icon color="white" style="transform: rotate(90deg);" small
              >mdi-navigation</v-icon
            >
          </v-btn>
        </div>
        <v-spacer class="col-xl-1 hidden-lg-and-down" />
      </v-row>
    </v-col>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  methods: {
    scrollIn(name) {
      document.getElementById(name).scrollIntoView({
        block: "center",
        inline: "nearest",
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
@media screen and (min-width: 1280px) {
  .buttonSize {
    width: 250px;
    height: 50px;
  }
  .headerHeight {
    height: 100px;
  }
  .logoSize {
    height: 80px;
  }
}
@media screen and (min-width: 600px) and (max-width: 1279px) {
  .buttonSize {
    width: 100px;
    height: 20px;
  }
  .headerHeight {
    height: 40px;
  }
  .logoSize {
    height: 29px;
  }
}
</style>
