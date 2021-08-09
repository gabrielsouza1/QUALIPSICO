<template>
 <div class="min-w-screen items-center bg-purple-700">
    <div class="rounded-lg text-white">
      <div class="container flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
        <a href="/" class="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
          <div class="inline-flex items-center">
            <div class="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600">
            </div>
              <h2 class="block p-2 text-xl font-medium tracking-tighter text-white
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
        <div class="flex justify-between mx-auto items-center">
          <button class="w-auto px-8 py-2 my-2 mr-2 text-base font-medium
          text-white transition duration-500 ease-in-out transform
          bg-blue-600 border-blue-600 rounded-md focus:shadow-outline
          focus:outline-none focus:ring-2 ring-offset-current ring-offset-2
          hover:b-gblue-700 "
          >
          <NuxtLink
            to="/login"
          >
            LOGIN
          </NuxtLink>
          </button>
          <button class="w-auto px-8 py-2 my-2 ml-2 text-base font-medium
          text-white transition duration-500 ease-in-out transform
          bg-blue-600 border-blue-600 rounded-md focus:shadow-outline
          focus:outline-none focus:ring-2 ring-offset-current ring-offset-2
          hover:b-gblue-700 "
          >
          <NuxtLink
            to="/register"
          >
            REGISTRAR
          </NuxtLink>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
