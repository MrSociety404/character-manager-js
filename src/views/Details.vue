<template>
  <main class="details">
    <Titlebar content="CHARACTER DETAILS" />
    <section class="details__hero" v-if="load">

      <section>
          <img src="" />
      </section>
      <section>
        <h2 class="card__title"> {{character.name}} </h2>
        <p class="card__description"> {{character.shortDescription}} </p>
        <p class="card__long__description"> {{character.description}} </p>
        <section class="details__hero__buttons">
          <Button class="light" content="DELETE" />
          <Button content="EDIT" />
        </section>
      </section>
     
    </section>
  </main>
</template>

<script>
import Titlebar from '@/components/Titlebar.vue'
import Button from '@/components/Button.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
export default {
  data() {
    return {
      character: {},
      load: false
    }
  },
  components: {
    Titlebar,
    Button
  },
  async mounted() { 
    const response = await fetch(`https://character-database.becode.xyz/characters/${this.route.params.id}`)
    this.character = await response.json()
    this.load = true
  }
}
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
