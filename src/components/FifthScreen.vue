<template>
  <v-img
    :src="require('../assets/hookans.png')"
    max-width="1920"
    class="align-center justify-center"
  >
    <div class="contact-size grid align-center justify-center mx-auto">
      <v-flex class="d-flex justify-center align-center mt-12 mb-5">
        <span class="Text-Style Text-Style-mobile Text-Style-4-table mt-12"
          >Контакты</span
        >
      </v-flex>
      <v-flex class="d-flex justify-center align-center">
        <span class="Text-Style-2 Text-Style-2-mobile Text-Style-28-table"
          >Вы можете связаться с нашим менеджером по телефону или просто
          заполните форму для обратного звонка</span
        >
      </v-flex>
      <PhoneForm class="my-5" />
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
@media screen and (max-width: 1279px) {
  .contact-size {
    width: 260px;
  }
}
</style>
