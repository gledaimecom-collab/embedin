import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Platform, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: 'rgba(18, 18, 18, 0.85)',
            borderTopColor: 'rgba(255, 255, 255, 0.1)',
            borderTopWidth: StyleSheet.hairlineWidth,
          },
          android: {
            backgroundColor: '#0a0a0a',
            borderTopColor: 'rgba(255, 255, 255, 0.1)',
            borderTopWidth: StyleSheet.hairlineWidth,
            elevation: 0,
          },
          default: {
            backgroundColor: 'rgba(10, 10, 10, 0.95)',
            borderTopColor: 'rgba(255, 255, 255, 0.1)',
            borderTopWidth: StyleSheet.hairlineWidth,
          },
        }),
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          letterSpacing: 0.1,
        },
        tabBarIconStyle: {
          marginBottom: 2,
        },
        tabBarAllowFontScaling: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
