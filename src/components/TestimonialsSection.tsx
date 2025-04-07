
import { Avatar } from "@/components/ui/avatar";

const testimonials = [
  {
    content: "This platform has transformed how our team collaborates. We've seen remarkable improvements in productivity and communication.",
    author: {
      name: "Emma Rodriguez",
      role: "CTO at TechNova",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100",
    },
  },
  {
    content: "I was skeptical at first, but after just one month, I can't imagine running our business without this tool. The ROI has been incredible.",
    author: {
      name: "Michael Chen",
      role: "Founder, GreenStart",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100",
    },
  },
  {
    content: "The customer support team has been exceptional. They've helped us customize the platform to fit our unique workflow needs.",
    author: {
      name: "Sophia Patel",
      role: "Operations Manager, BlueSky",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100",
    },
  },
];

const TestimonialsSection = () => {
  return (
    <div id="testimonials" className="bg-blue-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by companies worldwide
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don't just take our word for it. See what our customers have to say about their experience.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex flex-col justify-between bg-white p-6 shadow-md rounded-2xl animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div>
                <div className="flex gap-4 items-center mb-6">
                  <Avatar className="h-12 w-12">
                    <img src={testimonial.author.avatar} alt={testimonial.author.name} />
                  </Avatar>
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.author.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.author.role}</div>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.content}</p>
              </div>
              <div className="mt-8 text-blue-600">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
