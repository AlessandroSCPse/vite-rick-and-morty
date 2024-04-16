<script>
import { store } from '../store.js';

export default {
    name: 'ResultsNumber',
    data() {
        return {
            store
        }
    },
    computed: {
        charactersLength() {
            return store.characters.length;
        }
    }
}
</script>

<template>
    <div class="results-number">
        La tua ricerca ha prodotto {{ charactersLength }} risultati
    </div>
</template>

<style scoped lang="scss">
.results-number {
    font-size: 30px;
    text-align: center;
    margin-top: 15px 0;
}
</style>