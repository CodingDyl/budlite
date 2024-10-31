'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Leaf, Shield, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { bud_logo } from '@/app/assets'
import Image from 'next/image'

export function BudLiteLandingComponent() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-t from-forest-800 to-forest-100">
      <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(0, 0, 0, 0.9)] bg-opacity-90 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image 
            src={bud_logo} 
            alt="Bud Lite Logo" 
            height={48} 
            width={192} 
            className="h-16 w-auto"
          />
          <div className="space-x-4">
            <Button variant="ghost">Products</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Contact</Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative h-screen flex items-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-green-800 mb-6">
              Elevate Your Experience
            </h1>
            <p className="text-xl md:text-2xl text-green-700 mb-8 max-w-2xl">
              Discover premium quality cannabis, cultivated with care and delivered with discretion.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Explore Products <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
          <motion.div
            style={{ y }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-50"></div>
            <img
              src="/placeholder.svg?height=1080&width=1920"
              alt="Cannabis field"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
              Our Premium Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Sativa Blend', 'Indica Delight', 'Hybrid Harmony'].map((product, index) => (
                <motion.div
                  key={product}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-green-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <img
                    src={`/placeholder.svg?height=200&width=200&text=${product}`}
                    alt={product}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-green-700 mb-2">{product}</h3>
                  <p className="text-green-600 mb-4">Experience the finest quality and potency.</p>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
              Why Choose Bud Lite?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Leaf, title: 'Organic Cultivation', description: 'Our cannabis is grown using organic methods, ensuring a pure and natural product.' },
                { icon: Shield, title: 'Lab Tested', description: 'All our products undergo rigorous lab testing for potency and purity.' },
                { icon: Sun, title: 'Sustainable Practices', description: "We're committed to environmentally friendly growing and packaging practices." },
              ].map(({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="bg-green-100 p-4 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-700 mb-2">{title}</h3>
                  <p className="text-green-600">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: 'Alex M.', quote: 'Bud Lite has consistently delivered top-notch products. Their attention to quality is unmatched!' },
                { name: 'Sam K.', quote: 'I appreciate the discreet packaging and prompt delivery. Bud Lite makes the whole process seamless.' },
              ].map(({ name, quote }, index) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-green-50 rounded-lg p-6 shadow-md"
                >
                  <p className="text-green-700 mb-4 italic">"{quote}"</p>
                  <p className="text-green-600 font-semibold">{name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-green-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-8">
              Stay Connected
            </h2>
            <p className="text-center text-green-700 mb-8 max-w-2xl mx-auto">
              Join our newsletter for exclusive offers, new product announcements, and cannabis education.
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <Input type="email" placeholder="Enter your email" className="flex-grow" />
              <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">Bud Lite</div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300">Privacy Policy</a>
              <a href="#" className="hover:text-green-300">Terms of Service</a>
              <a href="#" className="hover:text-green-300">Contact Us</a>
            </div>
          </div>
          <div className="mt-8 text-center text-green-300 text-sm">
            © {new Date().getFullYear()} Bud Lite. All rights reserved. Must be 21+ to purchase.
          </div>
        </div>
      </footer>
    </div>
  )
}