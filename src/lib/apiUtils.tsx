export const getOrderPrice = async () => {
  // TEMP FETCHING SIMULATION
  const price = Math.round(Math.random() * 7000);
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        total: price,
        discountedPrice: null,
        priceLoading: false,
      });
    }, 500);
  });
};

export interface BoosterCardInterface {
  avatar: string;
  name: string;
  link: string;
}

export const getTopBoosters = async () => {
  // TEMP FETCHING SIMULATION
  const boostersContent = [
    {
      avatar: "/img/temp/boosters/prince.png",
      name: "prince",
      link: "/boosters/prince",
    },
    {
      avatar: "/img/temp/boosters/lexa.png",
      name: "lexa",
      link: "/boosters/lexa",
    },
    {
      avatar: "/img/temp/boosters/tama.png",
      name: "tama",
      link: "/boosters/tama",
    },
  ];

  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(boostersContent);
    }, 500);
  });
};

export interface CoachCardInterface {
  avatar: string;
  name: string;
  link: string;
}

export const getTopCoaches = async () => {
  // TEMP FETCHING SIMULATION
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
      resolve(coachesContent);
    }, 500);
  });
};

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
    {
      avatar: "/img/temp/coaches/lexa.jpg",
      name: "123",
      link: "/coaches/asco",
    },
    {
      avatar: "/img/temp/coaches/ASCO.jpg",
      name: "321",
      link: "/coaches/asco",
    },
    {
      avatar: "/img/temp/coaches/lexa.jpg",
      name: "444",
      link: "/coaches/asco",
    },
    {
      avatar: "/img/temp/coaches/ASCO.jpg",
      name: "qqq",
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

export interface UserDataInterface {
  status: string;
  data?: {
    name: string;
    avatar: string;
  };
}

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
