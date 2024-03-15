<script lang="ts" setup>
import Header from '@/components/AlarmDialog/Header.vue'
import Sidebar from "@/components/AlarmDialog/Sidebar.vue"
import Content from "@/components/AlarmDialog/Content.vue"
import type { TAlarmCardState } from "@/components/AlarmDialog/types/AlarmDialogSidebar"
import { getMsgListWithAlova } from "@/views/iot/alarm/api/alarm.api"
import { usePagination } from "@alova/scene-vue"
import Footer from "@/components/AlarmDialog/Footer.vue"
import { Sunrise } from "@element-plus/icons-vue"


/*------------------------ Dialog Logic Start ---------------------------*/

const dialogVisible = ref(false)

const showDialog = () => {
  dialogVisible.value = true
}
const hideDialog = () => {
  console.info("🚀 ~ log info: ----- dialogVisible:")
  dialogVisible.value = false
}

/*------------------------ Dialog Logic End ---------------------------*/

/*------------------------ Alarm Logic Start ---------------------------*/
const {
  loading,
  data: alarmCardList,
  page,
  isLastPage,
  total
} = usePagination(
  (page, pageSize) => getMsgListWithAlova({
    pageSize: pageSize,
    pageNum: page
  }),
  {
    initialData: {
      total: 0,
      data: [
      ]
    },
    initialPage: 1,
    initialPageSize: 10,
    append: true,
    total: (res: any) => {
      return res?.data?.total as number
    },
    data: (res: any): TAlarmCardState[] => {
      return res?.data.rows || []
    }
  }
);

const handleNextPage = () => {
  if(!isLastPage.value) {
    page.value = page.value + 1
  }
}

/*------------------------ Alarm Logic Start ---------------------------*/

const iconDataBase = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PHBhdGggZGF0YS1uYW1lPSLot6/lvoQgNjYxOSIgZD0iTTcuNDE5IDI2LjM4M3YtOC4wMzdhOC43MzMgOC43MzMgMCAwMTE3LjQ2NSAwdjguMDM3aDNhMS4xMyAxLjEzIDAgMTEwIDIuMjU5SDQuMTE4YTEuMTMgMS4xMyAwIDAxMC0yLjI1OWgzLjN6bTkuMzg0LTEzLjI1MWwtNC4zIDcuMDgyaDMuNDMybC0uODY5IDUuMyA0LjMtNy4wODJoLTMuNDMxem02LjU2LTcuNzc3YS44ODEuODgxIDAgMDEuMyAxLjE3M2wtMS41NjQgMi42OTQtMS40NzItLjgyNSAxLjU2NC0yLjY5NGEuODc3Ljg3NyAwIDAxMS4xNzMtLjM0OHptLTcuMjEyLTJhLjg4Mi44ODIgMCAwMS45MTIuODY5djMuMDQzSDE1LjI0VjQuMjI2YS44ODIuODgyIDAgMDEuOTEyLS44Njl6bS03LjIxMiAyYS44NC44NCAwIDAxMS4xMy4zbDEuNTY0IDIuNjk0LTEuNDc3LjgyNS0xLjU2NC0yLjY4OWEuODI3LjgyNyAwIDAxLjM0OC0xLjEzem0tNS4zIDUuM2EuOC44IDAgMDExLjEzLS4zbDIuNjk0IDEuNTY0LS44MjYgMS40NzgtMi42OTMtMS41NjhhLjg4MS44ODEgMCAwMS0uMy0xLjE3M3ptMjUuMDI1IDBhLjkuOSAwIDAxLS4zIDEuMTczbC0yLjY5OCAxLjU2OS0uODI1LTEuNDc3IDIuNjk0LTEuNTY0YS44NC44NCAwIDAxMS4xMy4zeiIgZmlsbD0iI2ZmNTA1MCIvPjwvc3ZnPg==`
</script>

<template>
  <div>
    <el-badge :value="alarmCardList.length" class="item">
      <div class="w-15 h-15 rounded bg-white flex items-center justify-center cursor-pointer shadow-md" @click="showDialog">
        <img :src="iconDataBase" alt="alarm-badge" />
      </div>
    </el-badge>

    <el-dialog class="alarm-dialog" modal-class="alarm-dialog-modal" v-model="dialogVisible" v-loading="loading" append-to-body width="1490">
      <template #header>
        <Header />
      </template>

      <div class="flex h-full">
        <Sidebar :list="alarmCardList" :loading="loading" :noMore="isLastPage" @load="handleNextPage" @close="hideDialog" />
        <Content :isEmpty="true" @close="hideDialog" />
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss">
.alarm-dialog {
    padding: 0;
    height: calc(100% - 56px);
    border-radius: 12px;

  .el-dialog__header {
    margin: 0;
    border-bottom: 1px solid #e6e7eb;
    background-image: linear-gradient(0deg, rgba(212, 224, 255, .08), rgba(96, 143, 255, .17));
  }
}

.alarm-dialog-modal .el-overlay-dialog .el-dialog .el-dialog__body {
  padding: 0 !important;
  height: calc(100% - 64px);
  max-height: calc(100% - 64px) !important;
}
</style>
