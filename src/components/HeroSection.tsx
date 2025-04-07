
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative isolate pt-24 pb-12 md:pt-32 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-indigo-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center animate-fade-in">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Revolutionize Your Workflow with <span className="text-gradient">Luminia</span>
          </h1>
          <p className="text-lg leading-8 text-gray-600 mb-10">
            Our platform helps teams collaborate seamlessly, automate tasks, and achieve remarkable results. Join thousands of businesses already transforming their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="font-medium gap-2 text-base">
              Get Started <ArrowRight size={16} />
            </Button>
            <Button variant="outline" size="lg" className="font-medium">
              Learn More
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative mx-auto max-w-4xl">
            <div className="rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl">
              <div className="w-full overflow-hidden rounded-lg shadow-xl ring-1 ring-black ring-opacity-5">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200" 
                  alt="App dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
