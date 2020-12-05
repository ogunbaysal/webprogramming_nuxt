<template>
    <div class="ratings">
        <Star v-for="(i, index) in rate" :key="'star-' + index" :empty="false" />
        <Star v-for="(i, index) in (5-rate)" :key="'star-empty-' + i*index" :empty="true"/>
        <span v-show="ratingCount !== undefined" class="ratingCount">({{ratingCount}})</span>
    </div>
</template>

<script>
import Star from "@/components/Rating/Star";
export default {
    components: {Star},
    props: {
          rate: {
              type: Number,
              required: true
          },
          ratingCount: {
              type: Number,
              required: false
          }
      }
}
</script>

<style>
.ratings {
    display: flex;
    height: 22px;
    position: relative;
}

.ratings .ratingCount {
    font-size: 10px;
    color: #999;
    line-height: 14px;
    margin-left: 4px;
}

</style>
