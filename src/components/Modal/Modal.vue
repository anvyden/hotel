<script lang="ts" setup>
import Button from '../Button/Button.vue'
import IconClose from '../icons/IconClose.vue'

type Props = {
  isVisible: boolean
}

defineProps<Props>()

const emit = defineEmits(['closeModal'])
</script>

<template>
  <div class="modal" :class="{ 'modal--visible': isVisible }">
    <div class="modal__backdrop" @click="emit('closeModal', false)"></div>
    <div class="modal__content">
      <div class="modal__info">
        <div class="modal__heading">
          <h3 class="modal__title">Оставьте заявку</h3>
          <p class="modal__subtitle">Скоро с вами свяжется администратор</p>
        </div>
        <p class="modal__privacy">
          Нажимая на кнопку "Отправить", Вы соглашаетесь с&nbsp;<a
            class="modal__privacy-link"
            href="#"
            >Политикой конфиденциальности</a
          >
        </p>
      </div>
      <div class="modal__form">
        <form v-on:submit.prevent class="modal__form">
          <div class="modal__form-name">
            <p class="modal__form-name-title">Ваше имя</p>
            <input class="modal__form-name-input" />
          </div>
          <div class="modal__form-phone">
            <p class="modal__form-phone-title">Ваш номер телефона</p>
            <input class="modal__form-phone-input" />
          </div>
          <Button :type="'submit'" :text="'Забронировать'" @click="emit('closeModal', false)" />
        </form>
      </div>
      <button type="submit" class="modal__button-close" @click="emit('closeModal', false)">
        <IconClose />
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/_vars.scss';
@import '@/styles/_mixins.scss';

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: none;

  &__backdrop {
    // position: absolute;
    width: 100%;
    height: 100%;
    background: $primaryColor;
    opacity: 0.9;
  }

  &--visible {
    display: block;
  }

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: 100%;
    max-width: rem(842);
    padding: 42px 80px 62px 40px;
    background: $white;
    border-radius: $mainBorderRadius;
    box-shadow: $mainBoxShadow;
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: 58%;
  }

  &__heading {
    margin-top: -7px;
  }

  &__title {
    margin-bottom: 13px;

    @include font-h3;

    color: $secondaryColor;
  }

  &__subtitle {
    color: $lightGray;
  }

  &__privacy {
    max-width: rem(320);
    font-family: Roboto, Arial, sans-serif;
    font-size: 12px;
    line-height: 15px;
    color: $lightGray;

    &-link {
      color: $lightGray;
      text-decoration: underline;
    }
  }

  &__form {
    flex-basis: 42%;
    // margin-top: 0px;

    &-name {
      margin-bottom: 16px;

      &-title {
        margin-bottom: 5px;
        font-family: Roboto, Arial, sans-serif;
        font-size: 12px;
        line-height: 15px;
        color: $lightGray;
      }

      &-input {
        width: 100%;
        padding: 16px;
        font-family: Roboto, Arial, sans-serif;
        font-size: 14px;
        line-height: 20px;
        color: #27282a;
        border: none;
        border-radius: $controlsBorderRadius;
        background: $platinum;

        &:focus-visible {
          outline: 1px solid $primaryColor;
        }
      }
    }

    &-phone {
      margin-bottom: 16px;

      &-title {
        margin-bottom: 5px;
        font-family: Roboto, Arial, sans-serif;
        font-size: 12px;
        line-height: 15px;
        color: $lightGray;
      }

      &-input {
        width: 100%;
        padding: 16px;
        font-family: Roboto, Arial, sans-serif;
        font-size: 14px;
        line-height: 20px;
        color: #27282a;
        border: none;
        border-radius: $controlsBorderRadius;
        background: $platinum;

        &:focus-visible {
          outline: 1px solid $primaryColor;
        }
      }
    }
  }

  &__button {
    &-close {
      position: absolute;
      top: 16px;
      right: 16px;

      background: none;
      border: none;
    }
  }
}
</style>
