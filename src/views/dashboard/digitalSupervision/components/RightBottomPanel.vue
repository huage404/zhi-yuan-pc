<template>
  <div>
    <PanelCard>
      <template #header>
        <el-row class="w-full">
          <el-col :span="8">
            <PanelCardTab label="报警趋势" />
          </el-col>
          <el-col :span="8" class="flex justify-center">
            <PanelCardTab label="设备故障趋势" is-active />
          </el-col>
          <el-col :span="8" class="flex justify-end">
            <PanelCardTab label="检测隐患趋势" />
          </el-col>
        </el-row>
      </template>

      <template #default>
        <el-empty class="!py-0" :image-size="100" description="暂无数据">
          <template #image>
            <img src="@/assets/images/empty.png" alt="empty" />
          </template>
        </el-empty>
      </template>
    </PanelCard>
  </div>
</template>
<script setup lang="ts">
import PanelCardTab from "@/views/dashboard/components/PanelCardTab.vue"
import PanelCard from "@/views/dashboard/components/PanelCard.vue"
</script>
