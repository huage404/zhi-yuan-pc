import request from '@/utils/request'
import { TenantPkgForm, TenantPkgQuery, TenantPkgVO } from './types'
import { AxiosPromise } from 'axios'

// 查询租户套餐列表
export function listTenantPackage(query?: TenantPkgQuery): AxiosPromise<TenantPkgVO[]> {
  return request({
    url: '/system/tenant/package/list',
    method: 'post',
    data: query,
  })
}

// 查询租户套餐下拉选列表
export function selectTenantPackage(): AxiosPromise<TenantPkgVO[]> {
  return request({
    url: '/system/tenant/package/selectList',
    method: 'post',
  })
}

// 查询租户套餐详细
export function getTenantPackage(packageId: string | number): AxiosPromise<TenantPkgVO> {
  return request({
    url: '/system/tenant/package',
    method: 'post',
    data: {
      packageId,
    },
  })
}

// 新增租户套餐
export function addTenantPackage(data: TenantPkgForm) {
  return request({
    url: '/system/tenant/package',
    method: 'post',
    data,
  })
}

// 修改租户套餐
export function updateTenantPackage(data: TenantPkgForm) {
  return request({
    url: '/system/tenant/package',
    method: 'post',
    data,
  })
}

// 租户套餐状态修改
export function changePackageStatus(packageId: number | string, status: string) {
  const data = {
    packageId,
    status,
  }
  return request({
    url: '/system/tenant/package/changeStatus',
    method: 'post',
    data,
  })
}

// 删除租户套餐
export function delTenantPackage(packageId: string | number | Array<string | number>) {
  return request({
    url: '/system/tenant/package',
    method: 'post',
    data: {
      packageId,
    },
  })
}
