<template>
  <div class="error">
    <div>
    <box-icon class="error__icon" :name='icon ? icon : `error`'></box-icon>
    </div>
    <h2 class="error__title"> {{content ? content : `ERROR ! CHECK THE CONSOLE FOR MORE INFORMATION`}} </h2>
    <Button class="error__btn" content="BACK HOME PAGE" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Button from './Button.vue';

defineProps({
  content: String,
  icon: String
})
</script>

<style lang="scss">
.error {
  div {
    width: 100px;
    fill: $grey;
  margin: 3em auto;
}
  &__title {
    font-size: 3em;
    margin: 1em 0;
    text-align: center;
  }
  &__btn {
    margin: 0 auto;
    font-size: 1.5em;
  }
}
</style>