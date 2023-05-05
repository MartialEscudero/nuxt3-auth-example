export default defineNuxtRouteMiddleware(() => {
  const user = useAuthUser();

  if (!user.value || !useIsAuthorizedRole(user.value.role, "user")) {
    return navigateTo("/");
  }
});