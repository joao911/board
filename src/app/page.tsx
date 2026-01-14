import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { ArchiveIcon, MessageCircleIcon, ThumbsUpIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-405 w-full mx-auto p-10  flex flex-col gap-6 h-dvh">
      <div />
      <main className="grid grid-cols-4 gap-5 flex-1 items-stretch ">
        <Section.Root>
          <Section.Header>
            <Section.Title icon={<ArchiveIcon />} title="Backlog" />
            <Section.Count count={32} />
          </Section.Header>
          <Section.Content>
            <Card.Root>
              <Card.Header>
                <Card.Title title="Backlog" />
                <Card.Number count={32} />
              </Card.Header>
              <Card.Footer>
                <button
                  type="button"
                  className="text-navy-100 flex items-center gap-2 rounded-lg px-2.5 bg-navy-600 cursor-pointer"
                >
                  <ThumbsUpIcon className="size-3" />
                  <span className="text-sm">12</span>
                </button>
                <button
                  type="button"
                  className="text-navy-100 flex items-center gap-2 rounded-lg px-2.5 bg-navy-600 cursor-pointer"
                >
                  <MessageCircleIcon className="size-3" />
                  <span className="text-sm">5</span>
                </button>
              </Card.Footer>
            </Card.Root>
          </Section.Content>
        </Section.Root>
      </main>
    </div>
  );
}
