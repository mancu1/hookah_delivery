<template>
  <v-img
    :src="require('../assets/greyWave.png')"
    max-width="1920"
    class="align-center justify-center"
    style="z-index: 1; margin-top: -125px"
  >
    <v-flex
      class="d-flex flex-column max-parent-box mb-xl-10 mb-lg-10 pb-xl-10 pb-lg-10 "
      style="margin-top: 165px"
    >
      <v-flex
        class=" justify-sm-center justify-center justify-md-start justify-lg-start justify-xl-start"
      >
        <v-flex
          mb-12
          align-self-center
          class="d-flex flex-row mx-10  justify-sm-center justify-center justify-md-start justify-lg-start justify-xl-start"
        >
          <v-img
            class="my-auto hidden-sm-and-down"
            :src="require('../assets/squer.png')"
            max-width="68"
            height="4"
            contain
          />
          <div
            class="d-flex justify-sm-center justify-center justify-md-start justify-lg-start justify-xl-start"
          >
            <span
              class="Text-Style-9 Text-Style-10-mobile Text-Style-13-table mx-12"
              >Цены на услуги</span
            >
          </div>
        </v-flex>
        <v-flex my-6 class="d-flex column-row justify-center">
          <v-card
            class="d-flex flex-column justify-center mx-3 card-size mt-5"
            style="border-radius: 15px;"
            outlined
            v-for="hookah in hookahs"
            v-bind:key="hookah.id"
          >
            <v-card-text
              class="Text-Style-12 Text-Style-11-mobile Text-Style-14-table mt-xl-3 mt-lg-3 mt-md-2 mt-sm-1 mt-xs-1 pb-1"
              style="color: black"
            >
              {{ hookah.text }}
            </v-card-text>
            <v-card-text
              class="Text-Style-13 Text-Style-12-mobile Text-Style-15-table pt-1 mb-xl-3 mb-lg-3 mb-md-2 mb-sm-1 mb-xs-1"
              style="color: black"
            >
              {{ hookah.description }}
            </v-card-text>
            <v-card-text
              class="Text-Style-15 Text-Style-13-mobile Text-Style-16-table py-xl-3 py-lg-3 py-md-1 py-sm-0 py-xs-0"
            >
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
                class="d-flex flex-row justify-center align-center Text-Style-14 Text-Style-5-mobile Text-Style-36-table"
              >
                <span>В чашу:</span>
                <v-menu>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      small
                      text
                      class="ma-0 pa-0 Text-Style-36-table Text-Style-5-mobile"
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
                      <v-list-item-title
                        class="Text-Style-36-table Text-Style-5-mobile"
                        >{{ tobaccos[i].text }}</v-list-item-title
                      >
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-flex>
              <v-flex
                class="d-flex flex-row justify-center align-center Text-Style-5-mobile Text-Style-14 Text-Style-36-table"
              >
                <span>В колбу:</span>
                <v-menu>
                  <template v-slot:activator="{ on }">
                    <v-btn
                      small
                      text
                      class="ma-0 pa-0"
                      style="text-decoration: underline"
                      v-on="on"
                      ><span class="Text-Style-36-table Text-Style-5-mobile">
                        {{ liquids[hookah.liquidId].text }}
                      </span>
                    </v-btn>
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
                      <v-list-item-title
                        class="Text-Style-36-table Text-Style-5-mobile"
                        >{{ liquids[i].text }}</v-list-item-title
                      >
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-flex>
            </v-card-actions>
            <v-spacer v-else class="py-2" />
            <v-card-actions v-if="hookah.count > 0">
              <v-btn
                class="mx-auto icon-buttons-size"
                :small="small"
                color="#6f97fc"
                style="border-radius: 25px;"
                outlined
                @click="decHook(hookah.id)"
              >
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <span>{{ hookah.count }}</span>
              <v-btn
                class="mx-auto icon-buttons-size"
                :small="small"
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
                class="mx-auto action-buttons-size"
                :small="small"
                color="#6f97fc"
                style="border-radius: 25px;"
                outlined
                @click="addHook(hookah.id)"
              >
                <span class="Text-Style-14-mobile px-4">Добавить</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex
          class="mt-3 mb-12 d-flex flex-row align-center justify-center mx-auto form-block-size"
        >
          <v-card
            class="d-flex flex-column justify-center align-center"
            width="100%"
            style="border-radius: 15px"
          >
            <p
              class=" mx-2 my-4 Text-Style-12 Text-Style-14-table Text-Style-5-mobile text-center"
            >
              Общая сумма вашего заказа:
              <br class="hidden-md-and-up" />
              <span
                class="Text-Style-18 Text-Style-17-table Text-Style-15-mobile"
                >{{ totalCost }} рублей</span
              >
            </p>
            <span
              class="Text-Style-17 Text-Style-19-table hidden-sm-and-down"
              style="max-width: 65%"
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
  data() {
    return {
      windowsWidth: window.innerWidth
    };
  },
  created() {
    window.onresize = () => {
      this.windowsWidth = window.innerWidth;
    };
  },
  computed: {
    extraSmall() {
      return this.windowsWidth < 700 && this.windowsWidth >= 0;
    },
    small() {
      return this.windowsWidth < 1280 && this.windowsWidth >= 700;
    },
    medium() {
      return this.windowsWidth >= 1280;
    },
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

<style scoped>
@media screen and (min-width: 1280px) {
  .card-size {
    max-width: 300px;
    min-width: 250px;
  }
  .action-buttons-size {
    height: 50px;
    width: 173px;
  }
  .icon-buttons-size {
    height: 50px;
    width: 70px;
  }
  .form-block-size {
    width: 800px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1279px) {
  .card-size {
    max-width: 150px;
    min-width: 120px;
  }
  .action-buttons-size {
    height: 25px;
    width: 85px;
  }
  .icon-buttons-size {
    height: 50px;
    width: 40px;
  }
  .form-block-size {
    width: 429px;
  }
}
@media screen and (max-width: 599px) {
  .card-size {
    max-width: 220px;
    width: 220px;
    min-width: 200px;
  }
  .action-buttons-size {
    height: 25px;
    width: 85px;
  }
  .icon-buttons-size {
    height: 50px;
    width: 40px;
  }
  .form-block-size {
    max-width: 220px;
    min-width: 200px;
  }
}
</style>
