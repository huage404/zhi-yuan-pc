<script lang="ts" setup>
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const props = defineProps<{
  title: string;
  list: {
    id: string;
    title: string;
    status: 'online' | 'offline' | 'warning' | 'error'
  }[]
}>()

const activeName = ref('name')

const getStatusText = (status: 'online' | 'offline' | 'warning' | 'error') => {
  switch (status) {
    case 'online':
      return '在线'
    case 'warning':
      return '警告'
    case 'error':
      return '错误'
    case 'offline':
      return '离线'
    default:
      return ''
  }
}

const controlBackgroundVariant = cva('w-44 h-57 rounded shrink-0 snap-start flex flex-col items-center border-px border-solid border-[#E4E4E4] bg-gradient-to-b', {
  variants: {
    type: {
      online: 'from-white to-[#E7FFF1]',
      offline: 'from-white to-[#F5F5F5]',
      warning: 'from-white to-[#FFF9E7]',
      error: 'from-white to-[#FDEFEF]',
    }
  },
  defaultVariants: {
    type: 'offline'
  }
})
const buttonVariant = cva('', {
  variants: {
    type: {
      online: 'button_wrapper--online',
      offline: 'button_wrapper--offline',
      warning: 'button_wrapper--warning',
      error: 'button_wrapper--error',
    }
  },
  defaultVariants: {
    type: 'offline'
  }
})
</script>

<template>
  <div class="w-full border-px border-solid border-[#dcdfe6] rounded px-2 mx-2">
    <el-tabs class="w-full" v-model="activeName">
      <el-tab-pane :label="props.title" name="name" class="flex items-center pb-4 w-full">
        <div class="py-4 px-6 w-40 h-58 flex flex-col mr-5 shrink-0">
          <div class="h-10 flex justify-center items-center bg-gradient-to-b from-[#E7F0F4] to-white">
            <span class="text-sm text-[#333] font-bold">{{ props.title }}</span>
          </div>
          <div class="flex-1 bg-[#EEF7FB] flex justify-center items-center gap-y-8">
            <el-space class="px-5 w-full" direction="vertical" size="small" fill>
              <el-button type="primary">手动</el-button>
              <el-button>自动</el-button>
            </el-space>
          </div>
        </div>

        <div class="flex-1 overflow-x-auto scroll-smooth scroll-smooth">
          <div class="flex items-center gap-x-5 pb-1">
            <div v-for="(item, index) in props.list" :key="item.id + index.toString()" :class="controlBackgroundVariant({ type: item.status })">
              <div class="px-5 py-1 w-fit rounded-b-lg bg-[#409EFF] text-white mb-8">{{ item.title }}</div>
              <div :class="twMerge('button_wrapper', buttonVariant({ type: item.status }))">
                <div class="button_content">
                  <span class="text-sm drop-shadow-md text-white">设备状态</span>
                  <span class="text-2xl drop-shadow-md text-white">{{ getStatusText(item.status) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>
.button_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  border: 4px solid #E9E9E9;
  border-radius: 50%;

  .button_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: radial-gradient( #E9E9E9 0%, #d8d8d8 100%);
  }

  &--offline {
    border: 4px solid #E9E9E9;
    .button_content {
      background: radial-gradient( #E9E9E9 0%, #d8d8d8 100%);
    }
  }

  &--online {
    border: 4px solid #54b056;
    .button_content {
      background: radial-gradient( #2DE179 0%, #54b056 100%);
    }
  }

  &--warning {
    border: 4px solid #f5da2c;
    .button_content {
      background: radial-gradient( #f6e13c 0%, #f5da2c 100%);
    }
  }

  &--error {
    border: 4px solid #db4336;
    .button_content {
      background: radial-gradient( #e1473b 0%, #db4336 100%);
    }
  }
}
</style>
