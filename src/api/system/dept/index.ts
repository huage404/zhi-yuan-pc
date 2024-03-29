import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import { DeptForm, DeptQuery, DeptVO } from './types'

// 查询部门列表
export const listDept = (query?: DeptQuery) => {
  return request({
    url: '/system/dept/list',
    method: 'post',
    data: query,
  })
}

// 查询部门列表（排除节点）
export const listDeptExcludeChild = (id: string | number): AxiosPromise<DeptVO[]> => {
  return request({
    url: '/system/dept/list/exclude',
    method: 'post',
    data: id,
  })
}

// 查询部门详细
export const getDept = (deptId: string | number): AxiosPromise<DeptVO> => {
  return request({
    url: '/system/dept/getInfo',
    method: 'post',
    data: deptId,
  })
}

// 查询部门下拉树结构
export const treeselect = (): AxiosPromise<DeptVO[]> => {
  return request({
    url: '/system/dept/treeselect',
    method: 'post',
  })
}

// 新增部门
export const addDept = (data: DeptForm) => {
  return request({
    url: '/system/dept/add',
    method: 'post',
    data,
  })
}

// 修改部门
export const updateDept = (data: DeptForm) => {
  return request({
    url: '/system/dept/edit',
    method: 'post',
    data,
  })
}

// 删除部门
export const delDept = (id: number | string) => {
  return request({
    url: '/system/dept/delete',
    method: 'post',
    data: id,
  })
}
