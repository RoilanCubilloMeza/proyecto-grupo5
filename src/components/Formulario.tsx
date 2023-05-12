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
    //RegistrationForm
    console.log('Nombre:', name);
    console.log('Correo electrónico:', email);
    console.log('Empresa:', company);
    console.log('Telefono:', telephone);
    console.log('Motivo:', reason);
  };

  //agregar apellido1 y apellido2 

  return (
    <div className='d-flex justify-content-center  p-3 mb-2 bg-secondary text-white'>

    <form 
    onSubmit={handleSubmit}>
        <div className='m-10'>
      <div className='p-1'>
        <label  htmlFor="name">Nombre:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div className='p-1'>
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <div className='p-1'>
        <label htmlFor="company">Empresa:</label>
        <input type="text" id="company" value={company} onChange={handleCompanyChange} />
      </div>
      <div className='p-1'>
        <label htmlFor="telephone">Telefono:</label>
        <input type="text" id="telephone" value={telephone} onChange={handleTelephoneChange} />
      </div>
      <div className='p-1'>
        <label htmlFor="reason">Motivo:</label>
        <input type="text" id="reason" value={reason} onChange={handleReasonChange} />
      </div>
      </div>
      <button  type="submit">Enviar</button>
    </form>
    </div>
  );
};

export default RegistrationForm;