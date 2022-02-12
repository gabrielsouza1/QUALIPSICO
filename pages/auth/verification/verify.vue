<template>
  <section
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h1 class="text-4xl text-center">QUALIPSICO</h1>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Verificação de Email
        </h2>
      </div>
      <form class="mt-6">
        <div v-if="success">
          <div class="bg-green-500">
            {{ status }}
          </div>
        </div>

        <div v-else>
          <div class="bg-red-500">
            {{ status }}
          </div>
        </div>

        <NuxtLink to="auth/login">
          Voltar para Login
        </NuxtLink>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Verify",

  data() {
    return {
      data: {}
    };
  },

  async asyncData({ params, query, app }) {
    const q = Object.keys(query)
      .map(k => `${k}=${query[k]}`)
      .join("&");

    const response = await fetch(
      `http://localhost/api/verification/verify/${params.id}?${q}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        credentials: "include"
      }
    )
      .then(async response => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.errors.message) || response.status;
          return Promise.reject(error);
        }

        console.info(data.message);

        return { success: true, status: data.message };
      })
      .catch(error => {
        console.error("Error: ", error);
        return { success: false, status: error };
      });
  }
};
</script>
