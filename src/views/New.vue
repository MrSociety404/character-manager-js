<template>
  <main class="edit">
    <Titlebar content="ADD NEW CHARACTER" />
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
        required
        @change="imageHandler()"
      />

      <img src="" alt="preview" class="preview" ref="preview" />

      <label class="edit__label" for="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        v-model="formData.name"
        class="edit__input"
        required
      />

      <label class="edit__label" for="schortDescription"
        >Short Description</label
      >
      <input
        type="text"
        name="schortDescription"
        id="schortDescription"
        class="edit__input"
        v-model="formData.shortDescription"
      />

      <label class="edit__label" for="description">Description</label>
      <VueSimplemde
        :configs="configs"
        v-model="formData.description"
        ref="markdownEditor"
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
import VueSimplemde from "vue-simplemde";
import { ref } from "@vue/reactivity";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
const router = useRouter();

const formData = ref({});
const configs = {
  spellChecker: false,
  toolbar: ["bold", "italic", "heading", "|", "quote"],
};

/**
 * go to the previous page
 */
const goToBack = () => {
  router.go(-1);
};

/**
 * On the input file check the image
 */
const imageHandler = () => {
  try {
    let input = document.querySelector(".edit__input.file");
    checkInput(input);
    translateImage(input.files[0]);
  } catch (err) {
    Swal.fire({
      title: "Oh an error !",
      text: err.message,
      icon: "error",
    });
  }
};

/**
 * Send the character if everythings is correct
 */
const sendCharacter = () => {
  try {
    if (
      !formData.value.name ||
      !formData.value.shortDescription ||
      !formData.value.description
    ) {
      throw new Error("All field are required !");
    }
    formData.value.image = document.querySelector(".preview").src.split(",")[1];
    newCharacter(formData.value);
    Swal.fire({
      title: "Success !",
      text: "A new character has been add !",
      icon: "success",
      preConfirm: () => {
        router.push("/");
      },
    });
  } catch (err) {
    Swal.fire({
      title: "Oh an error !",
      text: err.message,
      icon: "error",
    });
  }
};

/**
 * Contact the database to add the new character
 */
const newCharacter = async (data) => {
  const response = await fetch(
    "https://character-database.becode.xyz/characters",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        shortDescription: data.shortDescription,
        description: data.description,
        image: data.image,
      }),
    }
  );
  if (!response.ok) throw new Error(response.statusText);
  return await response.statusText;
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
    const preview = document.querySelector(".preview");
    preview.src = e.target.result;
    preview.classList.add("open");
  };
  reader.readAsDataURL(file);
};
</script>

<style lang="scss">
@import "~simplemde/dist/simplemde.min.css";
.preview {
  max-height: 200px;
  width: auto;
  display: none;
  &.open {
    display: block;
  }
}
.edit {
  max-width: $xxl;
  margin: 0 auto;
  padding: 1em;
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
.vue-simplemde {
  width: 100%;
}
</style>