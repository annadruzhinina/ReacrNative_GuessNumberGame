import React from 'react';
import {TextInput, View, Text} from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

export default function StartScreen() {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}
