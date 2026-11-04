export default function ContactPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#111111] to-[#2a2a2a] text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <div className="w-20 h-1 bg-[#F58220] mx-auto"></div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-2xl">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#F58220]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#F58220]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-[#F58220]"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#F58220] hover:bg-[#e07010] text-white font-semibold px-8 py-3 rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}