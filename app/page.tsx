import Hero from "../components/hero";
import Editorial from "../components/editorial";
import Designers from "../components/designers";
import Section from "../components/section";
import Container from "../components/container";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        id="discover"
        eyebrow="Bay’r"
        title="A curated window into independent Indian fashion."
        description="Not a marketplace. Not a feed. A slow, deliberate way to discover designers who work with care, craft, and culture."
      >
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            <p className="text-sm leading-relaxed text-stone-700 md:col-span-2">
              Bay’r exists for labels too considered to be mass, too independent
              to be everywhere.
            </p>
            <p className="text-sm leading-relaxed text-stone-700">
              Culture before commerce. Stories before scale.
            </p>
          </div>
        </Container>
      </Section>

      <Editorial />
      <Designers />

      <Section
        id="about"
        eyebrow="About"
        title="Culture over commerce."
        align="center"
      >
        <Container>
          <p className="mx-auto max-w-2xl text-sm text-stone-700">
            Bay’r slows fashion down to a human pace — from loom to studio to story.
          </p>
        </Container>
      </Section>
    </>
  );
}
