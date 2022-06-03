function getSubscription(uid, setLoading) {
  setLoading(true);
  fetch(`https://reicpe-9cc2.restdb.io/rest/littlessentials?q={"userID": "${uid}"}`, {
    method: "GET",
    headers: {
      "x-apikey": "606d5dcef5535004310074f4",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data[0] && localStorage.setItem("subscriber", JSON.stringify(data[0].subscription));
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
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
