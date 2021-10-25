<template>
  <main class="details">
    <Titlebar content="CHARACTER DETAILS" />
    <section class="details__hero">

      <section>
          <img src="url" />
      </section>
      <section v-if="character.value.name">
        <h2 class="card__title"> {{character.value.name}} </h2>
        <p class="card__description"></p>
        <p class="card__long__description"></p>
        <section class="details__hero__buttons">
          <Button class="light" content="DELETE" />
          <Button content="EDIT" />
        </section>
      </section>
     
    </section>
  </main>
</template>

<script setup>
//import Button from "@/components/Button.vue";
import Titlebar from "@/components/Titlebar.vue";
import { onMounted, ref } from "@vue/runtime-core";
import { useRoute } from "vue-router";
const route = useRoute();
const character = ref([]);

/**
 * 
 */
async function getChar(id) 
{
   const response = await fetch(`https://character-database.becode.xyz/characters/${id}`);
  if (!response.ok) throw new Error(response.statusText) 
  return await response.json();
}

onMounted(async () => {
  try {
    character.value = await getChar(route.params.id);
    console.log(character.value.name)
  } catch (err) {
    console.error(err);
  }
});

</script>

<style lang="scss">
.details {
  max-width: $xxl;
  margin: 0 auto;
  padding: 1em;
  &__hero {
    display: flex;
    justify-content: space-between;
    border: black;
    border-style: solid;
    padding: 1em 17em;
    &__buttons {
      display: flex;
      justify-content: space-evenly;
    }
  }
}
</style>
