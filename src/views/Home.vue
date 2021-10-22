<template>
  <main class="home">
    <div class="home__title">
      <Titlebar content="CHARACTERS" />
      <div class="search__box">
        <input
          type="text"
          placeholder="Recherche"
          v-model="search"
          class="search-hero"
        />
        <box-icon class="search__icon" name="search-alt"></box-icon>
      </div>
    </div>
    <section class="home__grid">
      <Loading v-if="characters.length === 0" />
      <Error v-if="characters.length !== 0 && filteredCharacters.length === 0" content="NO RESULT FOR YOUR SEARCH" icon="search-alt" />
      <Card
        v-for="character in filteredCharacters"
        :key="character.id"
        :character="character"
      />
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref, computed } from "@vue/runtime-core";
import Card from "@/components/Card.vue";
import Titlebar from "@/components/Titlebar.vue";
import Loading from "@/components/Loading.vue";
import Error from "../components/Error.vue";

const characters = ref([]);
const search = ref("");

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

const filteredCharacters = computed(() => {
  if (characters.length === 0) return [];
  return characters.value.filter((char) => {
    return char.name.toLowerCase().includes(search.value.toLowerCase());
  });
});
</script>

<style lang="scss">
.home {
  max-width: $xxl;
  margin: 0 auto;
  padding: 1em;
  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 2em;
  }
  &__grid {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    min-height: 60vh;
  }
}

.search {
  &__box {
    display: flex;
    justify-content: space-between;
    color: $grey;
    background-color: $light-grey;
    border-radius: $border-radius-big;
    padding: 0.3em 0.5em;
    width: 215px;
    input {
      width: 80%;
    }
  }
  &__icon {
    fill: $grey;
    cursor: pointer;
  }
}
</style>
