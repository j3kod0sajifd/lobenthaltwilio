export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(`
    <Response>
      <Say language="de-DE">Sprechen Sie nach dem Ton.</Say>
      <Record maxLength="30" playBeep="true" />
    </Response>
  `);
}
