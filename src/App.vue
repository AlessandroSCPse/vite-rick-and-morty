<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import CharactersList from './components/CharactersList.vue';
import AppLoader from './components/AppLoader.vue';
import AppSearch from './components/AppSearch.vue';

export default {
  components: {
    AppHeader,
    CharactersList,
    AppLoader,
    AppSearch
  },
  data() {
    return {
      store
    };
  },
  methods: {
    getCharactersFromApi() {
      let apiUrl = 'https://rickandmortyapi.com/api/character';

      // Versione con gestione della stringa
      // if(store.searchedName !== '') {
      //   apiUrl += '?name=' + store.searchedName;
      // }

      // if(store.searchedStatus !== '') {
      //   if(store.searchedName !== '') {
      //     apiUrl += '&status=' + store.searchedStatus;
      //   } else {
      //     apiUrl += '?status=' + store.searchedStatus;
      //   }
      // }

      // Versione con query params in object
      const queryParams = {};

      if(store.searchedName !== '') {
        queryParams.name = store.searchedName;
      }

      if(store.searchedStatus !== '') {
        queryParams.status = store.searchedStatus;
      }
      
      // Prende i personaggi dall'api e popola lo store
      axios.get(apiUrl, {
        params: queryParams
      })
      .then((response) => {
        store.characters = response.data.results;
        store.isLoading = false;
      });
    }
  },
  mounted() {
    this.getCharactersFromApi();
  }
}
</script>

<template>
  <AppHeader></AppHeader>

  <main>
    <AppSearch @searchPerfomed="getCharactersFromApi"></AppSearch>
    <CharactersList v-if="!store.isLoading"></CharactersList>
    <AppLoader v-else></AppLoader>
  </main>
</template>

<style lang="scss">
@use './style/generic';
</style>
