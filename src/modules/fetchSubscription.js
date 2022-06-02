function getSubscription(user, setUser, setIsFetchin, setShowThanks) {
  fetch(`https://https://reicpe-9cc2.restdb.io/rest/littlessentials?q={"username": "${user}"}`, {
    method: "GET",
    headers: {
      "x-apikey": "606d5dcef5535004310074f4",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setUser(data[0]);
      setIsFetchin(false);
    })
    .catch((err) => {
      console.error(err);
      setIsFetchin(false);
    });
}

function postSubscription(uid, subscription, setLoading, setShowThanks) {
  const body = {
    userID: uid,
    subscription: subscription,
  };

  setLoading(true);

  fetch("https://reicpe-9cc2.restdb.io/rest/littlessentials", {
    method: "POST",
    headers: {
      "x-apikey": "606d5dcef5535004310074f4",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      setLoading(false);
      setShowThanks(true);
    })
    .catch((err) => {
      console.error(err);
    });
}

export { getSubscription, postSubscription };
