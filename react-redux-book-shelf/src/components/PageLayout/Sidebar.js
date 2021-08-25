import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const redingListLength = useSelector((state) => {
    return state.books.readingList.length;
  });
  return (
    <div className='col-md-3'>
      <ul className='py-2 list-group sticky-top'>
        <NavLink as='li' className='list-group-item' to='/' exact>
          Discover
        </NavLink>
        <NavLink as='li' className='list-group-item' to='/reading'>
          Reading List <span className='badge badge-sm bg-primary'>{redingListLength}</span>
        </NavLink>
        <NavLink as='li' className='list-group-item' to='/finish'>
          Finished Books <span className='badge badge-sm bg-primary'>0</span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
