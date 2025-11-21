import React, {useState} from "react";
import {Tooltip, Grow} from '@mui/material';

import { watchlist } from "../Data/data";
import {BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz} from '@mui/icons-material'
import { useContext } from "react";
import GeneralContext from "./GeneralContext";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
      ))}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({stock}) => {
  const [showWatchlistAction, setShowWatchlistAction] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistAction(true);
  }
  const handleMouseLeave = (e) => {
    setShowWatchlistAction(false);
  }

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? 'down' : 'up'}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="down" /> 
          )}
           <span className="price">{stock.price}</span>

        </div>
      </div>
      {showWatchlistAction && <WatchlistActions uid={stock.name} />}
    </li>
  );

};

const WatchlistActions = ({uid}) => {

  const generalContext = useContext(GeneralContext);

    const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}
        onClick={handleBuyClick}        
        >
          <button className="buy">Buy</button>
        </Tooltip>
      </span>
       <span>
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
          <button className="chart">Sell</button>
        </Tooltip>
      </span>
       <span>
        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
          <BarChartOutlined className="icons"/>
          </button>
        </Tooltip>
      </span>
       <span>
        <Tooltip title="More (M)" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
          <MoreHoriz className="icons"/>
          </button>
        </Tooltip>
      </span>
    </span>
  )
}