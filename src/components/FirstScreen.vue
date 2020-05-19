<template>
  <v-img
    :src="require('../assets/goodAss.png')"
    :lazy-src="require('../assets/goodAss-min.jpg')"
    max-width="1920"
    class="align-center justify-center backgroundSize"
    style="z-index: 3;"
  >
    <v-container class="d-flex flex-column align-center justify-center">
      <v-flex align-self-center class="my-4">
        <h1
          class="Text-Style Text-Style-mobile Text-Style-4-table text-center mt-9 mt-xl-12 mt-lg-12 mt-md-9 mt-sm-9 mt-xl-9"
        >
          Доставка кальяна на дом
        </h1>
        <h2
          class="Text-Style-2 Text-Style-2-mobile Text-Style-5-table text-width mx-auto my-5"
        >
          Доставка готовых кальянов по городу Казань Кальянный сервис,
          обслуживание мероприятий Кальянный аутсорсинг
        </h2>
      </v-flex>
      <v-btn
        @click="goToCall('form')"
        class="my-xl-12 my-lg-12 my-md-3 my-sm-3 my-3 callButton"
        style="border-radius: 36px;"
      >
        <span
          class="Text-Style-6 Text-Style-6-table Text-Style-3-mobile"
          style="color: #03126f;"
          >ЗАКАЗАТЬ СЕБЕ КАЛЬЯН</span
        >
      </v-btn>
      <v-icon
        @click="scrollIn('form')"
        color="white"
        class="mt-xl-12 mt-lg-12 mt-md-5 mt-sm-5 my-2 arrow-size"
        >mdi-chevron-down</v-icon
      >
    </v-container>
  </v-img>
</template>

<script>
export default {
  name: "FirstScreen",

  data: () => ({
    link: "a",
  }),
  methods: {
    scrollIn(name) {
      if (this.$route.path === "/") {
        document.getElementById(name).scrollIntoView({
          block: "center",
          inline: "nearest",
          behavior: "smooth",
        });
      } else {
        document.getElementById("scroll").scrollIntoView({
          block: "center",
          inline: "nearest",
          behavior: "smooth",
        });
      }
    },
    goToCall(name) {
      if (this.$route.path === "/") {
        document.getElementById(name).scrollIntoView({
          block: "center",
          inline: "nearest",
          behavior: "smooth",
        });
      } else {
        this.$router.push("/contacts");
      }
    },
  },
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
    width: 145px;
  }
  .text-width {
    max-width: 230px;
  }
  .arrow-size {
    font-size: 30px !important;
  }
}

@media screen and (max-width: 599px) {
  .backgroundSize {
    height: 400px;
  }
  .callButton {
    height: 45px !important;
    width: 187px;
  }
  .text-width {
    max-width: 230px;
  }
  .arrow-size {
    font-size: 35px !important;
  }
}
</style>
