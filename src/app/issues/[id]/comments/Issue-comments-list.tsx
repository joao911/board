import { Comments } from "@/components/Comments";
import { listIssueComments } from "@/http/get-issue-comments";
import { formatDistanceToNow } from "date-fns";

interface IssueCommentsListProps {
  issueId: string;
}

export async function IssueCommentsList({ issueId }: IssueCommentsListProps) {
  const { comments } = await listIssueComments({ issueId });
  return (
    <div className="space-y-3">
      {comments.length === 0 && (
        <p className="text-navy-400 text-sm text-center py-2">
          No comments yet
        </p>
      )}
      {comments.map((comment) => (
        <Comments.Root key={comment.id}>
          <Comments.Avatar src={comment.author.avatar} />
          <Comments.Content>
            <Comments.Header>
              <Comments.Author>{comment.author.name}</Comments.Author>
              <Comments.Time>
                {formatDistanceToNow(comment.createdAt, { addSuffix: true })}
              </Comments.Time>
            </Comments.Header>
            <Comments.Text>{comment.text}</Comments.Text>
          </Comments.Content>
        </Comments.Root>
      ))}
    </div>
  );
}
