import { SectionHeader } from "@/components/section-header";
import { SectionHero } from "@/components/section-hero";
import { SectionSkills } from "@/components/section-skills";
import { SectionExperience } from "@/components/section-experience";
import { SectionContact } from "@/components/section-contact";
import { SectionFooter } from "@/components/section-footer";

export default function Home() {
  return (
    <>
      <SectionHeader />
      <main id="top" className="flex-1">
        <SectionHero />
        <SectionSkills />
        <SectionExperience />
        <SectionContact />
      </main>
      <SectionFooter />
    </>
  );
}
