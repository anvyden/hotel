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
.booking-card {
  max-width: 536px;
  padding: 40px 40px 48px 40px;
  background: #fff;
  box-shadow: 0px 8px 16px 0px rgba(34, 35, 36, 0.1);

  &__title {
    margin-bottom: 24px;
  }

  &__hall {
    &-options {
      margin-bottom: 48px;
      list-style-type: none;
    }

    &-option {
      display: flex;
      gap: 40px;
      padding: 8px 0;

      &:first-child {
        padding-top: 0;
      }

      &:not(:first-child) {
        border-top: 2px solid #e9eaec;
      }

      &:last-child {
        padding-bottom: 0;
      }

      &-name {
        flex-basis: 50%;
        color: #acada5;
      }

      &-value {
        flex-basis: 50%;
        color: #18191b;
      }
    }
  }

  &__buttons {
    display: flex;
    gap: 16px;
  }
}
</style>
