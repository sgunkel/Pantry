<script>
export default {
    emits: [
        'checkedStateChanged',
    ],
    data() {
        return {
            checked: false,
        }
    },
    methods: {
        relayStateChanged() {
            this.checked = !this.checked
            this.$emit('checkedStateChanged', this.checked)
        }
    }
}
</script>

<template>
    <div
      class="c-box"
      :class="{ 'c-checkmark': this.checked }"
      @click="relayStateChanged">
    </div>
</template>

<style>
.c-box {
    border: 0.1em solid var(--background-color);
    border-radius: 0.15em;
    width: 1.5em;
    height: 1.5em;
    background-color: transparent;
}

.c-checkmark {
    content: url('../../assets/checkmark.png');
}
</style>
