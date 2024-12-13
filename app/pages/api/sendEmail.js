import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, address, products } = req.body;

    // Create a transporter for sending email
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use any email service provider
      auth: {
        user: 'your-email@gmail.com', // Replace with your email address
        pass: 'your-email-password',   // Replace with your email password (or use OAuth)
      },
    });

    // Email content
    const mailOptions = {
      from: 'your-email@gmail.com',  // Replace with your email
      to: 'yusraateeq112@gmail.com', // Your email address where you want to receive the order details
      subject: `New Order from ${name}`,
      text: `
        You have received a new order!

        Name: ${name}
        Email: ${email}
        Address: ${address}

        Order Summary:
        ${products.map(item => `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`).join('\n')}
        
        Total: $${products.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false, error: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ success: false, error: 'Method not allowed' });
  }
}
