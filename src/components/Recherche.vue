<template>
  <div>
    <input type="search" v-model="recherche" placeholder="entrer une ville"/>
    <button @click="valider">Valider</button>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";

const recherche = ref("");
const router = useRouter();

function valider() {
  router.push({
    name: 'accueil',
    query: {q: recherche.value}
  })
}

</script>

<style scoped>

</style>