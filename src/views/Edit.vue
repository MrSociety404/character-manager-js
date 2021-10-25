<template>
  <main class="edit">
    <Titlebar :content="title" />
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
  </main>
</template>

<script setup>
import Titlebar from "../components/Titlebar.vue";
import Button from "../components/Button.vue";
import { defineProps } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
const router = useRouter();
defineProps({
  id: String,
});
const id = id;
const title = id ? "EDIT CHARACTER" : "ADD NEW CHARACTER";

const goToBack = () => {
  router.go(-1);
};

const sendCharacter = () => {
  try {
    let input = document.querySelector(".edit__input.file");
    checkInput(input);
    translateImage(input.files[0]);
  } catch (err) {
    Swal.fire({
      title: err.name,
      text: err.message,
      icon: 'error'
    })
  }
};

/**
 * Check if the input file is an PNG JPG GIF image
 * @throws {Error} message to send to the user
 */
const checkInput = (input) => {
  const regex = new RegExp("([a-zA-Z0-9s_\\.-:])+(.jpg|.png|.gif|.jpeg|.svg)$");
  if (!regex.test(input.value.toLowerCase()))
    throw new Error(
      "Incorrect Format ! please select a image file (png / jpg / gif)"
    );
};

/**
 * Translate a file into a base64 file. Max size 100 x 100 px
 * @throws {Error} if the file is too eavy
 */
const translateImage = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    const image = new Image();
    image.src = e.target.result;
    image.onload = function () {
      if (this.width > 100 || this.height > 100)
        throw new Error(
          "File is too eavy ! please select a file width max size 100x100 pixels"
        );
      else {
        //TODO
      }
    };
  };
  reader.readAsDataURL(file);
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