import React, { useState } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type FeedScreenProps = NativeStackScreenProps<{ Profile: undefined }>;

type Post = {
  id: string;
  content: string;
  image: any;
  liked: boolean;
};

export default function FeedScreen({ navigation }: FeedScreenProps) {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      content: 'Back to School',
      image: require('../assets/post1.png'),
      liked: false,
    },
    {
      id: '2',
      content: 'Brigada Eskwela',
      image: require('../assets/post2.png'),
      liked: false,
    },
    {
        id: '3',
        content: 'The Scream!',
        image: require('../assets/post3.png'),
        liked: false,
      },
      {
        id: '4',
        content: 'MEOW!',
        image: require('../assets/post4.jpg'),
        liked: false,
      },
      {
        id: '5',
        content: '^-^',
        image: require('../assets/post5.jpg'),
        liked: false,
      },
      {
        id: '6',
        content: '<><><><><>!',
        image: require('../assets/post6.jpg'),
        liked: false,
      },
      {
        id: '7',
        content: '---------',
        image: require('../assets/post7.jpg'),
        liked: false,
      },
  ]);

  const toggleLike = (id: string) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, liked: !post.liked } : post
      )
    );
  };

  return (
    <LinearGradient
      colors={['#a055dd', '#ee7a56']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradient}
    >
      <View style={styles.header}>
        <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('Profile')}>
          <FontAwesome name="user" size={20} color="#fff" />
          <Text style={styles.profileText}>Profile</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        contentContainerStyle={styles.feed}
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Image source={item.image} style={styles.postImage} />
            <Text style={styles.postText}>{item.content}</Text>
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => toggleLike(item.id)}>
                <FontAwesome
                  name={item.liked ? 'heart' : 'heart-o'}
                  size={24}
                  color={item.liked ? 'red' : 'black'}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="comment-o" size={24} color="black" style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  header: {
    padding: 10,
    alignItems: 'flex-end',
  },
  profileButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00000055',
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginTop: 30,
  },
  profileText: {
    color: '#fff',
    marginLeft: 6,
    fontWeight: 'bold',
  },
  feed: {
    padding: 10,
  },
  post: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  postImage: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: 10,
  },
  postText: {
    fontSize: 16,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  icon: {
    marginRight: 15,
  },
});
