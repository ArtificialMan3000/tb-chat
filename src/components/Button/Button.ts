import tpl from './Button.hbs';
import * as css from './Button.module.scss';
import { Component, TComponentProps } from '~/src/view/Component';
import { extendClassName } from '~/src/view/View';

type TProps = TComponentProps & {
  text?: string;
  attributes?: {
    type?: string;
  };
};

export class Button extends Component<TProps> {
  type: string;

  constructor(props: TProps) {
    const { className = '', attr } = props;

    const newClassName = extendClassName(css.button, className);

    const type = attr?.type || 'button';

    super({ ...props, className: newClassName, attr: { type } }, 'button');
  }

  render() {
    const { text } = this.props;

    return this.compile(tpl, { text });
  }
}
