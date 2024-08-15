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
                    name: 'sprite',
                    quantity: 12
                },
                {
                    name: 'dr pepper',
                    quantity: 12
                },
                {
                    name: 'mnt dew',
                    quantity: 12
                },
                {
                    name: 'bread',
                    quantity: 1
                },
                {
                    name: 'cookies (4 pack)',
                    quantity: 3
                },
                {
                    name: 'mac n cheese',
                    quantity: 1
                },
                {
                    name: 'spaghetti',
                    quantity: 3
                },
                {
                    name: 'alfredo sauce',
                    quantity: 2
                },
                {
                    name: 'garlic',
                    quantity: 4
                },
                {
                    name: 'parmesan cheese',
                    quantity: 1
                },
                {
                    name: 'basil',
                    quantity: 4
                },
                {
                    name: 'oregano',
                    quantity: 4
                },
                {
                    name: 'tomato sauce',
                    quantity: 1
                },
                {
                    name: 'ground beef (1lb)',
                    quantity: 2
                },
                {
                    name: 'hamburger buns (8 pack)',
                    quantity: 2
                },
                {
                    name: 'sliced American cheese',
                    quantity: 1
                },
                {
                    name: 'sliced Swiss cheese',
                    quantity: 1
                },
                {
                    name: 'sliced havarti cheese',
                    quantity: 1
                },
                {
                    name: 'doritos',
                    quantity: 2
                },
            ],
            itemsSelected: [],
        }
    },
    mounted() {
        this.allItems.forEach(item => {
            if (item.checked === undefined) {
                item.checked = false
            }
        })
    },
    methods: {
        itemSelected(item, checked) {
            console.log('selected item:')
            console.log(item)
            console.log('checked?')
            console.log(checked)
            item.checked = checked
            if (checked) {
                this.addSelectedItem(item)
            }
            else {
                this.removeSelectedItem(item)
            }
            console.log(this.itemsSelected)
        },
        moreItemInfoRequested(item) {
            console.log('more info requested on object:')
            console.log(item)
        },
        addSelectedItem(item) {
            this.itemsSelected.push(item)
        },
        removeSelectedItem(item) {
            let index = this.itemsSelected.indexOf(item)
            if (index > -1) {
                this.itemsSelected.splice(index, 1)
            }
        },
        selectAllItems() {
            this.allItems.forEach(item => {
                if (!item.checked) {
                    this.itemSelected(item, true)
                }
            })
        },
        deselectAllItems() {
            this.itemsSelected.forEach(item => item.checked = false)
            this.itemsSelected.length = 0 // why is JS like this?
            console.log(this.itemsSelected)
        }
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
              v-else-if="allItems.length === itemsSelected.length"
              @click="deselectAllItems()"
              class="vmi-footer-ctrl-btn">
                Deselect All
            </div>
            <div
              v-else
              @click="selectAllItems()"
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
