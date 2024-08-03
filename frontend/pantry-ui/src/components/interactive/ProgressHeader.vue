<script>
export default {
    props: ['allPages', 'currentPage', 'pagesComplete']
}
</script>

<template>
    <div class="ph-background">
        <div class="ph-status-block" v-for="page in allPages">
            <div
              :class="{ 'ph-page-complete': pagesComplete.includes(page), 'ph-page-in-progress': currentPage === page }">
                {{ page }}
            </div>
        </div>
    </div>
</template>

<style>
.ph-background {
    color: var(--tertiary-color); /* to be overwritten by other classes  */
    background-color: var(--background-color);
    font-size: var(--important-small-font-size);

    padding: 0.5em;
    border: 0.15em solid var(--foreground-color);

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.ph-status-block {
    flex: 1 1 0;
    text-align: center;
}

.ph-page-complete {
    color: var(--primary-color);
}

.ph-page-in-progress {
    color: var(--secondary-color);
}
</style>
