<script setup lang="ts">
import PanelCard from "@/views/dashboard/components/PanelCard.vue"
import PanelCardTab from "@/views/dashboard/components/PanelCardTab.vue"

const tableData = [
  {
    name: '智能预警',
    count: '2048',
    percentage: '50%',
    onlineRate: '50%',
  },
  {
    name: '智能预警',
    count: '2048',
    percentage: '50%',
    onlineRate: '50%',
  },
]
</script>

<template>
  <div>
    <PanelCard>
      <template #header>
        <PanelCardTab label="设备接入情况总览" is-active />
      </template>

      <template #default>
        <el-row class="px-5">
          <el-col :span="8">
            <img class="h-24 w-24" src="@/assets/images/dashboard/digital-supervision/icon_dashboard-10.png" alt="icon_dashboard-10" />
          </el-col>
          <el-col :span="8" class="flex items-center">
            <el-statistic class="text-green" :value="123" title="接入设备数" suffix="个" />
          </el-col>
          <el-col :span="8" class="flex items-center">
            <el-statistic class="text-orange" :value="123" title="接入感知点位数" suffix="个" />
          </el-col>
        </el-row>

        <el-row class="custom-table">
          <el-table class="w-full" :data="tableData" stripe>
            <el-table-column prop="name" label="系统名称" />
            <el-table-column prop="count" label="设备数量（个）" width="120" />
            <el-table-column prop="percentage" label="设备占比" />
            <el-table-column prop="onlineRate" label="设备在线率" />
          </el-table>
        </el-row>
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

.text-green {
  :deep(.el-statistic__number) {
    --at-apply: text-green;
  }
}
.text-orange {
  :deep(.el-statistic__number) {
    --at-apply: text-orange;
  }
}
.custom-table {
  --el-border-color-lighter: transparent;
  --el-table-border-color: none;
  --el-fill-color-lighter: #62A1FF33;
  --el-fill-color-blank: #62A1FF0D;
  --el-text-color-regular: #fff;
  //--el-table-bg-color: transparent;

  :deep(.el-table){
    background-color: transparent;
  }
  :deep(.el-table__expanded-cell){
    background-color: transparent;
  }

  .el-table__fixed::before{
    background-color: transparent;
  }
  :deep(.el-table .el-table__header-wrapper) {
    box-shadow: none;
  }
  :deep(.el-table .el-table__header-wrapper th) {
    background-color: #62A1FF0D !important;
  }
}
</style>
