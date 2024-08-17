<script>
import HistoryBlock from './HistoryBlock.vue'

const mockItemHistory = [
    {
        'itemName': 'Coke 2 liter bottle',
        'action': 'Finished',
        'username': 'smith123',
        'timeStamp': '1/1/1970 12:00am',
        'item': {}
    },
    {
        'itemName': 'Whole wheat bread',
        'action': 'Added',
        'username': 'smith123',
        'timeStamp': '1/1/2000 12:00am',
        'item': {}
    },
    {
        'itemName': 'test',
        'action': 'vrwi',
        'item': {}
    },
]

export default {
    components: {
        HistoryBlock,
    },
    data() {
        return {
            historyData: mockItemHistory,
        }
    },
}
</script>

<template>
    <div class="vh-background">
        <div class="vh-item-list">
            <HistoryBlock
              v-for="item in historyData"
              :item-history="item">
            </HistoryBlock>
        </div>
    </div>
</template>

<style>
.vh-background {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.vh-item-list {
    margin: 0 0.5em;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;
}

.vh-item-list > *+* {
    margin-top: 0.5em;
}
</style>
