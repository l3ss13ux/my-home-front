<template>
  <div>
    <Header
        titre="Mes favoris"
        hasFleche="true"
    />
    <div class="liste-annonces">
      <router-link :to="'/ma-selection/' + annonce.id" v-for="annonce in annonces" :key="annonce.id" class="router">
        <AnnonceCard :annonce="annonce"/>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from "@/components/Header.vue";
import {onMounted, ref} from "vue";
import AnnonceCard from "@/components/AnnonceCard.vue";
import {getAnnonces} from "@/service/AnnonceService";

let annonces = ref([]);
let favoris = localStorage.getItem("favorisId") ? JSON.parse(localStorage.getItem("favorisId")!) : [];


  getAnnonces().then(result => {
    annonces.value = result.filter((annonce) => favoris.includes(annonce.id.toString()));
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