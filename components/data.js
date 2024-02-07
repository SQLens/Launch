import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  LinkIcon,
} from '@heroicons/react/24/solid';

import GitHubIconLink from '../components/github';
import LinkedInIconLink from './linkedin';

import margLinkedIn from '../public/img/margaret.png'
import alexLinkedIn from '../public/img/alex-linkedin.png'
import jennyLinkedIn from '../public/img/jenny.png'
import jarodLinkedIn from '../public/img/jarod.png'

const Alex = {
  title: "Alex Palazzo",
  // desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: alexLinkedIn,
  bullets: [
    {
      title: 'Github',
      icon: <GitHubIconLink url="https://github.com/alexpalazzo" />,
    },
    {
      title: 'LinkedIn',
      icon: <LinkedInIconLink url="https://www.linkedin.com/in/alexpalazzo" />,
    },
  ],
};

const Jenny = {
  title: 'Jenny Ouk',
  // desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: jennyLinkedIn,
  bullets: [
    {
      title: 'Github',
      icon: <GitHubIconLink url="https://github.com/jennyouk" />,
    },
    {
      title: 'LinkedIn',
      icon: <LinkedInIconLink url="https://www.linkedin.com/in/jenny-ouk-a3668814/" />,
    },
  ],
};

const Margaret = {
  title: 'Margaret Hatch',
  // desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: margLinkedIn,
  bullets: [
    {
      title: 'Github',
      icon: <GitHubIconLink url="https://github.com/margarethatch" />,
    },
    {
      title: 'LinkedIn',
      icon: <LinkedInIconLink url="https://www.linkedin.com/in/margarethatch/" />,
    },
  ],
};

const Jarod = {
  title: 'Jarod Crawford',
  // desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: jarodLinkedIn,
  bullets: [
    {
      title: 'GitHub',
      icon: <GitHubIconLink url="https://github.com/JarodCrawford" />,
    },
    {
      title: 'LinkedIn',
      icon: <LinkedInIconLink url="http://www.linkedin.com/in/jarod-crawford-b83096253" />,
    },
  ],
};

export { Alex, Jenny, Margaret, Jarod };
