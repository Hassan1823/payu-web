"use client";

import { useState, useEffect } from "react";
import { FormData } from "@/interface/form_data";
import { products } from "@/data/products";
import { initialFormData } from "@/data/form_data";
import { calculateMD5 } from "@/utils/signature";
import { AUTH } from "@/data/auth";
import ProductCard from "./product_card";
import BuyerInfoForm from "./buyer_info_form";
import SubmitButton from "./submit_btn";

const PayUConfig = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);

  const handleProductSelect = (product: (typeof products)[0]) => {
    setSelectedProduct(product);
    setFormData({
      ...formData,
      description: product.description,
      amount: product.amount,
      referenceCode: product.referenceCode,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (formData.amount && formData.currency) {
      const signature = calculateMD5(
        AUTH.apiKey,
        AUTH.merchantId,
        formData.referenceCode,
        formData.amount,
        formData.currency
      );
      setFormData((prevData) => ({
        ...prevData,
        signature: signature,
      }));
    }
  }, [formData.amount, formData.currency]);

  const handleSubmit = () => {
    const form = document.createElement("form");
    form.method = "POST";
    form.action =
      "https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/";

    // Add all form fields
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        const hiddenField = document.createElement("input");
        hiddenField.type = "hidden";
        hiddenField.name = key;
        hiddenField.value = value.toString();
        form.appendChild(hiddenField);
      }
    });

    // Add additional required fields
    const additionalFields = {
      paymentMethod: "VISA",
      paymentCountry: "CO",
      deviceSessionId: "vghs6tvkcle931686k1900o6e1",
      ipAddress: "127.0.0.1",
      cookie: "pt1t38347bs6jc9ruv2ecpv7o2",
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      language: "es",
      shippingAddress: "Calle 123",
      shippingCity: "Bogota",
      shippingCountry: "CO",
    };

    Object.entries(additionalFields).forEach(([key, value]) => {
      const hiddenField = document.createElement("input");
      hiddenField.type = "hidden";
      hiddenField.name = key;
      hiddenField.value = value;
      form.appendChild(hiddenField);
    });

    document.body.appendChild(form);
    form.submit();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={handleProductSelect}
          />
        ))}
      </div>

      {selectedProduct && (
        <div className="max-w-md mx-auto">
          <BuyerInfoForm formData={formData} onChange={handleInputChange} />
          <SubmitButton onClick={handleSubmit} />
        </div>
      )}
    </div>
  );
};

export default PayUConfig;
