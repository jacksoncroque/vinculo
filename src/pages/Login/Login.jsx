import { NavLink } from 'react-router';

import { useEffect, useState } from 'react';

import { useGlobalContext } from '../../contexts/GlobalContext';

import Button from '../../components/Button/Button';
import Input from '../../components/Input';
import Logo from '../../components/Logo/Logo';

import styles from './Login.module.scss';

const Login = () => {
  const { handleLogin } = useGlobalContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const emailValidation = (email) => {
    if (email === '') {
      return 'O campo email não pode estar vazio.';
    }

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$/;

    return regex.test(email) ? null : 'Informe um email  válido.';
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const passwordValidation = (password) => {
    if (password === '') {
      return 'O campo senha não pode estar vazio';
    }

    if (password.length < 6) {
      return 'A senha deve contar pelo menos 6 caracteres.';
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailIsOk = emailValidation(email);
    if (emailIsOk !== null) {
      return setMessage(emailIsOk);
    }

    const passwordIsOk = passwordValidation(password);
    if (passwordIsOk !== null) {
      return setMessage(passwordIsOk);
    }

    await handleLogin(email, password);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <Logo customStyles={styles.containerWrapperLogo} />
        <div className={styles.containerWrapperWelcome}>
          <h1>Bem-vindo de volta</h1>
          <p>Entre para ver o que seus amigos andam compartilhando.</p>
        </div>
        {message ? <div className={styles.containerWrapperError}>{message}</div> : <></>}
        <form onSubmit={handleSubmit}>
          <Input
            label="E-mail"
            text="E-mail"
            type="text"
            name="email"
            id="email"
            value={email}
            placeholder="voce@exemplo.com"
            onChange={handleChangeEmail}
          />
          <div className={styles.containerWrapperForgotPass}>
            <a>Esqueci minha senha</a>
            <Input
              label="Senha"
              type="password"
              name="password"
              id="password"
              placeholder="········"
              value={password}
              onChange={handleChangePassword}
            />
          </div>
          <Button
            type="submit"
            label={'Entrar'}
          />
        </form>
        <div className={styles.containerWrapperRegister}>
          <p>Ainda não tem conta? </p>
          <NavLink to="/register"> Cadastre-se</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
