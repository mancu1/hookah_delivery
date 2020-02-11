<template>
  <v-flex>
    <v-flex class="d-flex flex-row justify-center my-7" style="width: 100%">
      <v-text-field
        class="mx-3 form-size"
        style="border-radius: 25px"
        label="Номер Телефона"
        solo
        v-model="phoneNumber"
      />
      <v-btn
        class="mx-3 form-size"
        style="border-radius: 25px; border: solid 2px #6787d8"
        Outlined
        height="50px"
        @click="sendMail()"
        ><span class="Text-Style-16" style="color: #6787d8"
          >Оставить заявку</span
        ></v-btn
      >
    </v-flex>
    <p class="mb-12" :class="dark ? 'Text-Style-8' : 'Text-Style-21'">
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
.form-size {
  max-width: 240px;
  width: 100%;
  min-width: 200px;
}
</style>
