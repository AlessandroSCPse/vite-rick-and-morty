import { reactive } from "vue";

export const store = reactive({
    characters: [],
    isLoading: true,
    searchedName: '',
    searchedStatus: ''
});
