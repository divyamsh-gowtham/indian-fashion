import Container from "./container";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 py-8">
      <Container className="text-xs text-stone-600">
        © {new Date().getFullYear()} Bay’r
      </Container>
    </footer>
  );
}
