import React from 'react';

function App() {
  return (
    <div>
      {/* En-tête avec menu */}
      <header style={{ backgroundColor: '#FFD700', padding: '20px', textAlign: 'center' }}>
        <h1>Sun Agency</h1>
        <p>Votre chasseur immobilier pour des biens ensoleillés à l'international.</p>
      </header>

      {/* Section d'introduction */}
      <section style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Pourquoi choisir Sun Agency ?</h2>
        <p>Nous vous accompagnons de A à Z dans l'achat de votre résidence secondaire ou investissement immobilier sous le soleil.</p>
      </section>

      {/* Nos Services */}
      <section style={{ padding: '40px', textAlign: 'center', backgroundColor: '#f4f4f4' }}>
        <h2>Nos Services</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>🔎 Recherche de biens</li>
          <li>📍 Sélection et pré-visites</li>
          <li>📝 Accompagnement administratif</li>
          <li>🏡 Gestion locative et conseils</li>
        </ul>
      </section>

      {/* Destinations */}
      <section style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Nos Destinations</h2>
        <p>Nous vous accompagnons en Espagne, Maroc, République Dominicaine, Sicile, Dubaï et bien d'autres destinations ensoleillées.</p>
      </section>

      {/* Formulaire de contact */}
      <section style={{ padding: '40px', textAlign: 'center', backgroundColor: '#f4f4f4' }}>
        <h2>Contactez-nous</h2>
        <form>
          <input type="text" placeholder="Votre Nom" style={{ padding: '10px', margin: '10px', width: '80%' }} /><br />
          <input type="email" placeholder="Votre Email" style={{ padding: '10px', margin: '10px', width: '80%' }} /><br />
          <textarea placeholder="Votre Message" style={{ padding: '10px', margin: '10px', width: '80%', height: '100px' }}></textarea><br />
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#FFD700', border: 'none', cursor: 'pointer' }}>Envoyer</button>
        </form>
      </section>

      {/* Pied de page */}
      <footer style={{ backgroundColor: '#222', color: '#fff', textAlign: 'center', padding: '10px', marginTop: '20px' }}>
        <p>© 2025 Sun Agency - Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
