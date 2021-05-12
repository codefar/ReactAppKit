import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  SectionListRenderItemInfo,
  TouchableOpacity,
} from 'react-native';
import NavigationService from "../NavigationService";

interface ItemGroup {
  title: string;
  horizontal?: boolean;
  data: Item[];
}

interface Item {
  key: string;
  text: string;
  uri: string;
}

const ListItem = (data: {item: Item}) => {
  let {item} = data;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.item}
      onPress={() => {
        NavigationService.navigate(data.item.text);
      }}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <SectionList<Item, ItemGroup>
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({section}) => (
            <Text style={styles.sectionHeader}>{section.title}</Text>
          )}
          renderItem={(info: SectionListRenderItemInfo<Item, ItemGroup>) => {
            return <ListItem item={info.item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const SECTIONS = [
  {
    title: 'Made for you',
    data: [
      {
        key: '1',
        text: 'BigHead',
        uri: 'https://picsum.photos/id/1011/200',
      },
      {
        key: '2',
        text: 'IntroData',
        uri: 'https://picsum.photos/id/1012/200',
      },

      {
        key: '3',
        text: 'ButtonNavigation',
        uri: 'https://picsum.photos/id/1013/200',
      },
      {
        key: '4',
        text: 'WormDotExample',
        uri: 'https://picsum.photos/id/1015/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1016/200',
      },
    ],
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#333',
    backgroundColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  item: {
    margin: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  itemPhoto: {
    width: 60,
    height: 60,
  },
  itemText: {
    flex: 1,
    fontSize: 32,
    paddingVertical: 5,
    marginLeft: 10,
    color: '#333',
  },
});
