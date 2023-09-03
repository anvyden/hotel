<script lang="ts" setup>
import Logo from '../Logo/Logo.vue'
import Social from '../Social/Social.vue'
import { FOOTER_SOCIALS } from './constants'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__logo">
          <a class="footer__logo-link" href="#" rel="noopener">
            <Logo :color="'#fff'" />
          </a>
        </div>
        <div class="footer__contacts">
          <p class="footer__contacts-text">Мы в соц. сетях</p>
          <ul class="footer__contacts-socials">
            <Social
              v-for="{ link, name, icon } in FOOTER_SOCIALS"
              :link="link"
              :icon="icon"
              :key="name"
              :has-gray-fill="true"
              :has-rounded-borders="true"
              :size="'large'"
            />
          </ul>
        </div>
      </div>
      <div class="footer__copyright">
        <p class="footer__copyright-text">© Hotel Stavropol, 2020</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/styles/_vars.scss';
@import '@/styles/_mixins.scss';
@import '@/styles/_layouts.scss';

.footer {
  padding-top: rem(48);
  background: $gray;
  border-radius: 20px 20px 0px 0px;

  @include mobile {
    padding: 40px 0 20px 36px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: rem(41);

    @include mobile {
      flex-direction: column;
      align-items: start;
      margin-bottom: 60px;
    }
  }

  &__logo {
    &-link {
      cursor: pointer;
    }

    @include mobile {
      margin-bottom: 35px;
    }
  }

  &__contacts {
    margin-right: rem(52);

    &-text {
      margin-bottom: rem(16);

      @include font-contacts;

      color: $white;

      @include mobile {
        margin-bottom: 16px;
        font-size: 20px;
        line-height: 24px;
      }
    }

    &-socials {
      display: flex;
      gap: rem(20);
      list-style-type: none;

      @include mobile {
        gap: 20px;
      }
    }
  }

  &__copyright {
    &-text {
      font-size: rem(14);
      line-height: rem(20);
      color: $white;

      @include mobile {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>
