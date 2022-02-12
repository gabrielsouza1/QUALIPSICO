<template>
 <div class="min-w-screen items-center bg-white">
    <div class="rounded-lg text-black">
      <div class="flex flex-col flex-wrap p-0 mx-auto md:items-center md:flex-row">
        <a href="/" class="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
          <div class="inline-flex items-center">
            <div class="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600">
            </div>
              <h2 class="block p-2 text-xl font-medium tracking-tighter text-black
              transition duration-500 ease-in-out transform cursor-pointer
              hover:text-blueGray-500 lg:text-x lg:mr-8"
              >
                QualiPsico
              </h2>
            </div>
        </a>
        <nav class="flex flex-wrap items-center mx-auto justify-center text-base lg:mr-auto">
          <ul class="items-center inline-block list-none lg:inline-flex">
            <NuxtLink
              to="/"
              class="px-4 py-1 mr-1 text-base transition duration-500 ease-in-out transform
              rounded-md text-blueGray-500 focus:shadow-outline focus:outline-none
              focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "    
            >Home</NuxtLink> |
            <NuxtLink
              to="/dashboard/sessoes"
              class="px-4 py-1 mr-1 text-base transition duration-500 ease-in-out transform
              rounded-md text-blueGray-500 focus:shadow-outline focus:outline-none
              focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
            >Sessoes</NuxtLink> |
            <NuxtLink
              to="/dashboard/especialistas"
              class="px-4 py-1 mr-1 text-base transition duration-500 ease-in-out transform
              rounded-md text-blueGray-500 focus:shadow-outline focus:outline-none
              focus:ring-2 ring-offset-current ring-offset-2 hover:text-black "
            >Especialistas</NuxtLink> |
            <NuxtLink
              to="/dashboard/planos"
              class="px-4 py-1 mr-1 text-base transition duration-500 ease-in-out transform
              rounded-md text-blueGray-500 focus:shadow-outline focus:outline-none
              focus:ring-2 ring-offset-current ring-offset-2 hover:text-black"
            >Planos</NuxtLink>

          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
