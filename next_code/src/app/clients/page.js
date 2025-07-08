'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  getClients,
  addClient,
  updateClient,
  deleteClient,
} from '@/service/clientsService';
import './Clients.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faSort,
  faSortUp,
  faSortDown,
  faEdit,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import Modal from '@/components/modal/Modal';
import ModelForm from '@/components/modelForm/ModelForm';
import { useSnackbar } from '@/hooks/useSnackbar';

export default function ClientsPage() {
  const router = useRouter();
  const { handleSnackbarOpen } = useSnackbar();

  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({
    key: 'nom',
    direction: 'ascending',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState(null);

  const fetchClients = async () => {
    try {
      setLoading(true);
      const data = await getClients();
      setClients(data);
    } catch (err) {
      handleSnackbarOpen(err.message || 'Erreur lors du chargement des clients.', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleOpenModal = (client = null) => {
    setEditingClient(client);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingClient(null);
  };

  const handleSaveClient = async (clientData) => {
    try {
      if (editingClient) {
        clientData.id = editingClient.id;
        await updateClient(clientData);
        setClients((prev) =>
          prev.map((client) =>
            client.id === editingClient.id ? { ...clientData } : client
          )
        );
        handleSnackbarOpen('Client mis à jour avec succès !', 'success');
      } else {
        const newClient = await addClient(clientData);
        setClients((prev) => [...prev, newClient]);
        handleSnackbarOpen('Client ajouté avec succès !', 'success');
      }
      handleCloseModal();
    } catch (err) {
      handleSnackbarOpen(err.message || 'Échec de l’enregistrement du client.', 'error');
    }
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this client?')) {
      try {
        await deleteClient(id);
        setClients((prev) => prev.filter((client) => client.id !== id));
        handleSnackbarOpen('Client supprimé avec succès !', 'success');
      } catch (error) {
        handleSnackbarOpen(error.message || 'Échec de la suppression du client.', 'error');
      }
    }
  };

  const handleRowClick = (id) => {
    router.push(`/clients/${id}`);
  };

  const sortedClients = [...clients]
    .filter(
      (client) =>
        `${client.prenom} ${client.nom}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return faSort;
    return sortConfig.direction === 'ascending' ? faSortUp : faSortDown;
  };

  if (loading) return <div className="loadingState">Loading...</div>;

  return (
    <main className="PageComponentClass ClientsPageComponentClass">
      <div className="clientsHeader">
        <h1>Clients</h1>
        <button onClick={() => handleOpenModal()} className="addButton">
          <FontAwesomeIcon icon={faPlus} /> Add Client
        </button>
      </div>

      <div className="toolbar">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="searchInput"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="tableContainer">
        <table className="clientsTable">
          <thead>
            <tr>
              <th onClick={() => requestSort('nom')}>
                Name <FontAwesomeIcon icon={getSortIcon('nom')} />
              </th>
              <th>Email</th>
              <th>Phone</th>
              <th onClick={() => requestSort('dateCreation')}>
                Creation Date <FontAwesomeIcon icon={getSortIcon('dateCreation')} />
              </th>
              <th className="actionsCell">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedClients.map((client) => (
              <tr key={client.id} onClick={() => handleRowClick(client.id)}>
                <td>{client.prenom} {client.nom}</td>
                <td>{client.email}</td>
                <td>{client.telephone}</td>
                <td>{client.dateCreation}</td>
                <td className="actionsCell">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenModal(client);
                    }}
                    className="actionButton editButton"
                  >
                    <FontAwesomeIcon icon={faEdit} color="#6143ca" />
                  </button>
                  <button
                    onClick={(e) => handleDelete(client.id, e)}
                    className="actionButton deleteButton"
                  >
                    <FontAwesomeIcon icon={faTrash} color="red" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModelForm
          title={editingClient ? 'Modifier le client' : 'Ajouter un client'}
          data={editingClient}
          fields={[
            { name: 'prenom', label: 'First Name', required: true },
            { name: 'nom', label: 'Last Name', required: true },
            { name: 'email', label: 'Email', type: 'email', required: true },
            { name: 'telephone', label: 'Phone', type: 'tel', required: true },
          ]}
          onSave={handleSaveClient}
          onCancel={handleCloseModal}
        />
      </Modal>
    </main>
  );
}
