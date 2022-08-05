<template>
  <transition name="fade">
    <template v-if="props.toggle">
      <slot></slot>
    </template>
  </transition>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    /** 动画的切换状态 */
    toggle?: boolean;
    /** 动画的切换模式 */
    toggleMode?: "if" | "show";
    /** 过渡效果的持续时间，默认值0.3s */
    duration?: number | string;
    /** 过渡效果的速度曲线，默认值ease */
    timingFunction?: string;
    /** 过渡效果的延迟时间，默认值0s */
    delay?: number | string;
    /** 过渡效果的持续时间，默认值0.3s */
    enterDuration?: number | string;
    /** 过渡效果的速度曲线，默认值ease */
    enterTimingFunction?: string;
    /** 过渡效果的延迟时间，默认值0s */
    enterDelay?: number | string;
    /** 过渡效果的持续时间，默认值0.3s */
    leaveDuration?: number | string;
    /** 过渡效果的速度曲线，默认值ease */
    leaveTimingFunction?: string;
    /** 过渡效果的延迟时间，默认值0s */
    leaveDelay?: number | string;
  }>(),
  {
    toggle: true,
    toggleMode: "if",
    duration: "0.3s",
    timingFunction: "ease",
    delay: "0s",
  }
);

const enterDuration = computed(() => parse(props.enterDuration ?? props.duration));
const enterTimingFunction = computed(() => props.enterTimingFunction ?? props.timingFunction);
const enterDelay = computed(() => parse(props.enterDelay ?? props.delay));

const leaveDuration = computed(() => parse(props.leaveDuration ?? props.duration));
const leaveTimingFunction = computed(() => props.leaveTimingFunction ?? props.timingFunction);
const leaveDelay = computed(() => parse(props.leaveDelay ?? props.delay));

function parse(value?: number | string, unit: string = "s") {
  if (typeof value === "string") {
    return isNaN(+value) ? value : `${value}${unit}`;
  } else if (typeof value === "number") {
    return `${value}${unit}`;
  } else {
    return value;
  }
}
</script>

<style scoped>
.fade-enter-active {
  transition: opacity v-bind(enterDuration) v-bind(enterTimingFunction) v-bind(enterDelay);
}

.fade-leave-active {
  transition: opacity v-bind(leaveDuration) v-bind(leaveTimingFunction) v-bind(leaveDelay);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
