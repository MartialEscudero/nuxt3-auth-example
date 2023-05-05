export const useIsAuthorizedRole = (userRole: string, role: string) => {
  const rolePriority = [
    { priority: 1, name: "super-admin" },
    { priority: 2, name: "admin" },
    { priority: 3, name: "user" },
  ];

  const userRolePriority = rolePriority.find((e) => e.name === userRole)?.priority as number;
  const pageRolePriority = rolePriority.find((e) => e.name === role)?.priority as number;

  if (userRolePriority <= pageRolePriority) {
    return true;
  }

  return false;
};