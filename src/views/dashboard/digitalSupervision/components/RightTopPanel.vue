<script setup lang="ts">
import PanelCardTab from "@/views/dashboard/components/PanelCardTab.vue"
import PanelCard from "@/views/dashboard/components/PanelCard.vue"
</script>

<template>
  <PanelCard>
    <template #header>
      <el-row class="w-full">
        <el-col :span="8">
          <PanelCardTab label="辖区单位分布" />
        </el-col>
        <el-col :span="8" class="flex justify-center">
          <PanelCardTab label="辖区设备分布" is-active />
        </el-col>
      </el-row>
    </template>

    <template #default>
      <div className="flex items-center gap-x-1">
        <span className="py-1 px-3 text-white text-center min-w-20 bg__filter-button--active cursor-pointer"> 区域 </span>
        <span className="py-1 px-3 text-[#6F7E94] text-center min-w-20 bg__filter-button cursor-pointer"> 街道 </span>
      </div>
      <div class="h-48 flex items-center justify-center">
        <el-empty class="!py-0" :image-size="100" description="暂无数据">
          <template #image>
            <img src="@/assets/images/empty.png" alt="empty" />
          </template>
        </el-empty>
      </div>
    </template>
  </PanelCard>
</template>

<style lang="scss" scoped>
.bg__filter-button {
  background-size: 100% 100%;
  background-image: url("@/assets/images/dashboard/digital-supervision/icon_dashboard-13.png");
  background-repeat: no-repeat;
}
.bg__filter-button--active {
  background-size: 100% 100%;
  background-image: url("@/assets/images/dashboard/digital-supervision/icon_dashboard-12.png");
  background-repeat: no-repeat;
}
</style>
