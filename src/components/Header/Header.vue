<script setup lang="ts">
import Logo from '../Logo/Logo.vue'
import IconAddress from '../icons/IconAddress.vue'
import Social from '../Social/Social.vue'
import Navigation from '../Navigation/Navigation.vue'
import Button from '../Button/Button.vue'
import { HEADER_SOCIALS } from './constants'

const emit = defineEmits(['openModal'])
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__links">
          <div class="header__burger-menu">
            <div class="header__burger-menu-line"></div>
            <div class="header__burger-menu-line"></div>
            <div class="header__burger-menu-line"></div>
          </div>
          <div class="header__logo">
            <a class="header__logo-link" href="#" rel="noopener">
              <Logo :color="'#18191b'" />
            </a>
          </div>
          <div class="header__logo-mobile">
            <a class="header__logo-link" href="#" rel="noopener">
              <Logo :color="'#18191b'" :mobile-logo="true" />
            </a>
          </div>
        </div>
        <div class="header__contacts">
          <div class="header__address">
            <i class="header__address-icon">
              <IconAddress />
            </i>
            <p class="header__address-text">г. Ставрополь, ул.&nbsp;Пушкина 272</p>
          </div>
          <ul class="header__socials">
            <Social
              v-for="{ link, name, icon } in HEADER_SOCIALS"
              :link="link"
              :icon="icon"
              :key="name"
            />
          </ul>
          <div class="header__phone">
            <p class="header__phone-number">+7 (123) 45-67-89</p>
            <button class="header__phone-button" @click="emit('openModal', true)">
              Перезвоните мне
            </button>
          </div>
        </div>
        <div class="header__call-button">
          <Button :text="'Позвонить'" @clicked="emit('openModal', true)" />
        </div>
      </div>
      <div class="header__navigation">
        <Navigation />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/styles/_vars.scss';
@import '@/styles/_mixins.scss';
@import '@/styles/_layouts.scss';

.header {
  border-radius: 0px 0px 16px 16px;
  border: 1px solid $lightPlatinum;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: $headerBoxShadow;
  backdrop-filter: blur(16px);

  @include tablet {
    padding: 12px 15px 12px 18px;
    border-radius: 0;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    margin-top: rem(12);

    @include tablet {
      margin-top: 3px;
    }
  }

  &__links {
    display: flex;
  }

  &__burger-menu {
    display: none;
    position: relative;
    width: 18px;
    height: 12px;
    margin-top: 14px;

    @include tablet {
      display: block;
    }

    &-line {
      position: absolute;
      width: 18px;
      height: 2px;
      background: $secondaryColor;
      content: '';

      &:nth-child(1) {
        top: 0;
        left: 0;
      }

      &:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
        left: 0;
      }

      &:nth-child(3) {
        bottom: 0;
        left: 0;
      }
    }
  }

  &__logo {
    @include tablet {
      display: none;
    }

    &-mobile {
      display: none;

      @include tablet {
        display: block;
        margin-left: 19px;
      }
    }
  }

  &__contacts {
    display: flex;

    @include tablet {
      display: none;
    }
  }

  &__call-button {
    display: none;

    @include tablet {
      display: block;
      margin-top: 2px;
    }
  }

  &__address {
    display: flex;
    max-width: rem(240);
    gap: rem(16);
    margin-right: rem(49);

    @include font-contacts;

    &-icon {
      display: flex;
      margin-top: rem(12);
    }
  }

  &__socials {
    display: flex;
    gap: rem(8);
    margin-right: rem(50);
    list-style-type: none;
  }

  &__phone {
    text-align: right;

    &-number {
      @include font-contacts;
    }

    &-button {
      border: none;
      background: none;
      text-decoration: underline;

      @include font-roboto;
    }
  }

  &__navigation {
    margin-top: rem(23);
    margin-bottom: rem(16);

    @include tablet {
      display: none;
    }
  }
}
</style>
