<template>
  <v-img
    :src="require('../assets/hookans.png')"
    max-width="1920"
    class="align-center justify-center mt-3"
  >
    <div class="contact-size grid align-center justify-center mx-auto">
      <v-flex
        class="d-flex justify-center align-center my-xl-11 my-lg-10 my-md-8 my-sm-5 my-xs-3"
      >
        <span class="Text-Style Text-Style-4-table">Контакты</span>
      </v-flex>
      <v-flex class="d-flex justify-center align-center my-1">
        <span class="Text-Style-2 Text-Style-28-table"
          >Вы можете связаться с нашим менеджером по телефону или просто
          заполните форму для обратного звонка</span
        >
      </v-flex>
      <PhoneForm />
    </div>
  </v-img>
</template>

<script>
import PhoneForm from "@/components/PhoneForm";
export default {
  name: "FifthScreen",
  components: { PhoneForm },
  computed: {
    phoneNumber: {
      get() {
        return this.$store.phoneNumber;
      },
      set(newPhone) {
        this.$store.commit("setPhoneNumber", newPhone);
      }
    }
  }
};
</script>

<style scoped>
.grid {
  display: grid;
}

@media screen and (min-width: 1280px) {
  .contact-size {
    width: 500px;
  }
}

@media screen and (min-width: 600px) and (max-width: 1279px) {
  .contact-size {
    width: 350px;
  }
}
</style>
