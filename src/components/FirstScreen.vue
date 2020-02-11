<template>
  <v-img
    :src="require('../assets/goodAss.png')"
    :lazy-src="require('../assets/goodAss-min.jpg')"
    max-width="1920"
    height="870"
    class="align-center justify-center"
    style="z-index: 3;"
  >
    <v-container class="d-flex flex-column align-center justify-center">
      <v-flex mb-4 align-self-center>
        <h1 class="Text-Style text-center" style="margin-top: 180px;">
          Доставка кальяна на дом
        </h1>
        <h2 class="Text-Style-2 mx-auto my-4" style="max-width: 600px">
          Доставка готовых кальянов по городу Казань Кальянный сервис,
          обслуживание мероприятий Кальянный аутсорсинг
        </h2>
      </v-flex>
      <v-btn
        @click="scrollIn('form')"
        class="my-12"
        height="73"
        width="300"
        style="border-radius: 36px;"
      >
        <span class="Text-Style-6" style="color: #03126f;"
          >ЗАКАЗАТЬ СЕБЕ КАЛЬЯН</span
        >
      </v-btn>
      <v-icon @click="scrollIn('form')" color="white" size="110" class="mt-11"
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
