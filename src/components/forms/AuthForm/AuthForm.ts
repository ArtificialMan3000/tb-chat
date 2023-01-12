import { validationRules } from '~/src/controller/fieldValidation';
import tpl from './AuthForm.hbs';
import * as css from './AuthForm.module.scss';
import { Field } from '../../Field';
import { Button } from '../../Button';
import { Component, TComponentProps } from '~/src/view/Component';
import { ButtonLink } from '~/src/view/ui/ButtonLink';
import { makeFields } from '../makeFields';
import { Form as FormBase } from '~/src/view/ui/Form';
import { outputForm } from '~/src/model/features/outputForm';
import { SignInController } from '~/src/controller';
import { withError, withMessage } from '~/src/hocs';

const FIELDS_DATA = [
  {
    type: 'text',
    id: 'login',
    name: 'login',
    label: 'Логин',
    placeholder: 'Логин',
  },
  {
    type: 'password',
    id: 'password',
    name: 'password',
    label: 'Пароль',
    placeholder: 'Пароль',
  },
];

const signInController = new SignInController();

export class AuthForm extends Component {
  render() {
    const fields = makeFields(FIELDS_DATA, { className: css.field });

    const Form = withMessage(withError(FormBase, 'signIn'), 'signIn');

    return this.compile(tpl, {
      ...this.props,
      css,
      Form: new Form({
        fields,
        buttons: [
          new Button({
            className: css.button,
            text: 'Войти',
            attr: { type: 'submit' },
          }),
          ButtonLink({
            className: css.button,
            text: 'Регистрация',
            location: '/reg',
          }),
        ],
        events: {
          submit: [
            (evt: Event) => {
              evt.preventDefault();
              if (evt.target) {
                outputForm(evt.target as HTMLFormElement);
              }
            },
            signInController.onSignInFormSubmit,
          ],
        },
      }),
    });
  }
}
