import { clientEnv } from "@/env";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: clientEnv.NEXT_PLUBIC_API_URL,
});
