export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/xml');
  res.status(200).send(`
    <Response>
      <Play>https://lobenthalansage-7033.twil.io/Bandansage-Lobenthal.mp3</Play>
      <Record 
        action="https://lobenthaltwilio.vercel.app/api/endcall"
        maxLength="180"
        timeout="5"
        transcribe="true"
        playBeep="true"
        trim="trim-silence"
        transcribeCallback="https://hook.eu2.make.com/79ppx95mkqjlb7g7h47vok04rq0m4uhd"
      />
    </Response>
  `);
}
