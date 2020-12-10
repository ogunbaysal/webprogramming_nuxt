<template>
  <div id="search-app">
    <div class="search-app-container">
      <div class="srch-rslt-cntnt">
        <div class="srch-aggrgtn-cntnr">
          <div id="sticky" style="top: auto;">
            <div class="aggrgtn-cntnr-wrppr">
              <div class="fltrs-wrppr ctgry">
                <div class="fltr-cntnr-ttl">İlgili Kategoriler</div>
                <div class="fltrs ctgry"><a class="fltr-item-wrppr" href="/erkek">
                  <div class="fltr-item-text chckd ctgry">T-Shirt</div>
                </a></div>
                <div class="aggregation-seperator"><span></span></div>
              </div>
              <OptionFilter title="Beden" :has-search-bar="true" name="body" :options="filters.body" />
              <OptionFilter title="Marka" :has-search-bar="true" name="brand" :options="filters.brand" />
            </div>
          </div>
        </div>
        <div class="srch-prdcts-cntnr">
          <div class="srch-rslt-title">
            <div class="srch-ttl-cntnr-wrppr">
              <div class="dscrptn">{{ category ? category.title : '' }} araması için <!-- -->{{ filteredProducts.length }}<!-- --> sonuç
                listeleniyor
              </div>
            </div>
            <div class="sort-fltr-cntnr">
              <select v-model="selectedOrderBy" @change="setOrderBy()">
                <option value="0">Önerilen sıralama</option>
                <option value="1">En düşük fiyat</option>
                <option value="2">En yüksek fiyat</option>
                <option value="3">En çok beğenilenler</option>
                <option value="4">En çok değerlendirilenler</option>
              </select>
            </div>
          </div>
          <div>
            <div class="prdct-cntnr-wrppr">
              <ProductItem v-for="product in filteredProducts" :key="product.id" :product="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OptionFilter from "@/components/MarketFilter/OptionFilter";
import ProductItem from "@/components/Market/ProductItem";

import('~/assets/pages/market.css');
export default {
  name: "Market",
  components: {ProductItem, OptionFilter},
  data: function (){
    return {
      selectedOrderBy: '0'
    }
  },
  created(){
    const category = this.$route.params.category_slug;
    this.selectedOrderBy = this.$store.getters['product/getOrderBy'];
    this.initializeData(category);
  },
  computed: {
    filteredProducts(){
      return this.$store.getters["product/getFilteredProducts"];
    },
    filters(){
      return this.$store.getters["product/getFilters"]
    },
    category() {
      return this.$store.getters["category/getCategory"];
    },
    selectedFilters(){
      return this.$store.getters["product/getSelectedFilters"];
    },
    orderBy(){
      return this.$store.getters['product/getOrderBy'];
    }
  },
  methods: {
    setOrderBy(){
      this.$store.dispatch('product/setOrderBy', this.selectedOrderBy);
    },
    initializeData(category){
      if(category !== undefined && category !== null && category !== '') {
        this.$store.dispatch('product/setCategoryFilter', category);
        this.$store.dispatch('category/setCategory', category);
      }else{
        this.$store.dispatch('product/setCategoryFilter', null);
        this.$store.dispatch('category/setCategory', null);
      }
      this.$store.dispatch('product/retrieveProducts');
    }
  },
  watch:{
    $route (to){
      this.initializeData(to.params.category_slug);
    }
  }
}
</script>

<style scoped>

</style>
