<template>
  <v-flex class="d-flex flex-row my-12">
    <div style="width: 320px">
      <span class="Text-Style-11">
        Мы стараемся постоянно улучшаться для вас, в том числе и в доставке!
        Надеюсь мы сможем вам угодить ;)
      </span>
    </div>
    <div
      class="d-flex flex-column align-center justify-between mx-3"
      style="align-self: end; width: 280px"
    >
      <v-img
        :src="require('../../assets/delivery/wait.png')"
        height="93"
        contain
      />
      <span class="Text-Style-10 text-center">Время доставки?</span>
      <span class="Text-Style-8 text-center">
        По Казани – 40 минут, по остальной территории время доставки необходимо
        уточнять у оператора
      </span>
    </div>
    <div
      class="d-flex flex-column align-center justify-between mx-3"
      style="align-self: end; width: 280px"
    >
      <v-img
        :src="require('../../assets/delivery/lost.png')"
        height="93"
        contain
      />
      <span class="Text-Style-10 text-center">Куда доставляете?</span>
      <span class="Text-Style-8 text-center">
        По г. Казань (бесплатно) и в пределах 30км (уточняйте у оператора)
      </span>
    </div>
    <div
      class="d-flex flex-column align-center justify-between mx-3"
      style="align-self: end; width: 280px"
    >
      <v-img
        :src="require('../../assets/delivery/box (1).png')"
        height="93"
        contain
      />
      <span class="Text-Style-10 text-center">Сумма заказа?</span>
      <span class="Text-Style-8 text-center">
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

<style scoped></style>
