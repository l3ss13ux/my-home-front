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
import {getAnnonces, getAnnoncesParVille} from '@/service/AnnonceService.ts'
import {ref, watch} from 'vue';
import AnnonceCard from "@/components/AnnonceCard.vue";
import Header from "@/components/Header.vue";
import {useRoute} from "vue-router";

let annonces = ref([]);
const route = useRoute();

if(route.query.q) {
  getAnnoncesParVille(route.query.q as String).then(result => annonces.value = result);
} else {
  getAnnonces().then(result => annonces.value = result);
}



watch(() => route.query.q, async nouvelleRecherche => {
  if (nouvelleRecherche) {
    annonces.value = await getAnnoncesParVille(nouvelleRecherche as String)
  } else {
    annonces.value = await getAnnonces();
  }
});
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