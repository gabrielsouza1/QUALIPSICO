<template>
          <section>
            <div class="items-center px-5 py-12 lg:px-20">
              <form class="md:w-5/6 flex flex-col w-max p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg">
                <div class="flex flex-wrap mb-6 -mx-3">
                  <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0" data-children-count="1">
                    <label class="text-base leading-7 text-blueGray-500" for="nome"> Nome Completo </label>
                    <input class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" id="nome" type="text" name="nome" placeholder="Nome Completo" required="">
                  </div>
                  <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0" data-children-count="1">
                    <label class="text-base leading-7 text-blueGray-500" for="email"> E-mail </label>
                    <input class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" id="email" type="email" name="email" placeholder="E-mail" required="">
                  </div>
                </div>
                <div class="flex flex-wrap mb-6 -mx-3">
                  <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0" data-children-count="1">
                    <label class="text-base leading-7 text-blueGray-500" for="senha"> Senha </label>
                    <input class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" id="senha" type="password" name="senha" placeholder="Senha" required="">
                  </div>
                  <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0" data-children-count="1">
                    <label class="text-base leading-7 text-blueGray-500" for="telefone"> Telefone </label>
                    <input class="w-full px-4 py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform border-transparent rounded-lg bg-blueGray-100 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2" id="telefone" type="text" name="telefone" placeholder="(21) 00000-0000" data-kwimpalastatus="alive" data-kwimpalaid="1630792839946-20">
                  </div>
                </div>
                <div class="flex flex-wrap mb-6 -mx-3">
                  <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                    <label class="text-base leading-7 text-blueGray-500" for="genero"> Genero </label>
                    <div class="relative " data-children-count="1">
                      <select name="genero" class="w-full px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg appearance-none bg-blueGray-100 focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                        <option class="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase " value="1912">Masculino</option>
                        <option class="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase " value="1912">Feminino</option>
                        <option class="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase " value="1912">Não Binário</option>
                      </select>
                      <!---pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blueGray-700-->
                      <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-blueGray-500">
                        <svg fill="#ffffff" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                    <label class="text-base leading-7 text-blueGray-500" for="profissional"> Eu sou... </label>
                    <div class="relative " data-children-count="1">
                      <select name="profissional" class="w-full px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg appearance-none bg-blueGray-100 focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                        <option class="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase " value="1912">Psicólogo</option>
                        <option class="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase " value="1912">Psicanalista</option>
                        <option class="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase " value="1912">Terapeuta</option>
                        <option class="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase " value="1912">Coach</option>
                      </select>
                      <!---pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blueGray-700-->
                      <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-blueGray-500">
                        <svg fill="#ffffff" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex flex-wrap mb-6 -mx-3">
                  <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                    <label class="text-base leading-7 text-blueGray-500" for="genero"> Qual sua experiência? </label>
                    <div class="relative " data-children-count="1">
                      <select name="experiencia" class="w-full px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg appearance-none bg-blueGray-100 focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                        <option class="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase " value="1912">Acima de 6 Anos</option>
                        <option class="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase " value="1912">De 3 a 6 Anos</option>
                        <option class="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase " value="1912">Menos de 3 Anos</option>
                      </select>
                      <!---pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blueGray-700-->
                      <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-blueGray-500">
                        <svg fill="#ffffff" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                    <label class="text-base leading-7 text-blueGray-500" for="profissional"> Qual sua expectativa? </label>
                    <div class="relative " data-children-count="1">
                      <select name="expectativa" class="w-full px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform border border-transparent rounded-lg appearance-none bg-blueGray-100 focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
                        <option class="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase " value="1912">Psicólogo</option>
                        <option class="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase " value="1912">Psicanalista</option>
                        <option class="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase " value="1912">Terapeuta</option>
                        <option class="block mb-4 text-xs font-bold tracking-wide text-blueGray-500 uppercase " value="1912">Coach</option>
                      </select>
                      <!---pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blueGray-700-->
                      <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-blueGray-500">
                        <svg fill="#ffffff" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex items-center w-full pt-4">
                  <button class="w-full py-3 text-base font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 "> Cadastre-se Agora </button>
                </div>
              </form>
            </div>
          </section>
</template>
