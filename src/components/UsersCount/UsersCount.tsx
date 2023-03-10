import "./UsersCount.scss";
import usersIcon from "../../images/users-.png";
import activeUsers from "../../images/active-users.png";
import usersWithLoans from "../../images/users-with-loans.png";
import usersWithSavings from "../../images/users-with-savings.png";
import Card from "../shared/Card";

const UsersCount = () => {
  return (
    <section className="counted">
      <Card className="usersCount">
        <div>
          <img src={usersIcon} alt="user icons" />
        </div>
        <div>
          <span>Users</span>
        </div>
        <div>
          <span>2,453</span>
        </div>
      </Card>

      <Card className="usersCount">
        <div>
          <img src={activeUsers} alt="user icons" />
        </div>
        <div>
          <span>Active Users</span>
        </div>
        <div>
          <span>2,453</span>
        </div>
      </Card>

      <Card className="usersCount">
        <div>
          <img src={usersWithLoans} alt="user icons" />
        </div>
        <div>
          <span>Users with Loans</span>
        </div>
        <div>
          <span>12,453</span>
        </div>
      </Card>

      <Card className="usersCount">
        <div>
          <img src={usersWithSavings} alt="user icons" />
        </div>
        <div>
          <span>User with Savings</span>
        </div>
        <div>
          <span>102,453</span>
        </div>
      </Card>
    </section>
  );
};

export default UsersCount;
