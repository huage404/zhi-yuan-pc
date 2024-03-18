<script lang="ts" setup>
const tableData = [
  {id: '001', date: '03/03/24', time: '08:42', content: '探测器故障'},
  {id: '002', date: '03/03/24', time: '08:42', content: '气体灭火盘故障'},
  {id: '003', date: '03/03/24', time: '08:42', content: '总线控制盘故障'},
]
</script>

<template>
  <div class="px-3 py-5">
    <el-row :gutter="20">
      <el-col :span="12">
        <p
          class="m-0 mb-0.5 text-sm text-[#333] flex items-center before:block before:mr-1.5 before:content-[''] before:bg-[#0088C9] before:w-0.5 before:h-3"
        >
          培训中心报警
        </p>
        <p class="flex items-center m-0 text-xs text-[#666] gap-x-4 pl-2 mb-2">
          <span>地址：珠海市香洲区培训中心101号</span>
          <span>报警时间：2024-02-03 15：44：48</span>
        </p>
        <el-table :data="tableData" border style="width: 100%" size="small" stripe>
          <el-table-column prop="id" label="序号" />
          <el-table-column prop="date" label="日期" />
          <el-table-column prop="time" label="时间" />
          <el-table-column prop="content" label="内容" />
        </el-table>
      </el-col>
      <el-col :span="4" class="p-2 border border-solid border-[#E4E4E4]">
        <p
          class="m-0 mb-0.5 text-sm text-[#333] flex items-center before:block before:mr-1.5 before:content-[''] before:bg-[#0088C9] before:w-0.5 before:h-3"
        >
          操作区域
        </p>
        <el-space class="p-2 w-full" direction="vertical" size="small" fill>
          <el-button type="primary">消音</el-button>
          <el-button type="primary">复位</el-button>
          <el-button type="primary">手动</el-button>
          <el-button type="primary">自动</el-button>
        </el-space>
      </el-col>
      <el-col :span="8">
        <div class="rounded overflow-hidden border-px border-solid border-[#dcdfe6]">
          <el-row>
            <el-col class="bg-[#409EFF] text-white py-4 px-5 text-2xl">品牌名称</el-col>
          </el-row>
          <el-row>
            <el-col class="py-4 px-5">正常运行</el-col>
          </el-row>
          <el-divider class="!my-0" />
          <el-row>
            <el-col :span="5" class="py-4 px-5 bg-[#F5F5F5]">手动</el-col>
            <el-col :span="7" class="py-4 px-5">允许</el-col>
            <el-col :span="5" class="py-4 px-5 bg-[#F5F5F5]">声光故障</el-col>
            <el-col :span="7" class="py-4 px-5"></el-col>
          </el-row>
          <el-divider class="!my-0" />
          <el-row>
            <el-col :span="5" class="py-4 px-5 bg-[#F5F5F5]">自动</el-col>
            <el-col :span="7" class="py-4 px-5">禁止</el-col>
            <el-col :span="5" class="py-4 px-5 bg-[#F5F5F5]">声光屏蔽</el-col>
            <el-col :span="7" class="py-4 px-5"></el-col>
          </el-row>
          <el-divider class="!my-0" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
//:deep(.el-table__header-wrapper) {
//  display: none;
//}
</style>
