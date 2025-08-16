import { useState } from "react";
import { Download, MessageCircle, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export function HeroSection() {
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

  // Cloud animation variants
  const cloudVariants = {
    animate: {
      x: ["calc(-100px)", "calc(100vw + 100px)"],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section className="relative h-screen hero-gradient overflow-hidden">
      {/* Animated Background Clouds */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute cloud opacity-60"
            style={{
              top: `${20 + (i * 8)}%`,
              width: `${60 + (i * 10)}px`,
              height: `${30 + (i * 5)}px`,
            }}
            variants={cloudVariants}
            animate="animate"
            transition={{
              ...cloudVariants.animate.transition,
              delay: i * -3.33,
            }}
          />
        ))}
      </div>

      {/* Left Character */}
      <motion.div
        className="absolute bottom-0 left-8 lg:left-16 z-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.img
          src="https://i.postimg.cc/nhhY7w9K/Picsart-25-08-16-17-11-37-685.png"
          alt="Minecraft Character Left"
          className="h-70 lg:h-90 w-auto"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Right Character */}
      <motion.div
        className="absolute bottom-0 right-8 lg:right-16 z-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <motion.img
          src="https://i.postimg.cc/PJMYvmtF/Picsart-25-08-16-17-10-43-884.png"
          alt="Minecraft Character Right"
          className="h-70 lg:h-90 w-auto"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>

      {/* Hero Content */}
      <div className="flex items-center justify-center h-full px-6 relative z-20">
        <div className="text-center max-w-4xl mx-auto pt-20">
          <motion.h1
            className="font-minecraft text-white text-4xl md:text-6xl lg:text-7xl mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Welcome To UltimateMC
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-white text-lg md:text-xl mb-8 font-medium max-w-2xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            The ultimate Minecraft survival & community experience.
            <br />
            Flex on the noobs like never before.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={copyToClipboard}
                className={`bg-blue-400 hover:bg-blue-500 text-white px-8 py-4 h-auto text-lg font-semibold transition-all duration-300 hover:shadow-xl ${
                  copied ? "bg-green-500 hover:bg-green-600" : ""
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-2" />
                    Join Now
                  </>
                )}
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 h-auto text-lg font-semibold transition-all duration-300 hover:shadow-xl">
                <a href="https://discord.gg/ultimatemc" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Discord
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
