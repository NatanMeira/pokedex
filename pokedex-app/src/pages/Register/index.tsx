import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { SignUpButton } from './styles';
import LoginLayout from '../../components/LoginLayout';
import api from '../../services/api';

interface SignupFormData {
  email?: string;
  name?: string;
  password?: string;
}

const Register: React.FC = () => {
  const validate = (values: SignupFormData) => {
    const errors: SignupFormData = {};
    if (!values.email) {
      errors.email = 'O Campo E-mail é Obrigatório';
    }
    if (!values.password) {
      errors.password = 'O Campo Senha é Obrigatório';
    }
    if (!values.name) {
      errors.name = 'O Campo Nome é Obrigatório';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
    },
    validate,
    onSubmit: async values => {
      await api.post('/user', {
        name: values.name,
        email: values.email,
        password: values.password,
      });

      window.location.replace('/');
    },
  });

  return (
    <>
      <LoginLayout title="CADASTRE-SE">
        <main>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                size="lg"
              />
              <Form.Text className="text-danger">
                <p className="mt-2">
                  {formik.errors.name ? formik.errors.name : null}
                </p>
              </Form.Text>
            </Form.Group>
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
                placeholder="Password"
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
            <SignUpButton size="lg" type="submit" className="w-100 mt-2">
              Cadastrar
            </SignUpButton>
          </Form>
        </main>
        <div className="text-center mt-5">
          Já possui uma conta?
          <Link to="/login" className="ps-2">
            Entre
          </Link>
        </div>
      </LoginLayout>
    </>
  );
};

export default Register;
