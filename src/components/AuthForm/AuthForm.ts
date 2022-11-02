import tpl from './AuthForm.hbs';
import * as css from './AuthForm.module.scss';
import { Field } from '../Field';
import { Button } from '../Button';
import { Component } from '~/src/typings/types';

export const AuthForm: Component = (properties) => {
  return tpl({
    ...properties,
    LoginField: Field({
      className: css.field,
      type: 'text',
      id: 'login',
      name: 'login',
      label: 'Логин',
      placeholder: 'Логин',
    }),
    PasswordField: Field({
      className: css.field,
      type: 'password',
      id: 'password',
      name: 'password',
      label: 'Пароль',
      placeholder: 'Пароль',
    }),
    EnterButton: Button({
      className: css.button,
      text: 'Войти',
    }),
    RegButton: Button({
      className: css.button,
      text: 'Регистрация',
      href: 'reg.html',
    }),
  });
};
