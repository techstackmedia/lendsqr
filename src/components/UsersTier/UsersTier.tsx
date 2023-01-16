import avatar from "../../images/avatar.png";
import fullStar from "../../images/full-star.png";
import emptyStar from "../../images/empty-star.png";
import "./UsersTier.scss";
import UsersDetail from "../UsersDetail/UsersDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UsersTier = () => {
  const [user, setUser] = useState<any>([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchUserAPI = async () => {
      const response = await fetch(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      );
      const data = await response.json();
      setUser(data);
    };
    fetchUserAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const firstName: string | undefined =
    user.profile?.firstName === undefined
      ? "Loading..."
      : user.profile.firstName;
  const lastName: string | undefined =
    user.profile?.lastName === undefined ? "" : user.profile.lastName;
  const accountBalance =
    user?.accountBalance === undefined ? "Loading..." : user.accountBalance;
  const avatarImg =
    user.profile?.avatar === undefined ? avatar : user.profile.avatar;

  const bvn = user.profile?.bvn === undefined ? "Loading..." : user.profile.bvn;

  let nameContent: any = `${firstName} ${lastName}`;

  const textNameTruncate = () => {
    const textName = nameContent.split("");
    if (textName.length > 12) {
      textName.splice(12, textName.length - 12, "...");
      const textNameToString = textName.join("").replace("....", "...");
      return textNameToString;
    } else {
      return textName;
    }
  };

  const name = textNameTruncate();

  let accountAccount: any =
    user.accountNumber === undefined ? "Loading..." : user.accountNumber;
  const textBankAccountTruncate = () => {
    const textBankAccount = accountAccount.split("");
    if (textBankAccount.length > 12) {
      textBankAccount.splice(12, textBankAccount.length - 12, "...");
      const textBankAccountToString = textBankAccount
        .join("")
        .replace("....", "...");
      return textBankAccountToString;
    } else {
      return textBankAccount;
    }
  };

  const bankAccount = textBankAccountTruncate();

  return (
    <>
      <section>
        <header
          className="usersCount"
          style={{
            width: "100%",
            height: 193,
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: 613,
              display: "flex",
              justifyContent: "space-around",
              position: "relative",
              left: 43,
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
                  style={{
                    position: "relative",
                    left: 45,
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "1px solid rgba(33, 63, 125, 0.16)",
                  }}
                  width={80}
                  height={80}
                  src={avatarImg}
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
                  title={nameContent.length > 12 ? nameContent : null}
                  style={{
                    fontWeight: 500,
                    fontSize: 22,
                    color: "#213F7D",
                    width: 157,
                  }}
                >
                  {name}
                </div>
                <div
                  title={accountAccount > 12 ? accountAccount : null}
                  style={{
                    fontSize: 14,
                    color: "#545F7D",
                    position: "relative",
                    display: "flex",
                    marginRight: "auto",
                    left: 5,
                  }}
                >
                  {bankAccount}
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
                  {`₦${accountBalance}`}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#213F7D",
                    position: "relative",
                    right: 8,
                  }}
                >
                  {`${bvn}/Providus Bank`}
                </div>
              </div>
            </div>
          </div>
          <nav
            className="nav"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <div className="active">General Details</div>
            <div>Documents</div>
            <div>Blank Details</div>
            <div>Loans</div>
            <div>Savings</div>
            <div>App and Systems</div>
          </nav>
        </header>

        <UsersDetail />
      </section>
    </>
  );
};

export default UsersTier;
