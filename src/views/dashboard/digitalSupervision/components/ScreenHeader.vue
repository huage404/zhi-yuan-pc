<script lang="ts" setup>
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

enum EScreenHeaderMode {
  DIGITAL_SUPERVISION = 'digital-supervision',
  CLOUD_SERVICE_PLATFORM = 'cloud-service-platform'
}

const props = defineProps<{
  mode: EScreenHeaderMode;
  title: string;
}>()

const headerBackgroundImageVariant = cva('bg-no-repeat bg-full',{
  variants: {
    mode: {
      [EScreenHeaderMode.DIGITAL_SUPERVISION]: 'bg__digital-supervision',
      [EScreenHeaderMode.CLOUD_SERVICE_PLATFORM]: 'bg__digital-supervision',
    }
  }
})
</script>

<template>
  <div :class="twMerge('h-[4.625rem] w-full bg-full relative', headerBackgroundImageVariant({ mode: EScreenHeaderMode.CLOUD_SERVICE_PLATFORM }))">
    <h1 class="m-0 text-[2.5rem] font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-[#A7EBF9] text-center leading-[4.625rem]">
      {{ props.title }}
    </h1>
    <!--  <div class="absolute left-10 bottom-0">
    <ToggleGlobalHeaderVisible />
  </div>
  <div class="absolute right-5 bottom-4">
    <CurrentTime />
  </div>-->
  </div>
</template>

<style lang="scss" scoped>
.bg__digital-supervision {
  background-size: 100% 100%;
  background-image: url("@/assets/images/dashboard/digital-supervision/bg_header.png");
}
</style>
