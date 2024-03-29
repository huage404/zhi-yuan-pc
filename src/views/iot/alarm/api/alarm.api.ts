// 告警Api
import request from '@/utils/request'
import alovaInstance from '@/utils/alovaInstance'

enum Api {
  configList = '/alert/selectAlertConfigPage',
  configUpdate = '/alert/updateAlertConfig',
  configAdd = '/alert/createAlertConfig',
  configDelete = '/alert/deleteAlertConfigById',
  msgList = '/alert/selectAlertRecordPage',
}

// 获取告警配置列表
export const getConfigList = (data) => {
  return request({
    url: Api.configList,
    method: 'post',
    data,
  })
}
// 告警配置保存
export const saveConfig = (data) => {
  return request({
    url: data.id ? Api.configUpdate : Api.configAdd,
    method: 'post',
    data,
  })
}
// 告警配置删除
export const deleteConfig = (data) => {
  return request({
    url: Api.configDelete,
    method: 'post',
    data,
  })
}
// 告警消息
export const getMsgList = (data) => {
  return request({
    url: Api.msgList,
    method: 'post',
    data,
  })
}
// 使用 alova 获取告警消息
export const getMsgListWithAlova = (data) => {
  return alovaInstance.Post(Api.msgList, data)
}
