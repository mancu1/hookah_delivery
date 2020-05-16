<template>
  <div>
    <home />
    <delivery />
    <contacts />
    <prices />
    <services />
  </div>
</template>

<script>
import home from "@/views/Home";
import delivery from "@/views/delivery";
import contacts from "@/views/contacts";
import prices from "@/views/prices";
import services from "@/views/services";

export default {
  name: "Head",
  components: {
    home,
    delivery,
    contacts,
    prices,
    services
  }
};
</script>
