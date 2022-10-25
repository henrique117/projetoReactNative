import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { Pedometer } from 'expo-sensors'
import styles from './styles'
import { Subscription } from 'expo-media-library'

export default function Pedometro() {
    const [currentStepCount, setCurrentStepCount] = useState(0)
    const [isPedometerAvaible, setIsPedometerAvaible] = useState('checking')
    const [pastStepCount, setPastStepCount] = useState(0)
    let [subscription, setSubscription] = useState<Subscription | null>(null)

    useEffect(() => {
        async function permission() {
            console.log(await Pedometer.requestPermissionsAsync())
            console.log(await Pedometer.getPermissionsAsync())
        }
        permission()
        _subscribe()
        return () => _unsubscribe()
    }, [])

    const _unsubscribe = () => {
        subscription && subscription.remove()
        setSubscription(null)
    }

    const _subscribe = () => {
        subscription = Pedometer.watchStepCount(result => {
            setCurrentStepCount(result.steps)
        })

        Pedometer.isAvailableAsync().then(
            result => {
                setIsPedometerAvaible(String(result))
            },
            error => {
                setIsPedometerAvaible('Could not get isPedmoeterAvaible: ' + error)
            }
        )

        const end = new Date()
        const start = new Date()
        start.setDate(end.getDate() - 1)

        Pedometer.getStepCountAsync(start, end).then(
            result => {
                setIsPedometerAvaible(String(result))
            },
            error => {
                setIsPedometerAvaible('Could not get stepCount: ' + error)
            }
        )
    }

    return (
        <View style={styles.container}>
            <Text>Pedometer.isAvailable(): {isPedometerAvaible}</Text>
            <Text>Steps taken in the last 24 hours: {pastStepCount}</Text>
            <Text>Walk! And watch this go up: {currentStepCount}</Text>
        </View>
    )
}