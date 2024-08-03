<script>
export default {
    data() {
        return {
            all: []
        }
    },
    mounted() {
        // mock data - replaced by actual data once backend stuff is
        //   implement/frontend has a data store to track added items
        this.all = [
            {'name': 'Coke 12 pack', 'quantity': 12},
            {'name': 'Bread', 'quantity': 1},
            {'name': 'Eggs 12 pack', 'quantity': 12},
            {'name': 'Peanut butter', 'quantity': 1},
            {'name': 'Shredded cheese', 'quantity': 1},
            {'name': 'Potatoes 5lb', 'quantity': 1},
            {'name': 'Tortilla', 'quantity': 1},
        ]
    }
}
</script>

<template>
    <div class="vs-background">
        <div class="vs-box">
            <h3>You're all set</h3>
            <p>Added today</p>
            <div class="vs-added-today-box">
                <div
                  class="vs-item"
                  v-for="obj in this.all">
                    <p>{{ obj.name }}</p>
                    <p>{{ obj.quantity }}</p>
                </div>
            </div>
        </div>

        <div
          class="vs-btn">
            Add More
        </div>
        <div
          class="vs-btn">
            Show all items
        </div>
    </div>
</template>

<style>
.vs-background {
    display: flex;
    flex-direction: column;
    color: var(--foreground-color);
    padding: 2em 1em 0.5em;
    height: 100%;
}

.vs-box {
    background-color: var(--foreground-color);
    padding: 0.5em;
    flex: 1;
    display: flex;
    flex-direction: column;
    border-radius: 0.25em;
    margin-bottom: 2em;
}

.vs-box > h3, p {
    color: var(--background-color);
    text-align: center;
    margin: 0;
}

.vs-box > p {
    padding: 1.25em 0 0.25em 0;
    font-size: 1rem;
}

.vs-added-today-box {
    border: 0.15em solid var(--background-color);
    flex: 1 1 0;
    overflow: auto;
    display: block;
}

.vs-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5em;
    color: var(--background-color);
    border-bottom: 0.15em solid var(--background-color);
    font-size: 1.25rem;
}

.vs-btn {
    margin: 0.25em 0.15em;
    padding: 0.5em;
    text-align: center;
    border: 0.15em solid var(--foreground-color);
    border-radius: 0.25em;
}
</style>
