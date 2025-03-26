export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(`
    <Response>
      <Play>https://lobenthalansage-7033.twil.io/Bandansage-Lobenthal.mp3</Play>
      <Record maxLength="180" transcribe="true" playBeep="true" />
    </Response>
  `);
}
