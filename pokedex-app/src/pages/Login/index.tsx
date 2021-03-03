import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { SigninButton } from './styles';

import LoginLayout from '../../components/LoginLayout';

import { useAuth } from '../../hooks/auth';

interface SigninFormData {
  email?: string;
  password?: string;
}

const Login: React.FC = () => {
  const { signIn } = useAuth();

  const validate = (values: SigninFormData) => {
    const errors: SigninFormData = {};
    if (!values.email) {
      errors.email = 'O Campo de E-mail é Obrigatório';
    }

    if (!values.password) {
      errors.password = 'O Campo de Senha é Obrigatório';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      signIn({ email: values.email, password: values.password });
    },
  });

  return (
    <>
      <LoginLayout title="LOGIN">
        <main>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                id="email"
                name="email"
                placeholder="exemplo@email.com"
                onChange={formik.handleChange}
                value={formik.values.email}
                size="lg"
              />
              <Form.Text className="text-danger">
                <p className="mt-2">
                  {formik.errors.email ? formik.errors.email : null}
                </p>
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Senha"
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                size="lg"
              />
              <Form.Text className="text-danger">
                <p className="mt-2">
                  {formik.errors.password ? formik.errors.password : null}
                </p>
              </Form.Text>
            </Form.Group>
            <SigninButton size="lg" type="submit" className="w-100 mt-2">
              Entrar
            </SigninButton>
          </Form>
        </main>
        <div className="text-center mt-5">
          Ainda não possui uma conta?
          <Link to="/register" className="ps-2">
            Cadastre-se
          </Link>
        </div>
      </LoginLayout>
    </>
  );
};

export default Login;
