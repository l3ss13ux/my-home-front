<template>
  <div class="recherche">
    <div class="rectangle-de-recherche">
      <input type="search" v-model="recherche" placeholder="Entrer une ville" class="champ-de-recherche"/>
      <button @click="valider" class="bouton-de-recherche"><Recherche/></button>
    </div>
    <router-link to="/favoris"><IconCoeurBleu/></router-link>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";
import IconCoeurBleu from "@/components/icons/IconCoeurBleu.vue";
import Recherche from "@/components/icons/Recherche.vue";

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
.recherche {
  display: flex;
  align-items: center;
  gap: 30px;
}

.rectangle-de-recherche {
  display: flex;
  align-items: center;
  background-color: #4DE3ED;
  border-radius: 24px;
  padding: 6px 12px;
}

.champ-de-recherche {
  background-color: transparent;
  border: none;
}

input::placeholder {
  color: white;
}

.bouton-de-recherche {
  background-color: transparent;
  border: none;
}
</style>