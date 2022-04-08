import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-web";

export function Nota({item, setNotaSelecionada}) {
  const categorias = {Pessoal: "#FF924F", Outros: "#00911F", Trabalho: "#2F71EB"}
  const estilos = styleFunction(categorias[item.categoria])
  
  return (
    <TouchableOpacity style={estilos.cartao} onPress={() => setNotaSelecionada(item)}>
      <Text style={estilos.titulo}>{item.titulo}</Text>
      <Text style={estilos.categoria}>{item.categoria}</Text>
      <Text style={estilos.texto} numberOfLines={5}>{item.texto}</Text>
    </TouchableOpacity>
  )
}

const styleFunction = (cor) => StyleSheet.create({
  cartao: {
    borderRadius: 8,
    backgroundColor: "#363636",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    borderTopWidth: 5,
    borderColor: cor,
    color: "#FFFFFF",
    shadowColor: "#4F4F4F",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 4,
    color: '#FFFFFF'
  },
  categoria: {
    borderRadius: 4,
    backgroundColor: cor,
    padding: 4,
    color: "#FFFFFF",
    alignSelf: "flex-start",
  },
  texto: {
    color: "#FFFFFF",
    lineHeight: 28,
  }
})
