<template>
  <div
    style="background-color: #8137B2;"
    class="w-screen flex h-screen bg-gray-200 font-roboto"
  >
    <Sidebar />

    <div class="flex-1 flex flex-col overflow-hidden">
      <Header />

      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        <div class="container mx-auto px-6 py-8">
          <div>Home</div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/dashboard/profissionais/partials/sidebar.vue";
import Header from "@/components/dashboard/profissionais/partials/header.vue";

export default {
  auth: false,
  components: {
    Sidebar,
    Header
  }
};
</script>
