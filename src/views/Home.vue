<template>
  <main class="home">
    <section class="home__grid">
      <Card
        v-for="character in characters"
        :key="character.id"
        :character="character"
      />
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import Card from "../components/Card.vue";

let characters = ref([]);
const loadCharacter = async () => {
  const response = await fetch(
    "https://character-database.becode.xyz/characters"
  );
  return await response.json();
};

onMounted(async () => {
  try {
    characters.value = await loadCharacter();
    console.log("Character load with success !");
  } catch (err) {
    console.error(err);
  }
});
</script>

<style lang="scss">
.home {
  &__grid {
    padding: 1em;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>