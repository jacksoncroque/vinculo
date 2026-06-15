import { NavLink } from 'react-router';

import { useState } from 'react';

import { useAuthContext } from '../../contexts/AuthContext';

import Button from '../../components/Button/Button';
import Input from '../../components/Input';

import styles from './Register.module.scss';

const Register = () => {
  const { handleRegister } = useAuthContext();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const handleChangeName = (e) => {
    setName(e.target.value.replace(/\s+/g, ' '));
  };

  const nameValidation = (name) => {
    if (name === '') {
      return 'O nome não pode estar vazio';
    }

    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/;

    return regex.test(name) ? null : 'Informe um nome válido';
  };

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
      return 'O campo senha deve conter ao menos 6 caracteres';
    }

    return null;
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const confirmPasswordValidation = (confirmPassword) => {
    if (confirmPassword === '') {
      return 'Confirme novamente sua senha';
    }

    if (confirmPassword !== password) {
      return 'As senhas devem ser iguais em ambos os campos';
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const normalizedName = name.trim().replace(/\s+/g, ' ');
    const normalizedEmail = email.trim().toLowerCase();

    const nameError = nameValidation(normalizedName);
    const emailError = emailValidation(normalizedEmail);
    const passwordError = passwordValidation(password);
    const confirmPasswordError = confirmPasswordValidation(confirmPassword);

    if (nameError) return setMessage(nameError);
    if (emailError) return setMessage(emailError);
    if (passwordError) return setMessage(passwordError);
    if (confirmPasswordError) return setMessage(confirmPasswordError);

    setMessage(null);

    const response = await handleRegister(normalizedName, normalizedEmail, password);

    if (!response.success) {
      return setMessage(response.error || 'Erro ao criar conta.');
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.containerWrapper}>
          <div className={styles.containerWrapperLogo}>
            <span>v</span>
            <h3>vínculo</h3>
          </div>
          <div className={styles.containerWrapperWelcome}>
            <h1>Criar sua conta</h1>
            <p>Leva menos de um minuto. Sem foto, sem complicação.</p>
          </div>
          {message ? <div className={styles.containerWrapperError}>{message}</div> : <></>}
          <form onSubmit={handleSubmit}>
            <Input
              label="Nome completo"
              text="text"
              type="text"
              name="text"
              id="text"
              placeholder="Como devemos te chamar?"
              onChange={handleChangeName}
              value={name}
            />
            <Input
              label="E-mail"
              text="E-mail"
              type="text"
              name="email"
              id="email"
              placeholder="voce@exemplo.com"
              onChange={handleChangeEmail}
              value={email}
            />
            <div className={styles.containerWrapperForgotPass}>
              <Input
                label="Senha"
                type="password"
                name="password"
                id="password"
                placeholder="Mínimo 6 caracteres"
                onChange={handleChangePassword}
                value={password}
              />
            </div>
            <Input
              label="Confirmar senha"
              type="password"
              name="password"
              id="confirmPassword"
              placeholder="Repita a senha"
              onChange={handleChangeConfirmPassword}
              value={confirmPassword}
            />
            <Button
              type="submit"
              label={'Criar conta'}
            />
          </form>
          <div className={styles.containerWrapperRegister}>
            <p>Já tem uma conta? </p>
            <NavLink to="/login"> Voltar ao login</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
