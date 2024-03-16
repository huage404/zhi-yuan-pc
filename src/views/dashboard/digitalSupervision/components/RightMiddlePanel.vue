<template>
  <PanelCard>
    <template #header>
      <el-row class="w-full">
        <el-col :span="8">
          <PanelCardTab label="单位自主管理" />
        </el-col>
        <el-col :span="8" class="flex justify-center">
          <PanelCardTab label="辖区设备分布" is-active />
        </el-col>
        <el-col :span="8" class="flex justify-end">
          <PanelCardTab label="辖区设备分布" />
        </el-col>
      </el-row>
    </template>

    <template #default>
      <div class="custom-table">
        <el-table class="w-full" :data="tableData" stripe>
          <el-table-column prop="name" label="行业名称" />
          <el-table-column prop="count" label="数量" />
          <el-table-column prop="percentage" label="占比" />
        </el-table>
      </div>
    </template>
  </PanelCard>
</template>
<script setup lang="ts">
import PanelCardTab from "@/views/dashboard/components/PanelCardTab.vue"
import PanelCard from "@/views/dashboard/components/PanelCard.vue"

const tableData = [
  {
    name: '智能预警',
    count: '2048',
    percentage: '50%',
  },
  {
    name: '智能预警',
    count: '2048',
    percentage: '50%',
  },
  {
    name: '智能预警',
    count: '2048',
    percentage: '50%',
  },
]
</script>

<style lang="scss" scoped>
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
