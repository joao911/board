import type { Metadata } from "next";
import { getIssue } from "@/http/get-issue";
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

  return (
    <main className="max-w-225 mx-auto w-full flex flex-col gap-4 p-6 bg-navy-800 border-[0.5px] border-navy-500 rounded-xl"></main>
  );
}
