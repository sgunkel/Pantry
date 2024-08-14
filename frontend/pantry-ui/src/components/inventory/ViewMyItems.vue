<script>
import ViewItemList from './ViewItemList.vue';

export default {
    components: {
        ViewItemList,
    },
    data() {
        return {
            showDeleteBtn: false,
            allItems: [
                {
                    name: 'coke',
                    quantity: 12
                },
                {
                    name: 'coke',
                    quantity: 12
                },
                {
                    name: 'coke',
                    quantity: 12
                },
                {
                    name: 'coke',
                    quantity: 12
                },
                {
                    name: 'coke',
                    quantity: 12
                },
                {
                    name: 'coke',
                    quantity: 12
                },
                {
                    name: 'coke',
                    quantity: 12
                },
                {
                    name: 'coke',
                    quantity: 12
                },
                {
                    name: 'coke',
                    quantity: 12
                },
                {
                    name: 'coke',
                    quantity: 12
                },
                {
                    name: 'coke',
                    quantity: 12
                },
                {
                    name: 'coke',
                    quantity: 12
                },
                {
                    name: 'coke',
                    quantity: 12
                },
                {
                    name: 'coke',
                    quantity: 12
                },
                {
                    name: 'coke',
                    quantity: 12
                },
                {
                    name: 'coke',
                    quantity: 12
                },
                {
                    name: 'coke',
                    quantity: 12
                },
                {
                    name: 'coke',
                    quantity: 12
                },
                {
                    name: 'coke',
                    quantity: 12
                },
                {
                    name: 'coke',
                    quantity: 12
                },
            ],
        }
    },
    methods: {
        itemSelected(item, checked) {
            console.log('selected item:')
            console.log(item)
            console.log('checked?')
            console.log(checked)
        },
        moreItemInfoRequested(item) {
            console.log('more info requested on object:')
            console.log(item)
        },
    }
}
</script>

<template>
    <div class="vmi-background">
        <div class="vmi-view">
            <ViewItemList
              :items="this.allItems"
              @item-selected="itemSelected"
              @more-item-info="moreItemInfoRequested">
            </ViewItemList>
        </div>

        <div class="vmi-footer-buttons">
            <div
              v-if="this.showDeleteBtn"
              class="vmi-footer-ctrl-btn">
                Delete
            </div>
            <div
              v-else
              class="vmi-footer-ctrl-btn">
                Select All
            </div>
            <div
              class="vmi-footer-ctrl-btn">
                Mark Finish
            </div>
        </div>
    </div>
</template>

<style>
.vmi-background {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.vmi-view {
    flex: 1 1 0;
    padding: 0.5em;
    overflow: auto;
}

.vmi-footer-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.vmi-footer-ctrl-btn {
    margin: 0.15em;
    padding: 0.5em;
    background-color: var(--background-color);
    color: var(--foreground-color);
    text-align: center;
    border: 0.1em solid var(--foreground-color);
    border-radius: 0.25em;
    flex: 1;
}
</style>
