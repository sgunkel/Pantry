<script>
import ItemInfoBar from './ItemInfoBar.vue'

export default {
    components: {
        ItemInfoBar,
    },
    props: [
        'items',
    ],
    emits: [
        'itemSelected',
        'moreItemInfo',
    ],
    data() {
        return {
            // items: [],
        }
    },
    methods: {
        relayItemSelected(item, checked) {
            this.$emit('itemSelected', item, checked)
        },
        relayMoreItemInfo(item) {
            this.$emit('moreItemInfo', item)
        },
    }
}
</script>

<template>
    <div class="vil-background">
        <ItemInfoBar
          v-for="item in this.items"
          :item="item"
          @item-selected="relayItemSelected"
          @more-info-selected="relayMoreItemInfo">
        </ItemInfoBar>
    </div>
</template>

<style>
.vil-background {
    margin: 0;
}

.vil-background > *+* {
    margin: 0.15em 0;
}
</style>
