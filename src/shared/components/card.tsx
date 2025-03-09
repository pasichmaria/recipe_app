import { Box, Card as CardLib, Text } from "@radix-ui/themes";
import type { ReactNode } from "react";

interface CardProps {
  title: string;
  subTitle: string;
  image: string;
  description: string;
  footer?: ReactNode;
  timeClamp?: number;
}

export const Card = ({ title, image, description, footer, subTitle, timeClamp = 5 }: CardProps) => {
  return (
    <CardLib
      size="3"
      className="p-4 shadow-lg border border-gray-200 rounded-xl transition-all hover:shadow-xl hover:-translate-y-1 bg-white"
    >
      <Box className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg text-center mb-3">
        <Text as="p" className="mt-3 text-md font-semibold text-white">
          {title}
        </Text>
      </Box>
      <Box className="overflow-hidden rounded-md mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-md transition-transform duration-300 hover:scale-105"
        />
      </Box>
      <Text as="p" className="mt-3 text-md font-semibold text-gray-600">
        {subTitle}
      </Text>
      <Text as="p" className={`text-gray-600 mt-6 text-sm line-clamp-${timeClamp}`}>
        {description}
      </Text>
      {footer && <Box className="mt-4">{footer}</Box>}
    </CardLib>
  );
};
