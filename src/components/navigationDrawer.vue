<template>
  <v-sheet>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-navigation-drawer height="1500" v-model="drawer" absolute temporary>
      <v-list dense>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title
              ><router-link to="/" class="btn"
                ><v-img
                  :src="require('../assets/logo.svg')"
                  class="logoSize"
                  contain/></router-link
            ></v-list-item-title>
            <v-list-item-title
              ><router-link to="/services" class="btn"
                ><v-btn class="px-sm-0 px-md-0 px-lg-3 px-xl-8 mt-3" text>
                  <span class="Text-Style-5 Text-Style-1-table">Услуги</span>
                </v-btn></router-link
              ></v-list-item-title
            >
            <v-list-item-title>
              <router-link to="/prices" class="btn">
                <v-btn class="px-sm-0 px-md-0 px-lg-5 px-xl-8" text
                  ><span class="Text-Style-5 Text-Style-1-table"
                    >Цены</span
                  ></v-btn
                ></router-link
              ></v-list-item-title
            >
            <v-list-item-title>
              <router-link to="/delivery" class="btn"
                ><v-btn class="px-sm-0 px-md-0 px-lg-5 px-xl-8" text
                  ><span class="Text-Style-5 Text-Style-1-table"
                    >Доставка</span
                  ></v-btn
                ></router-link
              ></v-list-item-title
            >
            <v-list-item-title>
              <router-link to="/contacts" class="btn"
                ><v-btn class="px-sm-0 px-md-0 px-lg-5 px-xl-8" text
                  ><span class="Text-Style-5 Text-Style-1-table"
                    >Контакты</span
                  ></v-btn
                ></router-link
              ></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: null
    };
  }
};
</script>

<style scoped>
.btn {
  text-decoration: none;
}
</style>
