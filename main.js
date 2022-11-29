
// Defina um array vazio que armazena os nomes dos alunos.
nameOfTheStudentArray = []
    
function submit()
{
    //defina um array que guarda todos os nomes dos alunos
    var displayStudentArray = []

    //defina loop for para buscar o valor da caixa de entrada e guardar no array.
    for (j = 1; j <=4; ++j){
        var nameOfTheStudent = document.getElementById("nameOfTheStudent", +j).value;
        console.log(nameOfTheStudent);
        nameOfTheStudentArray.push(nameOfTheStudent);
    }

    console.log(nameOfTheStudentArray);

   //length do array e guardamos dentro da variável
   var lengthOfNameOfStudentsArray = nameOfTheStudentArray.length;
   console.log(lengthOfNameOfStudentsArray);

   for (var k = 0; k < lengthOfNameOfStudentsArray; k++){
    displayStudentArray.push("<h4>NOME - " + nameOfTheStudentArray[k] + "</h4>")
    console.log(displayStudentArray);
   }

    //vamos imprimir a length do array na tela do console
    console.log(displayStudentArray);
    document.getElementById("displayNameWithCammas").innerHTML = displayStudentArray;

    //Repetimos a nameOfTheStudentArray
    var removeCammas = displayStudentArray.join(" ");
    console.log(removeCammas);
    document.getElementById("displayNameWithCammas").innerHTML = removeCammas;

    document.getElementById("submitionButton").style.display = "none";

    //imprima displayStudentArray na tela do console

    //Imprima esse displayStudentArray dentro do elemento HTML.

    //Defina uma variável e armazene displayStudentArray com uma função join

    //imprima o array e verifique o resultado

    //Imprima removeCommas dentro do elemento HTML
    
    //Ocultar botão Enviar 

}
