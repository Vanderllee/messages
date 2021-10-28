import React from 'react';

import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

import { ButtonProps } from '../../utils/message_type';

export function Button({ 
    title, 
    color, 
    backgroundColor, 
    icon, 
    isLoading=false,
    ...rest }: 
  ButtonProps) {
  return (
    <TouchableOpacity
        style={[ styles.button, { backgroundColor } ]}
        { ...rest }
        activeOpacity={0.8}
        disabled={ isLoading }

    >
      { isLoading 
      ? (<ActivityIndicator color={ color }/>)
      :(<> 
          <AntDesign 
            name={ icon } 
            size={24}
            style={styles.icon}
            />

          <Text
              style={[styles.title, { color } ]}
          >
              { title }

          </Text>
        </>
      )
      }
    </TouchableOpacity>
  );
}