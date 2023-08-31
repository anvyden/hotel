<script lang="ts" setup>
type Props = {
  text: string
  name: string
  isChecked?: boolean
}

defineProps<Props>()
</script>

<template>
  <label class="radio">
    <input class="radio__input" type="radio" :name="name" :checked="isChecked" />
    <span class="radio__text">{{ text }}</span>
  </label>
</template>

<style lang="scss" scoped>
@import '@/styles/_vars.scss';

.radio {
  position: relative;
  padding: 12px 32px 12px 12px;
  // border: 1px solid $secondaryColor;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 8px 16px 0px rgba(34, 35, 36, 0.1);

  &__input {
    position: absolute;
    outline: none;
    appearance: none;

    &:checked + .radio {
      &__text {
        &::after {
          display: block;
        }

        &::before {
          border-color: $secondaryColor;
        }
      }
    }
  }

  &__text {
    margin-left: 40px;
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 12px;
      transform: translateY(-50%);
      width: 24px;
      height: 24px;
      border: 3px solid #acada5;
      border-radius: 50%;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 18px;
      transform: translateY(-50%);
      display: none;
      width: 12px;
      height: 12px;
      background: $secondaryColor;
      border-radius: 50%;
    }
  }
}
</style>
