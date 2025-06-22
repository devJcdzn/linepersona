import { Upload, Wand2, Download } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload",
      description: "Upload your photo",
      detail: "Simply drag and drop or click to select your best photo",
    },
    {
      icon: Wand2,
      title: "We transform it",
      description: "Hand drawing entry in action",
      detail: "Your image is the base, then our designers perfect it",
    },
    {
      icon: Download,
      title: "You receive it",
      description: "Download ready for all social platforms",
      detail: "Get high-res PNG files optimized for any platform",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From photo to professional avatar in just three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-pink-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <step.icon className="h-10 w-10 text-zinc-900" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-2">
                Step {index + 1}: {step.title}
              </h3>
              <p className="text-gray-600 mb-2">{step.description}</p>
              <p className="text-sm text-gray-500">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
