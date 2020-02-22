<template>
  <v-flex class="d-flex flex-row my-5 mx-5">
    <div class="delivery-text-size">
      <span class="Text-Style-11 Text-Style-25-table">
        Мы стараемся постоянно улучшаться для вас, в том числе и в доставке!
        Надеюсь мы сможем вам угодить ;)
      </span>
    </div>
    <div
      class="d-flex flex-column align-center justify-between mx-3 delivery-img-size"
      style="align-self: end"
    >
      <v-img
        :src="require('../../assets/delivery/wait.png')"
        class="img-height"
        contain
      />
      <span class="Text-Style-10 Text-Style-27-table text-center"
        >Время доставки?</span
      >
      <span class="Text-Style-8 Text-Style-11-table text-center">
        По Казани – 40 минут, по остальной территории время доставки необходимо
        уточнять у оператора
      </span>
    </div>
    <v-spacer />
    <div
      class="d-flex flex-column align-center justify-between mx-3 delivery-img-size"
      style="align-self: end"
    >
      <v-img
        :src="require('../../assets/delivery/lost.png')"
        class="img-height"
        contain
      />
      <span class="Text-Style-10 Text-Style-27-table text-center"
        >Куда доставляете?</span
      >
      <span class="Text-Style-8 Text-Style-11-table text-center">
        По г. Казань (бесплатно) и в пределах 30км (уточняйте у оператора)
      </span>
    </div>
    <v-spacer />
    <div
      class="d-flex flex-column align-center justify-between mx-3 delivery-img-size"
      style="align-self: end"
    >
      <v-img
        :src="require('../../assets/delivery/box (1).png')"
        class="img-height"
        contain
      />
      <span class="Text-Style-10 Text-Style-27-table text-center"
        >Сумма заказа?</span
      >
      <span class="Text-Style-8 Text-Style-11-table text-center">
        Минимальный заказ – от 700 рублей; в пятницу, субботу, праздничные дни и
        в утреннее время (с 04-00 до 8-00) – от 1000 рублей.
      </span>
    </div>
  </v-flex>
</template>

<script>
export default {
  name: "Services"
};
</script>

<style scoped>
@media screen and (min-width: 1280px) {
  .delivery-text-size {
    max-width: 320px;
    width: 100%;
  }
  .img-height {
    height: 93px;
  }
  .delivery-img-size {
    width: 280px;
  }
}
@media screen and (min-width: 700px) and (max-width: 1279px) {
  .delivery-text-size {
    max-width: 165px;
    width: 100%;
  }
  .img-height {
    height: 42px;
  }
  .delivery-img-size {
    width: 150px;
  }
}
</style>
