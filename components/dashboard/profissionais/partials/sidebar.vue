<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      class="fixed z-20 inset-0 bg-white opacity-50 transition-opacity lg:hidden"
    />
    <!-- End Backdrop -->

    <div
      class="bg-blue-600 fixed z-30 inset-y-0 left-0 w-52 transition duration-300 transform overflow-y-auto lg:translate-x-0 lg:static lg:inset-0"
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
          <span class="text-white text-xl mx-2 font-semibold">QUALIPSICO</span>
        </div>
      </div>

      <nav class="mt-32">
        <NuxtLink
          class="text-white text-md font-semibold hover:text-yellow-500 flex items-center duration-200 mt-4 py-2 px-6"
          to="/dashboard/profissionais/"
        >
          <span class="mx-4">Home</span>
        </NuxtLink>

        <NuxtLink
          class="text-white text-md font-semibold hover:text-yellow-500 flex items-center duration-200 mt-4 py-2 px-6"
          to="/dashboard/profissionais/meus-clientes"
        >
          <span class="mx-4">Meus Clientes</span>
        </NuxtLink>

        <NuxtLink
          class="text-white text-md font-semibold hover:text-yellow-500 flex items-center duration-200 mt-4 py-2 px-6"
          to="/dashboard/profissionais/agendamentos"
        >
          <span class="mx-4">Agendamentos</span>
        </NuxtLink>

        <NuxtLink
          class="text-white text-md font-semibold hover:text-yellow-500 flex items-center duration-200 mt-4 py-2 px-6"
          to="/dashboard/profissionais/minha-conta"
        >
          <span class="mx-4">Minha Conta</span>
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>
