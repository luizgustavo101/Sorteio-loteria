function gerar(totalPossibilidades, numerosSorteados) {
  let sorteio = [];
  while (sorteio.length != numerosSorteados) {
    let numeroSorteado = parseInt(Math.random() * totalPossibilidades) + 1;
    if (sorteio.includes(numeroSorteado) != true) {
      sorteio.push(numeroSorteado);
    }

    if (sorteio.length == numerosSorteados) {
      console.log(sorteio.sort());
    }
  }
}

gerar(80, 6);
gerar()