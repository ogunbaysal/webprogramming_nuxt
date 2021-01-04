<template>
  <span id="logged-in-container">
   <span>Hesabım</span>
   <div class="loggedin-panel-container" onclick="event.stopPropagation();">
      <div class="user-email">ogunbaysaltr@gmail.com</div>
      <div class="account-link-container">
         <i class="icon icon-orders"></i>
         <a class="account-link" href="/hesabim/siparislerim"> Siparişlerim </a>
      </div>
      <div class="account-link-container"> <i class="icon icon-my-reviews"></i> <a class="account-link" href="/Hesabim/Degerlendirmelerim"> Değerlendirmelerim </a> </div>
      <div class="account-link-container"> <i class="icon icon-my-wallet"></i> <a class="account-link" href="/hesabim/cuzdanim"> Trendyol Cüzdanım </a> </div>
      <div class="account-link-container">
         <i class="icon icon-discount-info"></i>
         <a class="account-link" href="/Hesabim/IndirimKuponlari"> İndirim Kuponlarım </a>
      </div>
      <div class="account-link-container">
         <i class="icon icon-user-info"></i>
         <a class="account-link" href="/Hesabim/KullaniciBilgileri"> Kullanıcı Bilgilerim </a>
      </div>
      <div class="account-link-container">
         <i class="icon i-chat"></i>
         <a class="account-link" href="/Yardim/Sorular?liveChat=True"> Trendyol Asistan </a>
      </div>
      <div class="account-link-container"> <i class="icon icon-help"></i> <a class="account-link" href="/yardim/sorular"> Yardım </a> </div>
      <div class="account-link-container logout-link" onclick="window.tycommon.accountNavigation.flushStorage()">
         <i class="icon icon-logout"></i>
         <a class="account-link" @click="logout()">Çıkış Yap</a>
      </div>
   </div>
</span>
</template>

<script>
export default {
  name: "AccountNavigation",
  methods: {
    logout() {
      this.$store.dispatch("account/logout");
    }
  }
}
</script>

<style>

</style>
