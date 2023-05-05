import { User } from "@/types";

export const useAuthUser = () => useState<User | null>("user", () => null);