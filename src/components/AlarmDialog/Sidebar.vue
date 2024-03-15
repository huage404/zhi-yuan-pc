<script lang="ts" setup>
import { cva } from 'class-variance-authority'
import { TAlarmCardState, TMenuState } from "@/components/AlarmDialog/types/AlarmDialogSidebar"
import { EAlarmDialogSidebarMenuKey } from "@/components/AlarmDialog/enmus/AlarmDialogSidebarEnum"

const props = defineProps<{
  loading: boolean;
  noMore: boolean;
  list: TAlarmCardState[];
}>()

const emits = defineEmits<{
  (e: 'load'): void;
  (e: 'close'): void;
}>()

/*------------------------ Menu Logic Start ---------------------------*/

const currentMenuKey = ref(EAlarmDialogSidebarMenuKey.UNCONFIRMED)
const menuList = ref<TMenuState<EAlarmDialogSidebarMenuKey>[]>([
  { label: '未确认', key: EAlarmDialogSidebarMenuKey.UNCONFIRMED },
  { label: '已确认', key: EAlarmDialogSidebarMenuKey.CONFIRMED },
  { label: '核实中', key: EAlarmDialogSidebarMenuKey.IN_VERIFICATION },
])

const onMenuChange = (menu: TMenuState<EAlarmDialogSidebarMenuKey>) => {
  currentMenuKey.value = menu.key;
}

/*------------------------ Menu Logic End ---------------------------*/

/*------------------------ List Data Logic Start ---------------------------*/

const currentAlarmCardIndex = ref(0)
const isEmpty = computed(() => {
  return props.noMore && props.list.length === 0
})

const currentAlarmCardIndexChange = (index) => {
  currentAlarmCardIndex.value = index;
}

const bottomScrollTrigger = () => {
  emits('load')
}

const handleClose = () => {
  emits('close')
}

/*------------------------ List Data Logic End ---------------------------*/

const tabButtonVariant = cva('m-1 flex-1 text-center cursor-pointer rounded self-stretch flex justify-center items-center', {
  variants: {
    highlight: {
      false: '',
      true: 'bg-[#2964f0] text-white'
    }
  },
  defaultVariants: {
    highlight: false,
  }
})

const alarmCardVariant = cva('box-content border-2 border-solid rounded-xl py-3 px-4 space-y-1 bg-[#f5f6fa] cursor-pointer', {
  variants: {
    highlight: {
      false: 'border-transparent',
      true: 'border-[#2964f0]'
    }
  },
  defaultVariants: {
    highlight: false
  }
})
</script>

<template>
  <div class="alarm-dialog_sidebar">
    <!-- menu list-->
    <ul class="bg-[#e6e7eb] rounded flex items-center reset-ul h-9">
      <li
        v-for="(menu, menuIndex) in menuList"
        :key="menu.key + menuIndex.toString()"
        :class="tabButtonVariant({ highlight: menu.key === currentMenuKey })"
        @click="() => onMenuChange(menu)"
      >
        {{ menu.label }}
      </li>
    </ul>

    <div class="flex justify-between items-center text-[#838b99] text-sm leading-9">
      <span>近 30 分钟内</span>
      <span>共计 {{ props.list.length }}</span>
    </div>

    <!-- item list -->
    <ul v-if="!isEmpty" v-infinite-scroll="bottomScrollTrigger" class="reset-ul flex-1 overflow-y-auto flex flex-col gap-y-3">
      <li
        v-for="(item, index) in props.list"
        :key="item.id + index.toString()"
        :class="alarmCardVariant({ highlight: currentAlarmCardIndex === index })"
        @click="() => currentAlarmCardIndexChange(index)"
      >
        <div class="text-[#171a21] font-bold text-sm leading-none line-clamp-1 m-0">{{ item.name }}</div>
        <div>
          <el-tag
            v-for="(tag, tagIndex) in item.tags"
            :key="tag.label + tagIndex.toString()"
            :type="tag.type"
            size="small"
            effect="dark"
            >{{ tag.label }}</el-tag
          >
        </div>
        <div class="text-[#838b99] text-sm leading-none">{{ item.address }}</div>
        <div class="text-[#838b99] text-sm leading-none">{{ item.date }}</div>
      </li>
      <li v-if="props.loading" class="text-center">加载中...</li>
      <li v-if="props.noMore" class="text-center">全部加载完成</li>
    </ul>
    <div v-else>
      <el-empty description="暂无数据" />
    </div>

    <footer class="mt-auto h-16 flex items-center">
      <a class="flex items-center gax-x-1 text-sm leading-16 text-[#2964f0] cursor-pointer" href="/#/alarm/list" @click="handleClose">
        <span>更多报警</span>
        <el-icon><ArrowRight /></el-icon>
      </a>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.alarm-dialog_sidebar {
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0 20px;
  width: 300px;
  height: 100%;
  border-right: 1px solid #e6e7eb;
}
</style>
