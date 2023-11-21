<template>
  <div>
    <Header
        titre="Accueil"
        hasFleche="true"
        hasRechercheEtFavoris="false"
    />
    <div v-if="annonce">
      <h3>{{annonce.titre}}</h3>
      <p>{{annonce.prix}}</p>
      <p>{{annonce.codePostal}}{{annonce.ville}}</p>
      <p>{{annonce.description}}</p>
      <button>Faire une visite</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Annonce} from "@/model/Annonce";
import Header from "@/components/Header.vue";
import {getAnnonce} from "@/service/AnnonceService";
import {ref} from "vue";

const props = defineProps({
  id: Number
});

let annonce = ref<Annonce | null>(null);

getAnnonce(props.id).then(result => annonce.value = result);
</script>

<style scoped>

</style>