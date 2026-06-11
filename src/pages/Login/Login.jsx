import { NavLink } from 'react-router';
import Button from '../../components/Button/Button';
import Input from '../../components/Input';
import styles from './Login.module.scss';
import Logo from '../../components/Logo/Logo';

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <Logo customStyles={styles.containerWrapperLogo} />
        <div className={styles.containerWrapperWelcome}>
          <h1>Bem-vindo de volta</h1>
          <p>Entre para ver o que seus amigos andam compartilhando.</p>
        </div>
        <form>
          <Input
            label="E-mail"
            text="E-mail"
            type="email"
            name="email"
            id="email"
            placeholder="voce@exemplo.com"
            required
          />
          <div className={styles.containerWrapperForgotPass}>
            <a>Esqueci minha senha</a>
            <Input
              label="Senha"
              type="password"
              name="password"
              id="password"
              placeholder="········"
              required
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
