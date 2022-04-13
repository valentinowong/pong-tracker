import React from 'react';
import { View, Text } from 'react-native';
import { FormControl, Select, Stack, ScrollView, Center, CheckIcon, WarningOutlineIcon, Box, Input, NativeBaseProvider } from "native-base";

export default function NewGameScreen() {
    
    const SelectPlayer = () => {
        return <Center>
            <FormControl w="3/4" maxW="300" isRequired isInvalid>
              <FormControl.Label>Choose player</FormControl.Label>
              <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />
            }} mt="1">
                <Select.Item label="Create New Player" value="CreateNewPlayer" />
                <Select.Item label="Valentino Wong" value="ValentinoWong" />
                <Select.Item label="Christopher Wu" value="ChristopherWu" />
                <Select.Item label="Ingrid Liu" value="IngridLiu" />
                <Select.Item label="Matthew Ragonese" value="MatthewRagonese" />
                <Select.Item label="Edward Nepomuceno" value="EdwardNepomuceno" />
              </Select>
              <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                Please make a selection!
              </FormControl.ErrorMessage>
            </FormControl>
          </Center>;
      };

      const NewPlayer = () => {
        return  <Center>
                <FormControl mb="5" w="3/4" maxW="300">
                    <FormControl.Label>Project Title</FormControl.Label>
                    <Input />
                    <FormControl.HelperText>
                        Give your project a title.
                    </FormControl.HelperText>
                </FormControl>
            </Center>
      };

    return (
        <NativeBaseProvider>
            <SelectPlayer />
            <NewPlayer />
        </NativeBaseProvider>
    );
};