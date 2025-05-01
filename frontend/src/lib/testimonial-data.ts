export interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
}

export interface Testimonial {
  text: string;
  author: TestimonialAuthor;
}

export const testimonialData: Testimonial[] = [
  {
    text: 'This is a great app that saves money. Saved over 150 dollars in two months.',
    author: {
      name: 'Sarah Johnson',
      handle: 'App Store Review',
      avatar: '/avatar/avatar1.png',
    },
  },
  {
    text: 'Great app! Easy to use and they also have a wide variety of stores to choose from. Highly recommend adding this to your phone.',
    author: {
      name: 'Michael Chen',
      handle: 'Google Play Review',
      avatar: '/avatar/avatar2.png',
    },
  },
  {
    text: "It's easy to use, has more than 500 options, and gets lots of discounts and promos too! You'll also get free cash back rewards.",
    author: {
      name: 'Emily Rodriguez',
      handle: 'Google Play Review',
      avatar: '/avatar/avatar3.png',
    },
  },
  {
    text: "I've been using Moola for 6 months now and have saved over $300 on gift cards for stores I shop at regularly. Incredible value!",
    author: {
      name: 'James Wilson',
      handle: 'App Store Review',
      avatar: '/avatar/avatar4.png',
    },
  },
  {
    text: "The cash back rewards add up quickly, and I love that you can use it at so many different places. Best money-saving app I've tried.",
    author: {
      name: 'Olivia Taylor',
      handle: 'App Store Review',
      avatar: '/avatar/avatar5.png',
    },
  },
  {
    text: 'Using Moola has completely changed how I shop. The interface is intuitive and the savings are substantial. Highly recommend!',
    author: {
      name: 'David Morris',
      handle: 'Google Play Review',
      avatar: '/avatar/avatar6.png',
    },
  },
  {
    text: 'Excellent customer service and the deals are always up to date. I save money every week with this app!',
    author: {
      name: 'Sophia Kim',
      handle: 'App Store Review',
      avatar: '/avatar/avatar7.png',
    },
  },
];
