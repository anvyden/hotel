<script lang="ts" setup>
import TheRadio from '../TheRadio/TheRadio.vue'
import TheButton from '../TheButton/TheButton.vue'
import { ref } from 'vue'
import { QUIZ_QUESTIONS } from './constants'

const currentQuestion = ref(QUIZ_QUESTIONS[0])
const selectedAnswer = ref(QUIZ_QUESTIONS[0].answers[0])
const quizCompeleted = ref(false)
const quizIsVisible = ref(false)

const getSelectedAnswer = (answers: string[], currentAnswer?: string) => {
  return answers.find((answer) => answer === currentAnswer) || selectedAnswer.value
}

const getNextQuestion = () => {
  const nextQuestion = QUIZ_QUESTIONS[currentQuestion.value.questionNumber - 1 + 1]
  selectedAnswer.value = nextQuestion.answers[0]
  return nextQuestion
}
</script>

<template>
  <div class="quiz">
    <h1 class="quiz__title">Рассчитайте стоимость вашего банкета</h1>
    <p class="quiz__description">
      Ответьте на {{ QUIZ_QUESTIONS.length }} вопросов и получите горку из&nbsp;шампанского в
      подарок
    </p>
    <div class="quiz__content">
      <div class="quiz__quiz" :class="{ 'quiz__quiz--visible': quizIsVisible }">
        <div v-if="!quizCompeleted" class="quiz__quiz-content">
          <div class="quiz__quiz-counter">
            <p class="quiz__quiz-counter-text">
              Вопрос {{ currentQuestion.questionNumber }} из {{ QUIZ_QUESTIONS.length }}
            </p>
            <div class="quiz__quiz-counter-progress">
              <div class="quiz__quiz-counter-progress-empty"></div>
              <div
                class="quiz__quiz-counter-progress-filled"
                :style="{
                  width: `${(currentQuestion.questionNumber / QUIZ_QUESTIONS.length) * 100}%`
                }"
              ></div>
            </div>
          </div>
          <div class="quiz__quiz-question">
            <h4 class="quiz__quiz-question-text">{{ currentQuestion.question }}</h4>
            <ul class="quiz__quiz-question-answers-list">
              <li
                v-for="answer in currentQuestion.answers"
                class="quiz__quiz-question-answer"
                :key="answer"
              >
                <TheRadio
                  :name="currentQuestion.id"
                  :text="answer"
                  :is-checked="answer === selectedAnswer"
                  @selected="selectedAnswer = getSelectedAnswer(currentQuestion.answers, $event)"
                />
              </li>
            </ul>
          </div>
          <div class="quiz__quiz-controls">
            <TheButton
              v-if="currentQuestion.questionNumber !== QUIZ_QUESTIONS.length"
              :type="'button'"
              :text="'Следующий вопрос'"
              :with-arrow="true"
              @clicked="currentQuestion = getNextQuestion()"
            />
            <TheButton
              v-else
              :type="'button'"
              :text="'Завершить'"
              @clicked="quizCompeleted = true"
            />
          </div>
        </div>
        <div v-else class="quiz__compeleted">
          <p class="quiz__completed-text">Опрос завершен</p>
        </div>
      </div>
      <div
        class="quiz__additional-block"
        :class="{ 'quiz__additional-block--hidden': quizIsVisible }"
      >
        <img class="quiz__additional-block-img" src="@/assets/img/bottle.png" alt="bottle" />
        <h4 class="quiz__additional-block-text">
          Ответьте на {{ QUIZ_QUESTIONS.length }} вопросов и получите горку из&nbsp; шампанского в
          подарок
        </h4>
        <div class="quiz__additional-block-button">
          <TheButton
            :type="'button'"
            :text="'Начать'"
            :with-arrow="true"
            @clicked="quizIsVisible = true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/_vars.scss';
@import '@/styles/_mixins.scss';

.quiz {
  &__title {
    margin-bottom: rem(20);

    @include font-h2;

    @include mobile {
      margin: 0 16px 8px 16px;
    }
  }

  &__description {
    display: none;

    font-size: 14px;
    line-height: 20px;
    color: $middleGray;

    @include tablet {
      display: block;
      margin-bottom: 40px;
    }

    @include mobile {
      margin: 0 16px 24px 16px;
    }
  }

  &__content {
    display: flex;
    gap: rem(20);
  }

  &__quiz {
    width: 100%;
    max-width: rem(918);
    border-radius: $mainBorderRadius;
    background: $lightPlatinum;

    @include tablet {
      display: none;
    }

    &--visible {
      display: block;
    }

    &-content {
      padding: rem(32) rem(40);

      @include mobile {
        padding: 29px 18px 32px 16px;
      }
    }

    &-counter {
      margin-bottom: rem(33);

      @include mobile {
      }

      &-text {
        color: $gray;
        margin-bottom: rem(8);

        @include mobile {
          margin-bottom: 15px;
          font-size: 14px;
          line-height: 20px;
        }
      }

      &-progress {
        position: relative;

        &-empty {
          height: 4px;
          width: 100%;
          background: $white;
        }

        &-filled {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          background: $secondaryColor;
          height: 4px;
        }
      }
    }

    &-question {
      margin-bottom: rem(40);

      @include mobile {
        margin-bottom: 25px;
      }

      &-answers-list {
        display: flex;
        gap: rem(17);
        list-style-type: none;

        @include small-desktop {
          flex-wrap: wrap;
        }

        @include mobile {
          column-gap: 9px;
          row-gap: 16px;
        }
      }

      &-answer {
        display: flex;
      }

      &-text {
        margin-bottom: rem(23);
        color: $gray;

        @include font-h4;

        @include mobile {
          margin-bottom: 16px;
          font-size: 16px;
          line-height: 28px;
        }
      }
    }

    &-controls {
      position: relative;
      padding-top: rem(33);

      &::before {
        content: '';
        position: absolute;
        top: 1px;
        left: calc(0px - rem(40));
        width: calc(100% + rem(80));
        height: 1px;
        background: $platinum;
      }

      &::after {
        content: '';
        position: absolute;
        top: 1px;
        left: calc(0px - rem(40));
        width: calc(100% + rem(80));
        height: 1px;
        background: $white;
      }
    }
  }

  &__compeleted {
    text-align: center;
    margin: rem(170) 0;
  }

  &__additional-block {
    display: flex;
    align-items: end;
    position: relative;
    width: 100%;
    max-width: rem(650);
    border-radius: $mainBorderRadius;
    background: url('@/assets/img/quiz-background.png') no-repeat center;

    &--hidden {
      display: none;
    }

    @include tablet {
      max-width: rem(870);
      padding: 198px 195px 30px 16px;
    }

    &-img {
      position: absolute;
      right: 0;
      bottom: 0;
      max-height: 110%;

      @include mobile {
        max-height: 105%;
      }
    }

    &-text {
      max-width: rem(476);
      margin-left: rem(40);
      margin-bottom: rem(32);
      z-index: 1;

      @include font-h4;

      @include tablet {
        display: none;
      }
    }

    &-button {
      display: none;

      @include tablet {
        display: block;
      }
    }
  }
}
</style>
