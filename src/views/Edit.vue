<template>
  <main class="edit">
    <Titlebar :content="title" />
    <form class="edit__form">
      <label class="edit__label" for="image">Image</label>
      <input type="file" name="image" id="image" class="edit__input-file" />

      <label class="edit__label" for="name">Name</label>
      <input type="text" name="name" id="name" class="edit__input" />

      <label class="edit__label" for="schortDescription"
        >Short Description</label
      >
      <input
        type="text"
        name="schortDescription"
        id="schortDescription"
        class="edit__input"
      />

      <label class="edit__label" for="description">Description</label>
      <textarea name="description" id="description" class="edit__input" cols="30" rows="10" />

      <div class="edit__buttons">
        <Button type="reset" content="CANCEL" @click="goToBack()" class="light" />
        <Button type="submit" content="CONFIRM" />
      </div>
    </form>
  </main>
</template>

<script setup>
import Titlebar from "../components/Titlebar.vue";
import Button from "../components/Button.vue";
import { defineProps } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter()

const goToBack = () => {
  router.go(-1)
}
defineProps({
  id: String,
});
const id = id;
const title = id ? "EDIT CHARACTER" : "ADD NEW CHARACTER";
</script>

<style lang="scss">
.edit {
  max-width: $xxl;
  margin: 0 auto;
  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: $sm;
    margin: 0 auto;
  }
  &__input {
    border-radius: $border-radius-big;
    width: 100%;
    padding: 1em;
    background-color: $light-grey;
    margin: .2em auto 1em auto;
    textarea {
      height: 150px;
    }
  }
  &__label {
    text-align: left;
    width: 95%;
  }
  &__buttons {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin: 2em auto;
  }
}
</style>