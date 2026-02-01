const Section = ({ children, className, ...props }) => {
  return (
    <section className={`w-[95%] lg:w-[95%] mx-auto ${className}`} {...props}>
      {children}
    </section>
  );
};

export default Section;
