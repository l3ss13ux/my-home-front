<template>
  <Header
      titre="Accueil"
      hasRechercheEtFavoris="true"
  >
  </Header>
  <div class="liste-annonces">
    <router-link :to="'/ma-selection/' + annonce.id" v-for="annonce in annonces" :key="annonce.id" class="router">
      <AnnonceCard :annonce="annonce"/>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import {getAnnonces} from '@/service/AnnonceService.ts'
import {ref} from 'vue';
import AnnonceCard from "@/components/AnnonceCard.vue";
import Header from "@/components/Header.vue";

let annonces = ref([]);
  getAnnonces().then(result => annonces.value = result);
</script>

<style scoped>
.liste-annonces {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
}

.router {
  text-decoration: none;
}
</style>