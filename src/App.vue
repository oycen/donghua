<template>
  <div>
    <button @click="show = !show">切换</button>
    <Fade :toggle="show">
      <div style="width: 100px; height: 100px; background-color: aqua">fade</div>
    </Fade>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Fade from "../lib/Fade/Fade.vue";

const show = ref(true);
</script>
