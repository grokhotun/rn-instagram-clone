import React from 'react'
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native'

import Header from 'components/Header'
import {Avatar} from 'src/components/Avatar'
import PostPreview from 'src/components/PostPreview'

import Wrapper from 'src/ui/Wrapper'
import Touch from 'src/ui/Touch'
import {Btn} from 'src/ui/Btn'

const numColumns = 3
const WIDTH = Dimensions.get('window').width

function ProfileScreen() {
  const data = [
    {key: 1},
    {key: 2},
    {key: 3},
    {key: 4},
    {key: 5},
    {key: 6},
    {key: 7},
    {key: 8},
    {key: 9},
    {key: 10},
    {key: 11},
  ]

  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns)
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns)
    while (numberOfElementsLastRow !== numColumns) {
      data.push({key: `blank-${numberOfElementsLastRow}`, empty: true})
      numberOfElementsLastRow = numberOfElementsLastRow + 1
    }
    return data
  }

  return (
    <Wrapper>
      <Header style={styles.header}>
        <Text style={styles.headerLogin}>christianbale</Text>
      </Header>
      <View style={styles.body}>
        <View style={{...styles.row, ...styles.bodyProfile}}>
          <Avatar style={styles.photo}/>
          <View style={styles.info}>
            <View style={styles.row}>
              <Touch style={styles.col}>
                <Text style={styles.infoValue}>5</Text>
                <Text style={styles.infoText} numberOfLines={1}>Публикаций</Text>
              </Touch>
              <Touch style={styles.col}>
                <Text style={styles.infoValue}>1</Text>
                <Text style={styles.infoText} numberOfLines={1}>Подписчиков</Text>
              </Touch>
              <Touch style={styles.col}>
                <Text style={styles.infoValue}>10</Text>
                <Text style={styles.infoText} numberOfLines={1}>Подписок</Text>
              </Touch>
            </View>
          </View>
        </View>
        <View style={{...styles.row, ...styles.bodyActions}}>
          <Btn>Редактировать профиль</Btn>
        </View>
      </View>
      <View style={styles.footer}>
        <FlatList
          data={formatData(data, numColumns)}
          renderItem={({item, index}) => {
            if (item.empty) {
              return <View style={{...styles.card, ...styles.blankCard}}></View>
            } else {
              return <PostPreview img={`https://picsum.photos/300?random=${index}`} style={styles.card}/>
            }
          }}
          numColumns={numColumns}
          keyExtractor={(item, idx) => idx.toString()}
          style={styles.footerPosts}
        />
      </View>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  header: {
  },
  headerLogin: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  body: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10
  },
  bodyProfile: {
    marginBottom: 10
  },
  bodyActions: {},
  photo: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  info: {
    flex: 1
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  infoText: {

  },
  footer: {
    flex: 1,
  },
  footerPosts: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  col: {
    flex: 1,
    alignItems: 'center',
    marginRight: 2,
    marginLeft: 2
  },
  card: {
    flex: 1,
    height: WIDTH / numColumns,
  },
  blankCard: {
    backgroundColor: 'transparent'
  }
})

export default ProfileScreen
