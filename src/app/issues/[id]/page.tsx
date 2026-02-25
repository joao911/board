import type { Metadata } from "next";
import { getIssue } from "@/http/get-issue";
import Link from "next/link";
import { ArchiveIcon, MoveLeftIcon, ThumbsUpIcon } from "lucide-react";
import { Button } from "@/components/Button";
import { IssueCommentsList } from "./comments/Issue-comments-list";
interface IssuePageProps {
  params: { id: string };
}

export const generateMetadata = async ({
  params,
}: IssuePageProps): Promise<Metadata> => {
  const { id } = params;

  const issue = await getIssue({ id });

  return {
    title: `Issue ${issue.title}`,
  };
};

export default async function IssuePage({ params }: IssuePageProps) {
  const { id } = params;

  const issue = await getIssue({ id });
  const statusLabel = {
    backlog: "Backlog",
    in_progress: "In Progress",
    done: "Done",
    todo: "To Do",
  } as const;

  return (
    <main className="max-w-225 mx-auto w-full flex flex-col gap-4 p-6 bg-navy-800 border-[0.5px] border-navy-500 rounded-xl">
      <Link
        href="/"
        className="flex items-center gap-2 text-navy-200 hover:text-navy-100"
      >
        <MoveLeftIcon className="size-4" />
        <span className="text-xs">back to board</span>
      </Link>
      <div className="flex items-center gap-2">
        <span className="bg-navy-700 rounded-lg px-3 py-1.5 flex items-center gap-2 text-xs">
          <ArchiveIcon className="size-3" />
          {statusLabel[issue.status]}
        </span>
        <Button
          type="button"
          className="text-navy-100 flex items-center gap-2 rounded-lg px-2.5 bg-navy-600 cursor-pointer"
        >
          <ThumbsUpIcon className="size-3" />
          <span className="text-sm">12</span>
        </Button>
      </div>
      <div className="space-y-2">
        <h1 className="font-semibold text-2xl">{issue.title}</h1>
        <p className="text-navy-100 text-sm landing-relaxed">
          {issue.description}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <span className="font-semibold">Comments</span>
        <form />
        <div className="mt-3">
          <IssueCommentsList issueId={issue.id} />
        </div>
      </div>
    </main>
  );
}
