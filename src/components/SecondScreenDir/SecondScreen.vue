<template>
  <v-img
    :src="require('../../assets/wave.png')"
    max-width="1920"
    class="align-center justify-center mt-3"
    style="z-index: 2;"
  >
    <v-container class="d-flex flex-column align-center justify-center">
      <v-flex mb-12 align-self-center>
        <v-flex mb-12 align-self-center class="d-flex flex-row">
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
            <span class="Text-Style-3 mx-4">ДОСТАВКА КАЛЬЯНА</span>
          </v-btn>
          <v-btn color="#6787d8" class=" mx-7" height="50" rounded>
            <span class="Text-Style-3 mx-4">Обслуживание мероприятий</span>
          </v-btn>
          <v-btn color="#6787d8" class=" mx-7" height="50" rounded>
            <span class="Text-Style-3 mx-4">Кальянный аутсорсинг</span>
          </v-btn>
        </v-flex>
        <Services />
      </v-flex>
    </v-container>
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
