<template>
    <div class="col-sm-9 padding-right">
        <div class="features_items">
            <h2 class="title text-center">Danh Muc San Pham</h2>
            <ShowCategory/>
        </div>
    </div>
</template>
<script>

export default {
    name : "CategoryProductList",
    components : {

    },
    data() {
    return {
      categories: []
    };
  },
  async created() {
    const res = await axios.get("http://localhost:1337/api/categories");
    console.log(res.data.data)
    if (res.status == 200) {
      this.categories = res.data.data;
    } else {
      this.swr();
    }
  },
}
</script>