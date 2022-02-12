<template>
  <div class="min-h-screen w-max mx-auto flex">
    <Nuxt />
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Layout",

  data() {
    return {
      loggedUser: "",
      auth: false
    };
  },

  async created() {
    try {
      const response = await fetch("http://localhost/api/me", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        mode: "no-cors"
      });

      const content = await response.json();

      console.log(content);

      this.loggedUser = content;
      alert(content.name);

      this.$nuxt.$emit("auth", true);
    } catch (e) {
      this.message = "You are not logged in";
      this.$nuxt.$emit("auth", false);
    }
  },

  mounted() {
    this.$nuxt.$on("auth", auth => {
      console.log(auth);

      this.auth = auth;
    });
  },

  methods: {
    async logout() {
      await fetch("http://localhost/api/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      });

      await this.$router.push("/auth/login");
    }
  },

  computed: {
    ...mapGetters(["isAuthenticated", "loggedUser", "loggedUserRole"])
  }
};
</script>
