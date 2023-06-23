import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  post: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: 'white'
  },
  //header
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10
  },
  name: {
    fontWeight: '500'
  },
  subtitle: {
    color: 'gray'
  },
  icon: {
    marginLeft: 'auto'
  },
  //Body
  description: {
    paddingHorizontal: 10,
    lineHeight: 20,
    letterSpacing: 0.3
  },
  image: {
    width: '100%',
    // height: 80, // Change from '10%' to '100%'
    height: 400,
    marginTop: 10
  },
  footer: {
    paddingHorizontal: 10
  },
  statsRow: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray'
  },
  likeIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5
  },
  likedBy: {
    color: 'gray'
  },
  shares: {
    marginLeft: 'auto',
    color: 'gray'
  },

  //Buttons row
  buttonsRow: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconButtonText: {
    marginLeft: 5,
    color: 'gray',
    fontWeight: '500'
  }
})
