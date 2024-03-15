import { onMounted, onUnmounted, ref } from 'vue'

const useFlexible = () => {
  const dpr = ref(0)
  const scale = ref(0)
  let tid

  const refreshRem = () => {
    const docEl = document.documentElement
    let width = docEl.getBoundingClientRect().width
    if (width / dpr.value > 1920) {
      width = (docEl.clientWidth / 1920) * 1920
    }
    const rem = width / 120
    docEl.style.fontSize = rem + 'px'
  }

  const initFlexible = () => {
    const docEl = document.documentElement
    let metaEl = document.querySelector('meta[name="viewport"]')
    const flexibleEl = document.querySelector('meta[name="flexible"]')

    if (metaEl) {
      console.warn('将根据已有的meta标签来设置缩放比例')
      const match = metaEl.getAttribute('content')?.match(/initial-scale=([\d.]+)/)
      if (match) {
        scale.value = parseFloat(match[1])
        dpr.value = parseInt(String(1 / scale.value))
      }
    } else if (flexibleEl) {
      const content = flexibleEl.getAttribute('content')
      if (content) {
        const initialDpr = content.match(/initial-dpr=([\d.]+)/)
        const maximumDpr = content.match(/maximum-dpr=([\d.]+)/)
        if (initialDpr) {
          dpr.value = parseFloat(initialDpr[1])
          scale.value = parseFloat((1 / dpr.value).toFixed(2))
        }
        if (maximumDpr) {
          dpr.value = parseFloat(maximumDpr[1])
          scale.value = parseFloat((1 / dpr.value).toFixed(2))
        }
      }
    }

    if (!dpr.value && !scale.value) {
      const isIPhone = window.navigator.appVersion.match(/iphone/gi)
      const devicePixelRatio = window.devicePixelRatio
      if (isIPhone) {
        if (devicePixelRatio >= 3 && (!dpr.value || dpr.value >= 3)) {
          dpr.value = 3
        } else if (devicePixelRatio >= 2 && (!dpr.value || dpr.value >= 2)) {
          dpr.value = 2
        } else {
          dpr.value = 1
        }
      } else {
        dpr.value = 1
      }
      scale.value = 1 / dpr.value
    }

    docEl.setAttribute('data-dpr', String(dpr.value))
    if (!metaEl) {
      metaEl = document.createElement('meta')
      metaEl.setAttribute('name', 'viewport')
      metaEl.setAttribute(
        'content',
        'initial-scale=' + scale.value + ', maximum-scale=' + scale.value + ', minimum-scale=' + scale.value + ', user-scalable=no'
      )
      if (docEl.firstElementChild) {
        docEl.firstElementChild.appendChild(metaEl)
      } else {
        const wrap = document.createElement('div')
        wrap.appendChild(metaEl)
        document.write(wrap.innerHTML)
      }
    }

    refreshRem()
  }

  onMounted(() => {
    initFlexible()

    window.addEventListener('resize', () => {
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 300)
    })

    window.addEventListener('pageshow', (e) => {
      if (e.persisted) {
        clearTimeout(tid)
        tid = setTimeout(refreshRem, 300)
      }
    })

    if (document.readyState === 'complete') {
      document.body.style.fontSize = 12 * dpr.value + 'px'
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        document.body.style.fontSize = 12 * dpr.value + 'px'
      })
    }
  })

  onUnmounted(() => {
    clearTimeout(tid)
  })

  return {
    dpr,
    scale,
  }
}

export default useFlexible
