import React from 'react';

function About() {
  return (
    <div className="w-screen h-[100vh] flex justify-center items-center bg-[#F3F7FE]">
      <div className="w-3/4 h-full bg-white rounded-xl shadow-2xl p-12 space-y-16">
        {/* What Makes Us Unique */}
        <section className="text-center">
          <h2 className="text-5xl font-extrabold text-[#4A4A4A] mb-6">What Makes Us Unique?</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Our goal is to simplify processes, reduce costs, and optimize resources by providing you with creative, secure, and efficient tools that eliminate the need for dedicated technical staff.
            With a combination of experience, creativity, and problem-solving, we offer fast and effective solutions that adapt to your needs. Each product and service is designed to be user-friendly, efficient, and adaptable, allowing your team to focus on strategic activities that drive the growth of your business.
          </p>
        </section>

        {/* Our Pillars */}
        <section>
          <h2 className="text-4xl font-extrabold mb-12">Our Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: 'Safety', description: 'Ensuring data protection, security, and compliance with industry standards.' },
              { title: 'Automation', description: 'Streamlining cloud operations through Infrastructure as Code (IaC), CI/CD pipelines, and automated monitoring.' },
              { title: 'Optimization', description: 'Enhancing cloud performance and efficiency by fine-tuning resource allocation, scaling mechanisms, and workload distribution.' },
              { title: 'Best Practices', description: 'Adhering to industry-proven methodologies, frameworks, and guidelines to ensure reliability, scalability, and maintainability.' },
              { title: 'Cost-efficient', description: 'Maximizing cloud investment by eliminating waste, right-sizing resources, and leveraging cost-saving features.' },
            ].map((pillar, index) => (
              <div key={index} className="bg-[#F3F7FE] p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300">
                <h3 className="text-2xl font-semibold text-[#4A4A4A] mb-4">{pillar.title}</h3>
                <p className="text-lg text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
