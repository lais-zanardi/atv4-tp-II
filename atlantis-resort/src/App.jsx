import React, { useState } from 'react';
import { 
  Home, Users, BedDouble, KeyRound, Plus, Edit, 
  Trash2, X, CheckCircle, MapPin, Wind, Car, Palmtree, LogOut, Menu as MenuIcon
} from 'lucide-react';

const initialClients = [
  { id: 1, name: 'João Silva', socialName: '', cpf: '111.222.333-44', birthDate: '1985-05-12' },
  { id: 2, name: 'Maria Antonieta', socialName: 'Maria', cpf: '555.666.777-88', birthDate: '1990-08-22' },
  { id: 3, name: 'Carlos Santos', socialName: '', cpf: '999.888.777-66', birthDate: '1978-01-15' },
  { id: 4, name: 'Ana Souza', socialName: '', cpf: '222.333.444-55', birthDate: '1995-03-10' },
  { id: 5, name: 'Pedro Lima', socialName: 'Pedrinho', cpf: '444.555.666-77', birthDate: '1988-11-02' },
  { id: 6, name: 'Juliana Costa', socialName: '', cpf: '777.888.999-00', birthDate: '1992-07-19' },
  { id: 7, name: 'Lucas Almeida', socialName: '', cpf: '333.444.555-66', birthDate: '1983-04-30' },
  { id: 8, name: 'Beatriz Reis', socialName: 'Bia', cpf: '888.999.000-11', birthDate: '2000-12-25' },
  { id: 9, name: 'Fernanda Oliveira', socialName: '', cpf: '123.456.789-10', birthDate: '1991-06-14' },
  { id: 10, name: 'Ricardo Pereira', socialName: 'Ricardinho', cpf: '987.654.321-01', birthDate: '1980-09-05' }
];

const initialRooms = [
  { id: 1, name: 'Solteiro Simples 101', type: 'Simples', singleBeds: 1, doubleBeds: 0, suites: 1, ac: true, garage: 0 },
  { id: 2, name: 'Casal Master 201', type: 'Luxo', singleBeds: 0, doubleBeds: 1, suites: 1, ac: true, garage: 1 },
  { id: 3, name: 'Família Super 301', type: 'Resort', singleBeds: 3, doubleBeds: 1, suites: 2, ac: true, garage: 2 },
  { id: 4, name: 'Casal Master 202', type: 'Luxo', singleBeds: 0, doubleBeds: 1, suites: 1, ac: true, garage: 1 },
  { id: 5, name: 'Solteiro Mais 102', type: 'Simples', singleBeds: 1, doubleBeds: 0, suites: 1, ac: true, garage: 1 },
  { id: 6, name: 'Família Simples 302', type: 'Simples', singleBeds: 2, doubleBeds: 1, suites: 1, ac: false, garage: 1 },
  { id: 7, name: 'Suíte Presidencial 401', type: 'Resort', singleBeds: 4, doubleBeds: 2, suites: 3, ac: true, garage: 3 }
];

const initialHostings = [
  { id: 1, clientId: 1, roomId: 2, checkInDate: '2026-05-18', checkOutDate: '2026-05-25' },
  { id: 2, clientId: 3, roomId: 3, checkInDate: '2026-05-20', checkOutDate: '2026-05-27' },
  { id: 3, clientId: 4, roomId: 1, checkInDate: '2026-05-21', checkOutDate: '2026-05-24' },
  { id: 4, clientId: 6, roomId: 4, checkInDate: '2026-05-22', checkOutDate: '2026-05-29' },
  { id: 5, clientId: 7, roomId: 5, checkInDate: '2026-05-22', checkOutDate: '2026-05-26' }
];

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex justify-center items-center z-50 p-4 transition-all overflow-y-auto">
      <div className="bg-white rounded-xs shadow-2xl w-full max-w-md overflow-hidden border border-slate-200 my-auto">
        <div className="flex justify-between items-center p-4 bg-sky-800 text-white">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} className="hover:bg-sky-700 p-1 rounded-xs transition">
            <X size={20} />
          </button>
        </div>
        <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('admin@atlantis.com');
  const [password, setPassword] = useState('123456');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-100 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100 via-slate-50 to-slate-200">
      <div className="bg-white p-6 sm:p-8 rounded-xs shadow-2xl border border-slate-200 w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-teal-500 text-white p-3 rounded-xs mb-3 shadow-md">
            <Palmtree size={32} />
          </div>
          <h1 className="text-2xl font-bold text-sky-900 tracking-tight text-center">Sistema Atlantis</h1>
          <p className="text-sm text-gray-500 text-center">Gestão de Hotéis & Resorts</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">E-mail de Acesso</label>
            <input 
              type="email" 
              required
              className="w-full border border-gray-300 rounded-xs p-2.5 focus:ring-1 focus:ring-teal-500 outline-none transition text-sm"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Senha</label>
            <input 
              type="password" 
              required
              className="w-full border border-gray-300 rounded-xs p-2.5 focus:ring-1 focus:ring-teal-500 outline-none transition text-sm"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-1 gap-2 sm:gap-0">
            <label className="flex items-center text-xs text-gray-600">
              <input type="checkbox" defaultChecked className="mr-1.5 text-teal-600 rounded-xs" /> Lembrar de mim
            </label>
            <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-xs text-teal-600 hover:underline">Esqueceu a senha?</a>
          </div>
          <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xs font-medium transition shadow mt-2">
            Entrar no Sistema
          </button>
        </form>
      </div>
    </div>
  );
};

export default function AtlantisApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [clients, setClients] = useState(initialClients);
  const [rooms, setRooms] = useState(initialRooms);
  const [hostings, setHostings] = useState(initialHostings);

  const [clientsPage, setClientsPage] = useState(1);
  const [roomsPage, setRoomsPage] = useState(1);
  const [hostingsPage, setHostingsPage] = useState(1);
  const itemsPerPage = 5;
  const roomsPerPage = 6;

  const handleNavClick = (viewId) => {
    setCurrentView(viewId);
    setIsMobileMenuOpen(false);
  };

  const [isClientModalOpen, setClientModalOpen] = useState(false);
  const [currentClient, setCurrentClient] = useState({ id: null, name: '', socialName: '', cpf: '', birthDate: '' });

  const openClientModal = (client = null) => {
    setCurrentClient(client || { id: null, name: '', socialName: '', cpf: '', birthDate: '' });
    setClientModalOpen(true);
  };

  const handleSaveClient = (e) => {
    e.preventDefault();
    if (currentClient.id) {
      setClients(clients.map(c => c.id === currentClient.id ? currentClient : c));
    } else {
      setClients([...clients, { ...currentClient, id: Date.now() }]);
    }
    setClientModalOpen(false);
  };

  const handleDeleteClient = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este hóspede?")) {
      setClients(clients.filter(c => c.id !== id));
      setHostings(hostings.filter(h => h.clientId !== id));
      setClientsPage(1);
    }
  };

  const [isRoomModalOpen, setRoomModalOpen] = useState(false);
  const [currentRoom, setCurrentRoom] = useState({ id: null, name: '', type: 'Simples', singleBeds: 0, doubleBeds: 0, suites: 0, ac: false, garage: 0 });

  const openRoomModal = (room = null) => {
    setCurrentRoom(room || { id: null, name: '', type: 'Simples', singleBeds: 0, doubleBeds: 0, suites: 0, ac: false, garage: 0 });
    setRoomModalOpen(true);
  };

  const handleSaveRoom = (e) => {
    e.preventDefault();
    const formattedRoom = {
      ...currentRoom,
      singleBeds: parseInt(currentRoom.singleBeds) || 0,
      doubleBeds: parseInt(currentRoom.doubleBeds) || 0,
      suites: parseInt(currentRoom.suites) || 0,
      garage: parseInt(currentRoom.garage) || 0,
    };

    if (currentRoom.id) {
      setRooms(rooms.map(r => r.id === currentRoom.id ? formattedRoom : r));
    } else {
      setRooms([...rooms, { ...formattedRoom, id: Date.now() }]);
    }
    setRoomModalOpen(false);
  };

  const handleDeleteRoom = (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta acomodação?")) {
      setRooms(rooms.filter(r => r.id !== id));
      setHostings(hostings.filter(h => h.roomId !== id));
      setRoomsPage(1);
    }
  };

  const getClientName = (id) => clients.find(c => c.id === id)?.name || 'Hóspede Removido';
  const getRoomName = (id) => rooms.find(r => r.id === id)?.name || 'Quarto Removido';

  const renderDashboard = () => (
    <div className="space-y-6">
      <h2 className="text-xl sm:text-2xl font-bold text-sky-900">Visão Geral</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {[
          { label: 'Total de Hóspedes', value: clients.length, icon: Users, bg: 'bg-sky-100', text: 'text-sky-600' },
          { label: 'Quartos Ocupados', value: hostings.length, icon: BedDouble, bg: 'bg-teal-100', text: 'text-teal-600' },
          { label: 'Quartos Livres', value: rooms.length - hostings.length, icon: Palmtree, bg: 'bg-amber-100', text: 'text-amber-600' },
        ].map((card, idx) => (
          <div key={idx} className="bg-white p-4 sm:p-6 rounded-xs shadow-sm border border-sky-100 flex items-center space-x-4">
            <div className={`p-3 sm:p-4 ${card.bg} ${card.text} rounded-xs`}>
              <card.icon className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">{card.label}</p>
              <p className="text-2xl sm:text-3xl font-bold text-sky-900">{card.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderClients = () => {
    const totalPages = Math.ceil(clients.length / itemsPerPage) || 1;
    const startIndex = (clientsPage - 1) * itemsPerPage;
    const paginatedClients = clients.slice(startIndex, startIndex + itemsPerPage);

    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          <h2 className="text-xl sm:text-2xl font-bold text-sky-900">Hóspedes</h2>
          <button onClick={() => openClientModal()} className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xs flex items-center justify-center transition shadow-sm">
            <Plus size={18} className="mr-2" /> Novo Hóspede
          </button>
        </div>
        
        <div className="bg-white rounded-xs shadow-sm border border-sky-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left table-auto">
              <thead className="bg-sky-50 text-sky-900 border-b border-sky-100">
                <tr>
                  <th className="p-4 font-semibold text-sm">Nome</th>
                  <th className="p-4 font-semibold text-sm">CPF</th>
                  <th className="p-4 font-semibold text-sm">Nascimento</th>
                  <th className="p-4 font-semibold text-right text-sm">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sky-100">
                {paginatedClients.map(client => (
                  <tr key={client.id} className="hover:bg-sky-50/50 transition">
                    <td className="p-4">
                      <p className="font-medium text-gray-800 text-sm sm:text-base">{client.name}</p>
                      {client.socialName && <p className="text-xs text-gray-500">Nome Social: {client.socialName}</p>}
                    </td>
                    <td className="p-4 text-gray-600 font-mono text-sm">{client.cpf}</td>
                    <td className="p-4 text-gray-600 text-sm">{client.birthDate}</td>
                    <td className="p-4 flex justify-end space-x-1.5">
                      <button onClick={() => openClientModal(client)} className="p-2 text-sky-600 hover:bg-sky-100 rounded-xs transition">
                        <Edit size={16} />
                      </button>
                      <button onClick={() => handleDeleteClient(client.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-xs transition">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 border-t border-sky-100 flex flex-col sm:flex-row justify-between items-center gap-3">
            <span className="text-xs sm:text-sm text-gray-600">Página {clientsPage} de {totalPages}</span>
            <div className="flex space-x-2 w-full sm:w-auto">
              <button 
                disabled={clientsPage === 1}
                onClick={() => setClientsPage(prev => Math.max(prev - 1, 1))}
                className="flex-1 sm:flex-none px-4 py-2 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded-xs hover:bg-slate-50 disabled:opacity-50 transition"
              >
                Anterior
              </button>
              <button 
                disabled={clientsPage === totalPages}
                onClick={() => setClientsPage(prev => Math.min(prev + 1, totalPages))}
                className="flex-1 sm:flex-none px-4 py-2 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded-xs hover:bg-slate-50 disabled:opacity-50 transition"
              >
                Próximo
              </button>
            </div>
          </div>
        </div>

        <Modal isOpen={isClientModalOpen} onClose={() => setClientModalOpen(false)} title={currentClient.id ? 'Editar Hóspede' : 'Novo Hóspede'}>
          <form onSubmit={handleSaveClient} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
              <input required type="text" className="w-full border border-gray-300 rounded-xs p-2 focus:ring-1 focus:ring-teal-500 outline-none transition" 
                     value={currentClient.name} onChange={e => setCurrentClient({...currentClient, name: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nome Social</label>
              <input type="text" className="w-full border border-gray-300 rounded-xs p-2 focus:ring-1 focus:ring-teal-500 outline-none transition" 
                     value={currentClient.socialName} onChange={e => setCurrentClient({...currentClient, socialName: e.target.value})} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CPF *</label>
                <input required type="text" placeholder="000.000.000-00" className="w-full border border-gray-300 rounded-xs p-2 focus:ring-1 focus:ring-teal-500 outline-none transition" 
                       value={currentClient.cpf} onChange={e => setCurrentClient({...currentClient, cpf: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Data de Nascimento *</label>
                <input required type="date" className="w-full border border-gray-300 rounded-xs p-2 focus:ring-1 focus:ring-teal-500 outline-none transition" 
                       value={currentClient.birthDate} onChange={e => setCurrentClient({...currentClient, birthDate: e.target.value})} />
              </div>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row justify-end gap-2 sm:space-x-2">
              <button type="button" onClick={() => setClientModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xs transition w-full sm:w-auto">Cancelar</button>
              <button type="submit" className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xs transition w-full sm:w-auto">Salvar</button>
            </div>
          </form>
        </Modal>
      </div>
    );
  };

  const renderRooms = () => {
    const totalPages = Math.ceil(rooms.length / roomsPerPage) || 1;
    const startIndex = (roomsPage - 1) * roomsPerPage;
    const paginatedRooms = rooms.slice(startIndex, startIndex + roomsPerPage);

    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          <h2 className="text-xl sm:text-2xl font-bold text-sky-900">Acomodações</h2>
          <button onClick={() => openRoomModal()} className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xs flex items-center justify-center transition shadow-sm">
            <Plus size={18} className="mr-2" /> Nova Acomodação
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {paginatedRooms.map(room => (
            <div key={room.id} className="bg-white rounded-xs shadow-sm border border-sky-100 overflow-hidden hover:shadow-md transition flex flex-col group relative">
              <div className="bg-sky-800 p-4 text-white relative">
                <div className="flex justify-between items-start pr-16 sm:pr-12">
                  <h3 className="text-lg font-semibold leading-tight">{room.name}</h3>
                  <span className="bg-teal-500 text-white text-xs px-2.5 py-0.5 rounded-xs font-medium">{room.type}</span>
                </div>
                <div className="absolute top-3 right-3 flex space-x-1 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => openRoomModal(room)} className="p-1.5 bg-sky-700 hover:bg-sky-600 rounded-xs text-white">
                    <Edit size={14} />
                  </button>
                  <button onClick={() => handleDeleteRoom(room.id)} className="p-1.5 bg-red-600 hover:bg-red-500 rounded-xs text-white">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              <div className="p-4 space-y-4 text-gray-600 text-sm flex-1">
                <div className="grid grid-cols-2 gap-x-2 gap-y-3">
                  <span className="flex items-center"><BedDouble size={16} className="mr-2 text-teal-600 flex-shrink-0" /> Casal: {room.doubleBeds}</span>
                  <span className="flex items-center"><BedDouble size={16} className="mr-2 text-teal-600 flex-shrink-0" /> Solteiro: {room.singleBeds}</span>
                  <span className="flex items-center"><MapPin size={16} className="mr-2 text-amber-600 flex-shrink-0" /> Suítes: {room.suites}</span>
                  <span className="flex items-center"><Car size={16} className="mr-2 text-amber-600 flex-shrink-0" /> Vagas: {room.garage}</span>
                </div>
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between font-medium">
                  {room.ac ? (
                    <span className="text-teal-700 flex items-center"><Wind size={16} className="mr-2" /> Climatizado</span>
                  ) : (
                    <span className="text-gray-400 flex items-center"><Wind size={16} className="mr-2" /> Sem Ar</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 bg-white rounded-xs border border-sky-100 flex flex-col sm:flex-row justify-between items-center gap-3 shadow-sm">
          <span className="text-xs sm:text-sm text-gray-600">Página {roomsPage} de {totalPages}</span>
          <div className="flex space-x-2 w-full sm:w-auto">
            <button 
              disabled={roomsPage === 1}
              onClick={() => setRoomsPage(prev => Math.max(prev - 1, 1))}
              className="flex-1 sm:flex-none px-4 py-2 bg-slate-50 border border-gray-300 text-gray-700 text-xs font-medium rounded-xs hover:bg-slate-100 disabled:opacity-50 transition"
            >
              Anterior
            </button>
            <button 
              disabled={roomsPage === totalPages}
              onClick={() => setRoomsPage(prev => Math.min(prev + 1, totalPages))}
              className="flex-1 sm:flex-none px-4 py-2 bg-slate-50 border border-gray-300 text-gray-700 text-xs font-medium rounded-xs hover:bg-slate-100 disabled:opacity-50 transition"
            >
              Próximo
            </button>
          </div>
        </div>

        <Modal isOpen={isRoomModalOpen} onClose={() => setRoomModalOpen(false)} title={currentRoom.id ? 'Editar Acomodação' : 'Nova Acomodação'}>
          <form onSubmit={handleSaveRoom} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Identificação / Número *</label>
                <input required type="text" placeholder="Ex: Casal Master 201" className="w-full border border-gray-300 rounded-xs p-2 focus:ring-1 focus:ring-teal-500 outline-none" 
                       value={currentRoom.name} onChange={e => setCurrentRoom({...currentRoom, name: e.target.value})} />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
                <select className="w-full border border-gray-300 rounded-xs p-2 focus:ring-1 focus:ring-teal-500 outline-none bg-white"
                        value={currentRoom.type} onChange={e => setCurrentRoom({...currentRoom, type: e.target.value})}>
                  <option value="Simples">Simples</option>
                  <option value="Luxo">Luxo</option>
                  <option value="Resort">Resort Master</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Camas Solteiro</label>
                <input type="number" min="0" className="w-full border border-gray-300 rounded-xs p-2 outline-none" 
                       value={currentRoom.singleBeds} onChange={e => setCurrentRoom({...currentRoom, singleBeds: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Camas Casal</label>
                <input type="number" min="0" className="w-full border border-gray-300 rounded-xs p-2 outline-none" 
                       value={currentRoom.doubleBeds} onChange={e => setCurrentRoom({...currentRoom, doubleBeds: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Suítes</label>
                <input type="number" min="0" className="w-full border border-gray-300 rounded-xs p-2 outline-none" 
                       value={currentRoom.suites} onChange={e => setCurrentRoom({...currentRoom, suites: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vagas Garagem</label>
                <input type="number" min="0" className="w-full border border-gray-300 rounded-xs p-2 outline-none" 
                       value={currentRoom.garage} onChange={e => setCurrentRoom({...currentRoom, garage: e.target.value})} />
              </div>
              <div className="sm:col-span-2 flex items-center mt-2">
                <input type="checkbox" id="ac" className="w-4 h-4 text-teal-600 rounded-xs border-gray-300 focus:ring-teal-500"
                       checked={currentRoom.ac} onChange={e => setCurrentRoom({...currentRoom, ac: e.target.checked})} />
                <label htmlFor="ac" className="ml-2 block text-sm font-medium text-gray-700">Possui Ar Condicionado?</label>
              </div>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row justify-end gap-2 sm:space-x-2">
              <button type="button" onClick={() => setRoomModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xs transition w-full sm:w-auto">Cancelar</button>
              <button type="submit" className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xs transition w-full sm:w-auto">Salvar</button>
            </div>
          </form>
        </Modal>
      </div>
    );
  };

  const HostingManager = () => {
    const [isHostingModalOpen, setHostingModalOpen] = useState(false);
    const [currentHosting, setCurrentHosting] = useState({ id: null, clientId: '', roomId: '', checkInDate: '', checkOutDate: '' });

    const openHostingModal = (hosting = null) => {
      if (hosting) {
        setCurrentHosting(hosting);
      } else {
        setCurrentHosting({ id: null, clientId: '', roomId: '', checkInDate: new Date().toISOString().split('T')[0], checkOutDate: '' });
      }
      setHostingModalOpen(true);
    };

    const handleSaveHosting = (e) => {
      e.preventDefault();
      const newHosting = {
        ...currentHosting,
        clientId: parseInt(currentHosting.clientId),
        roomId: parseInt(currentHosting.roomId),
      };

      if (currentHosting.id) {
        setHostings(hostings.map(h => h.id === currentHosting.id ? newHosting : h));
      } else {
        setHostings([...hostings, { ...newHosting, id: Date.now() }]);
      }
      setHostingModalOpen(false);
    };

    const handleDeleteHosting = (id) => {
      if (window.confirm("Deseja encerrar esta hospedagem?")) {
        setHostings(hostings.filter(h => h.id !== id));
        setHostingsPage(1);
      }
    };

    const getAvailableRooms = () => {
      return rooms.filter(room => {
        const isOccupied = hostings.some(h => h.roomId === room.id);
        const isCurrentEditRoom = currentHosting.roomId == room.id;
        return !isOccupied || isCurrentEditRoom;
      });
    };

    const totalPages = Math.ceil(hostings.length / itemsPerPage) || 1;
    const startIndex = (hostingsPage - 1) * itemsPerPage;
    const paginatedHostings = hostings.slice(startIndex, startIndex + itemsPerPage);

    return (
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
          <h2 className="text-xl sm:text-2xl font-bold text-sky-900">Registro de Hospedagem</h2>
          <button onClick={() => openHostingModal()} className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-xs flex items-center justify-center transition shadow-sm">
            <CheckCircle size={18} className="mr-2" /> Novo Check-in
          </button>
        </div>

        <div className="bg-white rounded-xs shadow-sm border border-sky-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px] text-left table-auto">
              <thead className="bg-sky-50 text-sky-900 border-b border-sky-100">
                <tr>
                  <th className="p-4 font-semibold text-sm">Hóspede (Titular)</th>
                  <th className="p-4 font-semibold text-sm">Acomodação (Quarto)</th>
                  <th className="p-4 font-semibold text-sm">Check-in</th>
                  <th className="p-4 font-semibold text-sm">Check-out</th>
                  <th className="p-4 font-semibold text-right text-sm">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sky-100">
                {paginatedHostings.map(h => (
                  <tr key={h.id} className="hover:bg-sky-50/50 transition">
                    <td className="p-4 font-medium text-gray-800 text-sm">{getClientName(h.clientId)}</td>
                    <td className="p-4 text-gray-600 text-sm">{getRoomName(h.roomId)}</td>
                    <td className="p-4 text-gray-600 text-sm">{h.checkInDate}</td>
                    <td className="p-4 text-gray-600 text-sm">{h.checkOutDate || 'Pendente'}</td>
                    <td className="p-4 flex justify-end space-x-1.5">
                      <button onClick={() => openHostingModal(h)} className="p-2 text-sky-600 hover:bg-sky-100 rounded-xs transition">
                        <Edit size={16} />
                      </button>
                      <button onClick={() => handleDeleteHosting(h.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-xs transition">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
                {hostings.length === 0 && (
                  <tr>
                    <td colSpan="5" className="p-12 text-center text-gray-500">
                      <BedDouble size={32} className="mx-auto mb-3 text-gray-300"/>
                      Nenhum quarto ocupado no momento.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 border-t border-sky-100 flex flex-col sm:flex-row justify-between items-center gap-3">
            <span className="text-xs sm:text-sm text-gray-600">Página {hostingsPage} de {totalPages}</span>
            <div className="flex space-x-2 w-full sm:w-auto">
              <button 
                disabled={hostingsPage === 1}
                onClick={() => setHostingsPage(prev => Math.max(prev - 1, 1))}
                className="flex-1 sm:flex-none px-4 py-2 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded-xs hover:bg-slate-50 disabled:opacity-50 transition"
              >
                Anterior
              </button>
              <button 
                disabled={hostingsPage === totalPages}
                onClick={() => setHostingsPage(prev => Math.min(prev + 1, totalPages))}
                className="flex-1 sm:flex-none px-4 py-2 bg-white border border-gray-300 text-gray-700 text-xs font-medium rounded-xs hover:bg-slate-50 disabled:opacity-50 transition"
              >
                Próximo
              </button>
            </div>
          </div>
        </div>

        <Modal isOpen={isHostingModalOpen} onClose={() => setHostingModalOpen(false)} title={currentHosting.id ? 'Editar Check-in' : 'Novo Check-in'}>
          <form onSubmit={handleSaveHosting} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Selecionar Hóspede *</label>
              <select required value={currentHosting.clientId} onChange={e => setCurrentHosting({...currentHosting, clientId: e.target.value})}
                      className="w-full border border-gray-300 rounded-xs p-2 focus:ring-1 focus:ring-teal-500 outline-none bg-white">
                <option value="">-- Escolha um hóspede --</option>
                {clients.map(c => (
                  <option key={c.id} value={c.id}>{c.name} ({c.cpf})</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Acomodação Disponível *</label>
              <select required value={currentHosting.roomId} onChange={e => setCurrentHosting({...currentHosting, roomId: e.target.value})}
                      className="w-full border border-gray-300 rounded-xs p-2 focus:ring-1 focus:ring-teal-500 outline-none bg-white">
                <option value="">-- Escolha um quarto --</option>
                {getAvailableRooms().map(r => (
                  <option key={r.id} value={r.id}>{r.name} - {r.type}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Data de Check-in *</label>
                <input required type="date" className="w-full border border-gray-300 rounded-xs p-2 focus:ring-1 focus:ring-teal-500 outline-none" 
                       value={currentHosting.checkInDate} onChange={e => setCurrentHosting({...currentHosting, checkInDate: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Data de Check-out</label>
                <input type="date" className="w-full border border-gray-300 rounded-xs p-2 focus:ring-1 focus:ring-teal-500 outline-none" 
                       value={currentHosting.checkOutDate} onChange={e => setCurrentHosting({...currentHosting, checkOutDate: e.target.value})} />
              </div>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row justify-end gap-2 sm:space-x-2">
              <button type="button" onClick={() => setHostingModalOpen(false)} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xs transition w-full sm:w-auto">Cancelar</button>
              <button type="submit" className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xs transition w-full sm:w-auto">Salvar Hospedagem</button>
            </div>
          </form>
        </Modal>
      </div>
    );
  };

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard': return renderDashboard();
      case 'clients': return renderClients();
      case 'rooms': return renderRooms();
      case 'checkin': return <HostingManager />;
      default: return renderDashboard();
    }
  };

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="flex h-screen bg-slate-50 font-sans antialiased text-gray-800 overflow-hidden">
      
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden transition-opacity" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}

      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-sky-900 text-white flex flex-col shadow-2xl transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex items-center justify-between md:justify-center border-b border-sky-800">
          <div className="flex items-center">
            <div className="bg-teal-500 text-white p-2 rounded-xs mr-3.5 shadow">
              <Palmtree size={22} />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Atlantis<span className='text-teal-400'>.</span></h1>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden text-sky-200 hover:text-white">
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex-1 px-4 py-6 sm:py-8 space-y-2.5 overflow-y-auto">
          {[
            { id: 'dashboard', icon: Home, label: 'Dashboard' },
            { id: 'clients', icon: Users, label: 'Hóspedes' },
            { id: 'rooms', icon: BedDouble, label: 'Catálogo de Quartos' },
            { id: 'checkin', icon: KeyRound, label: 'Hospedagens' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex items-center px-4 py-3 rounded-xs transition-colors duration-150 ${
                currentView === item.id 
                  ? 'bg-teal-600 text-white font-medium border-teal-500' 
                  : 'text-sky-100 hover:bg-sky-800 hover:text-white'
              }`}
            >
              <item.icon size={20} className={`mr-3.5 flex-shrink-0 ${currentView === item.id ? 'text-white' : 'text-teal-400'}`} />
              <span className="truncate">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-sky-800 bg-sky-950/30">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2.5 overflow-hidden">
              <div className="w-9 h-9 bg-teal-500 text-white rounded-xs flex flex-shrink-0 items-center justify-center font-bold text-sm shadow">
                AD
              </div>
              <div className="truncate pr-2">
                <p className="text-sm font-semibold text-white leading-tight truncate">Laís Zanardi</p>
                <p className="text-xs text-sky-300">Administrador</p>
              </div>
            </div>
            <button 
              onClick={() => { setIsLoggedIn(false); setCurrentView('dashboard'); setIsMobileMenuOpen(false); }} 
              className="p-2 flex-shrink-0 text-sky-300 hover:text-red-400 hover:bg-sky-800 rounded-xs transition"
            >
              <LogOut size={16} />
            </button>
          </div>
          <div className="text-center text-[10px] text-sky-500 pt-1 border-t border-sky-800/40">
            V5.0 
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="bg-white shadow-sm border-b border-sky-100 h-16 flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(true)} 
              className="text-sky-900 p-2 -ml-2 rounded-xs hover:bg-sky-50 transition"
            >
              <MenuIcon size={24} />
            </button>
            <h1 className="text-lg sm:text-xl font-bold text-sky-900 ml-1 sm:ml-2 flex items-center">
               <Palmtree size={18} className='mr-1.5 sm:mr-2 text-teal-600'/> Atlantis
            </h1>
          </div>
          
          <div className="flex items-center space-x-3 ml-auto">
            <div className="w-8 h-8 bg-sky-200 rounded-xs flex items-center justify-center text-sky-800 font-bold border border-sky-300">
              LZ
            </div>
            <span className="text-sm font-medium text-gray-700 hidden sm:block">Laís Zanardi</span>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4 sm:p-6 md:p-8 bg-slate-100/60">
          <div className="max-w-7xl mx-auto pb-8">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}