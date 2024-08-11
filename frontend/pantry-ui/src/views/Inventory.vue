<script>
import SelectionHeader from '../components/inventory/SelectionHeader.vue';

export default {
    components: {
        SelectionHeader
    },
    data() {
        return {
            showSearchBar: true,
        }
    },
    methods: {
        optionChanged(option) {
            console.log(option)
        },
        searchTextChanged(text) {
            console.log(text)
        }
    }
}
</script>

<template>
    <div class="i-background">
        <SelectionHeader
          @optionChanged="optionChanged"
          @searchTextChanged="searchTextChanged">
        </SelectionHeader>

        <div class="i-view-background"></div>
    </div>
</template>

<style>

.i-background {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 0.25em;
}

.i-view-background {
    flex: 1;
    background-color: red;
}
</style>
