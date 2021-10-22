<template>
  <header class="header">
    <div class="header__box">
      <router-link to="/" class="header__box-title">
        <img class="header__logo" src="@/assets/logo.svg" alt="logo" />
        <h1 class="header__title">CHARACTER<span>CONTENT MANAGER</span></h1>
      </router-link>
      <Button icon="plus" content="ADD NEW" />
    </div>
  </header>
</template>

<script setup>
import Button from "@/components/Button.vue";
</script>

<style lang="scss">
.header {
  background-color: $white;
  height: 90px;
  box-shadow: $box-shadow;
  &__box {
    max-width: $xxl;
    width: 100%;
    padding: 1em;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-title {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
  &__logo {
    width: 48px;
    height: auto;
  }
  &__title {
    font-size: 1.8em;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    margin-left: 0.6em;
    span {
      font-weight: normal;
      font-size: 1rem;
      letter-spacing: 0.09em;
    }
  }
}
</style>