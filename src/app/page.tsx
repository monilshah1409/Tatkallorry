import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Features from "@/components/home/Features";
import ProblemSolution from "@/components/home/ProblemSolution";
import HowItWorks from "@/components/home/HowItWorks";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <FAQ />
    </>
  );
}
