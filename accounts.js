const ACCOUNTS_API = "https://script.google.com/macros/s/AKfycbyseXt_9pL3SBxPLOHn2DajeCCxPZ72_IJ5XD-6q_3cpbcg41qjut3chbYF2HXi_JWCKQ/exec";

async function createAccount(username, password) {
  const res = await fetch(ACCOUNTS_API, {
    method: "POST",
    body: JSON.stringify({
      action: "createAccount",
      username,
      password
    })
  });
  return await res.json();
}

async function login(username, password) {
  const res = await fetch(ACCOUNTS_API, {
    method: "POST",
    body: JSON.stringify({
      action: "login",
      username,
      password
    })
  });
  return await res.json();
}

async function getUser(id) {
  const res = await fetch(ACCOUNTS_API, {
    method: "POST",
    body: JSON.stringify({
      action: "getUser",
      id
    })
  });
  return await res.json();
}
