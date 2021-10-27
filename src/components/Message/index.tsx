import React from 'react';

import { View, Text } from 'react-native';
import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';

import { Props } from '../../utils/message_type';

import { MotiView } from 'moti';

export function Message({ data }: Props){
  return (
    <MotiView
        from={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0}}
        transition={{ type: 'timing', duration: 2000 }}
      style={styles.container}
    >

        <Text style={styles.message}>
          { data.text  }
        </Text>


        <View style={styles.footer}>

            <UserPhoto 
                imageUri={data.user.avatar_url}
                sizes="SMALL"
            />

            <Text style={styles.userName}>
                { data.user.name }
            </Text>

        </View>
    </MotiView>
  );
}