<template>
  <div class="w-screen flex flex-col justify-between home">
    <WhiteHeader />

    <section class="flex flex-col items-center h-screen md:flex-row ">
      <div class="hidden w-full h-screen bg-white lg:block md:w-1/3 lg:w-2/3">
        <img
          src="@/assets/images/login.jpg"
          alt=""
          class="object-cover w-full h-full"
        />
      </div>
      <div
        class="flex items-center justify-center w-full h-screen px-6 bg-white md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12"
      >
        <div class="w-full h-100">
          <a
            class="flex items-center w-32 mb-4 font-medium text-blueGray-900 title-font md:mb-0"
          >
            <div
              class="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-300 to-blue-600"
            ></div>
            <h2
              class="text-lg font-bold tracking-tighter text-black uppercase duration-500 ease-in-out transform ttransition hover:text-lightBlue-500 dark:text-blueGray-400"
            >
              QualiPsico
            </h2>
          </a>
          <h1
            class="mt-12 text-2xl font-semibold text-black tracking-ringtighter sm:text-3xl title-font"
          >
            Recuperação de Conta
          </h1>

          <form class="mt-6" @submit.prevent="submit">
            <!-- <alert-error v-if="form.error.has('message')" :form="form">
            {{ form.errors.get("message") }} -->
            <!-- </alert-error> -->
            <div data-children-count="1">
              <label
                class="block text-sm font-medium leading-relaxed tracking-tighter text-blueGray-700"
                >Email</label
              >
              <input
                type="email"
                name="email"
                readonly
                v-model="email"
                placeholder="Seu Email "
                class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
              />
            </div>

            <div data-children-count="1">
              <label
                class="block text-sm font-medium leading-relaxed tracking-tighter text-blueGray-700"
                >Senha</label
              >
              <input
                type="password"
                name="password"
                v-model="password"
                placeholder="Sua Nova Senha "
                class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
              />
            </div>

            <div data-children-count="1">
              <label
                class="block text-sm font-medium leading-relaxed tracking-tighter text-blueGray-700"
                >Confirmação de Senha</label
              >
              <input
                type="password"
                name="password_confirmation"
                v-model="password_confirmation"
                placeholder="Confirme Sua Nova Senha "
                class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 "
              />
            </div>

            <button
              type="submit"
              class="block w-full px-4 py-3 mt-6 font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-blueGray-800 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 "
            >
              Redefinir Senha
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import WhiteHeader from "@/components/website/partials/WhiteHeader.vue";

export default {
  name: "PasswordReset",
  components: {
    WhiteHeader
  },

  middleware: "guest",

  data() {
    return {
      email: "",
      password: "",
      password_confirmation: "",
      token: ""
    };
  },

  methods: {
    async submit() {
      const response = await fetch("http://localhost/api/password/reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        credentials: "include",
        mode: "no-cors",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
          token: this.token
        })
      })
        .then(async response => {
          const data = await response.json();

          console.warn(data);
          console.error(response);

          if (!response.ok) {
            const error = (data && data.errors.message) || response.status;
            return Promise.reject(error);
          }

          console.info(data.errors.message);

          alert("Senha redefinida com sucesso!");

          // await this.$router.push("/");

          // return { success: true, status: data.message };
        })
        .catch(error => {
          alert("Ocorreu um erro!");
          console.error("Error: ", error);
          // return { success: false, status: error };
        });
    }
  },

  created() {
    (this.email = this.$route.query.email),
      (this.token = this.$route.params.token);
  }
};
</script>
