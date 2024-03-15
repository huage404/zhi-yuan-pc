import UnoCss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
// @ts-ignore
import transformerDirective from '@unocss/transformer-directives'

export default () => {
  return UnoCss({
    presets: [presetUno(), presetAttributify(), presetIcons()],
    // rules: [['search', {}]],
    shortcuts: {
      'panel-title':
        'pb-[5px] font-sans leading-[1.1] font-medium text-base text-[#6379bb] border-b border-b-solid border-[var(--el-border-color-light)] mb-5 mt-0',
      'reset-ul': 'list-none p-0 m-0',
    },
    transformers: [transformerDirective()],
  })
}
