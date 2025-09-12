import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Strong from './components/index'
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.followersContainer}>
        <View style={styles.imageSamples}>
          <Image style={styles.person} source={{ uri: "https://jornalistainclusivo.com/wp-content/uploads/2022/10/Gio-pessoa-com-Sindrome-de-Down-Foto-Uinstock-Iza-Guedes-copiar.jpg" }} />
          <Image style={styles.person} source={{ uri: "https://static.vecteezy.com/ti/fotos-gratis/t2/6913998-jovem-estudante-com-laptop-sorrindo-usando-fone-de-ouvido-durante-video-chamada-homem-com-laptop-imagens-foto.jpg" }} />
          <Image style={styles.person} source={{ uri: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PostImagem/41559/banco-de-imagens-a-importacircncia-de-desenvolver-um-para-sua-empresa_o1fa1bg74m1cgi1fmpinmp7kq39e.jpg" }} />
        </View>
        <View style={styles.knowPeople}>
          <Text style={styles.knowPeopleText}>Seguido por <Strong>joaocorreia09, vanda.carvalho</Strong> e <Strong>16 outros amigos</Strong></Text>
        </View>
      </View>

      <View style={styles.profileActionButtonsContainer}>
        <View style={styles.textActionButtons}>
          <TouchableOpacity style={[styles.actionButton, styles.follow]}><Text style={styles.followText}>Seguir</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton]}><Text>Mensagem</Text></TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton]}><Text>Contactar</Text></TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addFriend}><Ionicons name="person-add-outline" size={16} color="black" /></TouchableOpacity>
      </View>

      <View style={styles.hightlightsContainer}>
        <View style={styles.highlight}>
          <View style={styles.iconContainer}>
            <Entypo name="light-bulb" size={36} color="#d4d804ff" />
          </View>
          <Text style={styles.highlightName}>Design Tips</Text>
        </View>
        <View style={styles.highlight}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="work" size={36} color="#d4d804ff" />
          </View>
          <Text style={styles.highlightName}>Portfolio</Text>
        </View>
        <View style={styles.highlight}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="source" size={36} color="#d4d804ff" />
          </View>
          <Text style={styles.highlightName}>Resources</Text>
        </View>
        <View style={styles.highlight}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="cursor-default-click" size={36} color="#d4d804ff" />
          </View>
          <Text style={styles.highlightName}>UI Basics</Text>
        </View>
        <View style={styles.highlight}>
          <View style={styles.iconContainer}>
            <AntDesign name="pluscircleo" size={36} color="#d4d804ff" />
          </View>
          <Text style={styles.highlightName}>Outro</Text>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 20
  },
  followersContainer: {
    width: "100%",
    gap: 5,
    flexDirection: "row",
    paddingHorizontal: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  imageSamples: {
    flexDirection: "row"
  },
  person: {
    width: 35,
    height: 35,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 40,
    marginLeft: -10
  },
  knowPeopleText: {
    fontSize: 14
  },
  //BTN ACTIONS
  profileActionButtonsContainer: {
    flexDirection: "row",
    paddingHorizontal: 5,
    alignItems: "center",
    gap: 15,
    marginTop: 20,
  },
  textActionButtons: {
    flex: 1,
    flexDirection: "row",
    gap: 5
  },
  actionButton: {
    width: "33.3%",
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    padding: 5,
    borderRadius: 8,
    height: 30
  },
  follow: {
    backgroundColor: "#0095F6",
  },
  followText: {
    color: "#fff"
  },
  addFriend: {
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    backgroundColor: "#EFEFEF",
    width: 30,
    borderRadius: 5
  },
  //HILIGHTS
  hightlightsContainer: {
    flexDirection: "row",
    marginTop: 25,
    gap: 16,
    paddingHorizontal: 5,
    justifyContent: "center"
  },
  highlight: {
    gap: 4
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    width: 60,
    height: 60,
    borderRadius: 100,
    borderColor: "#cacacaff",
    borderWidth: 4
  },
  highlightName: {
    textAlign: "center"
  }
});
