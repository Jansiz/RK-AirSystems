import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800">About Us</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-blue-light rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-neutral-800">
              RK Air Systems: Your Trusted HVAC Experts
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-neutral-800/80 leading-relaxed">
                RK Air Systems was established in 2020 by HVAC expert Rob Kloepfer. As a family-focused small business, 
                we are dedicated to providing top-quality HVAC services in Barrie and the surrounding areas. Our skilled 
                team ensures precision and efficiency in every installation, maintenance, and repair project we undertake.
              </p>
              <p className="text-lg text-neutral-800/80 leading-relaxed">
                We pride ourselves on delivering reliable and affordable care, using the latest technology to offer 
                energy-efficient and sustainable solutions. Whether you need to upgrade your home's heating and cooling 
                system or require prompt repairs, RK Air Systems is your trusted partner for all your HVAC Barrie needs.
              </p>
              <p className="text-lg text-neutral-800/80 leading-relaxed">
                Choose RK Air Systems for exceptional customer service and expertise. Contact us today to schedule a 
                consultation and experience the difference of working with Barrie's preferred HVAC specialists.
              </p>
            </div>
            <div className="pt-6">
              <button className="group relative px-8 py-3 bg-secondary text-white rounded-full 
                               overflow-hidden transition-all duration-300 
                               hover:shadow-2xl hover:shadow-secondary/20 hover:scale-105">
                <span className="relative z-10 font-semibold">Schedule Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-blue-light to-secondary 
                              -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </div>
          </div>
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/about-image.png"
              alt="RK Air Systems Team"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
} 