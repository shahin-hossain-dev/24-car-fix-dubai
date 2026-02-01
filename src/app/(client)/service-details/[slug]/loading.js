import Section from "@/components/partials/Section";

const Loading = () => {
  return (
    <div>
      <div className="hero top-0 w-full -z-10 animate-pulse">
        <div className="relative">
          {/* Image placeholder */}
          <div className="w-full h-[200px] lg:h-[350px] bg-gray-300" />

          {/* Overlay */}
          <div className="absolute top-0 left-0 bg-black/60 h-full w-full">
            <div className="position-center w-full grid grid-cols-1 place-items-center">
              <div className="space-y-4 py-5 px-8 mt-6 lg:mt-0">
                {/* Title */}
                <div className="h-6 md:h-8 lg:h-12 w-64 lg:w-96 bg-gray-200 rounded mx-auto lg:mx-0" />

                {/* Subtitle */}
                <div className="h-4 w-48 lg:w-80 bg-gray-200 rounded mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section className="py-2 lg:py-4 mt-4 animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* LEFT CONTENT */}
          <div className="space-y-4 col-span-1 lg:col-span-2">
            {/* SECTION 1 */}
            <section className="rounded-2xl shadow-lg p-4 lg:p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-[45px] h-[45px] rounded-full bg-gray-200" />
                <div className="h-6 w-48 bg-gray-200 rounded" />
              </div>

              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full" />
                <div className="h-4 bg-gray-200 rounded w-5/6" />
                <div className="h-4 bg-gray-200 rounded w-4/6" />
              </div>

              <div className="py-4 grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 bg-gray-200 rounded-lg" />
                ))}
              </div>
            </section>

            {/* SECTION 2 */}
            <section className="mt-12 lg:mt-24">
              <div className="h-8 w-64 bg-gray-200 rounded mb-6" />

              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 border border-neutral-200 rounded-xl p-4"
                  >
                    <div className="w-[45px] h-[45px] rounded-full bg-gray-200" />
                    <div className="flex-1 space-y-3">
                      <div className="h-5 w-40 bg-gray-200 rounded" />
                      <div className="h-4 w-full bg-gray-200 rounded" />
                      <div className="h-4 w-5/6 bg-gray-200 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ SKELETON */}
            <section className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-14 bg-gray-200 rounded-xl" />
              ))}
            </section>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-span-1">
            <div className="shadow-lg rounded-xl bg-green-50 p-4 lg:p-6 space-y-4 sticky lg:top-20">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-[35px] h-[35px] rounded-full bg-gray-200" />
                <div className="h-6 w-40 bg-gray-200 rounded" />
                <div className="w-[35px] h-[35px] rounded-full bg-gray-200" />
              </div>

              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-[35px] h-[35px] rounded-full bg-gray-200" />
                  <div className="h-4 w-full bg-gray-200 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Loading;
