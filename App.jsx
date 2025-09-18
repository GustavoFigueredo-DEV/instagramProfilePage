import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';


export default function App() {
  const data = [
    { id: "1", url:"https://media.istockphoto.com/id/1224500457/pt/foto/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=lScWX2vwEasV_TD4_mVzG-9wgpQJbK5JY9Df-hd1T1k=", type: "image" },
    { id: "2", url:"https://media.istockphoto.com/id/1401307605/pt/foto/rear-of-female-web-expert-typing-on-computer-looking-at-monitors-while-sitting-indoors.jpg?s=612x612&w=0&k=20&c=u8uN88qo1V9hriSHDU4Ud-iDCXmSd_YM1lfQ4m9xOSY=", type: "image" },
    { id: "3", url:"https://media.istockphoto.com/id/1451456915/photo/female-freelance-developer-coding-and-programming-coding-on-two-with-screens-with-code.jpg?s=612x612&w=0&k=20&c=BFFIc-xOwzeRyR8ui9VkFKEqqqQFBbISJzr-ADN6hS8=", type: "image" },
    { id: "4", url:"https://picsum.photos/300/300?random=1", type: "image" },
    { id: "5", url:"https://picsum.photos/300/300?random=2", type: "image" },
    { id: "6", url:"https://picsum.photos/300/300?random=3", type: "image" },
    { id: "7", url:"https://picsum.photos/300/300?random=4", type: "image" },
    { id: "8", url:"https://picsum.photos/300/300?random=5", type: "image" },
    { id: "9", url:"https://picsum.photos/300/300?random=6", type: "image" },
    { id: "10", url:"https://picsum.photos/300/300?random=7", type: "image" },
    { id: "11", url:"https://picsum.photos/300/300?random=8", type: "image" },
    { id: "12", url:"https://picsum.photos/300/300?random=9", type: "image" },
    { id: "13", url:"https://picsum.photos/300/300?random10", type: "image" },
    { id: "14", url:"https://picsum.photos/300/300?random=11", type: "image" },
    { id: "15", url:"https://picsum.photos/300/300?random=12", type: "image" },
    { id: "16", url:"https://picsum.photos/300/300?random=13", type: "image" },
    { id: "17", url:"https://picsum.photos/300/300?random=14", type: "image" },
    { id: "18", url:"https://picsum.photos/300/300?random=15", type: "image" },
  ]

  const renderItem = ({ item }) => (
    <View style={styles.tela}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 20,
  },
});
