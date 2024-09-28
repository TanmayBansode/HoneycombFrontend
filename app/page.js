'use client'

import React, { useState } from 'react'
import { Card } from "./components/Card"
import Link from "next/link"

const tools = [
  {
    title: "Roadmap Generator",
    description: "A Roadmap-ish Checklist to learn something from Scratch",
    imageLink: "image.jpg",
    link: "roadmap",
  },
  {
    title: "Rewriter",
    description: "A Tool to help you rewrite content in a unique way",
    imageLink: "rewrite.avif",
    link: "rewrite",
  },
  {
    title: "Quiz Generator",
    description: "A Tool to help you generate and attempt a quiz on any topic",
    imageLink: "test.jpg",
    link: "quiz",
  },
  {
    title: "Flowchart Generator",
    description: "Create a descriptive flowchart on any topic you want",
    imageLink: "flowchart.png",
    link: "flowchart",
  },
  {
    title: "Coming Soon",
    description: "A Tool that will either help you in some way or for fun ",
    imageLink: "development.png",
    link: "contribute",
  },
  {
    title: "Coming Soon",
    description: "A Tool that will either help you in some way or for fun ",
    imageLink: "development.png",
    link: "contribute",
  },
]



export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-black via-slate-800 to-black">
      <main className="flex-grow flex flex-col items-center justify-between p-8 md:p-12 lg:p-24">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center">
          Project Honeycomb
        </h1>
        <p className="text-gray-500 text-center max-w-lg">
          A collection of tools to make things easy for you!
        </p>

        <div className="mt-12 flex justify-center">
          <div className="lg:flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <Card
                key={index}
                title={tool.title}
                description={tool.description}
                imageLink={tool.imageLink}
                link={tool.link}
              />
            ))}
          </div>
        </div>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-100 mb-4 mt-16">Want to Contribute?</h2>
          <p className="text-xl text-gray-500 mb-8">Help us improve Honeycomb and make it even better!</p>
          <Link href="/contribute" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:from-purple-700 hover:to-indigo-700 transition duration-300">
            Contribute Now
          </Link>
        </section>

      </main>
    </div>
  )
}