import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-800">Contact Us</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-blue-light rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-neutral-800">Get in Touch</h3>
            <p className="text-lg text-neutral-800/80">
              Ready to experience premium HVAC solutions? Contact us today for a consultation.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-neutral-800/60">Phone</p>
                  <p className="text-lg font-semibold text-neutral-800">+1 705-220-5272</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-neutral-800/60">Email</p>
                  <p className="text-lg font-semibold text-neutral-800">rob@rkairsystems.ca</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-neutral-800/60">Servicing</p>
                  <p className="text-lg font-semibold text-neutral-800">Barrie and Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>
          <form className="space-y-6 bg-neutral-100 p-8 rounded-2xl">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-6 py-4 rounded-xl border-2 border-neutral-200 focus:border-secondary focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>
            <button className="group relative px-8 py-3 bg-secondary text-white rounded-xl 
                              overflow-hidden transition-all duration-300 
                              hover:shadow-2xl hover:shadow-secondary/20 hover:scale-105">
              <span className="relative z-10 font-semibold">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-blue-light to-secondary 
                            -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 