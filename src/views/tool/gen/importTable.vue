<template>
  <!-- 导入表 -->
  <el-dialog
    title="导入表"
    v-model="visible"
    width="800px"
    top="5vh"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    append-to-body
    destroy-on-close
  >
    <el-form v-if="visible" :model="queryParams" ref="queryFormRef" :inline="true">
      <el-form-item label="表名称" prop="tableName">
        <el-input v-model="queryParams.tableName" placeholder="请输入表名称" clearable @keyup.enter="handleQuery" />
      </el-form-item>
      <el-form-item label="表描述" prop="tableComment">
        <el-input v-model="queryParams.tableComment" placeholder="请输入表描述" clearable @keyup.enter="handleQuery" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
        <el-button icon="Refresh" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>
    <el-row>
      <el-table @row-click="clickRow" ref="tableRef" :data="dbTableList" @selection-change="handleSelectionChange" height="260px">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="tableName" label="表名称" :show-overflow-tooltip="true" />
        <el-table-column prop="tableComment" label="表描述" :show-overflow-tooltip="true" />
        <el-table-column prop="createTime" label="创建时间" />
        <el-table-column prop="updateTime" label="更新时间" />
      </el-table>
      <pagination v-show="total>0" :total="total" v-model:page="queryParams.pageNum" v-model:limit="queryParams.pageSize" @pagination="getList" />
    </el-row>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="handleImportTable">确 定</el-button>
        <el-button @click="visible = false">取 消</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { listDbTable, importTable } from '@/api/tool/gen'
import { DbTableQuery, DbTableVO } from '@/api/tool/gen/types'
import { ComponentInternalInstance } from 'vue'
import { FormInstance, TableInstance } from 'element-plus'

const total = ref(0)
const visible = ref(false)
const tables = ref<Array<string>>([])
const dbTableList = ref<Array<DbTableVO>>([])
const { proxy } = getCurrentInstance() as ComponentInternalInstance

const tableRef = ref<TableInstance>()
const queryFormRef = ref<FormInstance>()

const queryParams = reactive<DbTableQuery>({
  pageNum: 1,
  pageSize: 10,
  tableName: '',
  tableComment: ''
})

const emit = defineEmits(['ok'])

/** 查询参数列表 */
const show = () => {
  getList()
  visible.value = true
}
/** 单击选择行 */
const clickRow = (row: DbTableVO) => {
  tableRef.value?.toggleRowSelection(row, true)
}
/** 多选框选中数据 */
const handleSelectionChange = (selection: DbTableVO[]) => {
  tables.value = selection.map(item => item.tableName)
}
/** 查询表数据 */
const getList = async () => {
  const res: any = await listDbTable(queryParams)
  dbTableList.value = res.data.rows
  total.value = res.data.total
}
/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.pageNum = 1
  getList()
}
/** 重置按钮操作 */
const resetQuery = () => {
  queryFormRef.value?.resetFields()
  handleQuery()
}
/** 导入按钮操作 */
const handleImportTable = async () => {
  const tableNames = tables.value
  if (!tableNames) {
    proxy?.$modal.msgError('请选择要导入的表')
    return
  }
  const res = await importTable({ tables: tableNames })
  proxy?.$modal.msgSuccess(res.msg)
  if (res.code === 200) {
    visible.value = false
    emit('ok')
  }
}

defineExpose({
  show,
})
</script>
