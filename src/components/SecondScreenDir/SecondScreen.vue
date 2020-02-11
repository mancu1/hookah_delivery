<template>
  <v-img
    :src="require('../../assets/wave.png')"
    class="align-center justify-center mx-md-auto mx-lg-auto mx-xl-auto"
    style="z-index: 2;"
  >
    <v-flex class="d-flex flex-column max-parent-box mb-12 pb-12">
      <v-flex class="d-flex flex-row mx-lg-auto mx-xl-auto">
        <v-img
          class="my-auto"
          :src="require('../../assets/squer.png')"
          max-width="68"
          height="4"
          contain
        />
        <div class="d-flex align-center justify-center">
          <span class="Text-Style-9 mx-12">Услуги</span>
        </div>
        <v-btn color="#6787d8" class=" mx-6" height="50" rounded>
          <span class="Text-Style-3 mx-7">ДОСТАВКА КАЛЬЯНА</span>
        </v-btn>
        <v-btn color="#6787d8" class=" mx-7" height="50" rounded>
          <span class="Text-Style-3 mx-5">Обслуживание мероприятий</span>
        </v-btn>
        <v-btn color="#6787d8" class=" mx-7" height="50" rounded>
          <span class="Text-Style-3 mx-5">Кальянный аутсорсинг</span>
        </v-btn>
      </v-flex>
      <Services class="max-size-block mx-lg-auto mx-xl-auto" />
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

<style scoped></style>
