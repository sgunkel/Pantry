<script>
import ViewItemList from './ViewItemList.vue';
import ViewItemInfo from './ViewItemInfo.vue';
import ViewItemDeletionConfirmation from './ViewItemDeletionConfirmation.vue';

const mockNutritionalValues = {
    'calories': 100,
    'sugar (g)': 5,
    'protein': 0,
    'total fats': '0.1g',
    'dietary fibers': '0g',
    'sodium': '196mg',
}

export default {
    components: {
        ViewItemList,
        ViewItemInfo,
        ViewItemDeletionConfirmation,
    },
    data() {
        return {
            showDeleteBtn: false,
            allItems: [
                {
                    name: 'coke',
                    quantity: 12,
                    nutritionalData: mockNutritionalValues,
                },
                {
                    name: 'sprite',
                    quantity: 12,
                    nutritionalData: mockNutritionalValues,
                },
                {
                    name: 'dr pepper',
                    quantity: 12,
                    nutritionalData: mockNutritionalValues,
                },
                {
                    name: 'mnt dew',
                    quantity: 12,
                    nutritionalData: mockNutritionalValues,
                },
                {
                    name: 'bread',
                    quantity: 1,
                    nutritionalData: mockNutritionalValues,
                },
                {
                    name: 'cookies (4 pack)',
                    quantity: 3,
                    nutritionalData: mockNutritionalValues,
                },
                {
                    name: 'mac n cheese',
                    quantity: 1,
                    nutritionalData: mockNutritionalValues,
                },
                {
                    name: 'spaghetti',
                    quantity: 3,
                    nutritionalData: mockNutritionalValues,
                },
                {
                    name: 'alfredo sauce',
                    quantity: 2,
                    nutritionalData: mockNutritionalValues,
                },
                {
                    name: 'garlic',
                    quantity: 4,
                    nutritionalData: mockNutritionalValues,
                },
                {
                    name: 'parmesan cheese',
                    quantity: 1,
                    nutritionalData: mockNutritionalValues,
                },
                {
                    name: 'basil',
                    quantity: 4,
                    nutritionalData: mockNutritionalValues,
                },
                {
                    name: 'oregano',
                    quantity: 4,
                    nutritionalData: mockNutritionalValues,
                },
                {
                    name: 'tomato sauce',
                    quantity: 1,
                    nutritionalData: mockNutritionalValues,
                },
                {
                    name: 'ground beef (1lb)',
                    quantity: 2,
                    nutritionalData: mockNutritionalValues,
                },
                {
                    name: 'hamburger buns (8 pack)',
                    quantity: 2,
                    nutritionalData: mockNutritionalValues,
                },
                {
                    name: 'sliced American cheese',
                    quantity: 1,
                    nutritionalData: mockNutritionalValues,
                },
                {
                    name: 'sliced Swiss cheese',
                    quantity: 1,
                    nutritionalData: mockNutritionalValues,
                },
                {
                    name: 'sliced havarti cheese',
                    quantity: 1,
                    nutritionalData: mockNutritionalValues,
                },
                {
                    name: 'doritos',
                    quantity: 2,
                    nutritionalData: mockNutritionalValues,
                },
            ],
            itemsSelected: [],
            itemOfInterest: undefined,
            showDeleteConfirmation: false,
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
            this.itemOfInterest = item
            this.showDeleteBtn = true
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
        },
        hideInfoPanel() {
            this.itemOfInterest = undefined
            this.showDeleteBtn = false
        },
        deleteItemConfirmation() { // handles first time pressing Delete btn and actual deletion
            if (this.showDeleteConfirmation) { // confirmed deletion
                this.deleteItem()
            }
            else {
                // show deletion confirmation
                this.showDeleteConfirmation = true
            }
        },
        cancelItemConfirmation() {
            this.showDeleteConfirmation = false
        },
        deleteItem() {
            console.log('delete this object!')
            console.log(this.itemOfInterest)
            this.itemOfInterest = undefined
            this.showDeleteConfirmation = false
        }
    }
}
</script>

<template>
    <div class="vmi-background">
        <div class="vmi-view">
            <ViewItemList
              :items="this.allItems"
              :class="{ 'vmi-hide': this.itemOfInterest !== undefined }"
              @item-selected="itemSelected"
              @more-item-info="moreItemInfoRequested">
            </ViewItemList>
            <ViewItemInfo
              :class="{ 'vmi-hide': this.itemOfInterest === undefined || this.showDeleteConfirmation }"
              :item="this.itemOfInterest"
              @canceled="hideInfoPanel">
            </ViewItemInfo>
            <ViewItemDeletionConfirmation
              v-if="(this.itemOfInterest !== undefined && this.showDeleteConfirmation)"
              :item="this.itemOfInterest || {}"
              @cancelled="cancelItemConfirmation">
            </ViewItemDeletionConfirmation>
        </div>

        <div class="vmi-footer-buttons">
            <div
              v-if="this.showDeleteBtn"
              @click="deleteItemConfirmation"
              class="vmi-footer-ctrl-btn vmi-alert-color">
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

.vmi-hide {
    display: none;
    visibility: hidden;
}

.vmi-alert-color {
    color: var(--warning-color);
}
</style>
