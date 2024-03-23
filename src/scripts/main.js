AOS.init();

const dataDoEvento = new Date("Mar 30, 2024 22:42:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contandoHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutosEmMS = 1000 * 60;

   const diasAteEvento = Math.floor(distanciaAteEvento / diaEmMs);
   const horasAteEvento = Math.floor((distanciaAteEvento % diaEmMs) / horaEmMs);
   const minutosAteEvento = Math.floor((distanciaAteEvento % horaEmMs) / minutosEmMS);
   const segundosAteEvento = Math.floor((distanciaAteEvento % minutosEmMS) / 1000);

   document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

   if(distanciaAteEvento < 0){
    clearInterval(contandoHoras);
    document.getElementById('contador').innerHTML = `Evento EXPIRADO!`
   }

}, 1000);