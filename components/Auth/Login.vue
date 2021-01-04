<template>
  <div>
    <div id="error-box-wrapper" v-if="message !== null"><span class="i-warning"></span><span class="message">{{message}}</span></div>
    <div class="q-layout login">
      <form @submit="login">
        <div class="q-input-wrapper email-input">
          <label class="q-label">E-Posta</label
          ><input
          class="q-input"
          type="text"
          id="login-email"
          list="email-list"
          name="login email"
          autocomplete="username"
          data-testid="email-input"
          v-model="form.email"
        />
        </div>
        <datalist id="email-list"></datalist>
        <div class="password-wrapper">
          <div class="password">
            <div class="q-input-wrapper">
              <label class="q-label">Şifre</label>
              <input

                class="q-input"
                :type="showPassword ? 'text' : 'password'"
                name="login-password"
                id="login-password-input"
                data-testid="password-input"
                autocomplete="current-password"
                v-model="form.password"
              />
            </div>
            <i @click="showPassword = !showPassword" :class="showPassword ? 'i-eye-close' : 'i-eye-open'"></i>
          </div>
        </div>
        <div class="forgot-password">
          <a><span>Şifremi Unuttum</span></a>
        </div>
        <button
          class="q-primary q-fluid q-button-medium q-button submit"
          type="submit" @click="login"
        >
          <span>Giriş Yap</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    name: "Login",
  created() {
      this.$store.commit("account/SET_MESSAGE", null);
  },
  computed: {
      message() {
        return this.$store.getters["account/message"];
      }
    },
    data: function() {
        return {
            form: {
                email: '',
                password: ''
            },
            showPassword: false,
        };
    },
    methods: {
        login(e) {
            e.preventDefault();
            this.$store.dispatch('account/loginWithEmailAndPassword', {email: this.form.email, password: this.form.password});
        }
    }
}
</script>

<style>
    #login-password-input {
        height: 44px !important;
    }
</style>
