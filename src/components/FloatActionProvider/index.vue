<script lang="ts" setup>
import AlarmDialogTriggerButton from '@/components/AlarmDialog/index.vue'
</script>

<template name="FloatActionProvider">
  <div>
    <slot name="default" />

    <div class="fixed right-6 bottom-28 z-99">
      <AlarmDialogTriggerButton />
    </div>
  </div>
</template>
