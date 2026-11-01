import { SectionHeader } from "@/components/section-header";
import { SectionGridPage } from "@/components/section-grid-page";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <>
      <SectionHeader />
      <main className="flex-1">
        <SectionGridPage />
      </main>
      <ScrollToTop />
    </>
  );
}
// trigger rebuild
