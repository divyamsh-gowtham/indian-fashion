import Section from "./section";
import Container from "./container";
import CollectionCard from "./collection-card";
import { collections } from "@/lib/data";

export default function Designers() {
  return (
    <Section
      id="designers"
      eyebrow="Designers"
      title="Curated saree collections."
      description="A glimpse into studios working with handloom, dye, and tradition."
    >
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {collections.map((c) => (
            <CollectionCard
              key={c.id}
              title={c.title}
              designer={c.designer}
              city={c.city}
              description={c.description}
              images={c.images}
              video={c.video}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
