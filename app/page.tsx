import { SectionHeader } from "@/components/section-header";
import { SectionGridPage } from "@/components/section-grid-page";

export default function Home() {
  return (
    <>
      <SectionHeader />
      <main id="top" className="flex-1">
        <SectionGridPage />
      </main>
    </>
  );
}
