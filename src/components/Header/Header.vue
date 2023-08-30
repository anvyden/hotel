<script setup lang="ts">
import Logo from '../Logo/Logo.vue'
import IconAddress from '../icons/IconAddress.vue'
import IconTelegram from '../icons/IconTelegram.vue';
import IconWhatsApp from '../icons/IconWhatsApp.vue'
import Navigation from '../Navigation/Navigation.vue'
import { HEADER_SOCIALS } from './socials'
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
            <p class="header__address-text">г. Ставрополь,<br>ул. Пушкина 272</p>
          </div>
          <ul class="header__socials">
            <li v-for="{link, name} in HEADER_SOCIALS" class="header__socials-item">
              <a class="header__socials-item-link" :href=link rel="noopener">
                <IconTelegram v-if="name === 'telegram'"/>
                <IconWhatsApp v-else-if="name === 'whatsapp'"/>
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

  .container {
    max-width: 1588px;
    margin: 0 auto;
  }
  .header {
    border-radius: 0px 0px 16px 16px;
    border: 1px solid #F7F7F8;
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(16px);

    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 16px;
    }

    &__contacts {
      display: flex;
      gap: 48px;
    }

    &__address {
      display: flex;
      align-items: center;
      max-width: 240px;
      gap: 16px;
      font-size: 20px;
      line-height: 24px;

      &-icon {
        display: flex;
      }
    }

    &__socials {
      display: flex;
      align-items: center;
      gap: 8px;
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
        font-size: 20px;
        line-height: 24px;
        color: $gray;
      }

      &-link {
        font-family: 'Roboto', 'Arial', sans-serif;
        font-size: 15px;
        line-height: 20px;
        color: $secondaryColor;
        text-decoration: none;
      }
    }

    &__navigation {
      margin-top: 32px;
      margin-bottom: 16px;
    }
  }
</style>
