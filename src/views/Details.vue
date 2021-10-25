<template>
  <main class="details">
    <Titlebar content="CHARACTER DETAILS" />
    <section class="details__hero" v-if="load">

      <section>
          <img src="url" />
      </section>
      <section>
        <h2 class="card__title"> {{character.name}} </h2>
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

<script>
import Titlebar from '@/components/Titlebar.vue'
import Button from '@/components/Button.vue'
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
    const response = await fetch(`https://character-database.becode.xyz/characters/40631458-60dd-4e8b-99cc-40c5c80fe01b`)
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
