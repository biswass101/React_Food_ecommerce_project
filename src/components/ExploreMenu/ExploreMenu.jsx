import React from "react";
import "./ExploreMneu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
        doloribus quisquam eaque eos. Doloribus soluta animi ut, voluptatum
        fugit sit.
      </p>
      <div className="explore-menu-list">
        {
            menu_list.map((item, idx) => {
                return (
                    <div key={idx} className="explore-menu-list-item">
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })
        }
      </div>
      <hr/>
    </div>
  );
};

export default ExploreMenu;
