// pages/api/submit_form.js

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { loginEmail, loginPassword, signupName, signupEmail, signupPassword } = req.body;

        // For now, just log the form data to the console
        console.log('Login Email:', loginEmail);
        console.log('Login Password:', loginPassword);
        console.log('Signup Name:', signupName);
        console.log('Signup Email:', signupEmail);
        console.log('Signup Password:', signupPassword);

        // Send a response back to the client
        res.status(200).json({ message: 'Form data received' });
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
