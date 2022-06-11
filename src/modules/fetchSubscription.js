async function getSubscription(uid, abortCont) {
  const signal = abortCont ? abortCont.signal : null;
  let subscription = await fetch(`${import.meta.env.VITE_RESTDB_URL}?q={"userID": "${uid}"}`, {
    method: "GET",
    headers: {
      "x-apikey": import.meta.env.VITE_RESTDB_API_KEY,
      "Content-Type": "application/json",
    },
    signal: signal,
  });

  return subscription.json();
}

async function postSubscription(uid, subscription) {
  const body = {
    userID: uid,
    subscription: subscription,
  };

  let subscriptionRes = await fetch(`${import.meta.env.VITE_RESTDB_URL}`, {
    method: "POST",
    headers: {
      "x-apikey": import.meta.env.VITE_RESTDB_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return subscriptionRes.json();
}

async function patchSubscription(subscriptionID, subscriptionDetails) {
  let subscriptionRes = fetch(`${import.meta.env.VITE_RESTDB_URL}/${subscriptionID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "x-apikey": import.meta.env.VITE_RESTDB_API_KEY,
      "cache-control": "no-cache",
    },
    body: JSON.stringify(subscriptionDetails),
  });

  return subscriptionRes;
}

export { getSubscription, postSubscription, patchSubscription };
