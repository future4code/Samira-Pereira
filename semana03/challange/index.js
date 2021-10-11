let jedi = []

function inserealuno(){
    aluno = document.getElementById("aluno")
    if (aluno.value !== " "){
        jedi.push(aluno)
        atualizaLista()
    }
}

function atualizaLista(){
    for(let i=0;  i<jedi.length; i++){
        jedi =jedi.sort()
    }
}

