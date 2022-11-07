import tpl from './ButtonLink.hbs';
import * as css from './ButtonLink.module.scss';
import { Component, TComponentProps } from '../../view/Component';

type TProps =
  | TComponentProps
  | {
      text?: string;
    };

export class ButtonLink extends Component {
  constructor(props: TProps) {
    super(props, 'a');
    this.props.className += ` ${css.button}`;
  }

  render = function () {
    const { text } = this.props;

    return tpl({ text });
  };
}

// const button = new Button({
//   tagName: 'a',
// });

// export const Button = ({
//   className,
//   href,
//   type = 'button',
//   text,
// }: Properties) => {
//   return tpl({ className, href, type, text, css });
// };
