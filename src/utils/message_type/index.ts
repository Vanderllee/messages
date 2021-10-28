import React from 'react';

import { ColorValue, TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



type User = {
    name: string;
    avatar_url: string;
}

type MessageProps = {
    id: string;
    text: string;
    user: User;
}

export type Props ={
    data: MessageProps;
   
}

export type ButtonProps = TouchableOpacityProps & {
    title: string;
    color: ColorValue;
    backgroundColor: ColorValue;
    icon?: React.ComponentProps<typeof AntDesign>['name']; 
    isLoading?: boolean;
}