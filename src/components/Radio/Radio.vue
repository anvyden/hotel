<script lang="ts" setup>
type Props = {
  text: string
  name: string
  isChecked?: boolean
}

defineProps<Props>()

const emit = defineEmits(['selected'])
</script>

<template>
  <label class="radio" @click="emit('selected', text)" :class="{ 'radio--selected': isChecked }">
    <input class="radio__input" type="radio" :name="name" :checked="isChecked" />
    <span class="radio__text">{{ text }}</span>
  </label>
</template>

<style lang="scss" scoped>
@import '@/styles/_vars.scss';
@import '@/styles/_mixins.scss';

.radio {
  position: relative;
  padding: rem(12) rem(32) rem(12) rem(12);
  border-radius: $controlsBorderRadius;
  background: $white;
  box-shadow: $mainBoxShadow;
  cursor: pointer;

  &--selected {
    outline: 1px solid $secondaryColor;
  }

  @include desktop {
    padding: rem(15) rem(24) rem(15) rem(8);
  }

  @include small-desktop {
  }

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
