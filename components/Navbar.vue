<script setup lang="ts">
const { logout } = useAuth();
</script>

<template>
  <nav class="container mx-auto flex items-center justify-between">
    <ul class="flex gap-4">
      <li>
        <NuxtLink to="/">
          Home
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/my-account">
          My Account
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="admin">
          Admin
        </NuxtLink>
      </li>
    </ul>

    <button @click="logout()">
      Logout
    </button>
  </nav>
</template>