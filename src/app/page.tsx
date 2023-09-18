import BlogPosts from "@/components/BlogPosts/BlogPosts";
import Hero from "@/components/Hero/Hero";
import Container from "@/components/UI/Container/Container";

export default function Home() {
  return (
    <Container>
      <main className="h-auto space-y-10">
        <Hero />
        <BlogPosts />
      </main>
    </Container>
  );
}
