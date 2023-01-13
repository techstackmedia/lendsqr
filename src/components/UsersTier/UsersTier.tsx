import avatar from "../../images/avatar.png";
import fullStar from "../../images/full-star.png";
import emptyStar from "../../images/empty-star.png";
import "./UsersTier.scss";
import UsersDetail from "../UsersDetail/UsersDetail";

const UsersTier = () => {
  return (
    <section style={{overflowX: 'auto'}}>
      <header
        className="usersCount"
        style={{
          width: "992px",
          height: "174px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            // width: "65%",
            width: 613,
            display: "flex",
            justifyContent: "space-around",
            position: "relative",
            left: 28,
            height: 138,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              height: 100,
              alignItems: "center",
              position: "relative",
              right: 7,
            }}
          >
            <div>
              <img
                style={{ position: "relative", left: 45 }}
                width={80}
                height={80}
                src={avatar}
                alt="default users avatar - all gray color"
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontWeight: 500,
                  fontSize: 22,
                  color: "#213F7D",
                  width: 150,
                }}
              >
                Grace Effiom
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "#545F7D",
                }}
              >
                LSQFf587g90
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: 100,
              justifyContent: "center",
              position: "relative",
              right: 74,
              borderInline: "1px solid rgba(84, 95, 125, 0.2)",
              paddingInline: 10,
            }}
          >
            <div
              style={{
                fontWeight: 500,
                fontSize: 14,
                color: "#545F7D",
                width: 67,
              }}
            >
              User's Tier
            </div>
            <div>
              <img src={fullStar} alt="full star" />
              <img src={emptyStar} alt="empty star" />
              <img src={emptyStar} alt="empty star" />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: 100,
                justifyContent: "center",
                position: "relative",
                right: 120,
              }}
            >
              <div
                style={{
                  fontWeight: 500,
                  fontSize: 22,
                  color: "#213F7D",
                  width: 167,
                }}
              >
                N2,000,000, 000
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#213F7D",
                }}
              >
                9912345678/Providus Bank
              </div>
            </div>
          </div>
        </div>
        <nav
          className="nav"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div>General Details</div>
          <div>Documents</div>
          <div>Blank Details</div>
          <div>Loans</div>
          <div>Savings</div>
          <div>App and Systems</div>
        </nav>
      </header>

      <UsersDetail />
    </section>
  );
};

export default UsersTier;
