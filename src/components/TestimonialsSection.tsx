
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Best LinkedIn profile pic I ever had! The minimalist style really makes me stand out.",
      author: "Jennifer Martinez",
      role: "Senior Developer",
      rating: 5
    },
    {
      quote: "Quick, stylish, perfect for devs! Got my avatar in 20 minutes and it's amazing.",
      author: "David Chen", 
      role: "Tech Lead",
      rating: 5
    },
    {
      quote: "Exactly what I needed for my personal brand. Clean, professional, and unique.",
      author: "Sarah Williams",
      role: "UX Designer",
      rating: 5
    },
    {
      quote: "The quality exceeded my expectations. Worth every penny for professional presence.",
      author: "Marcus Johnson",
      role: "Product Manager", 
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
            What Users Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of professionals who've upgraded their online presence
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 rounded-2xl p-6 h-full hover:bg-pink-100/10 transition-colors duration-200">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-4 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-zinc-900 text-sm">{testimonial.author}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
