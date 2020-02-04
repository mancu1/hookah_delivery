<template>
  <v-app-bar app color="white" height="100" fixed>
    <v-spacer />
    <div class="d-flex align-center">
      <v-btn text><span class="Text-Style-5">Услуги</span></v-btn>
      <v-btn text><span class="Text-Style-5">Цены</span></v-btn>
      <v-btn text><span class="Text-Style-5">Доставка</span></v-btn>
      <v-btn text><span class="Text-Style-5">Контакты</span></v-btn>
    </div>
    <v-spacer />
    <v-img :src="require('../assets/logo.svg')" height="80" contain />
    <v-spacer />
    <v-btn href="tel:+79274625123" text>
      <span class="Text-Style-4">
        +7 (927) 462-51-23
      </span>
    </v-btn>
    <v-btn rounded color="rgba(110,129,212,1)" height="50" width="250">
      <span class="Text-Style-3 mx-1">Заказать кальян</span>
      <v-icon color="white" style="transform: rotate(90deg);" small
        >mdi-navigation</v-icon
      >
    </v-btn>
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped></style>
