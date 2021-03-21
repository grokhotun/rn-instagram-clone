import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, FlatList} from 'react-native'
import PropTypes from 'prop-types'

import {getFeed} from 'src/redux/actions/feed'

import Wrapper from 'src/ui/Wrapper'
import Header from 'components/Header'
import {Post} from 'components/Post'

function FeedScreen({navigation, fetchFeed, feed}) {
  useEffect(() => {
    fetchFeed()
  }, [])

  return (
    <Wrapper>
      <Header style={styles.header}/>
      <FlatList
        data={feed}
        renderItem={({item}) => <Post post={item}/>}
        style={styles.feed}
      />
    </Wrapper>
  )
}

FeedScreen.propTypes = {
  navigation: PropTypes.object,
  fetchFeed: PropTypes.func,
  feed: PropTypes.array
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '10%'
  },
  feed: {
    height: '90%',
    width: '100%'
  }
})

const mapStateToProps = ({feedState}) => ({
  feed: feedState.feed
})
const mapDispatchToProps = (dispatch) => ({
  fetchFeed: () => dispatch(getFeed())
})

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen)
