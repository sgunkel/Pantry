<script>
import SelectionHeader from '../components/inventory/SelectionHeader.vue';
import ViewMyItems from '../components/inventory/ViewMyItems.vue'

export default {
    components: {
        SelectionHeader,
        ViewMyItems,
    },
    data() {
        return {
            showSearchBar: true,
            showInventory: true,
        }
    },
    methods: {
        optionChanged(option) {
            console.log(option)
            this.showInventory = option === 'My Items'
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
          @searchTextChanged="searchTextChanged"
          :showSearchBar="this.showSearchBar">
        </SelectionHeader>

        <div class="i-view-background">
            <ViewMyItems
              v-if="this.showInventory">
            </ViewMyItems>
        </div>
    </div>
</template>

<style>
.i-background {
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
}

.i-view-background {
    flex: 1;
    margin: 0;
    padding: 0;
}
</style>
