<script setup lang="ts">
import PanelCardTab from "@/views/dashboard/components/PanelCardTab.vue"
import PanelCard from '@/views/dashboard/components/PanelCard.vue'
import image01 from '@/assets/images/dashboard/digital-supervision/icon_dashboard-14.png'

const currentTabIndex = ref(0)
const onCurrentTabIndexChange = (index: number) => {
  currentTabIndex.value = index
}
</script>

<template>
  <div>
    <PanelCard>
      <template #header>
        <el-row class="w-full">
          <el-col :span="8">
            <PanelCardTab label="实时报警" :is-active="currentTabIndex === 0" @click="() => onCurrentTabIndexChange(0)" />
          </el-col>
          <el-col :span="8" class="flex justify-center">
            <PanelCardTab label="设备故障" :is-active="currentTabIndex === 1" @click="() => onCurrentTabIndexChange(1)" />
          </el-col>
          <el-col :span="8" class="flex justify-end">
            <PanelCardTab label="检测隐患" :is-active="currentTabIndex === 2" @click="() => onCurrentTabIndexChange(2)" />
          </el-col>
        </el-row>
      </template>

      <template #default>
        <div class="h-full flex flex-col gap-y-5">
          <div class="flex items-center gap-x-1">
            <span class="py-1 px-3 text-white text-center min-w-20 bg__filter-button--active cursor-pointer">火灾</span>
            <span class="py-1 px-3 text-[#6F7E94] text-center min-w-20 bg__filter-button cursor-pointer">重要告警</span>
          </div>
          <div class="flex-1 relative">
            <div class="max-h-96 overflow-y-auto scroll-smooth">
              <div v-for="item in 10" :key="item" class="space-y-2.5 my-2.5">
                <div class="h-8 flex items-center pl-10 bg-no-repeat" :style="{ backgroundImage: `url('${image01}')`, backgroundSize: '100%' }">
                  <span class="text-[#D4E0FF] font-bold"> 2024-01-09 10:53:34 </span>
                </div>
                <div class="ml-8 bg-white/10 py-3 px-2.5">
                  <div class="flex items-center mb-1">
                    <span class="px-3 text-xs py-0.5 rounded-full bg-gradient-to-b from-[#C20606] to-[#390505] text-white"> 火警 </span>
                    <div class="w-px bg-[#D4E0FF] h-2 mx-2" />
                    <span class="text-sm text-[#D4E0FF]">传统消防</span>
                  </div>
                  <div class="text-sm text-[#D4E0FF]">
                    <p>场所地址：九江市开发区九龙街道花园154号</p>
                    <p>设备名称：庐山市心中医院</p>
                    <p>接收时间：2024-01-09 10:53:34</p>
                  </div>
                </div>
              </div>

              <div class="absolute inset-y-0 left-2 bg-clip-border bg-transparent border-1 border-[#2A8AFFCC] border-dashed z-1" />
            </div>
          </div>

          <!--          <el-empty description="暂无数据" :image-size="100">
            <template #image>
              <img src="@/assets/images/empty.png" alt="empty" />
            </template>
          </el-empty>-->
        </div>
      </template>
    </PanelCard>
  </div>
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
