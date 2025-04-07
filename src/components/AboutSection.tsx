
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <div id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">About Us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Mission</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Founded in 2023, our startup is on a mission to revolutionize how teams work together. We believe in creating tools that are both powerful and intuitive, enabling businesses of all sizes to achieve their full potential.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our team of experienced entrepreneurs, designers, and engineers brings decades of combined expertise to create solutions that address real-world challenges faced by modern businesses.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button>Learn more about our team</Button>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
              alt="Team collaboration"
              className="w-full h-auto rounded-2xl shadow-xl ring-1 ring-gray-900/10"
            />
            <div className="absolute -bottom-12 -left-12 hidden lg:block">
              <div className="bg-blue-600 rounded-2xl p-6 shadow-lg text-white max-w-xs">
                <p className="font-medium mb-2">
                  "We've achieved a 40% increase in productivity since adopting this platform."
                </p>
                <p className="text-sm text-blue-100">
                  — Sarah Johnson, CEO at TechCorp
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
