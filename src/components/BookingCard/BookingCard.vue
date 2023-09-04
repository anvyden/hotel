<script lang="ts" setup>
import TheButton from '../TheButton/TheButton.vue'

type Props = {
  options: {
    площадь: string
    вместимость: string
    фуршет: string
  }
}

defineProps<Props>()

const emit = defineEmits(['openModal'])
</script>

<template>
  <div class="booking-card">
    <h3 class="booking-card__title">Просторный зал с панорамным видом на город</h3>
    <ul class="booking-card__hall-options">
      <li class="booking-card__hall-option" v-for="(value, key) in options" :key="key">
        <span class="booking-card__hall-option-name">{{ key }}</span>
        <span class="booking-card__hall-option-value">{{ value }}</span>
      </li>
    </ul>
    <div class="booking-card__buttons">
      <TheButton
        :type="'button'"
        :text="'Забронировать'"
        @clicked="emit('openModal', true)"
        :size="'large'"
      />
      <TheButton
        :type="'button'"
        :text="'Посмотреть галерею'"
        :withoutFill="true"
        :size="'large'"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/_vars.scss';
@import '@/styles/_mixins.scss';
.booking-card {
  max-width: rem(536);
  padding: rem(34) rem(40) rem(48) rem(40);
  background: $white;
  box-shadow: $mainBoxShadow;
  border-radius: $mainBorderRadius;

  @include tablet {
    padding: 22px 16px 24px 16px;
  }

  &__title {
    margin-bottom: rem(30);

    @include font-h3;

    @include mobile {
      margin-bottom: 20px;
    }
  }

  &__hall {
    &-options {
      margin-bottom: rem(32);
      list-style-type: none;
    }

    &-option {
      display: flex;
      gap: rem(40);
      padding: 8px 0;

      @include mobile {
        font-size: 14px;
        line-height: 20px;
      }

      &:first-child {
        padding-top: 0;
      }

      &:not(:first-child) {
        border-top: 2px solid $platinum;
      }

      &:last-child {
        padding-bottom: 0;
      }

      &-name {
        flex-basis: 39%;
        color: $lightGray;

        @include mobile {
          flex-basis: 41%;
        }
      }

      &-value {
        flex-basis: 61%;
        color: $primaryColor;

        @include mobile {
          flex-basis: 59%;
        }
      }
    }
  }

  &__buttons {
    display: flex;
    gap: rem(15);

    @include tablet {
      flex-direction: column;
      gap: 16px;
    }
  }
}
</style>
