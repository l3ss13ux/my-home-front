<script lang="ts" setup>
import Header from "@/components/Header.vue";
</script>

<template>
  <Header
      class="header"
      titre="Toto"
      hasFleche="true"
      hasRechercheEtFavoris="true"
      >
  </Header>
</template>

<style scoped>
.header {
  height: 150px;
}
</style>
