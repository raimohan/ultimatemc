import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export function JoinSection() {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const serverIP = "play.ultimatemc.fun";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(serverIP);
      setCopied(true);
      toast({
        title: "Server IP Copied!",
        description: `${serverIP} copied to clipboard`,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Please copy manually: " + serverIP,
        variant: "destructive",
      });
    }
  };

  const steps = [
    {
      number: "1",
      title: "Download Minecraft",
      description: "Make sure you have Minecraft Java Edition installed on your computer.",
      color: "blue",
    },
    {
      number: "2",
      title: "Add Server IP",
      description: "In Minecraft, go to Multiplayer and add our server IP:",
      color: "green",
    },
    {
      number: "3",
      title: "Join & Play",
      description: "Connect to the server and start your ultimate Minecraft adventure!",
      color: "purple",
    },
  ];

  return (
    <section id="join" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-minecraft text-3xl lg:text-4xl mb-6 text-gray-800 dark:text-gray-200">
            How to Join
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Getting started on UltimateMC is simple. Follow these three easy steps and you'll be playing in minutes!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="text-center group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`bg-${step.color}-100 dark:bg-${step.color}-900 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <span className={`font-minecraft text-2xl text-${step.color}-600 dark:text-${step.color}-400`}>
                  {step.number}
                </span>
              </motion.div>
              <h3 className="font-minecraft text-xl mb-4 text-gray-800 dark:text-gray-200">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {step.description}
              </p>
              {step.number === "2" && (
                <motion.div
                  className="bg-gray-200 dark:bg-gray-700 p-3 rounded-lg inline-block mt-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <code className="font-mono text-sm text-gray-800 dark:text-gray-200">
                    {serverIP}
                  </code>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={copyToClipboard}
              className={`px-8 py-4 h-auto text-lg font-semibold transition-all duration-300 hover:shadow-xl ${
                copied
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5 mr-2" />
                  Copy Server IP
                </>
              )}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
