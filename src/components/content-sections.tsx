import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function ContentSections() {
  return (
    <>
      {/* Economy Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-minecraft text-3xl lg:text-4xl mb-6 text-gray-800 dark:text-gray-200">
                Advanced Economy
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                At UltimateMC, we believe in a robust economy - for everyone. Not only do we have a vast catalog of features for you to explore and expand your wealth, but we also host regular economic events and market opportunities.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                Using our advanced systems, you can even create your own shops and become a merchant empire!
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-semibold">
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="https://i.postimg.cc/pXqK2Ycm/Picsart-25-08-16-17-14-23-437.png"
                alt="Economy System Screenshot"
                className="rounded-xl shadow-xl w-full h-auto transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enchants Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="https://i.postimg.cc/YqZqfvhX/Picsart-25-08-16-17-12-50-930.png"
                alt="Custom Enchants Screenshot"
                className="rounded-xl shadow-xl w-full h-auto transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-minecraft text-3xl lg:text-4xl mb-6 text-gray-800 dark:text-gray-200">
                Custom Enchants
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                Customize your gear like never before with our expansive lineup of custom enchantments available through our advanced enchanting system.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                Whether you're looking to dominate in PvP or enhance your survival experience, we've got the perfect enchants for every playstyle.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 font-semibold">
                  View Enchants
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-minecraft text-3xl lg:text-4xl mb-6 text-gray-800 dark:text-gray-200">
                Community
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
                UltimateMC is driven by our Discord community where we host events, competitions, and provide 24/7 support for all our players.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                Join thousands of active players, participate in tournaments, and make lasting friendships in our welcoming community.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-semibold">
                  <a href="https://discord.gg/ultimatemc" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Join Discord
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="https://i.postimg.cc/SK7ShVV5/Picsart-25-08-16-17-15-00-682.png"
                alt="Community Screenshot"
                className="rounded-xl shadow-xl w-full h-auto transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
