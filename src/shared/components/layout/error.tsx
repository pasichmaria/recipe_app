"use client";

import { Button, Typography } from "@/shared";
import { Container } from "@radix-ui/themes";
import { motion } from "framer-motion";

export const Error = ({ title, description }: { title: string; description: string }) => {
  return (
    <Container size="1">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="max-w-md p-6 rounded-xl shadow-lg text-white text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <Typography variant="h4" color="warning">
              {title}
            </Typography>
            <Typography variant="body1" className="text-gray-300 mt-2">
              Oops! Something went wrong.
            </Typography>
            <Typography variant="body2" className="text-gray-400 mt-1">
              {description || "Please try again later or contact support."}
            </Typography>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="secondary" fullWidth onClick={() => window.location.reload()}>
              Reload
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="transparent" fullWidth onClick={() => window.history.back()}>
              Go Back
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
};
