<template>
  <div class="w-full h-full bg-white pb-5">
    <DashboardPanel />
    <el-space class="w-full" direction="vertical" size="large" fill>
      <ControlPanel title="多线盘控制" :list="list1" />
      <ControlPanel title="总线盘控制" :list="list1" />
    </el-space>
  </div>
</template>
<script setup lang="ts">
import DashboardPanel from '@/views/device/controller/components/DashboardPanel.vue'
import ControlPanel from '@/views/device/controller/components/ControlPanel.vue'

const list1 = [
  { id: '001', title: '消火栓泵', status: 'online' },
  { id: '002', title: '消火栓泵', status: 'warning' },
  { id: '003', title: '消火栓泵', status: 'error' },
  { id: '004', title: '消火栓泵', status: 'offline' },
  { id: '005', title: '消火栓泵', status: 'offline' },
  { id: '006', title: '消火栓泵', status: 'offline' },
]
</script>
