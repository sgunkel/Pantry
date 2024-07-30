<script>
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
    emits: [
        'switchToManual',
    ],
    components: {
        StreamBarcodeReader
    },
    methods: {
        onDecode(result) {
            console.log(result)
        }
    }
}
</script>

<template>
    <div class="se-background">
        <h4>Place barcode in the center</h4>
        <StreamBarcodeReader
          class="se-container"
          @decode="onDecode">
        </StreamBarcodeReader>

        <div
          class="manual-entry-btn"
          @click="$emit('switchToManual')">
            Enter item manually
        </div>
    </div>
</template>

<style>
.se-background {
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    height: 100%;
}

.se-background > h4 {
    color: var(--color-white-mute);
    text-align: center;
    margin: 0;
    padding: 0.5em 0;
}

.se-container {
    height: 100%;
    margin: 0;
    padding: 0;
}

.manual-entry-btn {
    color: var(--color-white-mute);
    border: 0.15em solid var(--color-white-mute);
    border-radius: 0.25em;
    padding: 0.75em 0;
    width: 90%;
    text-align: center;
    align-self: center;
    margin: 0.25em 0 1em;
}
</style>
