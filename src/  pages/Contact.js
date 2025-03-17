import React from 'react';

function Contact() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Contactez-nous</h1>
      <form>
        <input type="text" placeholder="Votre Nom" style={{ padding: '10px', margin: '10px', width: '80%' }} /><br />
        <input type="email" placeholder="Votre Email" style={{ padding: '10px', margin: '10px', width: '80%' }} /><br />
        <textarea placeholder="Votre Message" style={{ padding: '10px', margin: '10px', width: '80%', height: '100px' }}></textarea><br />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#FFD700', border: 'none', cursor: 'pointer' }}>Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
