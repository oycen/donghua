<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    /** 过渡效果的持续时间，默认值0.3s */
    duration?: number | string;
    /** 过渡效果的速度曲线，默认值ease */
    timingFunction?: string;
    /** 过渡效果的延迟时间，默认值0s */
    delay?: number | string;
  }>(),
  {
    duration: "0.3s",
    timingFunction: "ease",
    delay: "0s",
  }
);

const duration = computed(() =>
  typeof props.duration === "string" ? props.duration : `${props.duration}s`
);
const delay = computed(() =>
  typeof props.delay === "string" ? props.delay : `${props.delay}s`
);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity v-bind(duration) v-bind("props.timingFunction")
    v-bind(delay);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
