<script>
import ProgressHeader from "../components/interactive/ProgressHeader.vue"
import ViewEnterItem from "../components/pageAddEditItem/ViewEnterItem.vue"

export default {
    components: {
        ProgressHeader,
        ViewEnterItem,
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
        this.meta.currentPage = this.meta.pages[0]

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

        <!-- just for now - we'll add the other slides and logic for them later -->
         <!-- <div class="aei-view-background"> -->
            <ViewEnterItem>
            </ViewEnterItem>
        <!-- </div> -->
    </div>
</template>

<style>
.aei-background {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0;
}

</style>
