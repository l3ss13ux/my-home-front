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
    <div v-if="annonce" class="annonce">
      <div class="image-et-favori">
        <button v-if="estFavori()" @click="enleverDesFavoris" class="bouton-favori"><IconCoeurCoche/></button>
        <button v-else @click="mettreEnFavori" class="bouton-favori"><IconCoeurDecoche/></button>
        <img :src="'/images/' + annonce.image">
      </div>
      <div class="informations-annonce">
        <div class="titre-et-description">
          <h3>{{annonce.titre}}</h3>
          <p>{{annonce.codePostal}} {{annonce.ville}}</p>
          <p>{{annonce.description}}</p>
        </div>
        <div class="prix-et-bouton">
          <div class="prix">
            <h2>{{annonce.prix}} €</h2>
          </div>
          <div class="bouton-visite">
            <button @click="faireUneVisite">Faire une visite</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Annonce} from "@/model/Annonce";
import Header from "@/components/Header.vue";
import {getAnnonce} from "@/service/AnnonceService";
import {onMounted, ref} from "vue";
import IconCoeurDecoche from "@/components/icons/IconCoeurDecoche.vue";
import IconCoeurCoche from "@/components/icons/IconCoeurCoche.vue";

const props = defineProps({
  id: String
});

let annonce = ref<Annonce | null>(null);
let afficherNotification = ref(false);
let favoris = ref([]);

onMounted(() => {
  if (localStorage.getItem("favorisId")) {
    favoris.value = JSON.parse(localStorage.getItem("favorisId")!);
  }
});

function faireUneVisite() {
  afficherNotification.value = true;
}

function fermerNotification() {
  afficherNotification.value = false;
}

function mettreEnFavori() {
  favoris.value.push(props.id);
  const parsed = JSON.stringify(favoris.value);
  localStorage.setItem("favorisId", parsed);
}

function enleverDesFavoris() {
  favoris.value = favoris.value.filter((favori) => favori !== props.id);
  const parsed = JSON.stringify(favoris.value);
  localStorage.setItem("favorisId", parsed);
}

function estFavori(){
  return favoris.value.includes(props.id);
}

getAnnonce(props.id).then(result => annonce.value = result);
</script>

<style scoped>
.annonce {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-et-favori {
  width: 40%;
  position: relative;
}

img {
  width: 100%;
  height: auto;
}

.bouton-favori {
  background-color: transparent;
  border: none;
  position: absolute;
  right: 0px;
}

.informations-annonce {
  display: flex;
  width: 40%;
  gap: 10px;
}

.bouton-visite button {
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

.titre-et-description {
  width: 60%;
}

.prix-et-bouton {
  width: 40%;
}

.prix {
  display: flex;
  justify-content: flex-end;
}

.bouton-visite {
  display: flex;
  justify-content: flex-end;
}
</style>