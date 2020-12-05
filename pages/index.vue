<template>
  <div id="browsing-gw-homepage">
    <div class="homepage-wrapper">
      <div>
        <div class="sticky-wrapper">
          <div class="component-list component-big-list">
            <BannerRectAdvertisement v-for="(item, index) in squareAdvertisement" :link="item.link" :key="index" :title="item.title" :image="item.image"  />
          </div>
          <div id="component-banner-list">
            <div id="sticky" style="top: auto;">
              <div id="dynamic-banners">
                <SquareAdvertisement/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BannerRectAdvertisement from "~/components/Advertisement/BannerRectAdvertisement";
  import SquareAdvertisement from "~/components/Advertisement/SquareAdvertisement";
  import '~/assets/pages/index.css'
  export default {
    components: {SquareAdvertisement, BannerRectAdvertisement},
    created() {
      this.$store.dispatch("advertisement/initializeRectangularAdvertisements");
    },
    computed: {
      squareAdvertisement(){
        return this.$store.getters["advertisement/getRectangularAdvertisements"];
      }
    }
  }
</script>
