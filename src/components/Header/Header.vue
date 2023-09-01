<script setup lang="ts">
import Logo from '../Logo/Logo.vue'
import IconAddress from '../icons/IconAddress.vue'
import Navigation from '../Navigation/Navigation.vue'
import { HEADER_SOCIALS } from './constants'
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__logo">
          <a class="header__logo-link" href="#" rel="noopener">
            <Logo />
          </a>
        </div>
        <div class="header__contacts">
          <div class="header__address">
            <i class="header__address-icon">
              <IconAddress />
            </i>
            <p class="header__address-text">г. Ставрополь,<br />ул. Пушкина 272</p>
          </div>
          <ul class="header__socials">
            <li
              v-for="{ link, name, icon } in HEADER_SOCIALS"
              class="header__socials-item"
              :key="name"
            >
              <a class="header__socials-item-link" :href="link" rel="noopener">
                <component :is="icon" />
              </a>
            </li>
          </ul>
          <div class="header__phone">
            <p class="header__phone-number">+7 (123) 45-67-89</p>
            <a class="header__phone-link" href="tel:+7123456789">Перезвоните мне</a>
          </div>
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

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: rem(16);
  }

  &__contacts {
    display: flex;
    gap: rem(48);
  }

  &__address {
    display: flex;
    align-items: center;
    max-width: rem(240);
    gap: rem(16);

    @include font-contacts;

    &-icon {
      display: flex;
    }
  }

  &__socials {
    display: flex;
    align-items: center;
    gap: rem(8);
    list-style-type: none;

    &-item {
      width: 48px;
      height: 48px;
      border-radius: 2px;
      background: $secondaryColor;

      &-link {
        display: flex;
        padding: 12px;
      }
    }
  }

  &__phone {
    text-align: right;

    &-number {
      @include font-contacts;
    }

    &-link {
      text-decoration: underline;

      @include font-roboto;
    }
  }

  &__navigation {
    margin-top: rem(32);
    margin-bottom: rem(16);
  }
}
</style>
