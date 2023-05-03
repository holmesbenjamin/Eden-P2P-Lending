
import styles, { layout } from "../style";
import { useState } from "react";





const Form = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    loan_amnt: '',
    int_rate: '',
    installment: '',
    annual_inc: '',
    dti: '',
    open_acc: '',
    pub_rec: '',
    revol_bal: '',
    revol_util: '',
    total_acc: '',
    mort_acc: '',
    pub_rec_bankruptcies: '',
    term_36_or_60: '',
    loan_grade: '',
    app_type: '',
    purpose: '',
    home_own: '',
    earliest_cr_year: ''
    /* verification status
        verification status source
        initial list status */
  });

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    const response = await fetch('http://127.0.0.1:5000/api/form-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        //body: formData
      });
    
      const data = await response.json();
    
      // Handle the response from the API
    console.log(formData);
    setFormData({
      loan_amnt: '',
      int_rate: '',
      installment: '',
      annual_inc: '',
      dti: '',
      open_acc: '',
      pub_rec: '',
      revol_bal: '',
      revol_util: '',
      total_acc: '',
      mort_acc: '',
      pub_rec_bankruptcies: '',
      term_36_or_60: '',
      loan_grade: '',
      app_type: '',
      purpose: '',
      home_own: '',
      earliest_cr_year: ''
      /* verification status
        verification status source
        initial list status */

    });
  };

  return (
    <section id="business">
        <div className={styles.flexCenter}>        
            <div style={{ display: "flex", flexDirection: "column" }}>
                <button className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} mt-4 md:mt-4 md:ml-4`} onClick={toggleForm}>
                {isFormOpen ? "Close Form" : "Open Form"}
                </button>

                {isFormOpen && (
                    <form className="mt-5" onSubmit={handleSubmit}>
                        <label htmlFor="loan_amnt" className="block font-medium text-gray-300">
                        Loan Amount
                        </label>
                        <input
                            id="loan_amnt"
                            name="loan_amnt"
                            type="number"
                            step="0.01"
                            min="0"
                            required
                            value={formData.loan_amnt}
                            onChange={handleChange}
                            className="mt-1 px-9 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <label htmlFor="int_rate" className="block font-medium text-gray-300">
                        Interest Rate
                        </label>
                        <input
                            id="int_rate"
                            name="int_rate"
                            type="number"
                            step="0.01"
                            min="0"
                            max="100"
                            required
                            value={formData.int_rate}
                            onChange={handleChange}
                            className="mt-1 px-9 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <label htmlFor="installment" className="block font-medium text-gray-300">
                        Installment
                        </label>
                        <input
                            id="installment"
                            name="installment"
                            type="number"
                            step="0.01"
                            min="0"
                            required
                            value={formData.installment}
                            onChange={handleChange}
                            className="mt-1 px-9 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <label htmlFor="annual_inc" className="block font-medium text-gray-300">
                        Annual Income
                        </label>
                        <input
                            id="annual_inc"
                            name="annual_inc"
                            type="number"
                            autoComplete="off"
                            required
                            value={formData.annual_inc}
                            onChange={handleChange}
                            className="mt-1 px-9 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            step="0.01"
                        />
                        <label htmlFor="dti" className="block font-medium text-gray-300">
                        Debt-To-Income Ratio
                        </label>
                        <input
                            id="dti"
                            name="dti"
                            type="number"
                            autoComplete="off"
                            required
                            value={formData.dti}
                            onChange={handleChange}
                            className="mt-1 px-9 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            step="0.01"
                        />
                        <label htmlFor="open_acc" className="block font-medium text-gray-300">
                        Open Credit Lines
                        </label>
                        <input
                            id="open_acc"
                            name="open_acc"
                            type="number"
                            autoComplete="off"
                            required
                            value={formData.open_acc}
                            onChange={handleChange}
                            className="mt-1 px-9 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            step="0.01"
                        />
                        <label htmlFor="pub_rec" className="block font-medium text-gray-300">
                        Number of Derogatory Public Records
                        </label>
                        <input
                            id="pub_rec"
                            name="pub_rec"
                            type="number"
                            autoComplete="off"
                            required
                            value={formData.pub_rec}
                            onChange={handleChange}
                            className="mt-1 px-9 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            step="0.01"
                        />
                        <label htmlFor="revol_bal" className="block font-medium text-gray-300">
                        Total Credit Revolving Balance
                        </label>
                        <input
                            id="revol_bal"
                            name="revol_bal"
                            type="number"
                            autoComplete="off"
                            required
                            value={formData.revol_bal}
                            onChange={handleChange}
                            className="mt-1 px-9 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            step="0.01"
                        />
                        <label htmlFor="revol_util" className="block font-medium text-gray-300">
                        Revolving Line Utilization Rate
                        </label>
                        <input
                            id="revol_util"
                            name="revol_util"
                            type="number"
                            autoComplete="off"
                            required
                            value={formData.revol_util}
                            onChange={handleChange}
                            className="mt-1 px-9 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            step="0.01"
                        />
                        <label htmlFor="total_acc" className="block font-medium text-gray-300">
                        Total Number of Credit Lines Filed
                        </label>
                        <input
                            id="total_acc"
                            name="total_acc"
                            type="number"
                            autoComplete="off"
                            required
                            value={formData.total_acc}
                            onChange={handleChange}
                            className="mt-1 px-9 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            step="0.01"
                        />
                        <label htmlFor="mort_acc" className="block font-medium text-gray-300">
                        Number of Mortgage Accounts
                        </label>
                        <input
                            id="mort_acc"
                            name="mort_acc"
                            type="number"
                            autoComplete="off"
                            required
                            value={formData.mort_acc}
                            onChange={handleChange}
                            className="mt-1 px-9 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            step="0.01"
                        />
                        <label htmlFor="pub_rec_bankruptcies" className="block font-medium text-gray-300">
                        Number of Public Record Bankruptcies
                        </label>
                        <input
                            id="pub_rec_bankruptcies"
                            name="pub_rec_bankruptcies"
                            type="number"
                            autoComplete="off"
                            required
                            value={formData.pub_rec_bankruptcies}
                            onChange={handleChange}
                            className="mt-1 px-9 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            step="0.01"
                        />
                        <label htmlFor="term_36_or_60" className="block font-medium text-gray-300">
                        Number of Payments on the Loan
                        </label>
                        <select
                            id="term_36_or_60"
                            name="term_36_or_60"
                            required
                            value={formData.term_36_or_60}
                            onChange={handleChange}
                            className="mt-1 px-9 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                        <option value="" disabled>Select an option</option>
                        <option value="36">36 Months</option>
                        <option value="60">60 Months</option>
                        </select>

                        <label htmlFor="loan_grade" className="block font-medium text-gray-300">
                        Loan Grade
                        </label>
                        <select
                            id="loan_grade"
                            name="loan_grade"
                            required
                            value={formData.loan_grade}
                            onChange={handleChange}
                            className="mt-1 px-9 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="" disabled>Select an option</option>
                            <option value="2">Grade A2</option>
                            <option value="3">Grade A3</option>
                            <option value="4">Grade A4</option>
                            <option value="5">Grade A5</option>
                            <option value="6">Grade B1</option>
                            <option value="7">Grade B2</option>
                            <option value="8">Grade B3</option>
                            <option value="9">Grade B4</option>
                            <option value="10">Grade B5</option>
                            <option value="11">Grade C1</option>
                            <option value="12">Grade C2</option>
                            <option value="13">Grade C3</option>
                            <option value="14">Grade C4</option>
                            <option value="15">Grade C5</option>
                            <option value="16">Grade D1</option>
                            <option value="17">Grade D2</option>
                            <option value="18">Grade D3</option>
                            <option value="19">Grade D4</option>
                            <option value="20">Grade D5</option>
                            <option value="21">Grade E1</option>
                            <option value="22">Grade E2</option>
                            <option value="23">Grade E3</option>
                            <option value="24">Grade E4</option>
                            <option value="25">Grade E5</option>
                            <option value="26">Grade F1</option>
                            <option value="27">Grade F2</option>
                            <option value="28">Grade F3</option>
                            <option value="29">Grade F4</option>
                            <option value="30">Grade F5</option>
                            <option value="31">Grade G1</option>
                            <option value="32">Grade G2</option>
                            <option value="33">Grade G3</option>
                            <option value="34">Grade G4</option>
                            <option value="35">Grade G5</option>
                        </select>
                        <label htmlFor="purpose" className="block font-medium text-gray-300">
                        Purpose
                        </label>
                        <select
                            id="purpose"
                            name="purpose"
                            required
                            value={formData.purpose}
                            onChange={handleChange}
                            className="mt-1 px-9 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="" disabled>Select an option</option>
                            <option value="10">Small Business</option>
                            <option value="0">Credit Card</option>
                            <option value="1">Debt Consolidation</option>
                            <option value="2">Education</option>
                            <option value="3">Home Improvement</option>
                            <option value="4">House</option>
                            <option value="5">Major Purchase</option>
                            <option value="6">Medical</option>
                            <option value="7">Moving</option>
                            <option value="9">Renewable Energy</option>
                            <option value="11">Vacation</option>
                            <option value="12">Wedding</option>
                            <option value="8">Other</option>
                        </select>
                        <label htmlFor="app_type" className="block font-medium text-gray-300">
                        Application Type
                        </label>
                        <select
                            id="app_type"
                            name="app_type"
                            required
                            value={formData.app_type}
                            onChange={handleChange}
                            className="mt-1 px-9 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="" disabled>Select an option</option>
                            <option value="0">Individual</option>
                            <option value="1">Joint</option>
                        </select>
                        <label htmlFor="home_own" className="block font-medium text-gray-300">
                        Home Owning Type
                        </label>
                        <select
                            id="home_own"
                            name="home_own"
                            required
                            value={formData.home_own}
                            onChange={handleChange}
                            className="mt-1 px-9 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="" disabled>Select an option</option>
                            <option value="0">Renting</option>
                            <option value="1">Owner</option>
                            <option value="2">Other</option>
                        </select>
                        <label htmlFor="earliest_cr_year" className="block font-medium text-gray-300">
                        Earliest Credit Year
                        </label>
                        <input
                            id="earliest_cr_year"
                            name="earliest_cr_year"
                            type="number"
                            autoComplete="off"
                            required
                            value={formData.earliest_cr_year}
                            onChange={handleChange}
                            className="mt-1 px-9 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            step="0.01"
                        />
                        {/* verification status
                        verification status source
                        initial list status */}
                        
                        {/* <label htmlFor="name" className="block font-medium text-gray-300">
                        Name
                        </label>
                        <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 px-9 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />

                        <label htmlFor="email" className="block font-medium text-gray-300 mt-4">
                        Email
                        </label>
                        <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 px-9 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />

                        <label htmlFor="message" className="block font-medium text-gray-300 mt-4">
                        Message
                        </label>
                        <textarea
                        id="message"
                        name="message"
                        rows="3"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 px-9 py-2 block w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        /> */}
                        <div className={styles.flexCenter}>
                            <button
                            type="submit"
                            className={`py-3 px-4 md:py-4 md:px-6 font-poppins font-medium text-[16px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} mt-4 md:mt-4 md:ml-4`}>
                            Submit
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
</section>
  );
};

export default Form;
