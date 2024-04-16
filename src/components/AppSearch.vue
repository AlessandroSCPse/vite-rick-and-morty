<script>
import { store } from '../store.js';

export default {
    name: 'AppSearch',
    data() {
        return {
            store,
            availableStatuses: [
                'alive',
                'dead',
                'unknown'
            ],
        };
    }
}
</script>

<template>
    <section class="app-search">
        <div class="container">
            <input type="text" placeholder="Inserisci il nome" v-model="store.searchedName">
            
            <select v-model="store.searchedStatus">
                <option value="">Scegli uno status</option>
                <!-- Scelte disponibili -->
                <option v-for="status in availableStatuses" :value="status">{{ status }}</option>
            </select>

            <button @click="$emit('searchPerfomed')">Cerca</button>
        </div>
    </section>
</template>

<style scoped lang="scss">
.app-search {
    padding: 20px 0;

    input,
    select {
        padding: 10px 12px;
        font-size: 22px;
        margin-right: 10px;
    }

    button {
        padding: 10px 12px;
        font-size: 22px;
        cursor: pointer;
    }
}
</style>