import React, { useEffect } from "react";
import styles from "../Subscription/subscription.module.scss";
import { useAuth } from "../../contexts/AuthContext";
import { useSubscription } from "../../contexts/SubscriptionContext";
import { useButtonsState } from "../../contexts/ButtonsStateContext";
import { getSubscription, postSubscription, patchSubscription } from "../../modules/fetchSubscription";
import { Button, Card, Container } from "react-bootstrap";

export default function FormSave(props) {
  const { theUser, theUserName } = useAuth();
  const { isPaid } = useSubscription();
  const { setShowSignup, setShowLogin } = useButtonsState();

  useEffect(() => {
    const userName = JSON.parse(localStorage.getItem("subscriber")).user.name;
    if (theUser && userName === null) {
      const subscription = JSON.parse(localStorage.getItem("subscriber"));
      subscription.user.name = theUserName;
      subscription.user.email = theUser.email;
      subscription.user.ID = theUser.uid;
      localStorage.setItem("subscriber", JSON.stringify(subscription));
    }
  }, [theUser]);

  //-----------------------
  //working with a normal error mesage

  useEffect(() => {
    const abortFetch = new AbortController();
    const subscription = JSON.parse(localStorage.getItem("subscriber"));
    if (isPaid) {
      getSubscription(theUser.uid, abortFetch).then((res) => {
        console.log(res);
        if (res.length > 0 && res[0]._id) {
          patchSubscription(res[0]._id, { subscription: subscription }).then((res) => {
            console.log("patched with", res.status);
          });
        } else {
          postSubscription(theUser.uid, subscription).then((res) => {
            console.log("post with", res);
          });
        }
      });
    }
    return () => abortFetch.abort();
  }, []);
  //---------------------------------------

  const userName = theUser && theUser.displayName ? theUser.displayName.split(" ")[0] : theUserName.split(" ")[0];

  return (
    <Container className={`${styles.appear} d-flex flex-wrap gap-3 align-items-center justify-content-around p-5`}>
      {theUser ? (
        <Card style={{ width: "80%", maxWidth: "400px" }}>
          <Card.Body className="p-5">Just one step more {userName}!</Card.Body>
        </Card>
      ) : (
        <>
          <Card className="p-4" style={{ width: "40%", maxWidth: "300px", minWidth: "250px" }}>
            <Card.Body className="p-2 mb-4">To save your preferences you just need to log in or sign up</Card.Body>

            <div className=" d-flex justify-content-center">
              <Button
                onClick={() => {
                  setShowLogin(false);
                  setShowSignup(true);
                }}
              >
                Sign up
              </Button>
            </div>
          </Card>
          <Card className="p-4" style={{ width: "40%", maxWidth: "300px", minWidth: "250px" }}>
            <Card.Body className="p-2 mb-4">To save your preferences you just need to log in or sign up</Card.Body>
            <div className=" d-flex justify-content-center">
              <Button
                onClick={() => {
                  setShowSignup(false);
                  setShowLogin(true);
                }}
              >
                Log in
              </Button>
            </div>
          </Card>
        </>
      )}
    </Container>
  );
}
