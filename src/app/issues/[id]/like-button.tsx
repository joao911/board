"use client";

import { Button } from "@/components/Button";
import { getIssueInteraction } from "@/http/get-issue-interaction";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { ThumbsUpIcon } from "lucide-react";

interface IssueLikeButtonProps {
  issueId: string;
}
export function IssueLikeButton({ issueId }: IssueLikeButtonProps) {
  const { data } = useSuspenseQuery({
    queryKey: ["issue-likes", issueId],
    queryFn: () => getIssueInteraction({ issuesIds: [issueId] }),
  });
  return (
    <Button
      type="button"
      className="text-navy-100 flex items-center gap-2 rounded-lg px-2.5 bg-navy-600 cursor-pointer"
    >
      <ThumbsUpIcon className="size-3" />
      <span className="text-sm">12</span>
    </Button>
  );
}
