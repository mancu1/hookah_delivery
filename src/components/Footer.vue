<template>
  <v-flex class="d-flex flex my-5">
    <div class="col-2"></div>
    <div
      class=" d-md-flex d-lg-flex d-xl-flex hidden-sm-and-down justify-center align-center"
    >
      <span class="Text-Style-22 Text-Style-31-table"
        >Звоните на контактный номер:</span
      >
    </div>
    <a
      class="col-7 col-sm-7 col-md-2 col-lg-2 col-xl-2"
      style="text-decoration: none"
      href="tel:+79961224970"
      ><span style="color: #7199d8" class="Text-Style-4 Text-Style-32-table"
        >+7 (996) 122-49-70</span
      ></a
    >
    <v-spacer />
    <div
      class="col-3 d-md-flex d-lg-flex d-xl-flex hidden-sm-and-down justify-center align-center"
    >
      <span class="Text-Style-22 Text-Style-31-table"
        >А также следите за нашими соц. сетями:</span
      >
    </div>
    <a
      class="mr-4 mt-3"
      style="text-decoration: none; color: #7199d8;"
      href="#"
    >
      <v-img
        style="color: #7199d8"
        height="30px"
        width="30px"
        :src="require('../assets/instagram.png')"
    /></a>
    <a class=" mt-3" style="text-decoration: none; color: #7199d8;" href="#">
      <v-img
        style="color: #7199d8;"
        height="30px"
        width="30px"
        :src="require('../assets/vk.png')"
    /></a>
    <v-spacer />
  </v-flex>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped></style>
