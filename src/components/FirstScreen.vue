<template>
  <v-img
    :src="require('../assets/goodAss.png')"
    :lazy-src="require('../assets/goodAss-min.jpg')"
    max-width="1920"
    class="align-center justify-center mt-4"
  >
    <v-container class="d-flex flex-column align-center justify-center">
      <v-flex mb-4 align-self-center>
        <h1 class="Text-Style text-center" style="margin-top: 185px;">
          Доставка кальяна на дом
        </h1>
        <h2 class="Text-Style-2 mx-auto my-4" style="max-width: 600px">
          Доставка готовых кальянов по городу Казань Кальянный сервис,
          обслуживание мероприятий Кальянный аутсорсинг
        </h2>
      </v-flex>
      <v-btn class="my-12" height="73" width="300" style="border-radius: 36px;">
        <span class="Text-Style-6" style="color: #03126f;"
          >ЗАКАЗАТЬ СЕБЕ КАЛЬЯН</span
        >
      </v-btn>
      <v-icon @click="scrollT" color="white" size="110" class="mt-12"
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
    scrollT() {
      //
    }
  }
};
</script>
