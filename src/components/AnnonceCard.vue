<template>
  <div>
    <img :src="'/images/'+ annonce.image">
    <div class="libelle-annonce">
      <p>{{annonce.ville}}</p>
      <p>{{ annonce.prix }} €</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Annonce} from "@/model/Annonce";

const props = defineProps({
  annonce: Annonce
});
</script>

<style scoped>
img {
  width: 252px;
  height: 168px;
}

p {
  font-weight: bold;
}

.libelle-annonce {
  background-color: #D9D9D9;
  padding: 4px 8px;
  color: black;
}
</style>