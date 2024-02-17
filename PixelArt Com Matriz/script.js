var w = "#ffffff";
var r = "#ff0000";
var k = "#000000";
var b = "#0000ff";
var y = "#ffff00";
var p = "#dbb39d";
var m = "#a62a2a";
var g = "#008000";
var ge = "#0f430f";
var l = "#ffa500";

const ericCartman = [
    [w, w, w, w, w, w, w, w, k, k, k, k, k, w, w, w, w, w, w, w, w],
    [w, w, w, w, w, w, k, k, y, y, y, y, y, k, k, w, w, w, w, w, w],
    [w, w, w, w, k, k, b, b, k, k, k, k, k, b, b, k, k, w, w, w, w],
    [w, w, w, k, b, b, b, b, b, b, b, b, b, b, b, b, b, k, w, w, w],
    [w, w, k, b, b, b, b, y, y, y, y, y, y, y, b, b, b, b, k, w, w],
    [w, w, k, b, y, y, y, k, k, k, k, k, k, k, y, y, y, b, k, w, w],
    [w, k, y, y, k, k, k, w, w, w, p, w, w, w, k, k, k, y, y, k, w],
    [w, k, k, k, p, p, w, w, w, w, w, w, w, w, w, p, p, k, k, k, w],
    [w, k, p, p, p, w, w, w, w, k, w, k, w, w, w, w, p, p, p, k, w],
    [w, k, p, p, p, w, w, w, w, w, w, w, w, w, w, w, p, p, p, k, w],
    [w, k, p, p, p, w, w, w, w, w, w, w, w, w, w, w, p, p, p, k, w],
    [w, w, k, p, p, p, w, w, w, w, p, w, w, w, w, p, p, p, k, w, w],
    [w, w, k, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, k, w, w],
    [w, w, w, k, p, p, p, p, p, k, k, k, p, p, p, p, p, k, w, w, w],
    [w, w, k, k, k, k, p, p, p, p, p, p, p, p, p, k, k, k, k, w, w],
    [w, k, r, r, r, r, k, k, k, k, k, k, k, k, k, r, r, r, r, k, w],
    [k, r, r, r, k, r, r, r, r, r, k, r, r, r, r, r, k, r, r, r, k],
    [k, y, y, k, r, r, r, r, r, r, k, r, r, r, r, r, r, k, y, y, k],
    [k, y, y, k, r, r, r, r, r, r, k, r, r, r, r, r, r, k, y, y, k],
    [w, k, k, k, k, k, r, r, r, r, k, r, r, r, r, k, k, k, k, k, w],
    [w, w, w, k, m, m, k, k, k, k, k, k, k, k, k, m, m, k, w, w, w],
    [w, w, k, k, k, k, k, k, k, k, k, k, k, k, k, k, k, k, k, w, w],
];

const kyle = [
    [w, w,w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w, w],
    [w, w, w, w, k, k, k, k, k, k, k, k, k, k, k, k, k, w, w, w, w],
    [w, w, w, k, g, g, g, g, g, g, g, g, g, g, g, g, g, k, w, w, w],
    [w, w, w, k, g, ge, ge, ge, ge, ge, ge, ge, ge, ge, ge, ge, g, k, w, w, w],
    [w, w, w, k, g, ge, ge, ge, ge, ge, ge, ge, ge, ge, ge, ge, g, k, w, w, w],
    [w, w, w, k, k, ge, ge, ge, ge, ge, ge, ge, ge, ge, ge, ge, k, k, w, w, w],
    [w, w, w, k, g, k, k, k, k, k, k, k, k, k, k, k, g, k, w, w, w],
    [w, w, k, g, g, k, p, p, w, w, p, w, w, p, p, k, g, g, k, w, w],
    [w, w, k, g, ge, k, p, w, w, w, w, w, w, w, p, k, ge, g, k, w, w],
    [w, k, g, g, k, p, w, w, w, k, w, k, w, w, w, p, k, g, g, k, w],
    [w, k, g, ge, k, p, w, w, w, w, w, w, w, w, w, p, k, ge, g, k, w],
    [w, k, ge, k, k, p, p, w, w, w, p, w, w, w, p, p, k, k, ge, k, w],
    [w, w, k, w, k, p, p, p, p, p, p, p, p, p, p, p, k, w, k, w, w],
    [w, w, w, w, w, k, p, p, p, k, k, k, p, p, p, k, w, w, w, w, w],
    [w, , w, w, w, k, k, k, p, p, p, p, p, k, k, k, w, w, w, w, w],
    [w, w, w, w, k, l, l, g, k, k, k, k, k, g, l, l, k, w, w, w, w],
    [w, w, w, k, l, l, k, l, g, g, k, g, g, l, k, l, l, k, w, w, w],
    [w, w, w, k, k, k, k, l, l, l, k, l, l, l, k, k, k, k, w, w, w],
    [w, w, w, k, ge, g, k, l, l, l, k, l, l, l, k, g, ge, k, w, w, w],
    [w, w, w, w, k, k, k, k, k, k, k, k, k, k, k, k, k, w, w, w, w],
    [w, w, w, w, w, w, k, b, b, b, k, b, b, b, k, w, w, w, w, w, w],
    [w, w, w, w, w, k, k, k, k, k, k, k, k, k, k, k, w, w, w, w, w],
];

const kenny = [
    [w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w],
    [w,w,w,w,w,w,w,w,k,k,k,k,k,w,w,w,w,w,w,w,w],
    [w,w,w,w,w,w,k,k,l,l,l,l,l,k,k,w,w,w,w,w,w],
    [w,w,w,w,w,k,l,l,l,l,l,l,l,l,l,k,w,w,w,w,w],
    [w,w,w,w,k,l,l,l,l,k,k,k,l,l,l,l,k,w,w,w,w],
    [w,w,w,w,k,l,l,k,k,m,m,m,k,k,l,l,k,w,w,w,w],
    [w,w,w,k,l,l,k,m,w,w,p,w,w,m,k,l,l,k,w,w,w],
    [w,w,w,k,l,k,m,w,w,w,w,w,w,w,m,k,l,k,w,w,w],
    [w,w,w,k,l,k,m,w,w,k,w,k,w,w,m,k,l,k,w,w,w],
    [w,w,w,k,l,k,m,w,w,w,w,w,w,w,m,k,l,k,w,w,w],
    [w,w,w,k,l,k,m,m,w,w,p,w,w,m,m,k,l,k,w,w,w],
    [w,w,w,w,k,l,k,m,m,p,p,p,m,m,k,l,k,w,w,w,w],
    [w,w,w,w,k,l,l,k,k,k,k,k,k,k,l,l,k,w,w,w,w],
    [w,w,w,w,w,k,l,l,l,l,k,l,l,l,l,k,w,w,w,w,w],
    [w,w,w,w,w,k,k,k,l,k,l,k,l,k,k,k,w,w,w,w,w],
    [w,w,w,w,k,l,l,l,k,k,k,k,k,l,l,l,k,w,w,w,w],
    [w,w,w,k,l,l,k,l,l,l,k,l,l,l,k,l,l,k,w,w,w],
    [w,w,w,k,k,k,k,l,l,l,k,l,l,l,k,k,k,k,w,w,w],
    [w,w,w,k,m,m,k,l,l,l,k,l,l,l,k,m,m,k,w,w,w],
    [w,w,w,w,k,k,k,k,k,k,k,k,k,k,k,k,k,w,w,w,w],
    [w,w,w,w,w,w,k,l,l,l,k,l,l,l,k,w,w,w,w,w,w],
    [w,w,w,w,w,k,k,k,k,k,k,k,k,k,k,k,w,w,w,w,w]
  ];
 
  let matrizAtual = ericCartman;

  const tabela = document.createElement('table');

  function criarTabela() {
    tabela.innerHTML = '';
    for (let i = 0; i < matrizAtual.length; i++) {
      const linha = document.createElement('tr');
      for (let j = 0; j < matrizAtual[i].length; j++) {
        const celula = document.createElement('td');
        celula.style.backgroundColor = matrizAtual[i][j];
        linha.appendChild(celula);
      }
      tabela.appendChild(linha);
    }
    document.body.appendChild(tabela);
  }

  tabela.addEventListener('mouseover', function () {
    matrizAtual = kyle;
    criarTabela();
  });

  tabela.addEventListener('click', function () {
    matrizAtual = kenny;
    criarTabela();
  });

  criarTabela();