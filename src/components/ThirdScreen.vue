<template>
  <v-img
    :src="require('../assets/greyWave.png')"
    max-width="1920"
    class="align-center justify-center"
    style="z-index: 1; margin-top: -165px"
  >
    <v-container class="d-flex flex-column">
      <v-flex ma-4>
        <v-flex mb-12 align-self-center class="d-flex flex-row">
          <v-img
            class="my-auto"
            :src="require('../assets/squer.png')"
            max-width="68"
            height="4"
            contain
          />
          <div class="d-flex ">
            <span class="Text-Style-9 mx-12">Цены на услуги</span>
          </div>
        </v-flex>
        <v-flex my-6 class="d-flex flex-row align-center justify-center">
          <v-card class="mx-6">
            <v-card-title>Пустой кальян</v-card-title>
            <v-card-subtitle>(самовывоз)</v-card-subtitle>
          </v-card>
          <v-card class="mx-6">
            <v-card-title>Пустой кальян</v-card-title>
            <v-card-subtitle>(самовывоз)</v-card-subtitle>
          </v-card>
          <v-card class="mx-6">
            <v-card-title>Пустой кальян</v-card-title>
            <v-card-subtitle>(самовывоз)</v-card-subtitle>
          </v-card>
          <v-card class="mx-6">
            <v-card-title>Пустой кальян</v-card-title>
            <v-card-subtitle>(самовывоз)</v-card-subtitle>
          </v-card>
          <v-card class="mx-6">
            <v-card-title>Пустой кальян</v-card-title>
            <v-card-subtitle>(самовывоз)</v-card-subtitle>
          </v-card>
        </v-flex>
        <v-flex my-6 class="d-flex flex-row align-center justify-center">
          <v-card>
            <v-card-title>Общая сумма вашего заказа: 0 рублей</v-card-title>
          </v-card>
        </v-flex>
      </v-flex>
    </v-container>
  </v-img>
</template>

<script>
export default {
  name: "ThirdScreen",
  data: () => ({
    hookahs: [
      {
        name: "Путой кальян",
        description: "(самовывоз)",
        cost: 600
      },
      {
        name: "Путой кальян",
        description: "(доставка)",
        cost: 800
      },
      {
        name: "Кальян с забивкой",
        description: "(Глиняная чаша)",
        cost: 1000
      },
      {
        name: "Кальян с забивкой",
        description: "(2 Глиняные чаши)",
        cost: 1200
      },
      {
        name: "Кальян на фрукте",
        description: "(Ананас)",
        cost: 1500
      }
    ],
    tobaccos: [
      {
        name: "malazia miks",
        cost: 0
      },
      {
        name: "cobra",
        cost: 0
      },
      {
        name: "Adalia",
        cost: 0
      },
      {
        name: "Sherbetli",
        cost: 0
      },
      {
        name: "Woodu",
        cost: 0
      },
      {
        name: "Dark side",
        cost: 300
      },
      {
        name: "Element",
        cost: 300
      },
      {
        name: "Duft",
        cost: 200
      }
    ]
  })
};
</script>

<style scoped></style>
