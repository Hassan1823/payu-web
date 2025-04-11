import React from "react";
import { FormData } from "@/interface/form_data";

interface BuyerInfoFormProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BuyerInfoForm: React.FC<BuyerInfoFormProps> = ({
  formData,
  onChange,
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
      Buyer Information
    </h2>
    <div className="space-y-4">
      <div>
        <label
          htmlFor="buyerEmail"
          className="block text-sm font-medium text-black mb-1"
        >
          Email Address
        </label>
        <input
          id="buyerEmail"
          type="email"
          name="buyerEmail"
          placeholder="your.email@example.com"
          value={formData.buyerEmail}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors text-black"
          required
        />
      </div>

      <div>
        <label
          htmlFor="buyerFullName"
          className="block text-sm font-medium text-black mb-1"
        >
          Full Name
        </label>
        <input
          id="buyerFullName"
          type="text"
          name="buyerFullName"
          placeholder="John Doe"
          value={formData.buyerFullName}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition-colors text-black"
          required
        />
      </div>
    </div>
  </div>
);

export default BuyerInfoForm;
