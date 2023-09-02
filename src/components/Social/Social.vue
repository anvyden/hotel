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
  size?: 'small'
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
      'social--rounded-borders': hasRoundedBorders,
      'social--size-small': size === 'small'
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

  &--size-small {
    width: 52px;
    height: 52px;

    .social {
      &__link {
        padding: 14px;
      }
    }
  }

  &__link {
    display: flex;
    padding: 12px;
  }
}
</style>
