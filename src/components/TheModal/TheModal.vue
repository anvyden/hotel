<script lang="ts" setup>
import TheButton from '../TheButton/TheButton.vue'
import TheInput from '../TheInput/TheInput.vue'
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
            <TheInput :type="'text'" :title="'Ваше имя'" :placeholder="'Введите ваше имя'" />
          </div>
          <div class="modal__form-phone">
            <TheInput
              :type="'text'"
              :title="'Ваш номер телефона'"
              :placeholder="'+7 (___) ___-__-__'"
              :has-phone-mask="true"
            />
          </div>
          <TheButton :type="'submit'" :text="'Забронировать'" @click="emit('closeModal', false)" />
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

    @include small-tablet {
      flex-direction: column;
      padding: 20px 40px 20px 30px;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: 58%;

    @include small-tablet {
      margin-bottom: 20px;
    }
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

    @include small-tablet {
      margin-bottom: 20px;
    }

    @include mobile {
      line-height: 15px;
    }
  }

  &__privacy {
    max-width: rem(320);
    font-family: Roboto, Arial, sans-serif;
    font-size: 12px;
    line-height: 15px;
    color: $lightGray;

    @include small-tablet {
      max-width: 100%;
    }

    &-link {
      color: $lightGray;
      text-decoration: underline;
    }
  }

  &__form {
    flex-basis: 42%;

    &-name {
      margin-bottom: 16px;
    }

    &-phone {
      margin-bottom: 16px;
    }
  }

  &__button {
    &-close {
      position: absolute;
      top: 16px;
      right: 16px;
      background: none;
      border: none;
      cursor: pointer;
    }
  }
}
</style>
