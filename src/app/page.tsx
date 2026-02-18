import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { listIssues } from "@/http/list-issues";
import { ArchiveIcon, MessageCircleIcon, ThumbsUpIcon } from "lucide-react";

interface BoardProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function Board({ searchParams }: BoardProps) {
  const { q } = await searchParams;

  const issues = await listIssues({ search: q });
  return (
    <div className="max-w-405 w-full mx-auto p-10  flex flex-col gap-6 h-dvh">
      <div />
      <main className="grid grid-cols-4 gap-5 flex-1 items-stretch ">
        <Section.Root>
          <Section.Header>
            <Section.Title icon={<ArchiveIcon />} title="Backlog" />
            <Section.Count count={issues.backlog.length} />
          </Section.Header>
          <Section.Content>
            {issues.backlog.length > 0 ? (
              issues.backlog.map((issue) => (
                <Card.Root href={`/issues/${issue.id}`} key={issue.id}>
                  <Card.Header>
                    <Card.Title title={issue.title} />
                    <Card.Number count={issue.issueNumber} />
                  </Card.Header>
                  <Card.Footer>
                    <Button
                      type="button"
                      className="text-navy-100 flex items-center gap-2 rounded-lg px-2.5 bg-navy-600 cursor-pointer"
                    >
                      <ThumbsUpIcon className="size-3" />
                      <span className="text-sm">12</span>
                    </Button>
                    <button
                      type="button"
                      className="text-navy-100 flex items-center gap-2 rounded-lg px-2.5 bg-navy-600 cursor-pointer"
                    >
                      <MessageCircleIcon className="size-3" />
                      <span className="text-sm">5</span>
                    </button>
                  </Card.Footer>
                </Card.Root>
              ))
            ) : (
              <div className="flex items-center justify-center py-8 text-center">
                <p className="text-center text-navy-300">
                  No issues matched your search
                </p>
              </div>
            )}
          </Section.Content>
        </Section.Root>
        <Section.Root>
          <Section.Header>
            <Section.Title icon={<ArchiveIcon />} title="Todo" />
            <Section.Count count={issues.todo.length} />
          </Section.Header>
          <Section.Content>
            {issues.todo.length > 0 ? (
              issues.todo.map((issue) => (
                <Card.Root href={`/issues/${issue.id}`} key={issue.id}>
                  <Card.Header>
                    <Card.Title title={issue.title} />
                    <Card.Number count={issue.issueNumber} />
                  </Card.Header>
                  <Card.Footer>
                    <Button
                      type="button"
                      className="text-navy-100 flex items-center gap-2 rounded-lg px-2.5 bg-navy-600 cursor-pointer"
                    >
                      <ThumbsUpIcon className="size-3" />
                      <span className="text-sm">12</span>
                    </Button>
                    <button
                      type="button"
                      className="text-navy-100 flex items-center gap-2 rounded-lg px-2.5 bg-navy-600 cursor-pointer"
                    >
                      <MessageCircleIcon className="size-3" />
                      <span className="text-sm">5</span>
                    </button>
                  </Card.Footer>
                </Card.Root>
              ))
            ) : (
              <div className="flex items-center justify-center py-8 text-center">
                <p className="text-center text-navy-300">
                  No issues matched your search
                </p>
              </div>
            )}
          </Section.Content>
        </Section.Root>
        <Section.Root>
          <Section.Header>
            <Section.Title icon={<ArchiveIcon />} title="In Progress" />
            <Section.Count count={issues.in_progress.length} />
          </Section.Header>
          <Section.Content>
            {issues.in_progress.length > 0 ? (
              issues.in_progress.map((issue) => (
                <Card.Root href={`/issues/${issue.id}`} key={issue.id}>
                  <Card.Header>
                    <Card.Title title={issue.title} />
                    <Card.Number count={issue.issueNumber} />
                  </Card.Header>
                  <Card.Footer>
                    <Button
                      type="button"
                      className="text-navy-100 flex items-center gap-2 rounded-lg px-2.5 bg-navy-600 cursor-pointer"
                    >
                      <ThumbsUpIcon className="size-3" />
                      <span className="text-sm">12</span>
                    </Button>
                    <button
                      type="button"
                      className="text-navy-100 flex items-center gap-2 rounded-lg px-2.5 bg-navy-600 cursor-pointer"
                    >
                      <MessageCircleIcon className="size-3" />
                      <span className="text-sm">5</span>
                    </button>
                  </Card.Footer>
                </Card.Root>
              ))
            ) : (
              <div className="flex items-center justify-center py-8 text-center">
                <p className="text-center text-navy-300">
                  No issues matched your search
                </p>
              </div>
            )}
          </Section.Content>
        </Section.Root>
        <Section.Root>
          <Section.Header>
            <Section.Title icon={<ArchiveIcon />} title="Done" />
            <Section.Count count={issues.done.length} />
          </Section.Header>
          <Section.Content>
            {issues.done.length > 0 ? (
              issues.done.map((issue) => (
                <Card.Root href={`/issues/${issue.id}`} key={issue.id}>
                  <Card.Header>
                    <Card.Title title={issue.title} />
                    <Card.Number count={issue.issueNumber} />
                  </Card.Header>
                  <Card.Footer>
                    <Button
                      type="button"
                      className="text-navy-100 flex items-center gap-2 rounded-lg px-2.5 bg-navy-600 cursor-pointer"
                    >
                      <ThumbsUpIcon className="size-3" />
                      <span className="text-sm">12</span>
                    </Button>
                    <button
                      type="button"
                      className="text-navy-100 flex items-center gap-2 rounded-lg px-2.5 bg-navy-600 cursor-pointer"
                    >
                      <MessageCircleIcon className="size-3" />
                      <span className="text-sm">5</span>
                    </button>
                  </Card.Footer>
                </Card.Root>
              ))
            ) : (
              <div className="flex items-center justify-center py-8 text-center">
                <p className="text-center text-navy-300">
                  No issues matched your search
                </p>
              </div>
            )}
          </Section.Content>
        </Section.Root>
      </main>
    </div>
  );
}
