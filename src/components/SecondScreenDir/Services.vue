<template>
  <v-flex class="d-flex flex-row my-12">
    <div style="width: 290px">
      <span class="Text-Style-11">
        Кальянный сервис нового уровня, качественные и долгие забивки, широкая
        линейка вкусом и только лучшие кальяны
      </span>
    </div>
    <div
      class="d-flex flex-column align-center justify-center"
      style="max-width: 11vw"
    >
      <v-img
        :src="require('../../assets/service/support.png')"
        height="93"
        contain
      />
      <span class="Text-Style-10 text-center">Вы заказываете</span>
      <span class="Text-Style-8 text-center">
        Выберите любой кальян, чашу и табак. Если сомневатесь, то просто скажите
        нам и мы поможем вам
      </span>
    </div>
    <v-img
      class="mt-12 mx-n12"
      :src="require('../../assets/1.svg')"
      height="18"
      width="167"
      contain
    />
    <div
      class="d-flex flex-column align-center justify-center"
      style="max-width: 11vw"
    >
      <v-img
        :src="require('../../assets/service/buy.png')"
        height="93"
        contain
      />
      <span class="Text-Style-10 text-center">Мы готовим и доставляем</span>
      <span class="Text-Style-8 text-center">
        Наши мастера делают кальян по вашим желаниям, чтобы к указанному времени
        доставить кальян в лучшем виде.
      </span>
    </div>
    <v-img
      class="mt-1 mx-n12"
      :src="require('../../assets/down-line.svg')"
      height="18"
      width="167"
      contain
    />
    <div
      class="d-flex flex-column align-center justify-center"
      style="max-width: 11vw"
    >
      <v-img
        :src="require('../../assets/service/return.png')"
        height="93"
        contain
      />
      <span class="Text-Style-10 text-center">Вручаем</span>
      <span class="Text-Style-8 text-center">
        Мы передаем вам весь набор для удовольствия: кальян, готовый фрукт,
        плиту, щипцы, угли, инструкцию и мундштуки.
      </span>
    </div>
    <v-img
      class="mt-12 mx-n12"
      :src="require('../../assets/1.svg')"
      height="18"
      width="167"
      contain
    />
    <div
      class="d-flex flex-column align-center justify-center"
      style="max-width: 11vw"
    >
      <v-img
        :src="require('../../assets/service/box.png')"
        height="93"
        contain
      />
      <span class="Text-Style-10 text-center">Забираем</span>
      <span class="Text-Style-8 text-center">
        Выберите любой кальян, чашу и табак. Если сомневатесь, то просто скажите
        нам и мы поможем вам
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
