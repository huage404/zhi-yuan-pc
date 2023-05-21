import { IColumn, TFormType } from '@/components/common/types/tableCommon'

import { useRenderSelect } from './useRenderSelect'

import {
  ElInput,
  ElDatePicker,
  ElSelect,
  ElSwitch,
  ElInputNumber,
  ElColorPicker,
  ElRate,
  ElSlider,
  ElSelectV2,
  ElCheckbox,
  ElCascader,
  ElCheckboxButton,
  ElRadioButton,
  ElTreeSelect,
  ElRadioGroup,
  ElCheckboxGroup,
} from 'element-plus'
import { useRenderRadio } from './useRenderRadio'
import { useRenderCheckbox } from './useRenderCheckbox'

// 支持组件集合
export const componentMap: Map<TFormType, any> = new Map()
componentMap.set('string', ElInput)
componentMap.set('select', ElSelect)
componentMap.set('date', ElDatePicker)
componentMap.set('switch', ElSwitch)
componentMap.set('number', ElInputNumber)
componentMap.set('color', ElColorPicker)
componentMap.set('rate', ElRate)
componentMap.set('slider', ElSlider)
componentMap.set('selectV2', ElSelectV2)
componentMap.set('checkbox', ElCheckboxGroup)
componentMap.set('checkboxButton', ElCheckboxGroup)
componentMap.set('cascader', ElCascader)
componentMap.set('radio', ElRadioGroup)
componentMap.set('radioButton', ElRadioGroup)
componentMap.set('treeSelect', ElTreeSelect)

// 渲染options
export const renderOptions = (item: IColumn) => {
  switch (item.type) {
    case 'select':
    case 'selectV2':
      // eslint-disable-next-line no-case-declarations
      const { renderSelectOptions } = useRenderSelect()
      return renderSelectOptions(item)
    case 'radio':
    case 'radioButton':
      // eslint-disable-next-line no-case-declarations
      const { renderRadioOptions } = useRenderRadio()
      return renderRadioOptions(item)
    case 'checkbox':
    case 'checkboxButton':
      // eslint-disable-next-line no-case-declarations
      const { renderCheckboxOptions } = useRenderCheckbox()
      return renderCheckboxOptions(item)
    default:
      return null
  }
}
