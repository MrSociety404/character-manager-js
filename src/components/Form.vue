<template>
  <div class="edit__form">
      <label class="edit__label image" for="image"
        >Click here to upload an image</label
      >
      <input
        type="file"
        accept="image/*"
        name="image"
        id="image"
        class="edit__input file"
      />

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
      <textarea
        name="description"
        id="description"
        class="edit__input"
        cols="30"
        rows="10"
      />

      <div class="edit__buttons">
        <Button
          type="reset"
          content="CANCEL"
          class="big light"
          @click="goToBack()"
        />
        <Button
          type="submit"
          content="CONFIRM"
          class="big"
          @click="sendCharacter()"
        />
      </div>
    </div>
</template>

<script setup>
import Button from "../components/Button.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToBack = () => {
  router.go(-1);
};

const sendCharacter = () => {
  this.$emit('send')
};
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
    margin: 0.2em auto 1em auto;
    textarea {
      height: 150px;
    }
    &.file {
      display: none;
    }
  }
  &__label {
    text-align: left;
    width: 95%;
    &.image {
      background-color: $light-grey;
      border-radius: $border-radius-big;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4em 0;
      width: 100%;
      margin-bottom: 1em;
      color: $grey;
      font-weight: bold;
      cursor: pointer;
    }
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