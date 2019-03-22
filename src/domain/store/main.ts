/*
 * Exodev React kit
 *
 * Copyright © 2016 Exodev, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createAtom } from 'js-atom';
import * as User1Image from 'assets/user1.jpg';
import * as User2Image from 'assets/user2.png';

export type HomePage = { name: 'HOME_PAGE'; value: 0 };
export type LoginPage = { name: 'LOGIN_PAGE'; value: null };

export type Page = HomePage | LoginPage;

export type State = {
  currentPage: Page;
  user: {
    id: string;
  };
  sampleUsers: Array<{
    name: string;
    id: string;
    avatar: string;
    age: number;
  }>;
  trainings: Array<{
    title: string;
    thumbnail: string;
    description: string;
    url: string;
  }>
};

const defaultState: State = {
  user: {
    id: null
  },
  sampleUsers: [
    {
      name: 'Jessa Maryanne',
      id: 'xd0ktRwSbthgZJOMKxBn44potD52',
      avatar: User1Image,
      age: 21,
    },
    {
      name: 'Mathew Gib',
      id: 'y48Udj8T5Pf7r402LX2qYqNUYmz2',
      avatar: User2Image,
      age: 59,
    },
  ],
  currentPage: { name: 'HOME_PAGE', value: 0 },
  trainings: [
    {
      title: 'Rotablator Certification',
      thumbnail: 'https://www.bostonscientific.com/content/dam/bostonscientific/Interventional%20Cardiology/MedSpecialty/Top-Banner_T.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      url: 'https://exodevhub-boston-vr.glitch.me/'
    },
    {
      title: 'Local Educational Programs',
      thumbnail: 'https://www.bostonscientific.com/content/dam/bostonscientific/Interventional%20Cardiology/general/Master-the-Complex/mtc_overview_carousel_hero_innovate_educate_m_620x430.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      url: 'https://exodevhub-boston-vr.glitch.me/'
    },
    {
      title: 'Foundations of CTO: Master the Complex',
      thumbnail: 'https://www.bostonscientific.com/content/dam/bostonscientific/Interventional%20Cardiology/general/pci-changes-lives/MedSpec_TB.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      url: 'https://exodevhub-boston-vr.glitch.me/'
    },
    {
      title: 'Observational Preceptorship: Complex PCI',
      thumbnail: 'https://bsci-prod2-origin.adobecqms.net/content/dam/bostonscientific/Interventional%20Cardiology/MedSpecialty/cvforward_promo2_1980x770.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      url: 'https://exodevhub-boston-vr.glitch.me/'
    }
  ]
};

export const store = createAtom(defaultState);
window['__STORE__'] = store;
