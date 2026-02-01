export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">Get In Touch</h2>
            <p className="text-secondary mb-10 leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Whether you have a specific project in mind or just want to say hi, feel free to reach out.
            </p>

            <div className="space-y-6">
              <a href="tel:+8801725133398" className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-background transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-semibold text-secondary group-hover:text-accent transition-colors">+880 1725 133398</span>
              </a>

              <a href="mailto:asaduzzaman.14333@gmail.com" className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-background transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-semibold text-secondary group-hover:text-accent transition-colors">asaduzzaman.14333@gmail.com</span>
              </a>
            </div>

            <div className="flex gap-4 mt-12">
              {['LinkedIn', 'GitHub'].map(platform => (
                <a
                  key={platform}
                  href={platform === 'LinkedIn' ? 'https://www.linkedin.com/in/asaduzzaman1437/' : 'https://github.com/Asaduzzaman285'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border border-border rounded-full text-xs font-bold uppercase tracking-widest text-secondary hover:border-accent hover:text-accent transition-all"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          <div className="bg-background p-8 rounded-3xl border border-border shadow-sm">
            <form className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-accent transition-colors text-foreground" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-accent transition-colors text-foreground" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:border-accent transition-colors text-foreground" placeholder="Talk about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-foreground text-background font-bold py-4 rounded-xl hover:opacity-90 transition-opacity active:scale-[0.98]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
