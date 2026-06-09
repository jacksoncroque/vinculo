import { NavLink } from 'react-router';
import Button from '../../components/Button/Button';
import Input from '../../components/Input';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperLogo}>
          <span>v</span>
          <h3>vínculo</h3>
        </div>
        <div className={styles.containerWrapperWelcome}>
          <h1>Bem-vindo de volta</h1>
          <p>Entre para ver o que seus amigos andam compartilhando.</p>
        </div>
        <form>
          <label htmlFor="email">
            E-mail
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="voce@exemplo.com"
              required
            />
          </label>
          <div>
            <label htmlFor="password">Senha</label>
            <span>Esqueci minha senha</span>
          </div>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="········"
            required
          />
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
