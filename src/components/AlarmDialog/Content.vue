<script lang="ts" setup>
import Footer from "@/components/AlarmDialog/Footer.vue"

const props = defineProps<{
  isEmpty?: boolean
}>()

const emits = defineEmits<{
  (e: 'close'): void
}>()

const onSubmit = () => {
  emits('close')
}
const onCancel = () => {
  emits('close')
}
</script>

<template>
  <div v-if="props.isEmpty" class="flex flex-col w-full h-full justify-center items-center">
    <el-empty description="暂无数据" />
  </div>
  <div v-else class="flex flex-col w-full h-full">
    <div class="w-full h-full flex">
      <div class="flex-1">1</div>
      <div class="alarm-dialog__form">
        <div class="flex justify-between items-center mb-2.5">
          <span class="text-base font-bold">警情处理</span>
          <el-button plain type="primary">电话核实警情</el-button>
        </div>

        <div class="grid grid-rows-2 grid-cols-2 gap-x-5 gap-y-2.5 mb-5">
          <div class="row-span-1 col-span-2">
            <div class="text-[#ff3e3e] bg-[#e6e7eb] cursor-pointer text-sm leading-8 rounded text-center">火警</div>
          </div>
          <div class="row-span-1 col-span-1">
            <div class="bg-[#e6e7eb] cursor-pointer text-sm leading-8 rounded text-center">测试</div>
          </div>
          <div class="row-span-1 col-span-1">
            <div class="bg-[#2964f0] text-white cursor-pointer text-sm leading-8 rounded text-center">其他</div>
          </div>
        </div>

        <div>
          <p>其他原因</p>
          <ul class="reset-ul">
            <li></li>
          </ul>
        </div>
      </div>
    </div>
    <Footer @cancel="onCancel" @confirm="onSubmit" />
  </div>
</template>

<style lang="scss" scoped>
.alarm-dialog__form {
  padding: 24px;
  width: 368px;
  border-left: 1px solid #e6e7eb;
}
</style>
