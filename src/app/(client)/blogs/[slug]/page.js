import Section from "@/components/partials/Section";
import React from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/${slug}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const blog = data?.data;

  return {
    title: blog?.title,
    // description: .description,
  };
}

const BlogDetails = async ({ params }) => {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/${slug}`
  );
  const data = await res.json();
  const blog = data?.data;

  return (
    <div>
      {/* <PageBanner title={"Blogs Details"} image={"/images/image-1.webp"} /> */}
      <div className="h-[60px] md:h-[100px] lg:h-[110px] bg-[#000000CC]"></div>

      {!blog && (
        <h2 className="text-2xl lg:text-5xl py-2 lg:py-8 text-center text-primary-500">
          This Blog is Not Available{" "}
        </h2>
      )}
      {!!blog && (
        <Section className={"container py-4 lg:py-6 lg:!w-[70%]"}>
          <div>
            <h2 className="text-2xl lg:text-4xl font-semibold py-3 lg:py-6 text-center">
              {blog?.title}
            </h2>
            <div dangerouslySetInnerHTML={{ __html: blog?.content }}></div>
          </div>
        </Section>
      )}
    </div>
  );
};

export default BlogDetails;
