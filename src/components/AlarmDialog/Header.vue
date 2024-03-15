<script lang="ts" setup>
import { Bell, MoreFilled } from "@element-plus/icons-vue"
</script>

<template>
  <div class="flex justify-between items-center">
    <span>报警弹窗</span>
    <div class="pr-6 flex items-center">
      <el-button :icon="Bell" circle text />
      <el-button :icon="MoreFilled" circle text />
    </div>
  </div>
</template>
