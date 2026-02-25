import { CommentsListResponseSchema } from "@/api/routes/list-issue-comments";
import { clientEnv } from "@/env";

interface GetIssueCommentsParams {
  issueId: string;
}

export async function listIssueComments({ issueId }: GetIssueCommentsParams) {
  const url = new URL(
    `/api/issues/${issueId}/comments`,
    clientEnv.NEXT_PLUBIC_API_URL,
  );

  const response = await fetch(url);
  const data = await response.json();
  return CommentsListResponseSchema.parse(data);
}
