<script>
export default {
    props: [
        'itemHistory',
    ],
    data() {
        return {
            //
        }
    },
    mounted() {
        console.log(this.itemHistory)
    }
}
</script>

<template>
     <div
       class="hb-background"
       :class="{
         'hb-action-added': this.itemHistory.action === 'Added',
         'hb-action-finished': this.itemHistory.action === 'Finished',
         'hb-action-error': !['Added', 'Finished'].includes(this.itemHistory.action)
        }">
        <span class="hb-action">{{ this.itemHistory.action || 'N/A' }}</span>
        <div class="hb-info-wrapper">
            <div class="hb-item-name-title">
                {{ this.itemHistory.itemName || 'N/A' }}
            </div>
            <div class="hb-meta-info">
                <span class="hb-meta-info-text">{{ this.itemHistory.username || 'N/A' }}</span>
                <span class="hb-meta-info-text">{{ this.itemHistory.timeStamp || 'N/A' }}</span>
            </div>
        </div>
     </div>
</template>

<style>
.hb-background { /* background color is handled dynamically based on Action */
    margin: 0;
    display: flex;
    flex-direction: row;
    border-radius: 0.25em;
}

.hb-action-added {
    background-color: var(--color-green);
}

.hb-action-finished {
    background-color: var(--color-blue-on-dark);
}

.hb-action-error {
    background-color: var(--color-red);
}

.hb-action {
    /* tweaked to 180 degrees: https://stackoverflow.com/a/18672231 */
    writing-mode:tb-rl;
    -webkit-transform:rotate(180deg);
    -moz-transform:rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform:rotate(180deg);
    transform: rotate(180deg);
    padding: 0.25em;
    font-size: 1rem;
    text-align: center;
}

.hb-info-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.25em;
    background-color: var(--foreground-color);
    flex: 1;
    border-radius: 0 0.25em 0.25em 0; /* Only round the right-side of this element */
}

.hb-item-name-title {
    padding: 0.25em;
    /* font-weight: bold; */
    font-size: 1.75rem;
}

.hb-meta-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 0.25em;
}

.hb-meta-info-text {
    font-size: 1rem;
}
</style>
