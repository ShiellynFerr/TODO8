
export const tips = (server, db) => {
  server.get('/tips', (req, res) => {
    res.json({
      tips: db.tips[parseInt(Math.random() * db.tips.length)],
    });
  });

  server.post('/create', (req, res) => {
    const body = req.body
    db.dicas.push(body.tip)
    res.json(body)
  });

};