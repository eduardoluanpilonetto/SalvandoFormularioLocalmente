import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import NotaEditor from "./src/componentes/NotaEditor"
import { Nota } from "./src/componentes/Nota"
import { useEffect, useState } from "react"
import { buscaNotas, criaTabela } from "./src/servicos/Notas"

export default function App() {

  useEffect(() => {
    criaTabela()
  }, [])

  const [notaSelecionada, setNotaSelecionada] = useState({})
  const [notas, setNotas] = useState([])

  async function mostraNotas() {
    const todasNotas  = await buscaNotas()
    setNotas(todasNotas)
  }

  mostraNotas()

  return (
    <SafeAreaView style={estilos.container}>
      <FlatList
        data={notas}
        renderItem={(nota) => <Nota {...nota} setNotaSelecionada={setNotaSelecionada}/>}
        keyExtractor={nota => nota.id}/>
      <NotaEditor mostraNotas={mostraNotas} notaSelecionada={notaSelecionada} setNotaSelecionada={setNotaSelecionada}/>
      <StatusBar/>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
	container: {
    backgroundColor: "#1C1C1C",
		flex: 1,
		alignItems: "stretch",
		justifyContent: "flex-start",
	},
})

