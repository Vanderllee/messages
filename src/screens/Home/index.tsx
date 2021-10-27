import React from "react";
import { View, Text } from 'react-native';
import { Header } from "../../components/Header";
import { Messages } from "../../components/Messages";
import { SigninBox } from "../../components/SigninBox";

import { styles } from './styles';


export function Home() {

    return (
        <View style={styles.container}>
           <Header />
           <Messages />
           <SigninBox />
        </View>
    )
}