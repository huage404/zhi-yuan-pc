<script lang="ts" setup>
import PanelCard from "@/views/dashboard/components/PanelCard.vue"
import PanelCardTab from "@/views/dashboard/components/PanelCardTab.vue"

const props = withDefaults(defineProps<{
  // 接入单位
  connectToUnit: number;
  // 重点单位
  criticalUnits: number;
}>(), {
  connectToUnit: 0,
  criticalUnits: 0,
})
</script>

<template>
  <div>
    <PanelCard>
      <template #header>
        <PanelCardTab label="辖区概况总览" is-active />
      </template>

      <template #default>
        <div class="grid grid-rows-1 grid-cols-2 gap-x-5 px-5">
          <div class="flex items-center gap-x-2.5">
            <img class="w-16 h-16" src="@/assets/images/dashboard/digital-supervision/icon_dashboard-08.png" alt="connectToUnit" />
            <el-statistic :value="props.connectToUnit" title="接入单位" suffix="个" />
          </div>
          <div class="flex items-center gap-x-2.5">
            <img class="w-16 h-16" src="@/assets/images/dashboard/digital-supervision/icon_dashboard-09.png" alt="criticalUnits" />
            <el-statistic :value="props.criticalUnits" title="重点单位" suffix="个" />
          </div>
        </div>
      </template>
    </PanelCard>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-statistic__head){
  --at-apply: text-white text-base;
}
:deep(.el-statistic__suffix){
  --at-apply: text-white text-base;
}
:deep(.el-statistic__number){
  --at-apply: text-2xl text-white font-bold;
}
</style>
