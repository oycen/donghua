<template>
  <div>
    <button @click="show = !show">切换</button>
    <Fade duration="0.3s">
      <div
        v-if="show"
        style="width: 100px; height: 100px; background-color: aqua"
      >
        fade
      </div>
    </Fade>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Fade from "../lib/Fade/Fade.vue";

const show = ref(true);
</script>
