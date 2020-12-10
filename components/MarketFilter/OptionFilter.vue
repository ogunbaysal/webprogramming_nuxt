<template>
    <div class="fltrs-wrppr">
        <div class="fltr-cntnr-ttl">{{ title }}</div>
        <input v-show="hasSearchBar" class="fltr-srch-inpt" type="text" placeholder="Ara" value="">
        <div class="fltrs" v-for="(item, index) in options" :key="title + '-option-'+index">
            <a class="fltr-item-wrppr" @click="onOptionClick(item)" href="#">
                <div class="chckbox" :class="selectedFilters.includes(item) ? 'chckd' : ''"></div>
                <div class="fltr-item-text">{{ item }}</div>
            </a>
        </div>
        <div class="aggregation-seperator"><span></span></div>
    </div>
</template>

<script>
export default {
    name: "OptionFilter",
    props: {
        title: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        hasSearchBar: {
            type: Boolean,
            default: false
        }
    },
    computed: {
      selectedFilters(){
        return this.$store.getters["product/getSelectedFilters"][this.name];
      }
    },
    methods: {
        onOptionClick(name){
            if (this.selectedFilters.includes(name)) {
              const index = this.selectedFilters.indexOf(name);
              this.$store.dispatch("product/removeFilter", {
                key: this.name,
                index: index
              });
            }else{
              this.$store.dispatch("product/addFilter", {
                key: this.name,
                value: name
              });
            }
            this.$forceUpdate();
        }
    }
}
</script>

<style scoped>

</style>
