import { createAlova } from 'alova'
import VueHook from 'alova/vue'
import request from './request'
import { axiosRequestAdapter } from '@alova/adapter-axios'

const alovaInstance = createAlova({
  requestAdapter: axiosRequestAdapter({
    axios: request,
  }),
  statesHook: VueHook,
})

export default alovaInstance
