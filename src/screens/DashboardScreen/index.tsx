import React, { FC } from 'react'
import { View } from 'react-native'

import styles from './styles'
import { Button } from 'react-native-paper'

const DashboardScreen: FC = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button mode="contained" onPress={() => navigation.navigate('Categories')}>
                ADD A CATEGORY
            </Button>
        </View>
    )
}

export default DashboardScreen