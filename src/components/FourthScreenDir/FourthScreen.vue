<template>
  <v-flex class="d-flex flex-column max-parent-box my-8 py-8">
    <v-flex class=" mx-lg-auto mx-xl-auto mx-5">
      <v-flex mb-12 align-self-center class="d-flex flex-row mx-0">
        <v-img
          class="my-auto"
          :src="require('../../assets/squer.png')"
          max-width="68"
          height="4"
          contain
        />
        <div class="d-flex align-center justify-center">
          <span class="Text-Style-9 Text-Style-23-table mx-12">ДОСТАВКА</span>
        </div>
        <div>
          <span class="Text-Style-19 Text-Style-24-table"
            >НАШИ УСЛОВИЯ ДОСТАКИ</span
          >
        </div>
      </v-flex>
      <Delivery class="max-size-block mx-lg-auto mx-xl-auto" />
    </v-flex>
  </v-flex>
</template>

<script>
import Delivery from "./Delivery";
export default {
  name: "FourthScreen",
  components: { Delivery }
};
</script>

<style scoped></style>
