import path from "path";
import express from "express";
import axios from "axios";

const app = express();

axios.defaults.headers.common["Authorization"] = "Bearer PAYSTACK_API_KEY";

// Simple verification Servicc
app.get("/acc_no", async (req, res) => {
  let { account_no, bank_code } = req.query;
  console.log(account_no, bank_code);

  try {
    let result = await axios.get(
      `https://api.paystack.co/bank/resolve?account_number=${account_no}&bank_code=058`
    );
    res.json(result.data.message);
  } catch (e) {
    console.log(e.data);
  }
});

//verify card details
app.get("/card_details/:details", async (req, res) => {
  const details = req.params.details;
  try {
    let result = await axios.get(
      `https://api.paystack.co/decision/bin/${details}`
    );
    res.json(result.data);
  } catch (e) {
    console.log(e);
  }
});

app.listen(7102, () => {
  console.log("connected");
});
