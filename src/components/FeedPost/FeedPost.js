import React, { useState } from 'react'
import { Text, View, Image, Pressable } from 'react-native'
import {
  Entypo,
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons
} from '@expo/vector-icons'
import LikeImage from '../../../assets/images/like.png'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

const FeedPost = ({ post }) => {
  const [isLiked, setIsLiked] = useState(false)

  const navigation = useNavigation()
  return (
    <Pressable style={styles.post}>
      {/* Header */}
      <Pressable
        style={styles.header}
        onPress={() => navigation.navigate('Profile', { id: post.User.id })}
      >
        <Image source={{ uri: post.User.image }} style={styles.profileImage} />
        <View>
          <Text style={styles.name}>{post.User.name}</Text>
          <Text style={styles.subtitle}>{post.createdAt}</Text>
        </View>
        <Entypo
          name='dots-three-horizontal'
          size={18}
          color='gray'
          style={styles.icon}
        />
      </Pressable>

      {/* Body */}
      {post.description && (
        <Text style={styles.description}>{post.description}</Text>
      )}

      {post.image && (
        <Image source={{ uri: post.image }} style={styles.image} />
      )}

      {/* Footer */}
      <View style={styles.footer}>
        {/* Stats row */}
        <View style={styles.statsRow}>
          <Image source={LikeImage} style={styles.likeIcon} />
          <Text style={styles.likedBy}>
            Elon Musk and {post.numberOfLikes} others
          </Text>
          <Text style={styles.shares}>{post.numberOfShares} shares</Text>
        </View>
        {/* Buttons Row  */}
        <View style={styles.buttonsRow}>
          <Pressable
            onPress={() => setIsLiked(!isLiked)}
            style={styles.iconButton}
          >
            <AntDesign
              name='like2'
              size={18}
              color={isLiked ? 'royalblue' : 'gray'}
            />
            <Text
              style={[
                styles.iconButtonText,
                { color: isLiked ? 'royalblue' : 'gray' }
              ]}
            >
              Like
            </Text>
          </Pressable>

          <View style={styles.iconButton}>
            <FontAwesome5 name='comment-alt' size={18} color='gray' />
            <Text style={styles.iconButtonText}>Comment</Text>
          </View>

          <View style={styles.iconButton}>
            <MaterialCommunityIcons
              name='share-outline'
              size={18}
              color='gray'
            />
            <Text style={styles.iconButtonText}>Share</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}

export default FeedPost
