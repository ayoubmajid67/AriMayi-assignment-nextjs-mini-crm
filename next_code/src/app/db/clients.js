// Get all clients
export const getClients = () => {
    return clients;
  };
  

  export const findClientByEmail = (email) => {
    return clients.find(client => client.email == email);
  };
  


  export const findClientById = (id) => {
    return clients.find(client => client.id == id);
  };
  

  export const addClient = (clientData) => {
    const newClient = {
      id: crypto.randomUUID(),
      dateCreation: new Date().toISOString().split('T')[0],
      historique: [],
      ...clientData
    };
    clients.push(newClient);
    return newClient;
  };
  

  export const updateClient = (id, updatedFields) => {
    const index = clients.findIndex(client => client.id == id);
    if (index !== -1) {
      clients[index] = { ...clients[index], ...updatedFields };
      return clients[index];
    }
    return null;
  };
  

  export const deleteClient = (id) => {
    const index = clients.findIndex(client => client.id == id);
    if (index === -1) return false;
    clients.splice(index, 1);
    return true;
  };
  
  
export const clients = [
    {
      id: 1,
      nom: "Amine El Fassi",
      prenom: "Amine",
      email: "amine.fassi@example.com",
      telephone: "+212612345678",
      dateCreation: "2024-06-01",
      historique: [
        { date: "2024-06-10", action: "Contacté par téléphone" },
        { date: "2024-06-15", action: "Envoi d’un devis" },
        { date: "2024-06-20", action: "Client relancé par email" }
      ]
    },
    {
      id: 2,
      nom: "Salma Benali",
      prenom: "Salma",
      email: "salma.benali@example.com",
      telephone: "+212699887766",
      dateCreation: "2024-05-25",
      historique: [
        { date: "2024-05-28", action: "Premier contact via formulaire" },
        { date: "2024-06-02", action: "Réunion de présentation" },
        { date: "2024-06-05", action: "Client intéressé par offre Pro" }
      ]
    },
    {
      id: 3,
      nom: "Yassir Tazi",
      prenom: "Yassir",
      email: "yassir.tazi@example.com",
      telephone: "+212677112233",
      dateCreation: "2024-05-10",
      historique: [
        { date: "2024-05-11", action: "Appel manqué" },
        { date: "2024-05-12", action: "Recontacté par email" },
        { date: "2024-05-15", action: "Inscrit à la newsletter" }
      ]
    },
    {
      id: 4,
      nom: "Hajar El Idrissi",
      prenom: "Hajar",
      email: "hajar.idrissi@example.com",
      telephone: "+212678990011",
      dateCreation: "2024-04-18",
      historique: [
        { date: "2024-04-20", action: "Demande de documentation" },
        { date: "2024-04-25", action: "Proposition envoyée" }
      ]
    },
    {
      id: 5,
      nom: "Oussama Lamrani",
      prenom: "Oussama",
      email: "oussama.lamrani@example.com",
      telephone: "+212699334455",
      dateCreation: "2024-03-30",
      historique: [
        { date: "2024-04-01", action: "Appel découverte" },
        { date: "2024-04-05", action: "Demande de rappel" }
      ]
    },
    {
      id: 6,
      nom: "Nisrine Bakkali",
      prenom: "Nisrine",
      email: "nisrine.bakkali@example.com",
      telephone: "+212688556677",
      dateCreation: "2024-03-15",
      historique: [
        { date: "2024-03-16", action: "Formulaire soumis" },
        { date: "2024-03-18", action: "E-mail de bienvenue envoyé" }
      ]
    },
    {
      id: 7,
      nom: "Mehdi Bensaid",
      prenom: "Mehdi",
      email: "mehdi.bensaid@example.com",
      telephone: "+212677998877",
      dateCreation: "2024-02-12",
      historique: [
        { date: "2024-02-14", action: "Réponse au devis envoyée" },
        { date: "2024-02-18", action: "Client demande une démo" }
      ]
    },
    {
      id: 8,
      nom: "Sanae Ouarzazi",
      prenom: "Sanae",
      email: "sanae.ouarzazi@example.com",
      telephone: "+212611223344",
      dateCreation: "2024-01-22",
      historique: [
        { date: "2024-01-25", action: "Client ajouté à la base" },
        { date: "2024-01-28", action: "Rappel automatique envoyé" }
      ]
    },
    {
      id: 9,
      nom: "Ilyas Abouyaala",
      prenom: "Ilyas",
      email: "ilyas.abouyaala@example.com",
      telephone: "+212699887712",
      dateCreation: "2023-12-05",
      historique: [
        { date: "2023-12-07", action: "Premier échange par WhatsApp" },
        { date: "2023-12-09", action: "Envoyé brochure produit" }
      ]
    },
    {
      id: 10,
      nom: "Fatima Zahra Kabbaj",
      prenom: "Fatima Zahra",
      email: "fatima.kabbaj@example.com",
      telephone: "+212688776655",
      dateCreation: "2023-11-10",
      historique: [
        { date: "2023-11-12", action: "Inscription newsletter" },
        { date: "2023-11-20", action: "Ouverture du premier email marketing" }
      ]
    }
  ];

  
  