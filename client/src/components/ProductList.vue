<template>
    <div class="col-sm-9 padding-right">
        <div class="features_items">
            <h2 class="title text-center">Danh Muc San Pham</h2>
            <ShowCategory/>
        </div>
    </div>
</template>
<script>

import ShowCategory from './ShowCategory.vue';
export default {
    name : "ProductList",
    components : {
        ShowCategory
    },
    
}
</script>