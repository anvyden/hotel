<script lang="ts" setup>
import IconTelegram from '../icons/IconTelegram.vue'
import IconWhatsApp from '../icons/IconWhatsApp.vue'
import IconFacebook from '../icons/IconFacebook.vue'
import IconVk from '../icons/IconVk.vue'

type Props = {
  link: string
  icon: 'telegram' | 'whatsapp' | 'facebook' | 'vk'
  hasGrayFill?: boolean
  hasRoundedBorders?: boolean
}

const SOCIALS_ICONS = {
  telegram: IconTelegram,
  whatsapp: IconWhatsApp,
  facebook: IconFacebook,
  vk: IconVk
}

defineProps<Props>()
</script>

<template>
  <li
    class="social"
    :class="{
      'social--fill-gray': hasGrayFill,
      'social--rounded-borders': hasRoundedBorders
    }"
  >
    <a class="social__link" :href="link" rel="noopener">
      <component :is="SOCIALS_ICONS[icon]" />
    </a>
  </li>
</template>

<style lang="scss" scoped>
@import '@/styles/_vars.scss';
.social {
  width: 48px;
  height: 48px;
  border-radius: 2px;
  background: $secondaryColor;

  &--fill-gray {
    background: $lightGray;
  }

  &--rounded-borders {
    border-radius: $mainBorderRadius;
  }

  &__link {
    display: flex;
    padding: 12px;
  }
}
</style>
