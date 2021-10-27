import React from 'react';

import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

import { ButtonProps } from '../../utils/message_type';

export function Button({ title, color, backgroundColor, ...rest }: ButtonProps){
  return (
    <TouchableOpacity
        style={[ styles.button, { backgroundColor } ]}
        { ...rest }
    >
        
        <Text
            style={[styles.title, { color } ]}
        >
            { title }

        </Text>

    </TouchableOpacity>
  );
}