export default function handler(req, res) {
  const profezie = [
    "-100 LP e demote immediato 📉",
    "3 game di fila con l'AFK in team 🤬",
    "ti viene il gay",
    "mangi una pizza scaduta e ti viene la diarrea💔",
    "cadi per terra e ti fai male🩸",
    "litighi con Nj🔴",
    "forte diarrea stanotte💀",
    "ti intano tutti i game",
    "oggi dovrai fare la pipí ma non avrai nessun bagno vicino",
    "bannato per 10 minuti da greensshadow",
    "rimani chiuso fuori casa",
    "oh no avrai sfortuna per tutta la settimana",
    "Sarai disturbato durante il tuo prossimo riposino pomeridiano, sbatteranno porte e finestre",
    "se cucinerai qualcosa, lo brucerai mi dispiace...",
    "se questo mese non hai fatto la sub da Nj ti viene la febbre a 39, puoi rimediare entro oggi... se l'hai fatta la macumba oggi non ti colpirá",
    "Perdi tutti i game oggi, ahahhahahahha",
    "Tuo padre si incazza con te oggi, guarda il lato positivo tu ce l'hai almeno..."
    "perderà 4 ranked di fila"
    "verrà inseguito/a da un cinghiale"
  ];

  const scelta = profezie[Math.floor(Math.random() * profezie.length)];
  
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.status(200).send(scelta);
}
