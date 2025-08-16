import { User, Crown, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ranks = [
  {
    name: "VIP Rank",
    price: "$9.99",
    icon: User,
    gradient: "from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700",
    iconBg: "bg-gray-400",
    buttonColor: "bg-gray-600 hover:bg-gray-700",
    features: [
      "Access to VIP features",
      "Priority queue access",
      "Exclusive chat colors",
      "Special perks & commands",
    ],
  },
  {
    name: "Elite Rank",
    price: "$19.99",
    icon: Crown,
    gradient: "from-yellow-100 to-yellow-200 dark:from-yellow-900 dark:to-yellow-800",
    iconBg: "bg-yellow-500",
    buttonColor: "bg-yellow-600 hover:bg-yellow-700",
    features: [
      "All VIP features",
      "Custom nickname support",
      "Access to elite areas",
      "Monthly reward kits",
    ],
    popular: true,
  },
  {
    name: "Ultimate Rank",
    price: "$39.99",
    icon: Star,
    gradient: "from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800",
    iconBg: "bg-purple-500",
    buttonColor: "bg-purple-600 hover:bg-purple-700",
    features: [
      "All Elite features",
      "Exclusive cosmetics",
      "Priority support",
      "Ultimate perks & access",
    ],
  },
];

export function StoreSection() {
  return (
    <section id="store" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-minecraft text-3xl lg:text-4xl mb-6 text-gray-800 dark:text-gray-200">
            Server Store
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Support the server and unlock exclusive perks, ranks, and items to enhance your gameplay experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {ranks.map((rank, index) => {
            const Icon = rank.icon;
            return (
              <motion.div
                key={rank.name}
                className={`bg-gradient-to-br ${rank.gradient} p-8 rounded-xl text-center relative overflow-hidden group`}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                {rank.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-yellow-400 text-white text-sm font-bold py-1">
                    MOST POPULAR
                  </div>
                )}
                <motion.div
                  className={`${rank.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-minecraft text-xl mb-4 text-gray-800 dark:text-gray-200">
                  {rank.name}
                </h3>
                <p className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  {rank.price}
                </p>
                <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-2 mb-6">
                  {rank.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * featureIndex }}
                    >
                      • {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className={`w-full ${rank.buttonColor} text-white py-3 font-semibold`}>
                    Purchase
                  </Button>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 h-auto text-lg font-semibold hover:shadow-xl">
              <ExternalLink className="w-5 h-5 mr-2" />
              Visit Full Store
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
