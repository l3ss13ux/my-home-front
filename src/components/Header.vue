<template>
  <div class="header">
    <IconFleche v-if="hasFleche"/>
    <h1>{{titre}}</h1>
    <div v-if="hasRechercheEtFavoris">Recherche</div>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: #4DE3ED 2px solid;
  padding-left: 60px;
  padding-right: 60px;
}

h1 {
  color: #4DE3ED;
}
</style>