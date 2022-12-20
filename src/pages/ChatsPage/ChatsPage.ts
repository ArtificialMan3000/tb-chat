import { wrapper } from '~/src/view/View';
import tpl from './ChatsPage.hbs';
import contentTpl from './ChatsPageContent.hbs';
import * as css from './ChatsPage.module.scss';
import { Component, TComponentProps } from '~/src/view/Component';
import { ChatList } from '~/src/components/ChatList';
import { ChatWindow } from '~/src/components/ChatWindow';
import { Page } from '~/src/view/ui/Page';

export class ChatsPage extends Component {
  constructor(props: TComponentProps) {
    super(props, 'main');
  }

  render() {
    return this.compile(tpl, {
      Page: new Page(
        {
          children: wrapper(contentTpl, {
            css,
            className: css.page,
            ChatList: new ChatList({ className: css.chats }),
            MainChat: new ChatWindow({
              className: css.mainChat,
              chatNumber: this.props.id,
            }),
          }),
        },
        'div'
      ),
    });
  }
}
