import React from "react";
import Directory from "../../directory/directory.component"

const Home = () => {
  const categories = [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://arte8lusso.net/wp-content/uploads/2020/07/andreasweinas_20200621_162837_0-820x1024.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ];
  return <Directory categories={categories} />;
};

export default Home;