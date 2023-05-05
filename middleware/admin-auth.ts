export default defineNuxtRouteMiddleware(() => {
  const user = useAuthUser();

  if (!user.value || !useIsAuthorizedRole(user.value.role, "admin")) {
    return navigateTo("/");
  }
});