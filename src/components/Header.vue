<template>
  <div class="header">
    <router-link to="/">
      <IconFleche v-if="hasFleche"/>
    </router-link>
    <h1>{{titre}}</h1>
    <div v-if="hasRechercheEtFavoris" class="recherche-et-favoris">
      Recherche
    </div>
  </div>
</template>

<script setup lang="ts">
import IconFleche from "@/components/icons/IconFleche.vue";
const props = defineProps({
  hasFleche: {type: Boolean, required: false, default: false},
  hasRechercheEtFavoris: {type: Boolean, required: false},
  titre: String
});
</script>

<style scoped>
.header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  border-bottom: #4DE3ED 2px solid;
  padding-left: 60px;
  padding-right: 60px;
  height: 150px;
}

h1 {
  color: #4DE3ED;
  justify-self: center;
}

.recherche-et-favoris {
  justify-self: flex-end;
}
</style>