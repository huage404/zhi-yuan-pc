import request from '@/utils/request'
import { AxiosPromise } from 'axios'
import { MenuQuery, MenuVO, MenuForm, MenuTreeOption, RoleMenuTree } from './types'

// 查询菜单列表
export const listMenu = (query?: MenuQuery): AxiosPromise<MenuVO[]> => {
  return request({
    url: '/system/menu/list',
    method: 'post',
    data: query,
  })
}

// 查询菜单详细
export const getMenu = (id: string | number): AxiosPromise<MenuVO> => {
  return request({
    url: '/system/menu/getInfo',
    method: 'post',
    data: id,
  })
}

// 查询菜单下拉树结构
export const treeselect = (): AxiosPromise<MenuTreeOption[]> => {
  return request({
    url: '/system/menu/treeselect',
    method: 'post',
  })
}

// 根据角色ID查询菜单下拉树结构
export const roleMenuTreeselect = (roleId: string | number): AxiosPromise<RoleMenuTree> => {
  return request({
    url: '/system/menu/roleMenuTreeselectByRoleId',
    method: 'post',
    data: roleId,
  })
}

// 根据角色ID查询菜单下拉树结构
export const tenantPackageMenuTreeselect = (packageId: string | number): AxiosPromise<RoleMenuTree> => {
  return request({
    url: '/system/menu/tenantPackageMenuTreeselect',
    method: 'post',
    data: {
      packageId,
    },
  })
}

// 新增菜单
export const addMenu = (data: MenuForm) => {
  return request({
    url: '/system/menu/add',
    method: 'post',
    data,
  })
}

// 修改菜单
export const updateMenu = (data: MenuForm) => {
  return request({
    url: '/system/menu/edit',
    method: 'post',
    data,
  })
}

// 删除菜单
export const delMenu = (id: string | number) => {
  return request({
    url: '/system/menu/delete',
    method: 'post',
    data: id,
  })
}
