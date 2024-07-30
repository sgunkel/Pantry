<script>
import ManualEntry from './ManualEntry.vue'
import ScannerEntry from './ScannerEntry.vue'

export default {
    components: {
        ManualEntry,
        ScannerEntry,
    },
    emits: [
        'cancelBtnPressed',
    ],
    data() {
        return {
            meta: {
                onBarcodeScannerSlide: false, // this will be changed on load based on camera permissions/availability
            }
        }
    },
    methods: {
        showScanner() {
            this.meta.onBarcodeScannerSlide = true
        },
        showManualEntry() {
            this.meta.onBarcodeScannerSlide = false
            this.closeBarcodeScanner()
        },
        closeBarcodeScanner() {
            this.$forceUpdate()
        }
    }
}
</script>

<template>
    <div class="vei-background">
        <div class="vie-input-view">
            <ScannerEntry
              v-if="this.meta.onBarcodeScannerSlide"
              @switch-to-manual="showManualEntry">
            </ScannerEntry>
            <ManualEntry
              v-else
              @switch-to-scanner="showScanner">
            </ManualEntry>
        </div>

        <router-link
          class="vei-cancel-btn"
          @click="this.closeBarcodeScanner()"
          :to="{ name: 'home' }">
            <span>Cancel</span>
        </router-link>
    </div>
</template>

<style>
.vei-background {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 0.25em;
}

.vie-input-view {
    flex: 1;
    padding:  0.25em 0.5em;
}

.vei-cancel-btn {
    background-color: var(--background-color);
    color: var(--foreground-color);
    font-size: var(--important-small-font-size);
    padding: 1em;
    border: 0.25em solid var(--foreground-color);
    border-radius: 0.40em;
    text-align: center;
    text-decoration: none;
}
</style>
