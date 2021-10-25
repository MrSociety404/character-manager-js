<template>
  <main class="details">
    <Titlebar content="CHARACTER DETAILS" />
    <section class="details__hero" v-if="character">

      <section>
          <img :src="`data:image/jpeg;base64,${character.image}`" :alt="character.name" />
      </section>
      <section>
        <h2 class="card__title"> {{ character.name }} </h2>
        <p class="card__description">{{ character.shortDescription }}</p>
        <p class="card__long__description"> {{ character.description }} </p>
        <section class="details__hero__buttons">
          <Button class="light" content="DELETE" />
          <Button content="EDIT" />
        </section>
      </section>
     
    </section>
  </main>
</template>

<script setup>
import Titlebar from '@/components/Titlebar.vue'
import Button from '@/components/Button.vue'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import { useRoute } from 'vue-router'

const route = useRoute()
const character = ref(null)

/**
 * Get A character by id
 * @throws {Error} return the error
 * @returns {Object} charater 
 */
const getCharacter = async (id) => {
  const response = await fetch(`https://character-database.becode.xyz/characters/${id}`)
  if(!response.ok) throw new Error(response.statusText)
  return await response.json()
}

onMounted(async () => {
  try {
    character.value = await getCharacter(route.params.id)
    console.log('Character load with success !')
  } catch (err) {
    console.error(err)
  }
})

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
