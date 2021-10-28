import React from 'react';

import {
  TextInput,
  View
} from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm(){
  return (
    <View style={styles.container}>
        
        <TextInput style={styles.input}
          keyboardAppearance="dark"
          placeholder="Escreva aqui a sua mensagem..."
          placeholderTextColor={ COLORS.GRAY_PRIMARY }
          multiline
          maxLength={ 140 } 
        />

        <Button 
          title="ENVIAR MENSAGEM"
          backgroundColor={ COLORS.PINK }
          color={ COLORS.WHITE }
        />

    </View>
  );
} 