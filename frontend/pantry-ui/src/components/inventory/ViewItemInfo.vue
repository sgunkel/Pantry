<script>
export default {
    props: [
        'item'
    ],
    emits: [
        'canceled'
    ],
}
</script>

<template>
    <div class="vii-background">
        <div class="vii-title-block">
            <span class="vii-title-item-name">
                {{ this.item && this.item.name || 'N/A' }}
            </span>
        </div>

        <div class="vii-nutritional-data">
            <table>
                <tr v-for="value, name in this.item && this.item.nutritionalData || {}">
                    <td>{{ name }}</td>
                    <td class="vii-nutritional-data-value">{{ value }}</td>
                </tr>
            </table>
        </div>
        <div
          @click="this.$emit('canceled')"
          class="vii-cancel-btn">
            Cancel
        </div>
    </div>
</template>

<style>
.vii-background {
    margin: 0;
    display: flex;
    flex-direction: column;
    background-color: var(--foreground-color);
    height: 100%;
}

.vii-title-block {
    padding: 0.15em;
    border-bottom: 0.1em solid var(--background-color);
}

.vii-title-item-name {
    font-size: 2.5rem;
}

.vii-nutritional-data {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.vii-nutritional-data-value {
    text-align: right;
}

.vii-cancel-btn {
    padding: 0.25em;
    border: 0.25em solid var(--background-color);
    border-radius: 0.25em;
    text-align: center;
    margin: 0.25em;
}
</style>
