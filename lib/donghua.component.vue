<template>
  <transition
    :enter-from-class="enterFromClass"
    :enter-active-class="enterActiveClass"
    :enter-to-class="enterToClass"
    :leave-from-class="leaveFromClass"
    :leave-active-class="leaveActiveClass"
    :leave-to-class="leaveToClass"
  >
    <template v-if="props.toggle">
      <slot></slot>
    </template>
  </transition>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { DongHuaIn, DongHuaInName, DongHuaOut, DongHuaOutName } from "./donghua.type";

const props = withDefaults(
  defineProps<{
    /** 动画的切换状态 */
    toggle?: boolean;
    /** 动画的切换模式 */
    toggleMode?: "if" | "show";
    /** 进入动画 */
    in?: DongHuaInName | DongHuaIn;
    /** 离开动画 */
    out?: DongHuaOutName | DongHuaOut;
  }>(),
  {
    toggle: true,
    toggleMode: "if",
  }
);

const inName = computed(() => (typeof props.in === "string" ? props.in : props.in.name));
const outName = computed(() => (typeof props.out === "string" ? props.out : props.out.name));

const enterFromClass = computed(() => `${inName}-enter-from`);
const enterActiveClass = computed(() => `${inName}-enter-active`);
const enterToClass = computed(() => `${inName}-leave-to`);
const leaveFromClass = computed(() => `${outName}-leave-to`);
const leaveActiveClass = computed(() => `${outName}-leave-to`);
const leaveToClass = computed(() => `${outName}-leave-to`);
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
