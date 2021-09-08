import kotlin.browser.*
import kotlin.dom.*
import org.w3c.dom.*
import org.w3c.xhr.*

data class Servico (

          val nome:String,
          val cpf:String,
          val idade: Int,
          val genero: String,
          val deficiencia: Boolean

       )


val mutableList: MutableList<Servico> = mutableListOf();
val colsHeader: List<String> = listOf("nome","cpf","idade","genero","deficiencia") 


fun cadastrar(){

val nome = document.getElementById("pnome") as HTMLInputElement
val cpf = document.getElementById("pcpf") as HTMLInputElement
val idade = document.getElementById("pidade") as HTMLInputElement
val genero = document.getElementById("pgenero") as HTMLSelectElement
val deficiencia = document.getElementById("pdeficiencia") as HTMLInputElement

val servico = Servico(nome = nome.value, cpf = cpf.value, idade = idade.value.toInt(), genero = genero.value, deficiencia = deficiencia.checked)

val minhaTabelaHeader = document.getElementById("Copo")



  mutableList.add(servico)

    

minhaTabelaHeader?.insertAdjacentHTML("afterend", "<td>${nome.value} </td> <td>${cpf.value} </td> <td>${idade.value} </td> <td>${retornoGenero(genero.value)} </td> <td>${retornoDeficiencia(deficiencia.checked)} </td>")


  limparCampos(nome,cpf,idade,genero,deficiencia)
}


fun retornoDeficiencia (s: Boolean): String{
return if(s){
  "Sim"
} else {
  "Não"
}
       
}

fun retornoGenero (s:String): String = when(s){
"masc" -> "Masculino"
"femi" -> "Feminino"
"nbin" -> "Não-binário"
  else -> "Outro"
} 

fun limparCampos(nome: HTMLInputElement,cpf: HTMLInputElement,idade: HTMLInputElement,genero: HTMLSelectElement,deficiencia: HTMLInputElement) {
    nome.value = ""
    cpf.value = ""
    idade.value = ""
    genero.value = "masc";
    deficiencia.checked = false;
}



fun main() {
	val cadastrarBtn = document.getElementById("cadastrar-btn") as HTMLButtonElement
	cadastrarBtn.addEventListener("click", { cadastrar() })
}

