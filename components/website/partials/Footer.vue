<template>
          <div class="min-w-screen items-center">
            <footer class="text-black transition duration-500 ease-in-out transform bg-gray-200 border rounded-lg ">
              <div class="container flex flex-col flex-wrap p-8 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap ">
                <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                  <a href="/" class="pr-2 lg:pr-8 lg:px-6 focus:outline-none">
                    <div class="inline-flex items-center">
                      <div class="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600">
                      </div>
                      <h2 class="block p-2 text-xl font-medium tracking-tighter black transition duration-500 ease-in-out transform cursor-pointer hover:text-black lg:text-x lg:mr-8"> QualiPsico </h2>
                    </div>
                  </a>
                </div>
                <div class="flex flex-wrap flex-grow mt-8 -mb-10 text-left md:pl-20 md:mt-0 ">
                  <!--<div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h1 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Empresas </h1>
                    <nav class="mb-10 space-y-4 list-none">
                      <li>
                        <NuxtLink to="/empresa" class=" mr-1 text-sm text-black transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Planos Empresariais</NuxtLink>
                      </li>
                    </nav>
                  </div> -->
                  <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h1 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Especialistas </h1>
                    <nav class="mb-10 space-y-4 list-none">
                      <li>
                        <NuxtLink to="/profissional" class=" mr-1 text-sm text-black transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Quero me Cadastrar</NuxtLink>
                      </li>
                    </nav>
                  </div>
                  <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h1 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Ajuda </h1>
                    <nav class="mb-10 space-y-4 list-none">
                      <li>
                        <NuxtLink to="/" class=" mr-1 text-sm text-black transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Política de Privacidade</NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/" class=" mr-1 text-sm text-black transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Termos de Uso</NuxtLink>
                      </li>
                    </nav>
                  </div>
                  <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                    <h1 class="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Suporte </h1>
                    <nav class="mb-10 space-y-4 list-none">
                      <li>
                        <NuxtLink to="/" class=" mr-1 text-sm text-black transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">contato@qualipsico.com.br</NuxtLink>
                      </li>
                    </nav>
                  </div>
                </div>
              </div>
              <div class="w-full px-8 mt-4 rounded-b-lg bg-blueGray-50">
                <div class="container flex flex-col flex-wrap px-5 py-6 mx-auto sm:flex-row">
                  <p class="text-sm text-center text-black sm:text-left ">© 2021 </p>
                  <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                    <a class="text-blue-500 hover:text-white">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a class="ml-3 text-blue-500 hover:text-white">
                      <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                        </path>
                      </svg>
                    </a>
                    <a class="ml-3 text-blue-500 hover:text-white">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </a>
                    <a class="ml-3 text-blue-500 hover:text-white">
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                        </path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </footer>
          </div>
</template>
