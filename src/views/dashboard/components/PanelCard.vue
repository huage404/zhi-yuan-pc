<template>
  <div class="flex flex-col">
    <div class="h-12 px-12 bg__header bg-no-repeat flex items-center ">
      <slot name="header" />
    </div>
    <div class="p-5 flex-1">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg__header {
  background-size: 100% 100%;
  background-image: url("@/assets/images/dashboard/digital-supervision/bg-header.png");
}
</style>
