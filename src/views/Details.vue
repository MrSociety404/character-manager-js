<template>
  <main class="details">
    <Titlebar content="CHARACTER DETAILS" />
    <section class="details__hero" v-if="character">
      <div class="details__hero__description">
        <picture class="details__hero__picture">
          <img
            class="details__hero__image"
            :src="`data:image/jpeg;base64,${character.image}`"
            :alt="character.name"
          />
        </picture>
        <div>
          <h2 class="card__title">{{ character.name }}</h2>
          <p class="card__description">{{ character.shortDescription }}</p>
          <p class="card__long__description">{{ character.description }}</p>
          <div class="details__hero__buttons">
            <Button class="light" content="DELETE" />
            <Button content="EDIT" />
          </div>
        </div>
      </div>
      <div class="details__hero__back">
        <Button class="buttonBack" content="BACK HOME PAGE" />
      </div>
    </section>
  </main>
</template>

<script setup>
import Titlebar from "@/components/Titlebar.vue";
import Button from "@/components/Button.vue";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";

const route = useRoute();
const character = ref(null);

/**
 * Get A character by id
 * @throws {Error} return the error
 * @returns {Object} charater
 */
const getCharacter = async (id) => {
  const response = await fetch(
    `https://character-database.becode.xyz/characters/${id}`
  );
  if (!response.ok) throw new Error(response.statusText);
  return await response.json();
};

onMounted(async () => {
  try {
    character.value = await getCharacter(route.params.id);
    console.log("Character load with success !");
  } catch (err) {
    console.error(err);
  }
});
</script>

<style lang="scss">
.details {
  max-width: $xl;
  padding: 1em;
  &__hero {
    display: flex;
    max-width: $lg;
    margin: 0 auto;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: space-between;
    &__buttons {
      display: flex;
      justify-content: space-evenly;
    }
    &__image {
      height: auto;
      width: 100%;
      border-radius: $border-radius;
    }
    &__description {
      display: flex;
    }
    
    &__picture {
      max-width: 40%;
      width: 100%;
      padding: 0 1em;
    }
    .buttonBack {
      margin: 1em auto;
    }
  }
}
</style>
