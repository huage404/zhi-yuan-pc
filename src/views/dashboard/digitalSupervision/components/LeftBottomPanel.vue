<script setup lang="ts">
import PanelCardTab from "@/views/dashboard/components/PanelCardTab.vue"
import PanelCard from "@/views/dashboard/components/PanelCard.vue"
</script>

<template>
  <div>
    <PanelCard>
      <template #header>
        <el-row class="w-full">
          <el-col :span="8">
            <PanelCardTab label="实时报警" is-active />
          </el-col>
          <el-col :span="8" class="flex justify-center">
            <PanelCardTab label="设备故障" />
          </el-col>
          <el-col :span="8" class="flex justify-end">
            <PanelCardTab label="检测隐患" />
          </el-col>
        </el-row>
      </template>

      <template #default>
        <div>
          <el-empty description="暂无数据" :image-size="100">
            <template #image>
              <img src="@/assets/images/empty.png" alt="empty" />
            </template>
          </el-empty>
        </div>
      </template>
    </PanelCard>
  </div>
</template>
