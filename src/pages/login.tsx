import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/redux/store';
import { useSelector } from 'react-redux';
import { login, selectError, selectLoading } from '@/redux/slice/registerSlice';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const router = useRouter();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(login({ email, password, rol: 'client' }))
      .unwrap()
      .then(() => {
        router.push('/Dashboard');
      });}
      const handleSubmit1 = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(login({ email, password, rol: 'admin' }))
          .unwrap()
          .then(() => {
            router.push('/Dashboard');
          });
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" disabled={loading}>Login</button>
      </form>
    </div>
  );
};

export default Login;
