<script lang="ts" setup>
import MapContainer from './components/MapContainer.vue'
import ScreenHeader from './components/ScreenHeader.vue'
import PanelContainer from './components/PanelContainer.vue'
import useFlexible from '@/hooks/web/useFlexible'

useFlexible()
</script>

<template>
  <div class="w-screen h-screen flex flex-col bg-[#1b1f27]">
    <div class="flex-1 relative">
      <div class="absolute top-0 inset-x-0 z-10">
        <ScreenHeader type="" title="数智监管驾驶船" />
      </div>
      <div class="absolute left-0 inset-y-0 z-10">
        <PanelContainer mode="service-platform" position="left">123</PanelContainer>
      </div>
      <div class="absolute right-0 inset-y-0 z-10">
        <PanelContainer mode="service-platform" position="right">123</PanelContainer>
      </div>

      <MapContainer />
    </div>
  </div>
</template>
