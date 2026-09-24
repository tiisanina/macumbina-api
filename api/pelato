export default function handler(req, res) {
  const { user = 'L\'utente' } = req.query;
  const chance = Math.floor(Math.random() * 100) + 1;

  if (chance <= 10) {
    return res.status(200).send(`${user} NON è pelato! 🎉`);
  }
  return res.status(200).send(`${user} è pelato! 👨‍🦲`);
}
