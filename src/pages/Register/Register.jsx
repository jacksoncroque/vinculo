import { NavLink } from 'react-router';

import Button from '../../components/Button/Button';
import Input from '../../components/Input';

import styles from './Register.module.scss';

const Register = () => {
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
          <form>
            <Input
              label="Nome completo"
              text="text"
              type="text"
              name="text"
              id="text"
              placeholder="Como devemos te chamar?"
              required
            />
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
              <Input
                label="Senha"
                type="password"
                name="password"
                id="password"
                placeholder="Mínimo 6 caracteres"
                required
              />
            </div>
            <Input
              label="Confirmar senha"
              type="password"
              name="password"
              id="password"
              placeholder="Repita a senha"
              required
            />
            <Button
              type="submit"
              label={'Entrar'}
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
