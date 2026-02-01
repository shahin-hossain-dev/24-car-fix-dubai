import React from "react";
import PageBanner from "@/components/partials/PageBanner";
import Section from "@/components/partials/Section";
import Link from "next/link";
import Image from "next/image";
import Description from "./_components/Description";

const Blogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs`, {
    cache: "no-store",
  });
  const data = await res.json();
  const blogs = data?.data;

  return (
    <div>
      <PageBanner title={"Blogs"} image={"/images/image-1.webp"} />
      <Section className={"py-6"}>
        <div className="space-y-4 grid grid-cols-1 md:grid-cols-4">
          {blogs?.map((blog, idx) => (
            <div key={idx} className="bg-gray-50 p-4 rounded-2xl  ">
              {blog?.image && (
                <Image
                  className="shrink-0 w-full object-cover object-center rounded-lg"
                  src={blog?.image}
                  height={400}
                  width={600}
                  alt={blog?.title}
                />
              )}
              <div className="space-y-4">
                <h3 className="text-xl !font-semibold text-primary-500">
                  {blog?.title}
                </h3>
                <div className="mt-2">
                  <Description content={blog?.content} />
                </div>
                <div className="mt-2">
                  <Link
                    href={`/blogs/${blog?.slug}`}
                    className=" cursor-pointer inline hover:bg-primary-700 duration-200 bg-primary-500 !text-white flex-center roboto-serif gap-2 rounded-3xl px-3 py-1 md:px-4 md:py-2 "
                  >
                    <span className="text-sm md:text-base font-bai-jamjuree truncate">
                      Read More...
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Blogs;
