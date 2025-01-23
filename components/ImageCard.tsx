import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';

interface ImageCardProps {
    imageUrl: string;
    title: string;
    onPress?: () => void;
}

const ImageCard = ({ imageUrl, title, onPress }: ImageCardProps) => {
  return (
    <Pressable onPress={onPress} style={styles.card}>
    <View>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 10,
    overflow: 'hidden',
  },
  image: {
    // width: '100%',
    height: 250,
    flex: 1
  },
  textContainer: {
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.70)',
    width: '100%',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
});

export default ImageCard;