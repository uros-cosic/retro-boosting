export interface BoosterCardInterface {
  avatar: string;
  name: string;
  link: string;
  slug: string;
  mainRole?: string;
  rating?: number;
  ratingsQuantity?: number;
  about?: string;
  elo?: string;
  roles?: Array<string>;
  boostingSince?: number;
  ordersCompleted?: number;
  _id: string;
}

export type OrderPayment = {
  id: string;
  amount: number;
  status: "taken" | "unclaimed" | "canceled";
  type: string;
};

export interface CoachCardInterface {
  avatar: string;
  name: string;
  link: string;
  mainRole?: string;
  elo?: string;
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

export interface UserDataInterface {
  status: string;
  data?: {
    name: string;
    avatar: string;
  };
}

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
  const boostersContent = [
    {
      avatar: "/img/temp/boosters/prince.png",
      name: "prince",
      link: "/boosters/prince",
      slug: "prince",
      mainRole: "any",
      elo: "challenger",
    },
    {
      avatar: "/img/temp/boosters/lexa.png",
      name: "lexa",
      link: "/boosters/lexa",
      slug: "lexa",
      mainRole: "any",
      elo: "challenger",
    },
    {
      avatar: "/img/temp/boosters/tama.png",
      name: "tama",
      link: "/boosters/tama",
      slug: "tama",
      mainRole: "any",
      elo: "challenger",
    },
  ];

  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(boostersContent);
    }, 500);
  });
};

export const getTopCoaches = async () => {
  // TEMP FETCHING SIMULATION
  const coachesContent = [
    {
      avatar: "/img/temp/coaches/lexa.png",
      name: "lexa",
      link: "/coaches/lexa",
      elo: "challenger",
      mainRole: "any",
    },
    {
      avatar: "/img/temp/coaches/ASCO.jpg",
      name: "ASCO",
      link: "/coaches/asco",
      elo: "challenger",
      mainRole: "jungle",
    },
  ];

  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(coachesContent);
    }, 500);
  });
};

export const getTopReviews = async () => {
  // TEMP FETCHING SIMULATION
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

  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(reviews);
    }, 500);
  });
};

export const getCoachesByOptions = async () => {
  // temp
  const coachesContent = [
    {
      avatar: "/img/temp/coaches/lexa.png",
      name: "lexa",
      link: "/coaches/lexa",
    },
    {
      avatar: "/img/temp/coaches/ASCO.jpg",
      name: "ASCO",
      link: "/coaches/asco",
    },
  ];

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
  const boostersContent = [
    {
      avatar: "/img/temp/boosters/prince.png",
      name: "prince",
      link: "/boosters/prince",
      rating: 5,
      ratingsQuantity: 20,
      slug: "prince",
      _id: "prince",
      roles: ["jungle"],
      elo: "challenger",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam alias corporis quas fuga quasi id enim voluptatem nam voluptatum.",
      boostingSince: 2023,
      ordersCompleted: 15,
    },
    {
      avatar: "/img/temp/boosters/lexa.png",
      name: "lexa",
      link: "/boosters/lexa",
      rating: 5,
      ratingsQuantity: 20,
      slug: "lexa",
      _id: "lexa",
      roles: ["jungle", "support"],
      elo: "challenger",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam alias corporis quas fuga quasi id enim voluptatem nam voluptatum.",
      boostingSince: 2023,
      ordersCompleted: 15,
    },
    {
      avatar: "/img/temp/boosters/tama.png",
      name: "tama",
      link: "/boosters/tama",
      rating: 5,
      ratingsQuantity: 20,
      slug: "tama",
      _id: "tama",
      roles: ["jungle", "support", "adc", "mid", "top"],
      elo: "challenger",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam alias corporis quas fuga quasi id enim voluptatem nam voluptatum.",
      boostingSince: 2023,
      ordersCompleted: 15,
    },
  ];

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
      _id: "prince",
      reviews,
    },
    {
      _id: "lexa",
      reviews,
    },
    {
      _id: "tama",
      reviews,
    },
  ];

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
  const coachesContent = [
    {
      avatar: "/img/temp/coaches/lexa.png",
      name: "lexa",
      link: "/coaches/lexa",
      rating: 5,
      ratingsQuantity: 20,
      slug: "lexa",
      _id: "lexa",
      roles: ["jungle", "support"],
      elo: "challenger",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam alias corporis quas fuga quasi id enim voluptatem nam voluptatum.",
      boostingSince: 2023,
      ordersCompleted: 15,
    },
    {
      avatar: "/img/temp/coaches/ASCO.jpg",
      name: "ASCO",
      link: "/coaches/asco",
      rating: 5,
      ratingsQuantity: 20,
      slug: "asco",
      _id: "asco",
      roles: ["jungle", "support"],
      elo: "challenger",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsam alias corporis quas fuga quasi id enim voluptatem nam voluptatum.",
      boostingSince: 2023,
      ordersCompleted: 15,
    },
  ];

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
  const coachesContent = [
    {
      _id: "lexa",
      reviews,
    },
    {
      _id: "asco",
      reviews,
    },
  ];

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
  const data = [
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
  // get <= 10 recent orders
  const data = [
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
  const data: OrderPayment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "unclaimed",
      type: "Solo Boost",
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "taken",
      type: "Solo Boost",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "canceled",
      type: "Win Boost",
    },
    {
      id: "5kma53ae",
      amount: 874,
      status: "taken",
      type: "Coaching",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "taken",
      type: "Normal Boost",
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
