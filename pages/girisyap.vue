<template>
  <div id="login-register">
    <div class="lr-title">
      <h1>Merhaba,</h1>
      <h3>Trendyol’a giriş yap veya hesap oluştur, indirimleri kaçırma!</h3>
    </div>
    <div class="q-layout lr-header">
      <div class="flex-center header-buttons">
        <button
          class="q-secondary q-button-medium q-button tab button mr-5 left"
          :class="isLogin ? 'active' : ''"
          @click="isLogin = true"
        >
          <span>Giriş Yap</span></button
        ><button
        class="q-secondary q-button-medium q-button tab button right"
        :class="isLogin ? '' : 'active'"
        @click="isLogin = false"
      >
        <span>Üye Ol</span>
      </button>
      </div>
    </div>
    <div class="lr-container">
      <Login v-if="isLogin === true" />
      <Register v-if="isLogin === false" />
    </div>
  </div>
</template>

<script>
import '~/assets/pages/auth.css';
import Login from "@/components/Auth/Login";
import Register from "@/components/Auth/Register";

export default {
  components: {Register, Login},
  data: function () {
    return {
      isLogin: true,
    };
  },
}
</script>

<style scoped>

</style>
