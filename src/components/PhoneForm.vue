<template>
  <v-flex>
    <v-flex
      class="d-flex flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row justify-center align-center my-4"
      style="width: 100%"
    >
      <v-text-field
        id="form-size"
        class="form-size my-5"
        outlined
        style="border-radius: 25px"
        label="Номер тел"
        v-model="phoneNumber"
      />
      <v-btn
        class="mx-3 my-5 form-size"
        style="border-radius: 25px; border: solid 2px #6787d8"
        Outlined
        @click="sendMail()"
        ><span
          class="Text-Style-16 Text-Style-14-mobile Text-Style-20-table"
          style="color: #6787d8"
          >Оставить заявку</span
        ></v-btn
      >
    </v-flex>
    <p
      class="mb-12 hidden-sm-and-down"
      :class="
        dark
          ? 'Text-Style-8 Text-Style-21-table'
          : 'Text-Style-21 Text-Style-29-table'
      "
    >
      Наш менеджер обработает вашу заявку и обязательно перезвонит вам, для
      уточнения условий вашего заказа. Также вы можете
      <a href="tel:+79274625123" style="text-decoration: none"
        ><span class="Text-Style-20"
          >ускорить этот процесс и позвонить по номеру</span
        >
      </a>
      в шапке сайта.
    </p>
  </v-flex>
</template>

<script>
export default {
  name: "PhoneForm",
  props: {
    dark: Boolean
  },
  computed: {
    phoneNumber: {
      get() {
        return this.$store.phoneNumber;
      },
      set(newPhone) {
        this.$store.commit("setPhoneNumber", newPhone);
      }
    }
  },
  methods: {
    sendMail() {
      this.$store.dispatch("sendMail");
    }
  }
};
</script>

<style scoped>
@media screen and (min-width: 1280px) {
  .form-size {
    max-width: 240px;
    width: 100%;
    min-width: 200px;
    height: 50px !important;
  }
  #form-size {
    height: 50px !important;
    font-family: SFUIDisplay;
    font-size: 7px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.79;
    letter-spacing: 0.18px;
    text-align: left;
    color: rgba(1, 1, 1, 0.5);
  }
  .form-size label[for] {
    height: 50px !important;
    font-family: SFUIDisplay;
    font-size: 7px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.79;
    letter-spacing: 0.18px;
    text-align: left;
    color: rgba(1, 1, 1, 0.5);
  }
}
@media screen and (min-width: 700px) and (max-width: 1279px) {
  .form-size {
    padding: 0;
    margin: 0;
    max-width: 120px;
    height: 25px !important;
    font-size: 7px !important;
    width: 100%;
    min-width: 100px;
  }
  .form-size label[for] {
    height: 25px !important;
    font-size: 7px !important;
  }
  #form-size {
    height: 25px !important;
    font-size: 7px !important;
  }
  label {
    font-size: 7px !important;
  }
  label[for="form-size"] {
    font-size: 7px !important;
  }
  .v-label[for="form-size"] {
    font-size: 7px !important;
  }
}
@media screen and (max-width: 699px) {
  .form-size {
    padding: 0;
    margin: 0;
    max-width: 150px;
    height: 30px !important;
    font-size: 8px !important;
    width: 100%;
    min-width: 100px;
  }
  .form-size label[for] {
    height: 25px !important;
    font-size: 7px !important;
  }
  #form-size {
    height: 25px !important;
    font-size: 9px !important;
  }
  label {
    font-size: 9px !important;
  }
  label[for="form-size"] {
    font-size: 9px !important;
  }
  .v-label[for="form-size"] {
    font-size: 9px !important;
  }
  #price
    > div.v-responsive__content
    > div
    > div
    > div.flex.mt-3.mb-12.d-flex.flex-row.align-center.justify-center.mx-auto.form-block-size
    > div
    > div
    > div
    > div
    > div
    > div.v-input__slot
    > div
    > label {
    font-size: 9px !important;
  }
}
</style>
