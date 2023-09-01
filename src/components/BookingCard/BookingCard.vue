<script lang="ts" setup>
import Button from '../Button/Button.vue'

type Props = {
  options: {
    площадь: string
    вместимость: string
    фуршет: string
  }
}

defineProps<Props>()
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
      <Button :type="'button'" :text="'Забронировать'" />
      <Button :type="'button'" :text="'Посмотреть галерею'" :withoutFill="true" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/_vars.scss';
@import '@/styles/_mixins.scss';
.booking-card {
  max-width: rem(536);
  padding: rem(40) rem(40) rem(48) rem(40);
  background: $white;
  box-shadow: $mainBoxShadow;

  &__title {
    margin-bottom: rem(24);

    @include font-h3;
  }

  &__hall {
    &-options {
      margin-bottom: rem(48);
      list-style-type: none;
    }

    &-option {
      display: flex;
      gap: rem(40);
      padding: 8px 0;

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
        flex-basis: 50%;
        color: $lightGray;
      }

      &-value {
        flex-basis: 50%;
        color: $primaryColor;
      }
    }
  }

  &__buttons {
    display: flex;
    gap: rem(16);
  }
}
</style>
