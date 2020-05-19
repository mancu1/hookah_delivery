<template>
  <v-flex class="d-flex flex-column max-parent-box my-8 py-8">
    <v-flex class="d-flex flex-column max-parent-box mb-12 mx-5">
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
        <div
          class="my-4 d-flex align-center justify-sm-center justify-center justify-md-start justify-lg-start justify-xl-start"
        >
          <span
            class="Text-Style-9 Text-Style-8-table Text-Style-4-mobile mx-lg-8 mx-xl-8 mx-md-7 mx-sm-3 mx-xs-0"
            >ДОСТАВКА</span
          >
        </div>
        <div class="hidden-sm-and-down">
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
  components: { Delivery },
};
</script>

<style scoped></style>
