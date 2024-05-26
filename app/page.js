import Link from "next/link";
import { Card } from "./components/Card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 md:p-12 lg:p-24 bg-gradient-to-r from-black via-slate-800 to-black">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
        Project Honeycomb
      </h1>
      <p className="text-gray-500 text-center max-w-lg">
        A collection of tools to make things easy for you!
      </p>
      <div className="mt-12 flex justify-center">
        <div className="lg:flex flex-wrap justify-center gap-6">
          <Card
            title="Roadmap Generator"
            description="A Roadmap-ish Checklist to learn something from Scratch"
            imageLink="image.jpg"
            link="roadmap"
          />

          <Card
            title="Rewriter"
            description="A Tool to help you rewrite content in a unique way"
            imageLink="rewrite.avif"
            link="rewrite"
          />

          <Card
            title="Quiz Generator"
            description="A Tool to help you generate and attempt a quiz on any topic"
            imageLink="test.jpg"
            link="quiz"
          />
        </div>
      </div>
    </div>
  );
}
