import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Box, Image, Text } from "./Restyle";

const DonatePage = () => {
  return (
    <Box height="100%" backgroundColor="white">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box
          flexDirection="row"
          alignItems="center"
          px="md"
          py="sm"
          bg="white"
          borderBottomWidth={0.5}
          borderColor="greyBorder"
        >
          <Box flex={1} alignItems="center">
            <Text variant="header" color="primary">
              Donate Now
            </Text>
          </Box>
          <Box width={24} />
        </Box>
        <Box px="md" py="lg">
          <Box alignItems="center" mb="lg">
            <Image
              source={require("../assets/images/adaptive-icon.png")}
              width={80}
              height={80}
              borderRadius={20}
              resizeMode="contain"
            />
            <Text
              variant="header"
              color="primary"
              mt="sm"
              textAlign="center"
              fontWeight="700"
            >
              iHealth and Wellness Foundation, Inc.
            </Text>
          </Box>

          <Box alignItems="center" mb="lg">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
              }}
              width="100%"
              height={160}
              borderRadius={16}
              resizeMode="cover"
            />
          </Box>

          <Box mb="lg">
            <Text variant="medium14" color="black" textAlign="center">
              iHealthWellness connects patients with complex diseases to
              high-quality medical and wellness providers and resources through
              an integrated platform, empowering patients to take charge of
              their health while fostering collaboration among all stakeholders
              to improve healthcare outcomes.
            </Text>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default DonatePage;
