<script setup lang="ts">
import { twMerge } from "tailwind-merge"

const props = withDefaults(defineProps<{
  label: string;
  isActive?: boolean;
}>(), {
  label: '',
  isActive: false
})
</script>

<template>
  <div class="relative">
    <img
      v-if="props.isActive"
      class="w-10 h-10 absolute -left-8 -top-2"
      src="@/assets/images/dashboard/digital-supervision/icon_dashboard-11.png"
      alt="arrow"
    />
    <span
      :class="twMerge('text-base text-[#A7BCF2]', props.isActive && 'font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-[#A7EBF9]')"
      >{{ props.label }}</span
    >
  </div>
</template>
