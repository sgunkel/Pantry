<script>
import ProgressHeader from "../components/interactive/ProgressHeader.vue"
import ViewEnterItem from "../components/pageAddEditItem/ViewEnterItem.vue"
import ViewConfirmItem from "../components/pageAddEditItem/ViewComfirmItem.vue"

export default {
    components: {
        ProgressHeader,
        ViewEnterItem,
        ViewConfirmItem,
    },
    data() {
        return {
            meta: {
                pages: [
                    'Product Information',
                    'Verify',
                    'Done',
                ],
                currentPage: '',
                pagesComplete: [ ]
            }
        }
    },
    mounted() {
        // this.meta.currentPage = this.meta.pages[0]

        this.meta.currentPage = this.meta.pages[1]

        // demo - change functionality to be handled by a simple button..
        // this.meta.pagesComplete.push(this.meta.pages[0])
        // this.meta.currentPage = this.meta.pages[1]
    },
    methods: {
        handleCancelBtnPressed() { // remove this - it's no longer used...
            console.log('cancel btn pressed')
        },
    }
}
</script>

<template>
    <div class="aei-background">
        <ProgressHeader
            :allPages="meta.pages"
            :currentPage="meta.currentPage"
            :pagesComplete="meta.pagesComplete">
        </ProgressHeader>

        <ViewEnterItem
          v-if="this.meta.currentPage === this.meta.pages[0]">
        </ViewEnterItem>
        <ViewConfirmItem
          v-else-if="this.meta.currentPage === this.meta.pages[1]"
          :itemData="{}">
        </ViewConfirmItem>
        <div
          v-else
          class="aei-something-went-wrong">
            <h2>Something went wrong</h2>
            <p>Try refreshing the browser to fix the issue</p>
        </div>
    </div>
</template>

<style>
.aei-background {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
}

.aei-something-went-wrong {
    color: var(--foreground-color);
    padding: 0.5em;
}

</style>
