import { FormData } from "@/interface/form_data";
import { AUTH } from "./auth";

export const initialFormData: FormData = {
  merchantId: AUTH.merchantId,
  accountId: AUTH.accountId,
  description: "",
  referenceCode: "TEST" + Date.now(),
  amount: "",
  tax: "0",
  taxReturnBase: "0",
  currency: "COP",
  signature: "",
  test: "1",
  buyerEmail: "",
  buyerFullName: "",
  responseUrl:
    "https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/response",
  confirmationUrl:
    "https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/confirmation",
};
