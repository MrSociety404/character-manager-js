<template>
  <main class="details">
    <Titlebar content="CHARACTER DETAILS" />
    <section class="details__hero" v-if="character">
      <div class="details__hero__description">
        <picture class="details__hero__picture">
          <img
            class="details__hero__image"
            :src="`data:image/jpeg;base64,${character.image}`"
            :alt="character.name"
          />
        </picture>
        <div class="details__hero__info">
          <h2 class="card__title">{{ character.name }}</h2>
          <p class="card__description">{{ character.shortDescription }}</p>
          <p
            class="card__long__description"
            v-html="marked(character.description)"
          />
          <div class="details__hero__buttons">
            <Button
              class="light big"
              content="DELETE"
              @click="confirmDelete()"
            />
            <Button class="big" content="EDIT" @click="edit()" />
          </div>
        </div>
      </div>
      <div class="details__hero__back">
        <Button
          class="buttonBack big"
          content="BACK HOME PAGE"
          @click="router.push('/')"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
import Titlebar from "@/components/Titlebar.vue";
import Button from "@/components/Button.vue";
import marked from "marked";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import Swal from "sweetalert2";
const router = useRouter();
const route = useRoute();
const character = ref(null);

/**
 * Get A character by id
 * @throws {Error} return the error
 * @returns {Object} charater
 */
const getCharacter = async (id) => {
  const response = await fetch(
    `https://character-database.becode.xyz/characters/${id}`
  );
  if (!response.ok) throw new Error(response.statusText);
  return await response.json();
};

const edit = () => {
  router.push(`/edit/${route.params.id}`);
};

const confirmDelete = () => {
  Swal.fire({
    title: "Are you sure ?",
    text: "Do you really want to delete this character ? This process cannot be undonne.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "red",
    confirmButtonText: "Delete",
    focusCancel: true,
    reverseButtons: true,
  }).then((res) => {
    if (res.isConfirmed) deleteCharacter();
  });
};

const deleteCharacter = async () => {
  try {
    const response = await fetch(
      `https://character-database.becode.xyz/characters/${route.params.id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) throw new Error(response.statusText);
    Swal.fire({
      title: "Success",
      text: `Character card "${character.value.name}" was successfully deleted!`,
      icon: "success",
      preConfirm: () => {
        router.go(-1);
      },
    });
  } catch (error) {
    Swal.fire({
      title: "Error",
      text: error.message,
      icon: "error",
    });
  }
};

onMounted(async () => {
  try {
    character.value = await getCharacter(route.params.id);
    console.log("Character load with success !");
  } catch (err) {
    console.error(err);
  }
});
</script>

<style lang="scss">
.details {
  max-width: $xl;
  padding: 1em;
  margin: 0 auto;
  &__hero {
    max-width: $lg;
    margin: 0 auto;
    &__buttons {
      display: flex;
      justify-content: space-evenly;
      margin: 2em 0;
      @media (max-width: $md) {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
      button {
        margin: 0.2em 0;
        min-width: 190px;
      }
    }
    &__image {
      height: auto;
      width: 100%;
      border-radius: $border-radius;
    }
    &__description {
      display: flex;
      justify-content: space-around;
      @media (max-width: $md) {
        flex-direction: column;
        align-items: center;
      }
    }
    &__info {
      max-width: 55%;
      width: 100%;
      @media (max-width: $md) {
        max-width: unset;
        padding: 1em;
      }
    }

    &__picture {
      max-width: 40%;
      width: 100%;
      padding: 0 1em;
      @media (max-width: $md) {
        max-width: unset;
      }
    }
    .buttonBack {
      margin: 1em auto;
    }
  }
}
</style>
