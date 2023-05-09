import { useState } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Nombre:', name);
    console.log('Correo electrónico:', email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default RegistrationForm;