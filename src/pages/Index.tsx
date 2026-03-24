import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Projects } from "../components/Projects"
import { Prices } from "../components/Prices"
import { CallToAction } from "../components/CallToAction"
import { Footer } from "../components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <Prices />
      <CallToAction />
      <Footer />
    </main>
  )
}