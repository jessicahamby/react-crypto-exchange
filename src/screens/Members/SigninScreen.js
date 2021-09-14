import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import MainLayout from '../../layouts/MainLayout';
import Box from '../../components/Common/Box';
import FormInput from '../../components/Forms/FormInput';
import FormButton from '../../components/Forms/FormButton';

const SigninScreen = () => {
  const history = useHistory();

  const [formValues, setFormValues] = useState({
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    history.push('/market');
  };

  return (
    <MainLayout>
      <div className='flex flex-center full-height'>
        <div className='login no-select'>
          <Box>
            <div className='box-vertical-padding box-horizontal-padding'>
              <div>
                <div className='form-logo center'>
                  <img src='/images/btclever-logo.png' alt='BTClever' draggable='false' />
                </div>
                <h1 className='form-title center'>Üye girişi</h1>
                <p className='form-desc center'>
                  Lütfen tarayıcınızın adres çubuğunda <strong>https://pro.btclever.com</strong>{' '}
                  yazdığından emin olunuz.
                </p>
                <form className='form' onSubmit={handleSubmit} noValidate>
                  <div className='form-elements'>
                    <div className='form-line'>
                      <label htmlFor='phone'>Telefon numaranız</label>
                      <FormInput
                        type='text'
                        name='phone'
                        value={formValues.phone}
                        placeholder='Telefon numaranızı girin'
                        onChange={handleChange}
                      />
                    </div>
                    <div className='form-line'>
                      <label htmlFor='password'>Şifreniz</label>
                      <FormInput
                        type='password'
                        name='password'
                        value={formValues.password}
                        placeholder='Şifrenizi girin'
                        onChange={handleChange}
                      />
                    </div>
                    <div className='form-line right'>
                      <Link to='/'>Şifremi unuttum</Link>
                    </div>
                    <div className='form-line'>
                      <div className='buttons'>
                        <FormButton type='submit' text='Giriş yap' onClick={handleSubmit} />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='center'>
                        <p>
                          Hesabınız yoksa <Link to='/'>yeni hesap</Link> oluşturun.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </MainLayout>
  );
};

export default SigninScreen;
