<template>
  <v-img
    :src="require('../../assets/wave.png')"
    class="align-center  justify-sm-center justify-center justify-md-start justify-lg-start justify-xl-start mx-md-auto mx-lg-auto mx-xl-auto"
    style="z-index: 2;"
  >
    <v-flex class="d-flex flex-column max-parent-box mb-12 pb-12 mx-5 mt-12">
      <v-flex
        class="d-flex flex-row mt-4 align-sm-center justify-sm-center justify-center justify-md-start justify-lg-start justify-xl-start"
      >
        <v-img
          class="my-auto hidden-sm-and-down"
          :src="require('../../assets/squer.png')"
          max-width="68"
          height="4"
          contain
        />
        <div class="d-flex align-center justify-center">
          <span
            class="Text-Style-9 Text-Style-8-table Text-Style-4-mobile mx-lg-6 mx-xl-8 mx-md-5 mx-sm-3 mx-xs-0"
            >Услуги</span
          >
        </div>
        <v-btn
          color="#6787d8"
          class=" mx-lg-6 mx-xl-8 mx-md-5 mx-sm-3 mx-xs-0 servise-button hidden-sm-and-down"
          rounded
        >
          <span
            class="Text-Style-3 Text-Style-7-table mx-lg-6 mx-xl-8 mx-md-5 mx-sm-3 mx-xs-0"
            >ДОСТАВКА КАЛЬЯНА</span
          >
        </v-btn>
        <v-btn
          color="#6787d8"
          class=" mx-lg-6 mx-xl-8 mx-md-5 mx-sm-3 mx-xs-0 servise-button hidden-sm-and-down"
          rounded
        >
          <span
            class="Text-Style-3 Text-Style-7-table mx-lg-6 mx-xl-8 mx-md-5 mx-sm-3 mx-xs-0"
            >Обслуживание мероприятий</span
          >
        </v-btn>
        <v-btn
          color="#6787d8"
          class=" mx-lg-6 mx-xl-8 mx-md-5 mx-sm-3 mx-xs-0 servise-button hidden-sm-and-down"
          rounded
        >
          <span
            class="Text-Style-3 Text-Style-7-table mx-lg-6 mx-xl-8 mx-md-5 mx-sm-3 mx-xs-0"
            >Кальянный аутсорсинг</span
          >
        </v-btn>
      </v-flex>
      <Services />
    </v-flex>
  </v-img>
</template>

<script>
import Services from "./Services";
export default {
  name: "SecondScreen",
  components: { Services }
};
</script>

<style scoped>
@media screen and (min-width: 1280px) {
  .servise-button {
    height: 50px !important;
  }
}

@media screen and (min-width: 600px) and (max-width: 1279px) {
  .servise-button {
    height: 25px !important;
  }
}
</style>
