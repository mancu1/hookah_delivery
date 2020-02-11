<template>
  <v-img
    :src="require('../assets/greyWave.png')"
    max-width="1920"
    class="align-center justify-center"
    style="z-index: 1; margin-top: -125px"
  >
    <v-flex
      class="d-flex flex-column max-parent-box mb-12 pb-12"
      style="margin-top: 235px"
    >
      <v-flex class=" mx-lg-auto mx-xl-auto">
        <v-flex mb-12 align-self-center class="d-flex flex-row mx-10">
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
            class="d-flex flex-column justify-center mx-lg-1 mx-xl-3"
            max-width="300"
            min-width="250"
            style="border-radius: 15px;"
            outlined
            v-for="hookah in hookahs"
            v-bind:key="hookah.id"
          >
            <v-card-text class="Text-Style-12 mt-5 pb-1" style="color: black">
              {{ hookah.text }}
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
              <v-flex
                class="d-flex flex-row justify-center align-center Text-Style-14"
              >
                <span>В чашу:</span>
                <v-menu>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      text
                      class="ma-0 pa-0"
                      v-on="on"
                      style="text-decoration: underline"
                      >{{ tobaccos[hookah.tobaccoId].text }}</v-btn
                    >
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(item, i) in tobaccos"
                      :key="i"
                      @click="
                        () => {
                          editTobacco(hookah.id, item.id);
                        }
                      "
                    >
                      <v-list-item-title>{{
                        tobaccos[i].text
                      }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-flex>
              <v-flex
                class="d-flex flex-row justify-center align-center Text-Style-14"
              >
                <span>В колбу:</span>
                <v-menu>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      text
                      class="ma-0 pa-0"
                      style="text-decoration: underline"
                      v-on="on"
                      >{{ liquids[hookah.liquidId].text }}</v-btn
                    >
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(item, i) in liquids"
                      :key="i"
                      @click="
                        () => {
                          editLiquid(hookah.id, item.id);
                        }
                      "
                    >
                      <v-list-item-title>{{
                        liquids[i].text
                      }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
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
        <v-flex
          my-6
          class="d-flex flex-row align-center justify-center mx-auto"
          style="max-width: 800px"
        >
          <v-card
            class="d-flex flex-column justify-center align-center"
            width="100%"
            style="border-radius: 15px"
          >
            <p class="my-7 Text-Style-12">
              Общая сумма вашего заказа:
              <span class="Text-Style-18">{{ totalCost }} рублей</span>
            </p>
            <span class="Text-Style-17" style="max-width: 65%"
              >ВНИМАНИЕ! В выходные и праздничные дни - минимальная сумма заказа
              составляет 1000Р</span
            >
            <PhoneForm class="col-8" v-bind:dark="true" />
          </v-card>
        </v-flex>
      </v-flex>
    </v-flex>
  </v-img>
</template>

<script>
import PhoneForm from "@/components/PhoneForm";
export default {
  name: "ThirdScreen",
  components: { PhoneForm },
  data: () => ({
    //
  }),
  computed: {
    phoneNumber: {
      get() {
        return this.$store.phoneNumber;
      },
      set(newPhone) {
        this.$store.commit("setPhoneNumber", newPhone);
      }
    },
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
      return this.$store.state.liquids.map(value => {
        let newText;
        if (value.cost) {
          newText = `${value.text} +${value.cost}р`;
        } else {
          newText = value.text;
        }
        return {
          ...value,
          text: newText
        };
      });
    },
    tobaccos() {
      return this.$store.state.tobaccos.map(value => {
        let newText;
        if (value.cost > 200) {
          newText = `${value.text} +${value.cost - 200}р`;
        } else {
          newText = value.text;
        }
        return {
          ...value,
          text: newText
        };
      });
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
    editLiquid(hookName, liquid) {
      // eslint-disable-next-line no-console
      console.log("hookName", hookName);
      // eslint-disable-next-line no-console
      console.log("liquid", liquid);
      this.$store.commit("editLiquid", { hookName, liquidId: liquid });
    },
    editTobacco(hookName, tobacco) {
      // eslint-disable-next-line no-console
      console.log("hookName", hookName);
      // eslint-disable-next-line no-console
      console.log("tobacco", tobacco);
      this.$store.commit("editTobacco", { hookName, tobaccoId: tobacco });
    },
    addHook(id) {
      this.$store.commit("addHook", id);
    },
    decHook(id) {
      this.$store.commit("decHook", id);
    },
    sendMail() {
      this.$store.dispatch("sendMail");
    }
  }
};
</script>

<style scoped></style>
