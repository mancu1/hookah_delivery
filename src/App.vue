<template>
  <div>
    <navBar />
    <Head />
  </div>
</template>

<script>
import Head from "@/components/Head";
import navBar from "./components/NavBar";
export default {
  name: "App",
  components: {
    Head,
    navBar
  },
  data: () => ({
    //
  })
};
</script>
