<template>
  <v-img
    :src="require('../assets/goodAss.png')"
    :lazy-src="require('../assets/goodAss-min.jpg')"
    max-width="1920"
    class="align-center justify-center backgroundSize"
    style="z-index: 3;"
  >
    <v-container class="d-flex flex-column align-center justify-center">
      <v-flex align-self-center>
        <h1
          class="Text-Style Text-Style-4-table text-center mt-xl-12 mt-lg-12 mt-md-9 mt-sm-5 mt-xl-1"
        >
          Доставка кальяна на дом
        </h1>
        <h2 class="Text-Style-2 Text-Style-5-table text-width mx-auto my-4">
          Доставка готовых кальянов по городу Казань Кальянный сервис,
          обслуживание мероприятий Кальянный аутсорсинг
        </h2>
      </v-flex>
      <v-btn
        @click="scrollIn('form')"
        class="my-xl-12 my-lg-12 my-md-3 my-sm-2 callButton"
        style="border-radius: 36px;"
      >
        <span class="Text-Style-6 Text-Style-6-table" style="color: #03126f;"
          >ЗАКАЗАТЬ СЕБЕ КАЛЬЯН</span
        >
      </v-btn>
      <v-icon
        @click="scrollIn('form')"
        color="white"
        class="mt-xl-12 mt-lg-12 mt-md-5 mt-sm-3 arrow-size"
        >mdi-chevron-down</v-icon
      >
    </v-container>
  </v-img>
</template>

<script>
export default {
  name: "FirstScreen",

  data: () => ({
    link: "a"
  }),
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
  .backgroundSize {
    height: 870px;
  }
  .callButton {
    height: 73px !important;
    width: 300px;
  }
  .text-width {
    max-width: 600px;
  }
  .arrow-size {
    font-size: 100px !important;
  }
}
@media screen and (min-width: 600px) and (max-width: 1279px) {
  .backgroundSize {
    height: 340px;
  }
  .callButton {
    height: 30px !important;
    width: 126px;
  }
  .text-width {
    max-width: 230px;
  }
  .arrow-size {
    font-size: 30px !important;
  }
}
</style>
