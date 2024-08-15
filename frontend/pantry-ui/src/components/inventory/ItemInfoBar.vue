<script>
import Checkbox from '../interactive/Checkbox.vue';

export default {
    props: [
        'item',
    ],
    emits: [
        'itemSelected',
        'moreInfoSelected',
    ],
    components: {
        Checkbox,
    },
    data() {
        return {
            // 
        }
    },
    methods: {
        relayItemSelected(state) {
            //
            this.$emit('itemSelected', this.item, state)
        },
        moreItemInfoPressed() {
            this.$emit('moreInfoSelected', this.item)
        }
    }
}
</script>

<template>
    <div class="iib-background">
        <Checkbox
          :checked="item.checked"
          @checked-state-changed="relayItemSelected">
        </Checkbox>
        <span
          class="iib-quantity">
            {{ item.quantity || 'N/A' }}
        </span>
        <div
          class="iib-times-symbol">
        </div>
        <div
          class="iid-item-name">
            {{ item.name || 'N/A' }}
        </div>
        <div
          @click="moreItemInfoPressed"
          class="iib-item-menu">
        </div>
    </div>
</template>

<style>
.iib-background {
    display: flex;
    flex-direction: row;
    background-color: var(--foreground-color);
    align-items: center;
    padding: 0.5em;
    border-radius: 0.15em;
}

.iib-quantity {
    font-weight: bold;
    margin-left: 0.25em;
    font-size: 1.75rem;
}

.iib-times-symbol {
    content: url('../../assets/big-x.png');
    background-color: transparent;
    height: auto;
    width: 1em;
    margin-top: 0.25em;
}

.iid-item-name {
    flex: 1;
    margin-left: 0.25em;
}

.iib-item-menu {
    content: url('../../assets/hamburger-menu.png');
    height: auto;
    width: 2em;
}
</style>
