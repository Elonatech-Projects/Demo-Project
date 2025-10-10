
export interface Texts {
  textOne: string;
  textTwo: string;
  textThree: string;
}

export interface ImageSlideText {
  gallery: string;
  words: Texts[];
}

export const images: ImageSlideText[] = [
   {
    gallery: '/tech_support_jijajw.09f71dcde3a2fbfe63f9.jpg',
    words: [
      {
        textOne: 'We are Tech Support Engineers',
        textTwo: 'We implement and design both complex and simple data/voice networks and maintenance of all types of computer systems',
        textThree: ''
      },
    ],
  },
  {
    gallery: '/IT_consultants_ah07ai.5532ba6aa0d89167c45c.jpg',
    words: [
      {
        textOne: 'We are IT Consultants',
        textTwo: 'Information technology consulting services help improve the performance scalability',
        textThree: 'and competitiveness of your company through right technology enablement and usage'
      },
    ],
  },
   {
    gallery: '/Digital_marketers_zreuxb.a3feb2d79566b9e3b288.jpg',
    words: [
      {
        textOne: 'We are Digital Marketers',
        textTwo: 'Experts in providing digital marketing strategies that convert engagement',
        textThree: ''
      },
    ],
  },
 {
    gallery: '/web_developers_sbyfha.045843ed3188eb0d2d68.jpg',
    words: [
      {
        textOne: 'We are Web Developers',
        textTwo: 'We offer bespoke user experience web design app design and software development services',
        textThree: ''
      },
    ],
  },
];
