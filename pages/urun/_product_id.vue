<template>
  <div id="product-detail-app">
    <div data-tracker-root="onTrackerReady" class="pd-app-container"  v-if="product !== null && product !== undefined">
      <div class="pr-cn">
        <Gallery :images=product.images />
        <div class="pr-cn-in">
          <ProductHead />
          <ProductBody/>
          <ProductDescription/>
        </div>
      </div>
      <FeaturedProducts/>
      <ProductComments/>
      <ProductProperties/>
    </div>
  </div>
</template>

<script>
// import product from "@/app/store/product";
import Gallery from "@/components/Gallery/Gallery";
import ProductBody from "@/components/Product/ProductBody";
import ProductDescription from "@/components/Product/ProductDescription";
import FeaturedProducts from "@/components/FeaturedProducts/FeaturedProducts";
import ProductComments from "@/components/Product/ProductComments";
import ProductProperties from "@/components/Product/ProductProperties";
import ProductHead from "@/components/Product/ProductHead";
import('~/assets/pages/product_detail.css');
export default {
  components: {
    ProductHead,
    ProductProperties, ProductComments, FeaturedProducts, ProductDescription, ProductBody, Gallery},
  created() {
    const product_id = this.$route.params.product_id;
    this.initializeData(product_id);
  },
  watch:{
    $route (to){
      this.initializeData(to.params.product_id);
    }
  },
  computed: {
    product() {
      return this.$store.getters["product/getProduct"];
    }
  },
  methods: {
    initializeData(product_id) {
      if(product_id !== undefined && product_id !== null && product_id !== '') {
        this.$store.dispatch('product/getProductDetail', product_id);
      }else{
        // this.$router.push('/404');
        // return false;
      }
    }
  }
}
</script>

<style scoped>

</style>
