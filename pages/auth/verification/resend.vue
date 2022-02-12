<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h1 class="text-4xl text-center">QUALIPSICO</h1>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Reenviar e-mail de verificação
        </h2>
      </div>
      <form class="mt-6" @submit.prevent="submit">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email" class="sr-only">Email</label>
            <input
              id="email"
              v-model="email"
              name="email"
              type="email"
              autocomplete="email"
              required=""
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Endereço de Email"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center mt-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Reenviar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Resend",

  data() {
    return {
      email: ""
    };
  },

  methods: {
    async submit() {
      const response = await fetch("http://localhost/api/verification/resend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        credentials: "include",
        mode: "no-cors",
        body: JSON.stringify({
          email: this.email
        })
      })
        .then(async response => {
          const data = await response.json();

          alert(response);

          if (!response.ok) {
            const error = (data && data.errors.message) || response.status;
            return Promise.reject(error);
          }

          console.info(data.errors.message);

          alert("Verificação de email reenviada com sucesso!");

          await this.$router.push("/");

          // return { success: true, status: data.message };
        })
        .catch(error => {
          alert("Ocorreu um erro!");
          // console.error("Error: ", error);
          // return { success: false, status: error };
        });
    }
  }
};
</script>
