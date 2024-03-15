<template>
  <div :class="panelBackgroundClass">
    <div v-if="mode === 'service-platform'" class="w-6 flex-shrink h-full">
      <div
        :class="['absolute top-0 bottom-0 w-[6.25rem]', positionClass]"
        :style="{ backgroundImage: `url('${servicePlatformBorderImageUrl}')`, backgroundSize: '100% 100%' }"
      />
    </div>
    <div v-else class="w-2.5 h-full" :style="{ backgroundImage: `url('${borderImageUrl}')`, backgroundSize: '100% 100%' }" />
    <div :class="['h-full relative transition-width', isFold ? 'w-0' : 'w-[29.375rem]']">
      <div class="w-full h-full overflow-hidden">
        <div
          :class="['w-[29.375rem] h-full bg-no-repeat bg-full px-1 py-2.5 space-y-1 flex flex-col']"
          :style="{ backgroundImage: `url('${bgImageUrl}')`, backgroundSize: '100% 100%' }"
        >
          <slot></slot>
        </div>
      </div>
      <div
        :class="['w-5 h-[3.75rem] absolute top-1/2 -translate-y-1/2 cursor-pointer', foldButtonClass]"
        :style="{ backgroundImage: `url('${foldButtonImage}')`, backgroundSize: '100% 100%' }"
        @click="toggleFold"
      />
      <!--
        <FilterTooltip v-if="position === 'left'" class="absolute bottom-0 -right-5 translate-x-full z-10" />
        <ConfigTooltip v-if="position === 'right'" class="absolute bottom-0 -left-5 -translate-x-full z-10" />
      -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import image01 from '@/assets/images/dashboard/digital-supervision/decoration_left-side.png'
import image02 from '@/assets/images/dashboard/digital-supervision/decoration_right-side.png'
import image03 from '@/assets/images/dashboard/service-platform/decoration_left-side.png'
import image04 from '@/assets/images/dashboard/service-platform/decoration_right-side.png'
import image05 from '@/assets/images/dashboard/digital-supervision/bg_left-side.png'
import image06 from '@/assets/images/dashboard/digital-supervision/bg_right-side.png'
import image07 from '@/assets/images/dashboard/digital-supervision/icon_left-side-button--unfold.png'
import image08 from '@/assets/images/dashboard/digital-supervision/icon_left-side-button--fold.png'

const props = defineProps<{
  position: 'left' | 'right',
  mode: 'service-platform' | 'digital-supervision'
}>()

const isFold = ref(false)
const toggleFold = () => {
  isFold.value = !isFold.value
}

const borderImageUrl = computed(() => {
  return props.position === 'left'
    ? image01
    : image02
})

const servicePlatformBorderImageUrl = computed(() => {
  return props.position === 'left'
    ? image03
    : image04
})

const panelBackgroundClass = computed(() => {
  return `h-full pt-24 pb-10 bg-gradient-to-r w-[32rem] flex ${props.position === 'left' ? 'from-[#1A2B61]/60 to-transparent' : 'from-transparent to-[#1A2B61]/60 flex-row-reverse'}`
})

const positionClass = computed(() => {
  return props.position === 'left' ? 'left-0' : 'right-0'
})

const bgImageUrl = computed(() => {
  return props.position === 'left'
    ? image05
    : image06
})

const foldButtonClass = computed(() => {
  return props.position === 'left'
    ? 'right-0 translate-x-full'
    : 'left-0 -translate-x-full rotate-180'
})

const foldButtonImage = computed(() => {
  return isFold.value
    ? image07
    : image08
})
</script>
