export default function SuccessStories() {

  const stories = [
    {
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop",
      name: "Rahim & Bruno",
      role: "Dog Adoption Story",
      story:
        "Bruno was rescued from the streets and found a warm, loving home with Rahim. Today, they enjoy adventures, daily walks, and endless happiness together.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=1200&auto=format&fit=crop",
      name: "Ayesha & Luna",
      role: "Cat Adoption Story",
      story:
        "After spending months in a shelter, Luna finally found her forever family. Ayesha says Luna completely changed her life with love and comfort.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop",
      name: "Tanvir & Max",
      role: "Rescue Success Story",
      story:
        "Max now lives a joyful life filled with care, affection, and safety. Tanvir adopted Max through PetAdopt and gave him a second chance at life.",
    },
  ];

  return (

    <section className="relative py-24 px-5 bg-gray-100 dark:bg-[#111827] overflow-hidden">

      {/* background blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* heading */}
        <div className="text-center mb-16">

          <div className="inline-block bg-orange-500/10 border border-orange-500/20 text-orange-500 dark:text-orange-300 px-5 py-2 rounded-full text-sm font-medium mb-6">
            Happy Adoption Journeys
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Success
            <span className="text-orange-500 dark:text-orange-400">
              {" "}Stories
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            Every adoption creates a beautiful story filled with love,
            happiness, and unforgettable companionship between pets and families.
          </p>

        </div>

        {/* stories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {
            stories.map((story, index) => (

              <div
                key={index}
                className="group bg-white dark:bg-[#1e293b] border border-black/10 dark:border-white/10 rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* image */}
                <div className="relative overflow-hidden">

                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                  {/* floating badge */}
                  <div className="absolute top-5 left-5 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Success Story
                  </div>

                </div>

                {/* content */}
                <div className="p-8">

                  {/* name */}
                  <h3 className="text-2xl font-bold">
                    {story.name}
                  </h3>

                  {/* role */}
                  <p className="text-orange-500 dark:text-orange-400 mt-2 font-medium">
                    {story.role}
                  </p>

                  {/* story */}
                  <p className="text-gray-600 dark:text-gray-400 mt-5 leading-relaxed">
                    {story.story}
                  </p>

                  {/* bottom line */}
                  <div className="mt-8 w-16 h-1 bg-orange-500 rounded-full group-hover:w-28 transition-all duration-300"></div>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </section>

  );

}
..