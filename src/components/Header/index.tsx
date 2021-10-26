import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import LogoSvg  from '../../assets/logo.svg';
import { styles } from './styles';
import { UserPhoto } from '../UserPhoto';

export function Header(){
  return (
    <View style={ styles.container }>

      <LogoSvg />

      <UserPhoto />

      <TouchableOpacity>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

      

    </View>
  );
}