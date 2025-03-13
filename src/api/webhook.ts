
     export default async function handler(req, res) {
       if (req.method === 'POST') {
         const data = req.body;
         console.log('Webhook received:', data);
         res.status(200).json({ message: 'Webhook received successfully' });
       } else {
         res.status(405).json({ message: 'Method not allowed' });
       }
     }