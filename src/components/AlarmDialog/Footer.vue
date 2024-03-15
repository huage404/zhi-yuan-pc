<script lang="ts" setup>
const emits = defineEmits<{
  (e: 'cancel'): void;
  (e: 'confirm'): void;
}>()
</script>

<template>
  <div class="alarm-dialog_footer">
    <el-button @click="() => emits('cancel')">取消</el-button>
    <el-button type="primary" @click="() => emits('confirm')">确认</el-button>
  </div>
</template>

<style lang="scss" scoped>
.alarm-dialog_footer {
  --at-apply: mt-auto h-16 flex justify-end items-center gap-x-3 px-5 box-content;
  border-top: 1px solid #e6e7eb;
}
</style>
