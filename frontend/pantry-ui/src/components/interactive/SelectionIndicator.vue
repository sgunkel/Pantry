<script>
export default {
    emits: [
        'optionChanged'
    ],
    props: [
        'allOptions',
        'currentOption'
    ],
    data() {
        return {
            selectedOption: '',
        }
    },
    mounted() {
        this.selectedOption = this.currentOption
    },
    methods: {
        optionSelected(option) {
            if (option !== this.selectedOption) {
                this.selectedOption = option
                this.$emit('optionChanged', option)
            }
        }
    }
}
</script>

<template>
    <div class="si-background">
        <div
          v-for="option in allOptions"
          class="si-option"
          :class="{ 'si-selected-option': option === this.selectedOption }"
          @click="optionSelected(option)">
            {{ option }}
        </div>
    </div>
</template>

<style>
.si-background {
    /* padding: 0.15em; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.si-option {
    margin: 0.15em;
    padding: 0.25em;
    background-color: var(--background-color);
    color: var(--foreground-color);
    text-align: center;
    border: 0.1em solid var(--foreground-color);
    border-radius: 0.25em;
    flex: 1;
}

.si-selected-option {
    background-color: var(--foreground-color);
    color: var(--background-color);
}
</style>
