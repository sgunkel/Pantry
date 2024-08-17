<script>
import ItemInfoBar from './ItemInfoBar.vue';

export default {
    props: [
        'item',
    ],
    emits: [
        'cancelled',
    ],
    components: {
        ItemInfoBar,
    },
    data() {
        return {
            //
        }
    },
}
</script>

<template>
    <div class="vidc-background">
        <div class="vidc-warning-section">
            <h2 class="vidc-warning-title">Are you sure you want to delete this?</h2>
            <div class="vidc-sub-warning-section">
                <span class="vidc-sub-warning-text">This action is irreversible and will not show in history</span>
            </div>
        </div>

        <div class="vidc-info-bar">
            <ItemInfoBar
            :selectable="false"
            :item="this.item">
            </ItemInfoBar>
        </div>

        <div
          class="vidc-back-btn"
          @click="$emit('cancelled')">
            Back
        </div>
    </div>
</template>

<style>
.vidc-background {
    background-color: var(--foreground-color);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
}

.vidc-warning-section {
    text-align: center;
    padding: 0.25em 0;
    margin: 0;
}

.vidc-warning-title {
    margin: 0;
    padding-top: 0.5em;
}

.vidc-sub-warning-section {
    padding-top: 0.25em;
    margin: 0 1em;
}

.vidc-sub-warning-text {
    font-size: 1rem;
}

.vidc-info-bar {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    flex: 1;
}

.vidc-back-btn {
    padding: 0.25em;
    border: 0.25em solid var(--background-color);
    border-radius: 0.25em;
    text-align: center;
    margin: 0.25em;
}
</style>
