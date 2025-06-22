const ExamplesSection = () => {
  const examples = [
    {
      before: "jc-prev.jpeg",
      new: "/jc-new.jpg",
      name: "JC",
      profession: "Fullstack Developer",
    },
    // {
    //   before: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=150&h=150&fit=crop&crop=face",
    //   name: "Mike R.",
    //   profession: "Software Engineer"
    // },
    // {
    //   before: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=150&h=150&fit=crop&crop=face",
    //   name: "Alex P.",
    //   profession: "Marketing Manager"
    // },
    // {
    //   before: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=150&h=150&fit=crop&crop=face",
    //   name: "Emma L.",
    //   profession: "Product Manager"
    // }
  ];

  return (
    <section id="examples" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4">
            Recent Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            See how we've helped professionals stand out
          </p>
          <p className="text-sm text-zinc-400 font-medium">Your turn next.</p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto place-items-center">
          {examples.map((example, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="space-y-4">
                  {/* Before */}
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-2">Before</p>
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-gray-200">
                      <img
                        src={example.before}
                        alt={`${example.name} before`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="text-center">
                    <div className="w-px h-4 bg-gray-300 mx-auto"></div>
                    <div className="text-gray-400 text-xs">↓</div>
                  </div>

                  {/* After */}
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-2">After</p>
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-pink-400">
                      <img
                        src={example.new}
                        alt={`${example.name} after`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Name & Profession */}
                  <div className="text-center pt-2">
                    <p className="font-semibold text-zinc-900 text-sm">
                      {example.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {example.profession}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
