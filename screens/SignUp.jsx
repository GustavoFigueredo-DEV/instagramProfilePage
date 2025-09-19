import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native"
import Entypo from '@expo/vector-icons/Entypo';
import LogoInsta from '../assets/instaLogo.png'

export default function SignUp(){
    return(
        <View style={styles.container}>
            <View style={styles.imagecontainer}>
            <Image source={LogoInsta} style={{ width: 240, height: 80 }}/>
            </View>
            <View style={styles.logoSubtext}>
                <Text style={styles.subtexto}>Cadastro-se para ver fotos e vídeos dos seus amigos.</Text>
            </View>
            <View style={styles.facebookBtnContainer}>
                <TouchableOpacity style={styles.facebookBtn}>
                    <Entypo name="facebook" size={24} color="#fff" />
                    <Text style={styles.facebookBtnTexto}>Entrar com o Facebook</Text>
                </TouchableOpacity>
            </View>

            {/* OU */}
            <View style={styles.ouContainer}>
                <View style={styles.borderView}></View>
                <Text>OU</Text>
                <View style={styles.borderView}></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  subtexto: {
    fontSize: 24,
    fontWeight: 600,
    textAlign: "center",
    color: "#858585ff"
  },
  facebookBtnContainer: {
    width: "90%",
    marginTop: 16
  },
  facebookBtn: {
    backgroundColor: "#0095F6",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    padding: 8,
    borderRadius: 5,
  },
  facebookBtnTexto: {
    color: "#fff",
    fontSize: 20
  },
  ouContainer:{
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  borderView: {
    borderWidth: 1,
    flex: 1
  }
})