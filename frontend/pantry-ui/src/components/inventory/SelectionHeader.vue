<script>
import SelectionIndicator from '../interactive/SelectionIndicator.vue';

const HISTORY_TITLE = 'History'
const MY_ITEMS_TITLE = 'My Items'

export default {
    components: {
        SelectionIndicator,
    },
    emits: [
        'optionChanged',
        'searchTextChanged'
    ],
    data() {
        return {
            pageOptions: [
                HISTORY_TITLE,
                MY_ITEMS_TITLE,
            ],
            currentOption: MY_ITEMS_TITLE,
            searchText: '',
        }
    },
    methods: {
        relayOptionChanged(option) {
            this.currentOption = option
            console.log(option)
            this.$emit('optionChanged', option)
        }
    }
}
</script>

<template>
    <div class="sh-background">
        <SelectionIndicator
          :allOptions="this.pageOptions"
          :currentOption="this.currentOption"
          @optionChanged="relayOptionChanged">
        </SelectionIndicator>

        <div class="sh-search-bar">
            <input
              type="text"
              placeholder="Search..."
              class="sh-search"
              v-model="this.searchText"
              @input="$emit('searchTextChanged', this.searchText)">
        </div>
    </div>
</template>

<style>
.sh-background {
    display: flex;
    flex-direction: column;
    padding-bottom: 0.25em;
}

.sh-search-bar {
    padding: 0.15em;
    margin: 0;

    /* I don't like this/think there's a better way to do it... */
    display: flex;
    flex-direction: column;
}

.sh-search {
    flex: 1;
    padding: 0.5em;
    font-size: 1.25rem;
}
</style>
