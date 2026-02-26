import { IssueInteractionsResponseSchema } from "@/api/routes/schemas/issue-interactions";
import { clientEnv } from "@/env";

interface GetIssueInteractionParams {
  issuesIds: string[];
}

export async function getIssueInteraction({
  issuesIds,
}: GetIssueInteractionParams) {
  const url = new URL(
    `/api/issues/interactions`,
    clientEnv.NEXT_PLUBIC_API_URL,
  );

  url.searchParams.set("issuesIds", issuesIds.join(","));

  const response = await fetch(url, {
    credentials: "include",
  });
  const data = await response.json();
  return IssueInteractionsResponseSchema.parse(data);
}
