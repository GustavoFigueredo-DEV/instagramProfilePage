import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, Alert, TextInput, Modal } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';
import LogoInsta from './assets/instaLogo.png'
import { useState } from 'react';

const USUARIO_DEMO = "aluno@senai.br";
const SENHA_DEMO = "123456";

export default function App() {

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erroVisivel, setErroVisivel] = useState(false);
  const [mensagemErro, setMensagemErro] = useState("");


  const valido = usuario.trim().length && senha.length >= 6;

  const tentarLogin = () => {
    if (!valido) {
      setMensagemErro("Preencha usuário e senha")
      setErroVisivel(true);
      return;
    }
    if (usuario.trim() === USUARIO_DEMO && senha === SENHA_DEMO) {
      Alert("Usuario e senha corretos")
    } else {
      setMensagemErro("Usuário ou senha inválidos");
      setErroVisivel(true)
    }
  }

  return (
    <View style={styles.container}>~
      <Image source={LogoInsta} style={{ width: 240, height: 80 }} />

      <View style={styles.formulario}>
        <TextInput style={styles.campo}
          placeholder='Telefone, nome de usuario e email'
          autoCapitalize='none'
          autoCorrect={false}
          returnKeyType='next'
          value={usuario}
          onChangeText={setUsuario}
        />
        <View style={styles.linhaSenha}>
          <TextInput style={styles.campo}
            placeholder='Senha'
            autoCapitalize='none'
            autoCorrect={false}
            textContentType='password'
            returnKeyType='next'
            secureTextEntry={mostrarSenha}
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)} style={styles.botaoMostrar}>
            <Feather name={mostrarSenha ? "eye-off" : "eye"} size={24} color="black" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          disabled={!valido}
          onPress={tentarLogin}
          style={[styles.botaoEntrar, !valido && styles.botaoEntrarDesabilitado]}>
          <Text style={styles.textoEntrar}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.criarContaText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
      <Modal transparent visible={erroVisivel} animationType='fade' onRequestClose={() => setErroVisivel(false)}>
        <View style={styles.fundoModal}>
          <View style={styles.cartaoModal}>
            <MaterialIcons name="error" size={24} color="black" />
            <Text style={styles.tituloModal}>Ops!</Text>
            <Text style={styles.mensagemModal}>{mensagemErro}</Text>
            <TouchableOpacity style={styles.botaoModal} onPress={() => setErroVisivel(false)}>
              <Text>Tentar Novamente!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

// Paleta
const AZUL = "#0095F6";
const BORDA = "#dbdbdb";
const TEXTO = "#262626";
const SUAVE = "#8e8e8e";
const FUNDO = "#fff";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: FUNDO,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    fontSize: 42,
    fontWeight: "600",
    color: TEXTO,
    marginBottom: 12,
  },

  formulario: {
    width: "100%",
    maxWidth: 380,
  },

  campo: {
    height: 44,
    borderWidth: 1,
    borderColor: BORDA,
    borderRadius: 6,
    paddingHorizontal: 12,
    backgroundColor: "#fafafa",
    color: TEXTO,
    marginBottom: 10,
  },

  linhaSenha: {
    position: "relative",
    justifyContent: "center",
    marginBottom: 8,
  },
  campoSenha: {
    paddingRight: 44,
    marginBottom: 6,
  },
  botaoMostrar: {
    position: "absolute",
    right: 10,
    height: 44,
    width: 32,
    alignItems: "center",
    justifyContent: "center",
  },

  botaoEsqueci: {
    alignSelf: "flex-end",
    marginBottom: 24,
  },
  textoEsqueci: {
    color: AZUL,
    fontSize: 12,
    fontWeight: "600",
  },

  botaoEntrar: {
    height: 44,
    backgroundColor: AZUL,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  botaoEntrarDesabilitado: {
    opacity: 0.4,
  },
  textoEntrar: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },

  areaDivisor: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
  },
  divisor: {
    flex: 1,
    height: 1,
    backgroundColor: BORDA,
    marginHorizontal: 12,
  },
  ou: {
    color: SUAVE,
    fontWeight: "700",
    fontSize: 12,
  },

  botaoFacebook: {
    height: 44,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: BORDA,
    alignItems: "center",
    justifyContent: "center",
  },
  linhaFacebook: {
    flexDirection: "row",
    alignItems: "center",
  },
  textoFacebook: {
    color: "#1877F2",
    fontWeight: "700",
    marginLeft: 8,
  },

  caixaCadastro: {
    width: "100%",
    maxWidth: 380,
    borderWidth: 1,
    borderColor: BORDA,
    borderRadius: 6,
    alignItems: "center",
    flexDirection: "row",
    gap: 6,
    justifyContent: "center",
    paddingVertical: 18,
    marginTop: 18,
  },
  textoCadastro: {
    color: TEXTO,
  },
  link: {
    color: AZUL,
    fontWeight: "700",
  },

  // MODAL
  fundoModal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  cartaoModal: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  iconeModal: {
    marginBottom: 8,
  },
  tituloModal: {
    fontSize: 18,
    fontWeight: "700",
    color: TEXTO,
    marginBottom: 6,
  },
  mensagemModal: {
    color: TEXTO,
    textAlign: "center",
    marginBottom: 16,
  },
  botaoModal: {
    height: 42,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: BORDA,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 140,
  },
  textoBotaoModal: {
    color: TEXTO,
    fontWeight: "700",
  },
  botaoModalPrimario: {
    backgroundColor: AZUL,
    borderColor: AZUL,
  },
  textoBotaoModalPrimario: {
    color: "#fff",
    fontWeight: "700",
  },
  criarContaText: {
    color: "#001effff"
  }
});
