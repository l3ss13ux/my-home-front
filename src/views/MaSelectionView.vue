<template>
  <div>
    <Header
        titre="Ma sélection"
        hasFleche="true"
    />
    <div v-if="afficherNotification" class="notification">
      <span class="fermer-bouton" @click="fermerNotification">&times;</span>
      Votre demande de visite a été envoyée
    </div>
    <div v-if="annonce" class="body-annonce">
      <img :src="'/images/' + annonce.image">
      <div class="titre-et-prix">
        <h3>{{annonce.titre}}</h3>
        <h2>{{annonce.prix}} €</h2>
      </div>
      <p>{{annonce.codePostal}} {{annonce.ville}}</p>
      <p>{{annonce.description}}</p>
      <button @click="faireUneVisite">Faire une visite</button>
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
let afficherNotification = ref(false);

function faireUneVisite(event) {
  afficherNotification.value = true;
}

function fermerNotification(event) {
  afficherNotification.value = false;
}

getAnnonce(props.id).then(result => annonce.value = result);
</script>

<style scoped>
.body-annonce {
  padding: 0 520px;
}

img {
  width: 700px;
  height: 490px;
}

.titre-et-prix {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

button {
  background-color: #4DE3ED;
  color: white;
  text-align: center;
  border: none;
  border-radius: 24px;
  padding: 12px 36px;
}

.notification {
  padding: 20px;
  background-color: #C0F3BF;
  color: #366835;
}

.fermer-bouton {
  margin-left: 15px;
  color: #366835;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.fermer-bouton:hover {
  color: white;
}
</style>