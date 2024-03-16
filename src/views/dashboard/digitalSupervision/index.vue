<script lang="ts" setup>
import MapContainer from './components/MapContainer.vue'
import ScreenHeader from './components/ScreenHeader.vue'
import PanelContainer from './components/PanelContainer.vue'
import useFlexible from '@/hooks/web/useFlexible'
import LeftTopPanel from "@/views/dashboard/digitalSupervision/components/LeftTopPanel.vue"
import LeftMiddlePanel from "@/views/dashboard/digitalSupervision/components/LeftMiddlePanel.vue"
import LeftBottomPanel from "@/views/dashboard/digitalSupervision/components/LeftBottomPanel.vue"
import RightTopPanel from "@/views/dashboard/digitalSupervision/components/RightTopPanel.vue"
import RightMiddlePanel from "@/views/dashboard/digitalSupervision/components/RightMiddlePanel.vue"
import RightBottomPanel from "@/views/dashboard/digitalSupervision/components/RightBottomPanel.vue"

useFlexible()
</script>

<template>
  <div class="w-screen h-screen flex flex-col bg-[#1b1f27]">
    <div class="flex-1 relative">
      <div class="absolute top-0 inset-x-0 z-10">
        <ScreenHeader mode="" title="数智监管驾驶舱" />
      </div>
      <div class="absolute left-0 inset-y-0 z-10">
        <PanelContainer mode="service-platform" position="left">
          <LeftTopPanel />
          <LeftMiddlePanel />
          <LeftBottomPanel />
        </PanelContainer>
      </div>
      <div class="absolute right-0 inset-y-0 z-10">
        <PanelContainer mode="service-platform" position="right">
          <RightTopPanel />
          <RightMiddlePanel />
          <RightBottomPanel />
        </PanelContainer>
      </div>
      <div class="absolute bottom-0 inset-x-0 z-10">
        <img class="w-full h-12 block object-cover" src="@/assets/images/dashboard/digital-supervision/bg-footer.png" alt="bg__footer" />
      </div>
      <MapContainer />
    </div>
  </div>
</template>
