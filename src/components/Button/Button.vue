<script lang="ts" setup>
import IconArrow from '../icons/IconArrow.vue'

type Props = {
  text: string
  withArrow?: boolean
}

defineProps<Props>()
const emit = defineEmits(['clicked'])
</script>

<template>
  <button class="button" :class="{ 'button--with-arrow': withArrow }" @click="emit('clicked')">
    {{ text }}
    <IconArrow v-if="withArrow" />
  </button>
</template>

<style lang="scss" scoped>
@import '@/styles/_vars.scss';

.button {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 32px;
  font-family: Roboto, Arial, sans-serif;
  font-size: 15px;
  line-height: 20px;
  border: none;
  border-radius: 4px;
  background: $secondaryColor;
  color: #fff;

  &--with-arrow {
    padding: 14px 24px 14px 32px;
  }
}
</style>
