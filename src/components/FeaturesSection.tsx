
import { CheckCircle, Zap, Shield, UserPlus, Clock, LineChart } from "lucide-react";

const features = [
  {
    name: "Lightning Fast",
    description: "Experience unprecedented speed with our optimized algorithms that deliver results in milliseconds.",
    icon: Zap,
  },
  {
    name: "Secure & Reliable",
    description: "Enterprise-grade security with end-to-end encryption and 99.9% uptime guarantee.",
    icon: Shield,
  },
  {
    name: "Team Collaboration",
    description: "Seamless collaboration tools that bring your team together regardless of location.",
    icon: UserPlus,
  },
  {
    name: "Time Saving Automation",
    description: "Automate repetitive tasks and focus on what really matters to your business.",
    icon: Clock,
  },
  {
    name: "Actionable Analytics",
    description: "Gain valuable insights with comprehensive analytics and customizable reports.",
    icon: LineChart,
  },
  {
    name: "Expert Support",
    description: "Our customer success team is available 24/7 to help you every step of the way.",
    icon: CheckCircle,
  },
];

const FeaturesSection = () => {
  return (
    <div id="features" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive suite of tools and features designed to take your business to the next level.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 animate-slide-up">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
