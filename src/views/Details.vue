<template>
  <main class="details">
    <Titlebar content="CHARACTER DETAILS" />
    <section class="details__hero">

      <section>
          <img src="" />
      </section>
      <section>
        <h2 class="card__title"> </h2>
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
