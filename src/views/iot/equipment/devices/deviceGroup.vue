<template>
  <yt-crud
  v-bind="options"
  ref="crudRef" :data="data" :column="column"
  :loading="state.loading"
  :total="state.total"
  v-model:page="state.page"
  v-model:query="state.query"
  :tableProps=" {
    selection: false,
    viewBtn: false,
    delBtn: true,
    menuSlot: true,
    menuWidth: 300,
  }"
  :fun-props="{
    delBtn: false,
  }"
  @on-load="getData"
  @delFun="onDelete"
  @saveFun="onSave"
  >
    <template #menuSlot="scope">
      <el-tooltip class="box-item" effect="dark" content="查看分组设备" placement="top">
        <el-button link type="primary" icon="cpu" @click="handleToDevices(scope.row.id)" />
      </el-tooltip>
    </template>
  </yt-crud>
</template>
<script lang="ts" setup>
import { IColumn } from '@/components/common/types/tableCommon'
import YtCrud from '@/components/common/yt-crud.vue'
import { getDeviceGroupsList,saveDeviceGroup,deleteDeviceGroup, IDeviceGroupVo } from '../api/devices.api'


const column: IColumn[] = [{
  label: '分组id',
  key: 'id',
  rules: [{ required: true, message: '请填写组ID' }],
}, {
  label: '分组名',
  key: 'name',
  search: true,
  rules: [{ required: true, message: '请填写组名' }],
},
{
  label: '设备数量',
  key: 'deviceQty',
},
{
  label: '备注',
  key: 'remark',
}]

const state = reactive({
  page: {
    pageSize: 10,
    pageNum: 1,
  },
  total: 0,
  loading: false,
  query: {
    name: ''
  },
})

const data = ref()

const getData = () => {
  state.loading = true
  getDeviceGroupsList({...state.page, ...state.query}).then(res => {
    console.log(res)
    data.value = res.data.rows
  }).finally(() => {
    state.loading = false
  })
}

// 保存数据
const onSave = ({type, data, cancel}: any) => {
  state.loading = true
  saveDeviceGroup(toRaw(data)).then(res => {
    ElMessage.success(type === 'add' ? '添加成功' : '编辑成功')
    cancel()
    getData()
  }).finally(() => {
    state.loading = false
  })
}
// 删除
const onDelete = async (row: any) => {
  state.loading = true
  let ids = row.id
  await deleteDeviceGroup(ids)
  ElMessage.success('删除成功!')
  state.loading = false
  getData()
}

// 跳转配置
const router = useRouter()
const handleToDevices = (id: string) => {
  if (!id) return
  router.push(`deviceGroupDetail/${id}`)
}


const options = reactive({
  ref: 'crudRef',
  tableProps: {
    selection: true,
    delBtn: true,
    menuSlot: true,
    menuWidth: 220,
  },
  funProps: {
    delBtn: true,
  },
  searchProps: {
    labelWidth: 120,
  },
  data,
  column,
})

</script>

<!-- <style lang="scss" scoped>

</style> -->
