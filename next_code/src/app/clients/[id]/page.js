'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { getClients } from '@/service/clientsService';
import './ClientDetailPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEdit, faUserCircle, faCalendarAlt, faEnvelope, faPhone, faHistory } from '@fortawesome/free-solid-svg-icons';

export default function ClientDetailPage() {
    const params = useParams();
    const router = useRouter();
    const { id } = params;
    const [client, setClient] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchClient = async () => {
                try {
             
                    const allClients = await getClients();
                    const foundClient = allClients.find(c => c.id === parseInt(id));
                    if (foundClient) {
                        setClient(foundClient);
                    } else {
                        throw new Error('Client not found');
                    }
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };
            fetchClient();
        }
    }, [id]);

    if (loading) {
        return <div className="loadingState">Loading client details...</div>;
    }

    if (error) {
        return <div className="errorState">Error: {error}</div>;
    }

    if (!client) {
        return <div className="errorState">Client could not be found.</div>;
    }

    return (
        <main className="PageComponentClass ClientDetailPageComponentClass">
            <div className="detailHeader">
                <button onClick={() => router.back()} className="backButton">
                    <FontAwesomeIcon icon={faArrowLeft} /> Back to List
                </button>
                <Link href={`/clients/edit/${client.id}`} className="editLink">
                    <FontAwesomeIcon icon={faEdit} /> Edit Client
                </Link>
            </div>

            <div className="clientInfoCard">
                <div className="cardHeader">
                    <FontAwesomeIcon icon={faUserCircle} className="clientBigAvatar" />
                    <h2>{client.prenom} {client.nom}</h2>
                </div>
                <div className="cardBody">
                    <p><FontAwesomeIcon icon={faEnvelope} /> <span>{client.email}</span></p>
                    <p><FontAwesomeIcon icon={faPhone} /> <span>{client.telephone}</span></p>
                    <p><FontAwesomeIcon icon={faCalendarAlt} /> <span>Client since: {client.dateCreation}</span></p>
                </div>
            </div>

            <div className="historyCard">
                 <div className="cardHeader">
                    <FontAwesomeIcon icon={faHistory} />
                    <h3>Activity History</h3>
                </div>
                <ul className="historyList">
                    {client.historique.length > 0 ? (
                        client.historique.map((item, index) => (
                            <li key={index} className="historyItem">
                                <span className="historyDate">{item.date}</span>
                                <p className="historyAction">{item.action}</p>
                            </li>
                        ))
                    ) : (
                        <p>No activity history available for this client.</p>
                    )}
                </ul>
            </div>
        </main>
    );
}
