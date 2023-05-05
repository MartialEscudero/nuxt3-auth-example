<script setup>
import { LockClosedIcon } from "@heroicons/vue/20/solid";

const { login } = useAuth();

const formData = ref({
  email: "",
  password: "",
});
</script>

<template>
  <div class="flex flex-col min-h-screen items-center justify-center">
    <div class="w-full max-w-md space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        >
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <form
        class="mt-8 space-y-6"
        @submit.prevent="login(formData.email, formData.password)"
      >
        <input
          type="hidden"
          name="remember"
          value="true"
        >
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label
              for="email-address"
              class="sr-only"
            >
              Email address
            </label>
            <input
              v-model="formData.email"
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              class="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Email address"
            >
          </div>
          <div>
            <label
              for="password"
              class="sr-only"
            >
              Password
            </label>
            <input
              v-model="formData.password"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              class="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Password"
            >
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>