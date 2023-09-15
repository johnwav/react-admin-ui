import { topDealUsers } from "../../data"

const Topbox = () => {
  return (
    <div>
        <h1>Top Deals</h1>
        <div className="list">
            {topDealUsers.map((user) => (
                <div className="listItem" key={user.id}>
                  <div className="user">
                    <img src={user.img} alt="" />
                    <div className="userTexts">
                    <span className="username">{user.username}</span>
                    </div>
                  </div>
                  <div className="amount">${user.amount}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Topbox