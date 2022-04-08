import { db } from "./SQLite"

export function criaTabela() {
  db.transaction((transaction) => {
    transaction.executeSql("CREATE TABLE IF NOT EXISTS " + 
      "Notas " +
      "(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria TEXT, texto TEXT);")
  })
}


export async function adicionaNota(nota){
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("INSERT INTO Notas (titulo, categoria, texto) VALUES (?,?,?);", [nota.titulo, nota.categoria, nota.texto], () => {
        resolve('Nota Adicionada com sucesso!')
      })
    })
  })
}

export async function alteraNota(nota){
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("UPDATE Notas SET titulo =?, categoria =?, texto=? WHERE id = ?;", [nota.titulo, nota.categoria, nota.texto, nota.id], () => {
        resolve('Nota alterada com sucesso!')
      })
    })
  })
}

export async function deletaNota(nota){
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("DELETE FROM Notas WHERE id = ?;", [nota.id], () => {
        resolve('Nota deletada com sucesso!')
      })
    })
  })
}

export async function buscaNotas(nota){
  return new Promise((resolve) => {
    db.transaction(tx => {
      tx.executeSql("SELECT * FROM Notas;", null, (txObj, resultado) => {
        resolve(resultado.rows)
      })
    })
  })
}