import { useState } from 'react';
const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [telephone, setTelephone] = useState('');
  const [reason, setReason] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleCompanyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany(event.target.value);
  };

  const handleTelephoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelephone(event.target.value);
  };

  const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReason(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Nombre:', name);
    console.log('Correo electrónico:', email);
    console.log('Empresa:', company);
    console.log('Telefono:', telephone);
    console.log('Motivo:', reason);
  };


  return (
    <div className='container mt-3 text-center form-control '>
    <form 
    onSubmit={handleSubmit}>
      <div className='mb-3 mt-3'>
          <h3> Mas Informacion</h3>
          <div className='mb-3'>
        <label   className='form-label' htmlFor="name">Nombre:</label>
        <input className='form-control' type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div className='mb-3'>
        <label  className='form-label'htmlFor="email">Correo:</label>
        <input className='form-control' type="text" id="email" value={email} onChange={handleEmailChange} />
      </div>
      
      <div className='mb-3'>
        <label   className='form-label' htmlFor="company">Empresa:</label>
        <input className='form-control' type="text" id="company" value={company} onChange={handleCompanyChange} />
      </div>
      <div className='mb-3'>
        <label  className='form-label'htmlFor="telephone">Telefono:</label>
        <input className='form-control' type="text" id="telephone" value={telephone} onChange={handleTelephoneChange} />
      </div>
      <div className='mb-3'>
        <label  className='form-label'htmlFor="reason">Motivo:</label>
        <input  className='form-control'type="text" id="reason" value={reason} onChange={handleReasonChange} />
      </div>
    
      </div>
      <button  className='btn btn-success text-center' type="submit">Enviar</button>
    </form>
    </div>
  );
};

export default RegistrationForm;