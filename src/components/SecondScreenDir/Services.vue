<template>
  <v-flex class="d-flex column-row flex-xl-row my-12">
    <div
      class="servis-text mx-2 mx-sm-auto align-sm-center justify-sm-center justify-center"
    >
      <span class="Text-Style-11 Text-Style-25-table Text-Style-5-mobile">
        Кальянный сервис нового уровня, качественные и долгие забивки, широкая
        линейка вкусом и только лучшие кальяны
      </span>
    </div>
    <div class="d-flex flex-column align-center justify-center my-4">
      <v-img
        :src="require('../../assets/service/support.png')"
        class="img-height"
        contain
      />
      <span
        class="Text-Style-10 Text-Style-10-table Text-Style-6-mobile text-center"
        >Вы заказываете</span
      >
      <span
        class="Text-Style-8 Text-Style-11-table Text-Style-7-mobile text-center"
      >
        Выберите любой кальян, чашу и табак. Если сомневатесь, то просто скажите
        нам и мы поможем вам
      </span>
    </div>
    <div
      class="d-md-flex d-lg-flex d-xl-flex hidden-sm-and-down align-center justify-center"
    >
      <v-spacer class="d-flex align-center justify-center">
        <v-img
          class="line-size line-img-center"
          :src="require('../../assets/1.svg')"
          contain
      /></v-spacer>
    </div>
    <div class="d-flex flex-column align-center justify-center  my-4">
      <v-img
        :src="require('../../assets/service/buy.png')"
        class="img-height"
        contain
      />
      <span
        class="Text-Style-10 Text-Style-10-table Text-Style-8-mobile text-center"
        >Мы готовим и доставляем</span
      >
      <span
        class="Text-Style-8 Text-Style-11-table Text-Style-7-mobile text-center"
      >
        Наши мастера делают кальян по вашим желаниям, чтобы к указанному времени
        доставить кальян в лучшем виде.
      </span>
    </div>
    <div
      class="d-md-flex d-lg-flex d-xl-flex hidden-sm-and-down align-start justify-center"
    >
      <v-spacer class="d-flex align-start justify-center">
        <v-img
          class="line-size align-start justify-center line-img-start"
          :src="require('../../assets/down-line.svg')"
          contain
        />
      </v-spacer>
    </div>
    <div class="d-flex flex-column align-center justify-center  my-4">
      <v-img
        :src="require('../../assets/service/return.png')"
        class="img-height"
        contain
      />
      <span
        class="Text-Style-10 Text-Style-10-table Text-Style-9-mobile text-center"
        >Вручаем</span
      >
      <span
        class="Text-Style-8 Text-Style-11-table Text-Style-7-mobile text-center"
      >
        Мы передаем вам весь набор для удовольствия: кальян, готовый фрукт,
        плиту, щипцы, угли, инструкцию и мундштуки.
      </span>
    </div>

    <div
      class="d-md-flex d-lg-flex d-xl-flex hidden-sm-and-down align-center justify-center"
    >
      <v-spacer class="d-flex align-center justify-center">
        <v-img
          class="line-size line-img-center"
          :src="require('../../assets/1.svg')"
          contain
        />
      </v-spacer>
    </div>
    <div class="d-flex flex-column align-center justify-center  my-4">
      <v-img
        :src="require('../../assets/service/box.png')"
        class="img-height"
        contain
      />
      <span
        class="Text-Style-10 Text-Style-10-table Text-Style-9-mobile text-center"
        >Забираем</span
      >
      <span
        class="Text-Style-8 Text-Style-11-table Text-Style-7-mobile text-center"
      >
        Мы сами приедем и заберем кальян, в то время, когда вам самим будет
        удобно!
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
.line-img-center {
  align-self: center;
}
.line-img-start {
  align-self: start;
}
@media screen and (min-width: 1280px) {
  .servis-text {
    max-width: 290px;
  }
  .img-height {
    height: 93px;
    max-width: 93px;
  }
  .line-size {
    width: 160px;
    max-width: 160px;
  }
}
@media screen and (min-width: 600px) and (max-width: 1279px) {
  .servis-text {
    max-width: 150px;
    min-width: 140px;
  }
  .img-height {
    height: 46px;
    max-width: 46px;
  }
  .line-size {
    width: 80px;
    max-width: 80px;
  }
}
@media screen and (max-width: 599px) {
  .servis-text {
    max-width: 310px;
    min-width: 265px;
  }
  .img-height {
    height: 65px;
    max-width: 65px;
  }
}
</style>
