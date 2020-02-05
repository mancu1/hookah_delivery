<template>
  <v-img
    :src="require('../assets/greyWave.png')"
    max-width="1920"
    class="align-center justify-center"
    style="z-index: 1; margin-top: -125px"
  >
    <v-flex class="d-flex flex-column">
      <v-flex mb-12 style="margin: 0 135px">
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
        <v-flex my-6 class="d-flex flex-row justify-center">
          <v-card
            class="d-flex flex-column justify-center mx-3"
            max-width="300"
            min-width="250"
            style="border-radius: 15px;"
            outlined
            v-for="hookah in hookahs"
            v-bind:key="hookah.id"
          >
            <v-card-text class="Text-Style-12 mt-5 pb-1" style="color: black">
              {{ hookah.name }}
            </v-card-text>
            <v-card-text class="Text-Style-13 pt-1 mb-3" style="color: black">
              {{ hookah.description }}
            </v-card-text>
            <v-card-text class="Text-Style-15">
              {{
                hookah.fill
                  ? hookah.id === 3
                    ? hookah.cost + 400
                    : hookah.cost + 200
                  : hookah.cost
              }}
            </v-card-text>
            <v-card-actions class="d-flex flex-column" v-if="hookah.fill">
              <v-flex class="d-flex flex-row align-center">
                <span>В чашу:</span>
                <v-btn text class="mx-n3">{{
                  hookah.fill ? tobaccos[hookah.tobaccoId].name : ""
                }}</v-btn>
              </v-flex>
              <v-flex class="d-flex flex-row align-center">
                <span>В колбу:</span>
                <v-btn text class="mx-n3">{{
                  hookah.fill ? liquids[hookah.liquidId].name : ""
                }}</v-btn>
              </v-flex>
            </v-card-actions>
            <v-spacer v-else class="py-2" />
            <v-card-actions v-if="hookah.count > 0">
              <v-btn
                class="mx-auto"
                height="50"
                color="#6f97fc"
                style="border-radius: 25px;"
                outlined
                @click="decHook(hookah.id)"
              >
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <span>{{ hookah.count }}</span>
              <v-btn
                class="mx-auto"
                height="50"
                color="#6f97fc"
                style="border-radius: 25px;"
                outlined
                @click="addHook(hookah.id)"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-actions v-else>
              <v-btn
                class="mx-auto"
                height="50"
                color="#6f97fc"
                style="border-radius: 25px;"
                outlined
                @click="addHook(hookah.id)"
              >
                <span class="px-4">Добавить</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex my-6 class="d-flex flex-row align-center justify-center">
          <v-card>
            <v-card-title
              >Общая сумма вашего заказа: {{ totalCost }} рублей</v-card-title
            >
            <v-card-subtitle
              >ВНИМАНИЕ! В выходные и праздничные дни - минимальная сумма заказа
              составляет 1000Р</v-card-subtitle
            >
          </v-card>
        </v-flex>
      </v-flex>
    </v-flex>
  </v-img>
</template>

<script>
export default {
  name: "ThirdScreen",
  data: () => ({
    //
  }),
  computed: {
    hookahs() {
      return this.$store.state.hookahs.map(value => {
        const count = this.$store.state.cart[value.id].count;
        const details = value.fill
          ? this.$store.state.cart[value.id]
          : { count };
        return {
          ...value,
          ...details
        };
      });
    },
    liquids() {
      return this.$store.state.liquids;
    },
    tobaccos() {
      return this.$store.state.tobaccos;
    },
    totalCost() {
      return this.hookahs.reduce((acc, value) => {
        switch (value.id) {
          case 0: {
            return acc + value.count * value.cost;
          }
          case 1: {
            return acc + value.count * value.cost;
          }
          case 2: {
            return (
              acc +
              value.count *
                (this.liquids[value.liquidId].cost +
                  this.tobaccos[value.tobaccoId].cost) +
              (value.count ? value.cost : 0)
            );
          }
          case 3: {
            return (
              acc +
              value.count *
                (this.liquids[value.liquidId].cost +
                  this.tobaccos[value.tobaccoId].cost * 2) +
              (value.count ? value.cost : 0)
            );
          }
          case 4: {
            return (
              acc +
              (value.cost +
                this.liquids[value.liquidId].cost +
                this.tobaccos[value.tobaccoId].cost) *
                value.count
            );
          }
        }
      }, 0);
    }
  },
  methods: {
    addHook(id) {
      this.$store.commit("addHook", id);
    },
    decHook(id) {
      this.$store.commit("decHook", id);
    }
  }
};
</script>

<style scoped></style>
