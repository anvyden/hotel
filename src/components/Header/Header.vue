<script setup lang="ts">
import Logo from '../Logo/Logo.vue'
import IconAddress from '../icons/IconAddress.vue'
import Social from '../Social/Social.vue'
import Navigation from '../Navigation/Navigation.vue'
import { HEADER_SOCIALS } from './constants'
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__logo">
          <a class="header__logo-link" href="#" rel="noopener">
            <Logo :color="'#18191b'" />
          </a>
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
    margin-top: rem(12);
  }

  &__contacts {
    display: flex;
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

    &-link {
      text-decoration: underline;

      @include font-roboto;
    }
  }

  &__navigation {
    margin-top: rem(23);
    margin-bottom: rem(16);
  }
}
</style>
