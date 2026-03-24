import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Projects } from "../components/Projects"
import { FAQ } from "../components/FAQ"
import { CallToAction } from "../components/CallToAction"
import { Footer } from "../components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  )
}