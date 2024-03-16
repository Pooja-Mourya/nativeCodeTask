import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const handleListData = async () => {
    setLoader(true);
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        // console.log("response data", response);
        setData(response?.data);
        setLoader(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoader(true);
      });
  };

  const handleAddPost = () => {
    navigation.navigate('post');
  };
  useEffect(() => {
    handleListData();
  }, []);
  if (loader) return <Text>Loading...</Text>;
  return (
    <>
      <Button onPress={handleAddPost} title="Add Post" color="#841584" />

      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <View key={index} style={styles.container}>
              <View style={[styles.contentStyle, {}]}>
                <Text style={styles.boldText}>title:</Text>
                <Text style={{width: '70%'}}>{item?.title}</Text>
              </View>
              <View style={[styles.contentStyle, {}]}>
                <Text style={styles.boldText}>Description:</Text>
                <Text style={{width: '70%'}}>{item?.body}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    width: '90%',
    margin: 20,
    backgroundColor: 'pink',
  },
  contentStyle: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
  },
  contentText: {
    fontSize: 25,
    color: 'black',
  },
  topHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 10,
  },
  boldText: {fontSize: 20, fontWeight: 'bold'},
});
