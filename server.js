import 'dotenv/config';
import express from 'express';
import twilio from 'twilio';

const app = express();
app.use(express.urlencoded({ extended: false }));

// Health check (optional)
app.get('/', (req, res) => res.send('8A call bot is alive'));

// TwiML endpoint: supports GET and POST
app.all('/twiml', (req, res) => {
  const vr = new twilio.twiml.VoiceResponse();
  vr.say({ voice: 'Polly.Joanna' }, 'Thanks for calling 8 A Moving. This is a test.');
  res.type('text/xml').send(vr.toString());
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`8A bot listening on ${port}`));
