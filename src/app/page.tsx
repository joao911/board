import { Section } from "@/components/Section";
import { ArchiveIcon } from "lucide-react";

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
            <div>card 2</div>
            <div>card 2</div>
            <div>card 2</div>
            <div>card 2</div>
          </Section.Content>
        </Section.Root>
      </main>
    </div>
  );
}
