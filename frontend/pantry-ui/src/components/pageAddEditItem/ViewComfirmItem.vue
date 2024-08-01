<script>
import QuantityEntry from "../../components/pageAddEditItem/QuantityEntry.vue"

export default {
    props: [
        'itemData',
    ],
    components: {
        QuantityEntry,
    },
    emits: [
        'cancelBtnPressed',
        'confirmationBtnPressed',
    ],
    data() {
        return {
            itemName: 'item name',
            companyName: 'company name',
            imageUrl: '',
            imageAltText: '',
            nutritionalData: {
                'Sugar': 'N/A',
                'Protein': 'N/A',
                'Calories': 'N/A',
            }
        }
    },
    mounted() {
        this.imageUrl = ((this.itemData.photo && this.itemData.photo.thumb) || '../../assets/default-image.png')
        this.itemName = this.imageAltText = (this.itemData.nix_item_name || 'item name')
        this.companyName = (this.itemData.nix_brand_name || 'company name')

        // implement the nutritional values later
    },
}
</script>

<template>
    <div class="vci-background">
        <h4>Match item description</h4>
        <div class="vci-item-info">
            <div class="vci-title-and-image-panel">
                <div class="vci-title-text">
                    <h3>{{ this.itemName }}</h3>
                    <p>{{ this.companyName }}</p>
                </div>
                <img src="../../assets/default-image.png" alt="Image not available">
            </div>
            <div class="vci-nutritional-and-quantity">
                <table>
                    <tr v-for="value, name in this.nutritionalData">
                        <td>{{ name }}</td>
                        <td>{{ value }}</td>
                    </tr>
                </table>
                <QuantityEntry></QuantityEntry>
            </div>
        </div>

        <div
          class="vci-btn confirmation-btn"
          @click="$emit('confirmationBtnPressed')">
            Looks good
        </div>
        <div
          class="vci-btn cancel-btn"
          @click="$emit('cancelBtnPressed')">
            Try again
        </div>
    </div>
</template>

<style>
.vci-background {
    height: 100%;
    padding: 0.75em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: var(--foreground-color);
}

.vci-background > h4 {
    margin: 0;
}

.vci-item-info {
    background-color: var(--foreground-color);
    padding: 0.5em;
    border-radius: 0.25em;
    flex: 1;
}

.vci-title-text {
    overflow: auto;
    flex: 1;
}

.vci-title-text > h3, p {
    color: var(--background-color);
}

.vci-title-and-image-panel {
    display: flex;
    flex-direction: row;
}

.vci-title-and-image-panel > img {
    height: 100%;
    width: 4.5em;
}

.vci-nutritional-and-quantity {
    width: 100%;
    display: flex;
    flex-direction: row;
}

.vci-nutritional-and-quantity > table {
    color: var(--background-color);
    flex: 1;
    font-size: 1rem;
}

.vci-btn {
    margin: 0.35em 0.5em 0;
    padding: 0.5em;
    color: var(--foreground-color);
    border: 0.15em solid var(--foreground-color);
    border-radius: 0.25em;
    text-align: center;
}

.confirmation-btn {
    color: var(--success-color);
    font-weight: bold;
}

.cancel-btn {
    color: var(--warning-color);
}
</style>
