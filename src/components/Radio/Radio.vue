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
@import '@/styles/_mixins.scss';

.radio {
  position: relative;
  padding: 15px 32px 15px 12px;
  // border: 1px solid $secondaryColor;
  border-radius: $controlsBorderRadius;
  background: $white;
  box-shadow: $mainBoxShadow;
  cursor: pointer;

  &__input {
    position: absolute;
    outline: none;
    appearance: none;

    &:checked + .radio {
      &__text {
        color: #000;

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
    margin-left: rem(40);

    color: $middleGray;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 16px;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      border: 2px solid $lightGray;
      border-radius: 50%;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 21px;
      transform: translateY(-50%);
      display: none;
      width: 6px;
      height: 6px;
      background: $secondaryColor;
      border-radius: 50%;
    }
  }
}
</style>
