function gerarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // Adicionando a imagem ao PDF
  const imgElement = document.getElementById("imagemBoletim");
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = imgElement.width;
  canvas.height = imgElement.height;
  ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);
  const imgData = canvas.toDataURL("image/png");

  // Definindo o posicionamento da imagem no PDF
  doc.addImage(imgData, "PNG", 10, 10, 50, 20); // ajusta as coordenadas e o tamanho conforme necessário

  // Título do PDF
  doc.setFontSize(18);
  doc.text("Boletim de Ocorrência", 10, 40);

  // Capturando valores do formulário
  const tipoOcorrencia = document.getElementById("tipoOcorrencia").value;
  const dataRegistro = document.getElementById("dataRegistro").value;
  const horario = document.getElementsByName("horario")[0].value;
  const delegadoPlantao = document.getElementById("delegadoPlantao").value;
  const descricaoOcorrencia = document.querySelector(
    "textarea[name='descrição']"
  ).value;
  const parecerAutoridade = document.querySelector(
    "textarea[name='descrição']"
  ).value;
  const descricaoOcorrido = document.getElementById("descricaoOcorrido").value;
  const bensEnvolvidos = document.getElementById("bensEnvolvidos").value;
  const dinamicaFatos = document.getElementById("dinamicaFatos").value;

  // Adicionando conteúdo ao PDF
  doc.setFontSize(12);
  doc.text(`Unidade responsável pela ocorrência: ${tipoOcorrencia}`, 10, 50);
  doc.text(`Data do registro: ${dataRegistro}`, 10, 60);
  doc.text(`Horário: ${horario}`, 10, 70);
  doc.text(`Delegado no plantão: ${delegadoPlantao}`, 10, 80);

  doc.text("Ocorrências", 10, 90);
  doc.text(`Descrição da ocorrência: ${descricaoOcorrencia}`, 10, 100);

  doc.text("Parecer da autoridade", 10, 110);
  doc.text(parecerAutoridade, 10, 120);

  doc.text("Envolvidos", 10, 140);
  doc.text(`Descrição do ocorrido: ${descricaoOcorrido}`, 10, 150);
  doc.text(`Bens envolvidos: ${bensEnvolvidos}`, 10, 160);
  doc.text(`Dinâmica real dos fatos: ${dinamicaFatos}`, 10, 170);

  // Salvando o PDF
  doc.save("boletim_ocorrencia.pdf");
}
