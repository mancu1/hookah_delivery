<template>
  <v-img
    :src="require('../assets/hookans.png')"
    max-width="1920"
    class="align-center justify-center mt-3"
  >
    <div style="width: 550px" class="grid align-center justify-center mx-auto">
      <v-flex class="d-flex justify-center align-center my-11">
        <span class="Text-Style">Контакты</span>
      </v-flex>
      <v-flex class="d-flex justify-center align-center my-1">
        <span class="Text-Style-2"
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
</style>
