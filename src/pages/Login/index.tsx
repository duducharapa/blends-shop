import { ReactElement, useRef } from 'react';
import { Layout } from '../../components/Layout';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { BackButton } from '../../components/BackButton';
import { classNames } from 'primereact/utils';
import css from './login.module.css';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { getAuthToken } from '../../services/auth';
import { Toast } from 'primereact/toast';
import { ResponseData } from '../../interfaces/Requests';

type Inputs = {
  accessCode: string
  password: string
}

const Login = (): ReactElement => {
  const toast = useRef<Toast>(null);
  const defaultValues: Inputs = {
    accessCode: '',
    password: '',
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ defaultValues });

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    const response: ResponseData<void> = await getAuthToken(data.accessCode, data.password);

    switch (response.status) {
      case 200:
        console.log(response.authToken);
        reset();
        break;
      case 403:
        toast.current?.show({
          severity: 'error',
          summary: 'Credenciais inválidas',
          detail: 'As credenciais fornecidas são inválidas',
        });
        break;
      default:
        toast.current?.show({
          severity: 'error',
          summary: 'Falha na conexão!',
          detail: 'Erro ao conectar com o servidor!',
        });
    }
  };

  return (
    <Layout>
      <div className='min-h-screen p-fluid flex flex-column align-items-center'>
        <div className='px-5 my-5 align-self-start'>
          <BackButton />
        </div>
        <form
          className={`w-16rem md:w-30rem p-5 border-round ${css.formcontainer}`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <h4 className={`text-center text-primary text-4xl ${css.title}`}>Login</h4>
          <div className='my-5'>
            <Controller
              name='accessCode'
              control={control}
              rules={{ required: 'Informe seu código de acesso' }}
              render={({ field }) => (
                <>
                  <span className='p-input-icon-left p-float-label mb-1'>
                    <i className='pi pi-user' />
                    <InputText
                      className={classNames({ 'p-invalid': errors.accessCode })}
                      {...field}
                    />
                    <label htmlFor={field.name}>Código de acesso</label>
                  </span>
                  <small className="p-error">{errors.accessCode?.message}</small>
                </>
              )}
            />
          </div>
          <div className='mb-5'>
            <Controller
              name='password'
              control={control}
              rules={{ required: 'Informe sua senha' }}
              render={({ field }) => (
                <>
                  <span className='p-input-icon-left p-float-label mb-1'>
                    <i className='pi pi-key' />
                    <InputText
                      className={classNames({ 'p-invalid': errors.password })}
                      type='password' {...field}
                    />
                    <label htmlFor={field.name}>Senha</label>
                  </span>
                  <small className="p-error">{errors.password?.message}</small>
                </>
              )}
            />
          </div>
          <Button label='Entrar' type='submit' className='mb-3' />
        </form>
      </div>
      <Toast ref={toast} />
    </Layout>
  );
};

export {
  Login,
};
