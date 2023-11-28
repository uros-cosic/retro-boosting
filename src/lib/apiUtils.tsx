export interface BoosterCardInterface {
  avatar: string;
  name: string;
  link: string;
  slug: string;
  mainRole: string;
  rating: number;
  ratingsQuantity: number;
  about: string;
  elo: string;
  roles: Array<string>;
  boostingSince: number;
  ordersCompleted: number;
  type: Array<string>;
  _id: string;
  discordTag?: string;
  activeOrders?: Array<any>;
}

export interface ChartDataInterface {
  name: string;
  total: number;
}

export interface RecentOrdersInterface {
  customer: string;
  total: number;
  type: string;
}

export interface AnalyticsInterface {
  totalRevenue: number;
  users: number;
  sales: number;
  activeNow: number;
}

export type OrderPayment = {
  id: string;
  amount: number;
  status: "taken" | "unclaimed" | "canceled";
  type: string;
  claimedBy: null | string;
  createdAt: string;
  claimedAt?: string;
};

export interface CoachCardInterface {
  avatar: string;
  name: string;
  link: string;
  mainRole: string;
  elo: string;
  discordTag?: string;
  type: Array<string>;
}

export interface ReviewCardInterface {
  customer: {
    name: string;
    tag: string;
    avatar: string;
  };
  order: {
    from: string;
    to: string;
  };
  review: {
    rating: number;
    heading: string;
    comment: string;
  };
  link: string;
}

export interface UserInterface {
  name: string;
  avatar: string;
  role: string;
  tokens?: number;
  orderHistory?: Array<any>;
  workHistory?: Array<any>;
}

const reviews = [
  {
    customer: {
      name: "customer",
      tag: "@customer",
      avatar: "/img/temp/customer/customer.png",
    },
    order: {
      from: "D4",
      to: "M1",
    },
    review: {
      rating: 4.5,
      heading: "Lorem Ipsum",
      comment:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aperiam excepturi earum vitae. Facilis nihil id facere at voluptatem. Quae deleniti dolorem maxime fugiat, vel quas temporibus veniam ratione, fuga perferendis laboriosam doloremque eum nobis perspiciatis. Vitae necessitatibus harum natus quae quisquam magni dolores eaque reprehenderit ipsa cupiditate. Consectetur, est!",
    },
    link: "/reviews/custom_id_1",
  },
  {
    customer: {
      name: "customer",
      tag: "@customer",
      avatar: "/img/temp/customer/customer.png",
    },
    order: {
      from: "D4",
      to: "M1",
    },
    review: {
      rating: 4.5,
      heading: "Lorem Ipsum",
      comment:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea aperiam excepturi earum vitae. Facilis nihil id facere at voluptatem. Quae deleniti dolorem maxime fugiat, vel quas temporibus veniam ratione, fuga perferendis laboriosam doloremque eum nobis perspiciatis. Vitae necessitatibus harum natus quae quisquam magni dolores eaque reprehenderit ipsa cupiditate. Consectetur, est!",
    },
    link: "/reviews/custom_id_2",
  },
];

const boostersContent = [
  {
    avatar: "/img/temp/boosters/prince.png",
    name: "prince",
    link: "/team/boosters/prince",
    rating: 5,
    ratingsQuantity: 20,
    slug: "prince",
    _id: "prince",
    roles: ["jungle"],
    mainRole: "jungle",
    elo: "challenger",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam alias corporis quas fuga quasi id enim voluptatem nam voluptatum.",
    boostingSince: 2023,
    ordersCompleted: 15,
    type: ["booster"],
    reviews: [...reviews, ...reviews],
  },
  {
    avatar: "/img/temp/boosters/lexa.png",
    name: "lexa",
    link: "/team/boosters/lexa",
    rating: 5,
    ratingsQuantity: 20,
    slug: "lexa",
    _id: "lexa",
    roles: ["jungle", "support"],
    mainRole: "support",
    elo: "challenger",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam alias corporis quas fuga quasi id enim voluptatem nam voluptatum.",
    boostingSince: 2023,
    ordersCompleted: 15,
    type: ["booster"],
    reviews: [...reviews, ...reviews],
  },
  {
    avatar: "/img/temp/boosters/tama.png",
    name: "tama",
    link: "/team/boosters/tama",
    rating: 5,
    ratingsQuantity: 20,
    slug: "tama",
    _id: "tama",
    roles: ["jungle", "support", "adc", "mid", "top"],
    mainRole: "any",
    elo: "challenger",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam alias corporis quas fuga quasi id enim voluptatem nam voluptatum.",
    boostingSince: 2023,
    ordersCompleted: 15,
    type: ["booster"],
    reviews: [...reviews, ...reviews],
  },
  {
    avatar: "/img/temp/boosters/electrising.jpg",
    name: "Electrising",
    link: "/team/boosters/Electrising",
    rating: 5,
    ratingsQuantity: 20,
    slug: "Electrising",
    _id: "Electrising",
    roles: ["jungle", "support", "adc", "mid", "top"],
    mainRole: "any",
    elo: "gladiator",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam alias corporis quas fuga quasi id enim voluptatem nam voluptatum.",
    boostingSince: 2023,
    ordersCompleted: 15,
    type: ["arena booster"],
    reviews: [...reviews, ...reviews],
  },
];

const coachesContent = [
  {
    avatar: "/img/temp/coaches/lexa.png",
    name: "lexa",
    link: "/team/coaches/lexa",
    rating: 5,
    ratingsQuantity: 20,
    slug: "lexa",
    _id: "lexa",
    roles: ["jungle", "support"],
    mainRole: "support",
    elo: "challenger",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam alias corporis quas fuga quasi id enim voluptatem nam voluptatum.",
    boostingSince: 2023,
    ordersCompleted: 15,
    type: ["booster", "coach"],
    reviews: [...reviews, ...reviews],
  },
  {
    avatar: "/img/temp/coaches/ASCO.jpg",
    name: "ASCO",
    link: "/team/coaches/asco",
    rating: 5,
    ratingsQuantity: 20,
    slug: "asco",
    _id: "asco",
    roles: ["jungle", "support"],
    mainRole: "jungle",
    elo: "challenger",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam alias corporis quas fuga quasi id enim voluptatem nam voluptatum.",
    boostingSince: 2023,
    ordersCompleted: 15,
    type: ["booster", "coach"],
    reviews: [...reviews, ...reviews],
  },
];

export const getOrderPrice = async () => {
  // TEMP FETCHING SIMULATION
  const price = Math.round(Math.random() * 7000);
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        data: {
          total: price,
          discountedPrice: null,
        },
      });
    }, 500);
  });
};

export const getTopBoosters = async () => {
  // TEMP FETCHING SIMULATION
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(boostersContent);
    }, 500);
  });
};

export const getTopCoaches = async () => {
  // TEMP FETCHING SIMULATION
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(coachesContent);
    }, 500);
  });
};

export const getTopReviews = async () => {
  // TEMP FETCHING SIMULATION
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(reviews);
    }, 500);
  });
};

export const getCoachesByOptions = async () => {
  // temp
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        data: coachesContent,
      });
    }, 500);
  });
};

export const getMe = async () => {
  // temp
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "fail",
        data: null,
      });
    }, 500);
  });
};

export const handleRegister = async () => {
  // temp
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        data: {
          name: "temp-user",
          avatar: "/img/temp/customer/customer.png",
        },
      });
    }, 500);
  });
};

export const handleLogin = async () => {
  // temp
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        data: {
          name: "temp-user",
          avatar: "/img/temp/customer/customer.png",
        },
      });
    }, 500);
  });
};

export const sendContactMessage = async () => {
  // temp
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        data: null,
      });
    }, 500);
  });
};

export const getBoosterBySlug = async (slug: string) => {
  // TEMP FETCHING SIMULATION
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        data: boostersContent.filter((obj) => obj.slug === slug)[0],
      });
    }, 500);
  });
};

export const getBoosterReviews = async (boosterId: string) => {
  // TEMP FETCHING SIMULATION
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        data: boostersContent.filter((obj) => obj._id === boosterId)[0].reviews,
      });
    }, 500);
  });
};

export const getCoachBySlug = async (slug: string) => {
  // TEMP FETCHING SIMULATION
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        data: coachesContent.filter((obj) => obj.slug === slug)[0],
      });
    }, 500);
  });
};

export const getCoachReviews = async (coachId: string) => {
  // TEMP FETCHING SIMULATION
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        data: coachesContent.filter((obj) => obj._id === coachId)[0].reviews,
      });
    }, 500);
  });
};

export const getDiscountedPrice = async (total: number) => {
  // temp - will always get 10% off
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        data: {
          total,
          discountedPrice: total - total * 0.1,
        },
      });
    }, 500);
  });
};

export const handleForgotPassword = async () => {
  // temp
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        data: null,
      });
    }, 500);
  });
};

export const getChartData = async () => {
  // temp
  const data: Array<ChartDataInterface> = [
    {
      name: "Jan",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Feb",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Mar",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Apr",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "May",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jun",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jul",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Aug",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Sep",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Oct",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Nov",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Dec",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
  ];

  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        data: data,
      });
    }, 500);
  });
};

export const getAnalytics = async () => {
  // temp
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        data: {
          totalRevenue: 45231,
          users: 2350,
          sales: 12234,
          activeNow: 500,
        },
      });
    }, 500);
  });
};

export const getRecentOrders = async () => {
  // TEMP get <= 10 recent orders
  const data: RecentOrdersInterface[] = [
    {
      customer: "anon",
      total: 1234,
      type: "Solo Boost",
    },
    {
      customer: "anon",
      total: 2345,
      type: "Coaching",
    },
    {
      customer: "ASCO",
      total: 1337,
      type: "Win Boost",
    },
    {
      customer: "anon",
      total: 1111,
      type: "Solo Boost",
    },
    {
      customer: "anon",
      total: 2222,
      type: "Coaching",
    },
    {
      customer: "ASCO",
      total: 1337,
      type: "Win Boost",
    },
  ];
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        data: data,
      });
    }, 500);
  });
};

export const getOrdersData = async () => {
  // temp
  const data: OrderPayment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "unclaimed",
      type: "Solo Boost",
      claimedBy: null,
      createdAt: new Date(2023, 10, 28).toLocaleString(),
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "taken",
      type: "Solo Boost",
      claimedBy: "q5qwd12",
      createdAt: new Date(2023, 10, 28).toLocaleString(),
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "canceled",
      type: "Win Boost",
      claimedBy: "q5qwd12",
      createdAt: new Date(2023, 10, 28).toLocaleString(),
    },
    {
      id: "5kma53ae",
      amount: 874,
      status: "taken",
      type: "Coaching",
      claimedBy: "q5qwd12",
      createdAt: new Date(2023, 10, 28).toLocaleString(),
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "taken",
      type: "Normal Boost",
      claimedBy: "q5qwd12",
      createdAt: new Date(2023, 10, 28).toLocaleString(),
    },
  ];

  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        data: data,
      });
    }, 500);
  });
};

export const getTeam = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        data: { team: [...boostersContent, ...coachesContent], pages: 3 },
      });
    }, 500);
  });
};
