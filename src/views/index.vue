<template>
  <div class="w-full h-full page-background">
    <FloatActionProvider>
      <div class="container mx-auto flex flex-col gap-y-5 ">
        <h3 className="text-lg text-color-text pt-10 pb-7">
          通过互联网方式实现企业单位消防和视频AI感知，设备云端接入，大幅降低基础设施投入和运营管理成本，实现企业消防业务的低成本、智慧化管理。
        </h3>

        <div v-for="(group, groupIndex) in menuList" :key="group.groupId + groupIndex.toString()">
          <h4 class="mb-5 text-xl font-bold">{{ group.groupName }}</h4>
          <el-row :gutter="20">
            <el-col v-for="(menu, menuIndex) in group.menuList" :key="menu.id + menuIndex.toString()" :span="6">
              <div class="group relative menu-card-container" @click="() => jumpRouter(menu.path)">
                <div class="menu-card">
                  <h6 class="text-lg font-bold leading-none my-0">{{ menu.title }}</h6>
                  <p class="relative z-20 line-clamp-2 break-words text-sm">{{ menu.description }}</p>
                  <div class="menu-card-icon" />
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </FloatActionProvider>
  </div>
</template>

<script setup name="Index" lang="ts">
import FloatActionProvider from '@/components/FloatActionProvider/index.vue'
const router = useRouter()

const menuList = [
  {
    groupId: 0,
    groupName: '数据可视化',
    menuList: [
      {
        id: 0,
        title: '数智监管驾驶舱',
        description: '快速了解运营业务整体状况',
        path: '/dashboard/digital-supervision',
      },
      // {
      //   id: 1,
      //   title: '智慧消防云服务平台',
      //   description: '快速了解运营业务整体状况',
      //   path: '/servicePlatform',
      // },
    ],
  },
  {
    groupId: 1,
    groupName: '业务管理',
    menuList: [
      {
        id: 0,
        title: '基础配置',
        description: '提供单位管理、设备管理、资源上图、报警通知等基础功能',
        path: '/system/dept',
      },
    ],
  },
]

const jumpRouter = (routePath: string) => {
  router.push(routePath)
}
</script>

<style scoped lang="scss">
/*菜单容器样式*/

$border-color: #2964f0;

.page-background{
  background-image: url("@/assets/images/index/bg_home.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.menu-card-container {
  .menu-card {
    position: relative;
    padding: 30px 20px;
    width: 100%;
    height: 148px;
    border-radius: 12px;
    background-image: linear-gradient(313deg, #eaefff, #eef2ff);
    cursor: pointer;

    &::before,
    &::after {
      content: " ";
      display: block;
      clip-path: inset(0 0 100% 100%);
    }

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      border-width: 2px 0 0 2px;
      border-style: solid;
      border-color: $border-color;
    }

    &::after {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      border-width: 0 2px 2px 0;
      border-style: solid;
      border-color: $border-color;
    }
  }

  .menu-card-icon {
    position: absolute;
    top: -4.0625rem;
    right: -12px;
    height: 12.5rem;
    width: 12.5rem;
    transform: scale(0.74);
    background: url('@/assets/images/index/icon_menuCard_01.png') no-repeat 0 0;
    background-size: auto 200%;
  }

  &:hover {
    .menu-card {
      background-image: linear-gradient(313deg, #eaefff, #d9e0ff);

      &::before {
        animation: border-animate-top-left-data 1s linear forwards;
      }

      &::after {
        animation: border-animate-bottom-right-data 1s linear 0.5s forwards;
      }
    }

    .menu-card-icon {
      animation: icon-animate-data 1s steps(1) forwards;
    }
  }
}


@keyframes border-animate-top-left-data {
  0% {
    clip-path: inset(0 0 8.125rem 100%);
  }
  25% {
    clip-path: inset(0 0 8.125rem 0);
  }
  50%, 100% {
    clip-path: inset(0 0 0 0);
  }
}

@keyframes border-animate-bottom-right-data {
  0%, 50% {
    clip-path: inset(8.125rem 100% 0 0);
  }
  25% {
    clip-path: inset(8.125rem 0 0 0);
  }
  50%, 100% {
    clip-path: inset(0 0 0 0);
  }
}

@keyframes icon-animate-data {
  0% {
    background-position: 0 0;
  }
  2.27% {
    background-position: -12.5rem 0;
  }
  4.55% {
    background-position: -25rem 0
  }
  6.82% {
    background-position: -37.5rem 0
  }
  9.09% {
    background-position: -50rem 0
  }
  11.36% {
    background-position: -62.5rem 0
  }
  13.64% {
    background-position: -75rem 0
  }
  15.91% {
    background-position: -87.5rem 0
  }
  18.18% {
    background-position: -100rem 0
  }
  20.45% {
    background-position: -112.5rem 0
  }
  22.73% {
    background-position: -125rem 0
  }
  25.00% {
    background-position: -137.5rem 0
  }
  27.27% {
    background-position: -150rem 0
  }
  29.55% {
    background-position: -162.5rem 0
  }
  31.82% {
    background-position: -175rem 0
  }
  34.09% {
    background-position: -187.5rem 0
  }
  36.36% {
    background-position: -200rem 0
  }
  38.64% {
    background-position: -212.5rem 0
  }
  40.91% {
    background-position: -225rem 0
  }
  43.18% {
    background-position: -237.5rem 0
  }
  45.45% {
    background-position: -250rem 0
  }
  47.73% {
    background-position: -262.5rem 0
  }
  50.00% {
    background-position: -275rem 0
  }
  52.27% {
    background-position: -287.5rem 0
  }
  54.55% {
    background-position: -300rem 0
  }
  56.82% {
    background-position: 0 -12.5rem
  }
  59.09% {
    background-position: -12.5rem -12.5rem
  }
  61.36% {
    background-position: -25rem -12.5rem
  }
  63.64% {
    background-position: -37.5rem -12.5rem
  }
  65.91% {
    background-position: -50rem -12.5rem
  }
  68.18% {
    background-position: -62.5rem -12.5rem
  }
  70.45% {
    background-position: -75rem -12.5rem
  }
  72.73% {
    background-position: -87.5rem -12.5rem
  }
  75.00% {
    background-position: -100rem -12.5rem
  }
  77.27% {
    background-position: -112.5rem -12.5rem
  }
  79.55% {
    background-position: -125rem -12.5rem
  }
  81.82% {
    background-position: -137.5rem -12.5rem
  }
  84.09% {
    background-position: -150rem -12.5rem
  }
  86.36% {
    background-position: -162.5rem -12.5rem
  }
  88.64% {
    background-position: -175rem -12.5rem
  }
  90.91% {
    background-position: -187.5rem -12.5rem
  }
  93.18% {
    background-position: -200rem -12.5rem
  }
  95.45% {
    background-position: -212.5rem -12.5rem
  }
  97.73% {
    background-position: -225rem -12.5rem
  }
  100.00% {
    background-position: -237.5rem -12.5rem
  }
}
</style>
