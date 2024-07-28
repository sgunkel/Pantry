<script>
export default {
    emits: [
        'switchToScanner'
    ],
    data() {
        return {
            decoded: '',
            searchResults: '',
        }
    }
}
</script>

<template>
    <div class="me-background">
        <h3>Enter Item Information</h3>
        <div class="me-container">
            <input type="text" v-model="searchResults">

            <!-- Show examples to search -->
            <div v-if="searchResults === ''" class="suggestions">
                <ul>
                    <li>Havarti cheese</li>
                    <li>Almond milk</li>
                    <li>Kosher salt</li>
                    <li>Champagne</li>
                </ul>
            </div>

            <!-- Search options -->
            <div v-else>
                <h3>(search results)</h3>
            </div>
        </div>

        <div class="scan-barcode-btn">Scan Barcode</div>
    </div>
</template>

<style>
.me-background {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--background-color);
}

.me-background > h3 {
    color: var(--foreground-color);
    text-align: center;
    margin: 0.5em 0;
}

.me-container {
    background-color: var(--color-white-mute);
    border-radius: 0.15em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-bottom: 0.35em;
}

.me-container > input[type=text] {
    width: 100%;
    box-sizing: border-box;
    padding: 0.5em 0.25em;
    font-size: 1.5rem;
}

.scan-barcode-btn {
    color: var(--color-white-mute);
    border: 0.15em solid var(--color-white-mute);
    border-radius: 0.25em;
    padding: 0.75em 0;
    width: 90%;
    text-align: center;
    align-self: center;
    margin: 0.25em 0 1em;
}

.suggestions {
    font-size: var(--important-small-font-size);
    padding: 0;
    margin: 0;
    color: var(--color-gray);
    height: 100%;
    flex: 1 1 0;
}
</style>
