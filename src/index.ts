import { registerComponent } from './utils/registerComponents';
import { render } from './utils/render';
import { Link } from './components/Link';
import { Chats } from './components/Chats';
import { ChatItem } from './components/ChatItem';
import { Search } from './components/Search';
import { ChatMain } from './components/ChatMain';
import { Companion } from './components/Companion';
import { ChatMessages } from './components/ChatMessages';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { Form } from './components/Form';
import { FormButton } from './components/FormButton';
import { FormInputContainer } from './components/FormInputContainer';
import { FormInput } from './components/FormInput';
import { UserProfile } from './components/UserProfile';
import { ProfileInput } from './components/ProfileInput';
import { ProfileInputContainer } from './components/ProfileInputContainer';
import { FormInputError } from './components/FormInputError';

registerComponent('Link', Link);
registerComponent('Chats', Chats);
registerComponent('ChatItem', ChatItem);
registerComponent('Search', Search);
registerComponent('ChatMain', ChatMain);
registerComponent('Companion', Companion);
registerComponent('ChatMessages', ChatMessages);
registerComponent('ChatMessage', ChatMessage);
registerComponent('ChatInput', ChatInput);
registerComponent('Form', Form);
registerComponent('FormButton', FormButton);
registerComponent('FormInput', FormInput);
registerComponent('FormInputContainer', FormInputContainer);
registerComponent('FormInputError', FormInputError);
registerComponent('UserProfile', UserProfile);
registerComponent('ProfileInput', ProfileInput);
registerComponent('ProfileInputContainer', ProfileInputContainer);


window.addEventListener('DOMContentLoaded', () => {
  render('home');
});
