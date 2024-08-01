<script>
export default {
    data() {
        return {
            quantity: 1,
        }
    },
    methods: {
        plusOne() {
            if (this.quantity < 99) {
                this.quantity += 1
            }
        },
        minusOne() {
            if (this.quantity > 1) {
                this.quantity -= 1
            }
        }
    }
}
</script>

<template>
    <div class="qe-background">
        <div class="qe-quantity-status">
            {{ (this.quantity < 10) ? `0${this.quantity}` : this.quantity }}
        </div>
        <div class="qe-control-btn-layout">
            <div
              class="qe-control-btn"
              @click="plusOne">
                &#x25B2;
            </div>
            <div
              class="qe-control-btn"
              @click="minusOne">
                &#x25BC;
            </div>
        </div>
    </div>
</template>

<style>
.qe-background {
    padding: 0.25em;
    border: 0.15em solid var(--background-color);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.qe-quantity-status {
    border: 0.1em solid var(--background-color);
    color: var(--background-color);
    padding: 0.25em;
    text-align: center;
    font-size: 2rem;
}

.qe-control-btn-layout {
    display: flex;
    flex-direction: column;
    margin-left: 0.25em;
}

.qe-control-btn {
    font-size: 2rem;
    color: var(--background-color);
    padding: 0.25em;
    border: 0.15em solid var(--background-color);
    border-radius: 0.15em;
    margin: 0.15em;
}
</style>
