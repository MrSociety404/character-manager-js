<template>
  <article class="card">
    <img
      class="card__image"
      :src="`data:image/jpeg;base64,${character.image}`"
      alt="image"
    />
    <div class="card__info">
      <h2 class="card__title"> {{character.name}} </h2>
      <p class="card__description"> {{character.shortDescription}} </p>
      <router-link class="card__link" :to="`/details/${character.id}`">
        Learn more
        <box-icon class="card__icon" name="chevron-right"></box-icon>
      </router-link>
    </div>
  </article>
</template>

<script setup>
import { defineProps  } from "vue";

defineProps({
  character: Object
})
</script>

<style lang="scss">
.card {
  width: 420px;
  height: 200px;
  max-width: 100%;
  display: flex;
  align-items: center;
  background-color: $white;
  box-shadow: $box-shadow;
  border-radius: $border-radius;
  margin: 1em 0;
  &__image {
    height: 100%;
    min-width: 150px;
    max-width: 150px;
    object-fit: cover;
    border-radius: $border-radius 0 0 $border-radius;
  }
  &__info {
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    height: 100%;
  }
  &__title {
    font-weight: bold;
    font-size: 1.4em;
    text-transform: uppercase;
    word-break: break-all;
  }
  &__description {
    margin: 1em 0 3em 0 ;
  }
  &__link {
    color: $primary;
    fill: $primary;
    font-weight: bold;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    &:hover {
      border-bottom: 2px solid $primary ;
    }
  }
  &__icon {
    width: 20px;
    height: 20px;
  }
}
</style>