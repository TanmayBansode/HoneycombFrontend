'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const features = [
  { title: 'Easy to Use', description: 'Intuitive interfaces for all our tools', icon: '🚀' },
  { title: 'AI-Powered', description: 'Cutting-edge AI technology at your fingertips', icon: '🧠' },
  { title: 'Time-Saving', description: 'Accomplish tasks faster than ever before', icon: '⏱️' },
  { title: 'Versatile', description: 'A wide range of tools for various needs', icon: '🛠️' },
]

const tools = [
  { name: 'Roadmap Generator', description: 'Create learning paths with ease', route: '/roadmap' },
  { name: 'Content Rewriter', description: 'Refresh your content instantly', route: '/rewriter' },
  { name: 'Quiz Maker', description: 'Generate quizzes on any topic', route: '/quiz' },
  { name: 'Flowchart Creator', description: 'Visualize processes effortlessly', route: '/flowchart' },
]

const FeatureCard = ({ title, description, icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-br from-purple-500 to-indigo-600 p-6 rounded-lg shadow-lg"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
    <p className="text-purple-100">{description}</p>
  </motion.div>
)

const ToolCard = ({ name, description, route }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <h3 className="text-xl font-bold mb-2 text-purple-700">{name}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link href={route} className="text-indigo-600 font-semibold hover:text-indigo-800">
      Try it out &rarr;
    </Link>
  </motion.div>
)

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-100 to-pink-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-purple-700">Honeycomb</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Honeycomb</h2>
          <p className="text-xl text-gray-600 mb-8">A collection of small AI tools to make your life easier</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Want to Contribute?</h2>
          <p className="text-xl text-gray-600 mb-8">Help us improve Honeycomb and make it even better!</p>
          <Link href="/contribute" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:from-purple-700 hover:to-indigo-700 transition duration-300">
            Contribute Now
          </Link>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Honeycomb. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}