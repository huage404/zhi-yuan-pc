import type { TagProps } from 'element-plus'
import { EAlarmDialogSidebarMenuKey } from '@/components/AlarmDialog/enmus/AlarmDialogSidebarEnum'

type TTagItem = { type: TagProps['type']; label: string }

declare type TAlarmCardState = {
  id: string | number
  name: string
  tags: TTagItem[]
  address: string
  date: string
}

declare type TMenuState<T> = {
  label: string
  key: T
}
