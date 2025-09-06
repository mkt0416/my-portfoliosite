
import { AppContextType } from "../context/ContextProvider";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const logout = (context: AppContextType | null | undefined, router: AppRouterInstance) => {
    if (!context) return null;
    localStorage.removeItem("token");
    context?.setCurrentUser?.(null);
    context?.setLoggedIn?.(false);
    context?.setMemos?.([]);
    router.push("/");
};