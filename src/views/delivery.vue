<template>
  <div>
    <delivery />
    <deliveryScreen />
  </div>
</template>

<script>
import delivery from "@/components/FourthScreenDir/Delivery";
import deliveryScreen from "@/components/FourthScreenDir/FourthScreen";
export default {
  name: "services",
  components: {
    delivery,
    deliveryScreen
  }
};
</script>
