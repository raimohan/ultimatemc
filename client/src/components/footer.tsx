import { motion } from "framer-motion";

export function Footer() {
  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "#home" },
        { name: "Features", href: "#features" },
        { name: "How to Join", href: "#join" },
        { name: "Store", href: "#store" },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Discord", href: "https://discord.gg/ultimatemc", external: true },
        { name: "Forums", href: "#" },
        { name: "Support", href: "#" },
        { name: "Staff", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Refund Policy", href: "#" },
      ],
    },
  ];

  const handleSmoothScroll = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer id="about" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-minecraft text-xl mb-6">UltimateMC</h3>
            <p className="text-gray-400 mb-4">
              The ultimate Minecraft survival & community experience.
            </p>
            <p className="text-gray-400 text-sm">
              Server IP:{" "}
              <code className="bg-gray-800 px-2 py-1 rounded font-mono">
                play.ultimatemc.fun
              </code>
            </p>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-gray-400">
                {section.links.map((link) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => handleSmoothScroll(link.href)}
                        className="hover:text-white transition-colors duration-300 text-left"
                      >
                        {link.name}
                      </button>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-t border-gray-800 pt-8 text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400">
            © 2024 UltimateMC. All rights reserved. Not affiliated with Mojang Studios.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
