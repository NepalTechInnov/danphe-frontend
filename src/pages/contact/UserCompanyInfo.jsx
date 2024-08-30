// import React from 'react'
// import '../contact/userCompanyInfo.css';
// import Cart from '../cart/Cart'

// const UserCompanyInfo = () => {
//   return (
//     <>
//     <div className="userCompanyInfoContainer">
//       <div className="container userCompanyInfo">
//        <div className="leftFormData">
//        <h3>Tell us About your Company</h3>
//        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dicta autem dignissimos quam, nihil tempora aut aperiam repellat impedit culpa?</p>

//        <div className="userCompanyInfoForm">
//         <form>
//           <div className='companyName'>
//             <label>Prefered Name</label>
//             <input type="text"/>
//             <p style={{fontStyle: 'italic', fontSize: '12px'}}>Please enter the name you would like to give your business. Unless you specify otherwise, we will add ", LLC" to an LLC name or ", Inc." to the name of a corporation or non-profit organization.</p>
//           </div>
//           <div className='alternateCompanyName'>
//             <label>Alternate Name</label>
//             <input type="text"/>
//             <p style={{fontStyle: 'italic', fontSize: '12px'}}>If you do not have an Alternate Name, enter the word "call" in the field above. If your first name choice is unavailable, an Incorporation Specialist will contact you.</p>
//           </div>

//           <div className='industry'>
//             <label>Please Select Your industry</label>
//             <select>
//               <option>please select your industry</option>
//               <option value="childCare">Child Care</option>
//               <option value="childCare">Child Care</option>
//               <option value="childCare">Child Care</option>
//               <option value="childCare">Child Care</option>
//             </select>
//           </div>

//           <div>
//             <label>Please tell us what your business does. Include any products and services offered.</label>
//             <input type="text" name="" id="" />
//           </div>

//           <div className='userContact'>
//         <h3>  Please enter your primary business address.</h3>
//        <label>country</label>
//        <input type="text" name='country' />
//        <label>street</label>
//        <input type="text" name='street' />
//        <label>city</label>
//        <input type="text" name='city' />
//        <label>state/Province</label>
//        <input type="text" name='state' />
//        <label>postalcode</label>
//        <input type="number" name='postalcode' />
//        <p style={{fontStyle:'italic'}}>This must be a physical address.  P.O. Boxes are not acceptable.</p>
//        </div>

//        <div>
//         <p style={{fontStyle: 'italic'}}>Who are the business owners (also known as members)?  If listing a company in this section, please include all beneficial owners in the next section below.</p>

//         <p>Is this contact an individual or a company?
//           <label>individual</label>
//           <input type="radio" name="company" id="" />
//           <label>company</label>
//           <input type="radio" name="company" id="" />
//         </p>
//         <label>first name</label>
//        <input type="text" name='firstName' />
//         <label>middle name</label>
//        <input type="text" name='middleName' />
//         <label>lastName name</label>
//        <input type="text" name='lastName' />
//        <label>country</label>
//        <input type="text" name='country' />
//        <label>street</label>
//        <input type="text" name='street' />
//        <label>city</label>
//        <input type="text" name='city' />
//        <label>state/Province</label>
//        <input type="text" name='state' />
//        <label>postalcode</label>
//        <input type="number" name='postalcode' />
//        </div>

//        <div className='bussinessRun'>
//         <p>member/owner
//         <input type="radio" name="member" id="" />
//         </p>
//      <p>Manager
//      <input type="radio" name="member" id="" />
//      </p>

//        </div>

//        <div className='contactInfo'>
//         <p>Who are the beneficial owners?  If a company was listed as a member in the above section, please include all additional beneficial owners in this section.</p>

//         <label>first name</label>
//        <input type="text" name='firstName' />
//         <label>middle name</label>
//        <input type="text" name='middleName' />
//         <label>lastName name</label>
//        <input type="text" name='lastName' />
//        <label>country</label>
//        <input type="text" name='country' />
//        <label>street</label>
//        <input type="text" name='street' />
//        <label>city</label>
//        <input type="text" name='city' />
//        <label>state/Province</label>
//        <input type="text" name='state' />
//        <label>postalcode</label>
//        <input type="number" name='postalcode' />

//        </div>

//        <div className='importantNote'>
//         <h3>Important Notice</h3>
//         <p>To properly fulfill your Annual Report Prep and File service, incorporate.com will be the registered agent for this company.  The fee for the first year of this service will be added to your cart when you check the box below, agreeing to these terms.  In future years, you will receive an annual invoice for Registered Agent Service.  Need more information?  Call us at 00000000000.</p>
//         <p>
//           <input type="checkbox" name="" id="" />
//           <label>I have read the above statement and understand my requirement.</label>
//         </p>
//        </div>

//        <div className='contactInfo'>
//        <h3>Where should we ship your order?</h3>

//        <label>first name</label>
//        <input type="text" name='firstName' />
//         <label>middle name</label>
//        <input type="text" name='middleName' />
//         <label>lastName name</label>
//        <input type="text" name='lastName' />
//        <label>country</label>
//        <input type="text" name='country' />
//        <label>street</label>
//        <input type="text" name='street' />
//        <label>city</label>
//        <input type="text" name='city' />
//        <label>state/Province</label>
//        <input type="text" name='state' />
//        <label>postalcode</label>
//        <input type="number" name='postalcode' />
//        </div>

//        <div>
//         <p>Do you want your LLC to exist indefinitely, or do you want your LLC to terminate on a certain date?</p>

//         <p>I (we) plan to keep our LLC indefinitely.
//         <input type="radio" name="" id="" />
//         </p>
//         <p>I (we) plan to shut down ("dissolve") our business on a certain date.
//           <input type="radio" name="" id="" />
//         </p>
//        </div>

//        <div>
//         <p>What is the name and address of the incorporator?</p>
//         <label>first name</label>
//        <input type="text" name='firstName' />
//         <label>middle name</label>
//        <input type="text" name='middleName' />
//         <label>lastName name</label>
//        <input type="text" name='lastName' />
//        <label>country</label>
//        <input type="text" name='country' />
//        <label>street</label>
//        <input type="text" name='street' />
//        <label>city</label>
//        <input type="text" name='city' />
//        <label>state/Province</label>
//        <input type="text" name='state' />
//        <label>postalcode</label>
//        <input type="number" name='postalcode' />
//        </div>

//        <div className="businessemail">
//         <p>What is your business email and your business phone number?</p>
//         <label>Email</label>
//         <input type="email" name="email" id="" />
//         <label>Phone</label>
//         <input type="number" name="phone" id="" />
//        </div>

//        <button>submit</button>

//         </form>

//        </div>
//        </div>
//       {/* cart data  */}
//         <div className="rightCartData">
//          <div className="cartData">
//          <Cart/>
//          </div>
//           </div>
//       </div>
//     </div>

//     </>
//   )
// }

// export default UserCompanyInfo

// import React, { useState } from 'react';
// import '../contact/userCompanyInfo.css';
// import Cart from '../cart/Cart';

// // Reusable FormInput Component
// const FormInput = ({ label, type = "text", name, id, ...rest }) => (
//   <div>
//     <label htmlFor={id}>{label}</label>
//     <input type={type} name={name} id={id} {...rest} />
//   </div>
// );

// const UserCompanyInfo = () => {
//   const [formData, setFormData] = useState({
//     preferredName: '',
//     alternateName: '',
//     industry: '',
//     businessDescription: '',
//     address: { country: '', street: '', city: '', state: '', postalcode: '' },
//     contact: { firstName: '', middleName: '', lastName: '', country: '', street: '', city: '', state: '', postalcode: '' },
//     businessRun: '',
//     beneficialOwners: [{ firstName: '', middleName: '', lastName: '', country: '', street: '', city: '', state: '', postalcode: '' }],
//     importantNotice: false,
//     shippingAddress: { firstName: '', middleName: '', lastName: '', country: '', street: '', city: '', state: '', postalcode: '' },
//     llcDuration: '',
//     incorporator: { firstName: '', middleName: '', lastName: '', country: '', street: '', city: '', state: '', postalcode: '' },
//     businessEmail: '',
//     businessPhone: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="formAndCartWrapper">
//       <div className="userCompanyInfo">
//         <h3>Tell us About your Company</h3>
//         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dicta autem dignissimos quam, nihil tempora aut aperiam repellat impedit culpa?</p>

//         <div className="userCompanyInfoForm">
//           <form>
//             <FormInput label="Preferred Name" name="preferredName" onChange={handleChange} />
//             <p style={{ fontStyle: 'italic', fontSize: '12px' }}>
//               Please enter the name you would like to give your business. Unless you specify otherwise, we will add ", LLC" to an LLC name or ", Inc." to the name of a corporation or non-profit organization.
//             </p>

//             <FormInput label="Alternate Name" name="alternateName" onChange={handleChange} />
//             <p style={{ fontStyle: 'italic', fontSize: '12px' }}>
//               If you do not have an Alternate Name, enter the word "call" in the field above. If your first name choice is unavailable, an Incorporation Specialist will contact you.
//             </p>

//             <div className='industry'>
//               <label htmlFor="industry">Please Select Your industry</label>
//               <select id="industry" name="industry" onChange={handleChange}>
//                 <option value="">please select your industry</option>
//                 <option value="childCare">Child Care</option>
//                 {/* Add other options as needed */}
//               </select>
//             </div>

//             <FormInput label="Please tell us what your business does. Include any products and services offered." name="businessDescription" onChange={handleChange} />

//             <h3>Please enter your primary business address.</h3>
//             <FormInput label="Country" name="address[country]" onChange={handleChange} />
//             <FormInput label="Street" name="address[street]" onChange={handleChange} />
//             <FormInput label="City" name="address[city]" onChange={handleChange} />
//             <FormInput label="State/Province" name="address[state]" onChange={handleChange} />
//             <FormInput label="Postal Code" type="number" name="address[postalcode]" onChange={handleChange} />
//             <p style={{ fontStyle: 'italic' }}>This must be a physical address. P.O. Boxes are not acceptable.</p>

//             <p style={{ fontStyle: 'italic' }}>Who are the business owners (also known as members)? If listing a company in this section, please include all beneficial owners in the next section below.</p>

//             <p>Is this contact an individual or a company?
//               <label>Individual</label>
//               <input type="radio" name="contactType" value="individual" onChange={handleChange} />
//               <label>Company</label>
//               <input type="radio" name="contactType" value="company" onChange={handleChange} />
//             </p>

//             <FormInput label="First Name" name="contact[firstName]" onChange={handleChange} />
//             <FormInput label="Middle Name" name="contact[middleName]" onChange={handleChange} />
//             <FormInput label="Last Name" name="contact[lastName]" onChange={handleChange} />
//             <FormInput label="Country" name="contact[country]" onChange={handleChange} />
//             <FormInput label="Street" name="contact[street]" onChange={handleChange} />
//             <FormInput label="City" name="contact[city]" onChange={handleChange} />
//             <FormInput label="State/Province" name="contact[state]" onChange={handleChange} />
//             <FormInput label="Postal Code" type="number" name="contact[postalcode]" onChange={handleChange} />

//             <div className='bussinessRun'>
//               <p>Member/Owner
//                 <input type="radio" name="businessRun" value="member" onChange={handleChange} />
//               </p>
//               <p>Manager
//                 <input type="radio" name="businessRun" value="manager" onChange={handleChange} />
//               </p>
//             </div>

//             <div className='contactInfo'>
//               <p>Who are the beneficial owners? If a company was listed as a member in the above section, please include all additional beneficial owners in this section.</p>
//               {/* Iterate over beneficial owners */}
//               {formData.beneficialOwners.map((owner, index) => (
//                 <React.Fragment key={index}>
//                   <FormInput label="First Name" name={`beneficialOwners[${index}][firstName]`} onChange={handleChange} />
//                   <FormInput label="Middle Name" name={`beneficialOwners[${index}][middleName]`} onChange={handleChange} />
//                   <FormInput label="Last Name" name={`beneficialOwners[${index}][lastName]`} onChange={handleChange} />
//                   <FormInput label="Country" name={`beneficialOwners[${index}][country]`} onChange={handleChange} />
//                   <FormInput label="Street" name={`beneficialOwners[${index}][street]`} onChange={handleChange} />
//                   <FormInput label="City" name={`beneficialOwners[${index}][city]`} onChange={handleChange} />
//                   <FormInput label="State/Province" name={`beneficialOwners[${index}][state]`} onChange={handleChange} />
//                   <FormInput label="Postal Code" type="number" name={`beneficialOwners[${index}][postalcode]`} onChange={handleChange} />
//                 </React.Fragment>
//               ))}
//             </div>

//             <div className='importantNote'>
//               <h3>Important Notice</h3>
//               <p>To properly fulfill your Annual Report Prep and File service, incorporate.com will be the registered agent for this company. The fee for the first year of this service will be added to your cart when you check the box below, agreeing to these terms. In future years, you will receive an annual invoice for Registered Agent Service. Need more information? Call us at 00000000000.</p>
//               <p>
//                 <input type="checkbox" name="importantNotice" onChange={handleChange} />
//                 <label>I have read the above statement and understand my requirement.</label>
//               </p>
//             </div>

//             <div className='contactInfo'>
//               <h3>Where should we ship your order?</h3>
//               <FormInput label="First Name" name="shippingAddress[firstName]" onChange={handleChange} />
//               <FormInput label="Middle Name" name="shippingAddress[middleName]" onChange={handleChange} />
//               <FormInput label="Last Name" name="shippingAddress[lastName]" onChange={handleChange} />
//               <FormInput label="Country" name="shippingAddress[country]" onChange={handleChange} />
//               <FormInput label="Street" name="shippingAddress[street]" onChange={handleChange} />
//               <FormInput label="City" name="shippingAddress[city]" onChange={handleChange} />
//               <FormInput label="State/Province" name="shippingAddress[state]" onChange={handleChange} />
//               <FormInput label="Postal Code" type="number" name="shippingAddress[postalcode]" onChange={handleChange} />
//             </div>

//             <div>
//               <p>Do you want your LLC to exist indefinitely, or do you want your LLC to terminate on a certain date?</p>
//               <p>
//                 I (we) plan to keep our LLC indefinitely.
//                 <input type="radio" name="llcDuration" value="indefinitely" onChange={handleChange} />
//               </p>
//               <p>
//                 I (we) want our LLC to terminate on a certain date.
//                 <input type="radio" name="llcDuration" value="certainDate" onChange={handleChange} />
//               </p>
//               <FormInput label="End Date" type="date" name="endDate" onChange={handleChange} />
//             </div>

//             <div className='incorporator'>
//               <h3>Incorporator Information</h3>
//               <p>If you have a specific incorporator in mind, please enter the details below:</p>
//               <FormInput label="First Name" name="incorporator[firstName]" onChange={handleChange} />
//               <FormInput label="Middle Name" name="incorporator[middleName]" onChange={handleChange} />
//               <FormInput label="Last Name" name="incorporator[lastName]" onChange={handleChange} />
//               <FormInput label="Country" name="incorporator[country]" onChange={handleChange} />
//               <FormInput label="Street" name="incorporator[street]" onChange={handleChange} />
//               <FormInput label="City" name="incorporator[city]" onChange={handleChange} />
//               <FormInput label="State/Province" name="incorporator[state]" onChange={handleChange} />
//               <FormInput label="Postal Code" type="number" name="incorporator[postalcode]" onChange={handleChange} />
//             </div>

//             <div>
//               <FormInput label="Business Email" type="email" name="businessEmail" onChange={handleChange} />
//               <FormInput label="Business Phone" type="tel" name="businessPhone" onChange={handleChange} />
//             </div>

//             <button type="submit">Submit</button>
//           </form>
//         </div>
//       </div>

//       {/* Cart data */}
//       <div className="rightCartData">
//         <div className="cartData">
//           <Cart />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserCompanyInfo;

import React, { useState } from "react";
import "../contact/userCompanyInfo.css";
import Cart from "../cart/Cart";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CartCard from "../cart/CartCard";

// Reusable FormInput Component
const FormInput = ({ label, type = "text", ...props }) => (
  <div>
    <label htmlFor={props.id}>{label}</label>
    <input type={type} {...props} />
  </div>
);

// Constants

const UserCompanyInfo = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      preferredName: "",
      alternateName: "",
      industry: "",
      businessDescription: "",
      llcExistIndefinitely: "",
      address: { country: "", street: "", city: "", state: "", postalcode: "" },
      contact: {
        firstName: "",
        middleName: "",
        lastName: "",
        country: "",
        street: "",
        city: "",
        state: "",
        postalcode: "",
      },
      businessRunner: "",
      beneficialOwners: [
        {
          firstName: "",
          middleName: "",
          lastName: "",
          country: "",
          street: "",
          city: "",
          state: "",
          postalcode: "",
        },
      ],
      importantNotice: false,
      shippingAddress: {
        firstName: "",
        middleName: "",
        lastName: "",
        country: "",
        street: "",
        city: "",
        state: "",
        postalcode: "",
      },
      llcDuration: "",
      incorporator: {
        firstName: "",
        middleName: "",
        lastName: "",
        country: "",
        street: "",
        city: "",
        state: "",
        postalcode: "",
      },
      billingContact: {
        firstName: "",
        middleName: "",
        lastName: "",
        country: "",
        street: "",
        city: "",
        state: "",
        postalcode: "",
      },
      businessEmail: "",
      businessPhone: "",
      orders: [],
      responsiblePartyonEIN: "",
      signatoryAnnualReport: "",
      incorporatorTitle: "",
    },
    validationSchema: Yup.object({
      preferredName: Yup.string().required("Preferred name is required"),
      // Add other validation rules here
      businessEmail: Yup.string()
        .email("Invalid email address")
        .required("Business email is required"),
      businessPhone: Yup.string().required("Business phone is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          `${
            import.meta.env.VITE_REACT_APP_URL
          }/api/v1/contact/userCompanyInfo`,
          values
        );
        if (response.data.success) {
          toast.success(response.data.message);
          navigate("/checkout");
        }
      } catch (error) {
        toast.error("Failed to submit form");
      }
    },
  });

  return (
    <div className="formAndCartWrapper w-full">
      <div className="userCompanyInfo">
        <h3>Tell us About your Company</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dicta
          autem dignissimos quam, nihil tempora aut aperiam repellat impedit
          culpa?
        </p>

        <div className="userCompanyInfoForm">
          <form onSubmit={formik.handleSubmit}>
            <FormInput
              label="Preferred Name"
              name="preferredName"
              id="preferredName"
              value={formik.values.preferredName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.preferredName && formik.errors.preferredName
              }
            />
            <p
              style={{ fontStyle: "italic", fontSize: "12px" }}
              className="imp"
            >
              Please enter the name you would like to give your business. Unless
              you specify otherwise, we will add ", LLC" to an LLC name or ",
              Inc." to the name of a corporation or non-profit organization.
            </p>

            <FormInput
              label="Alternate Name"
              name="alternateName"
              id="alternateName"
              value={formik.values.alternateName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.alternateName && formik.errors.alternateName
              }
            />
            <p
              style={{ fontStyle: "italic", fontSize: "12px" }}
              className="imp"
            >
              If you do not have an Alternate Name, enter the word "call" in the
              field above. If your first name choice is unavailable, an
              Incorporation Specialist will contact you.
            </p>

            <div className="industry mb-8">
              <label htmlFor="industry">Please Select Your Industry</label>
              <select
                id="industry"
                name="industry"
                value={formik.values.industry}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Please select your industry</option>
                <option value="childCare">Child Care</option>
                {/* Add other options as needed */}
              </select>
              {formik.touched.industry && formik.errors.industry && (
                <div className="error">{formik.errors.industry}</div>
              )}
            </div>

            <div className="w-full mb-8">
              <FormInput
                label="Please tell us what your business does. Include any products and services offered."
                name="businessDescription"
                id="businessDescription"
                value={formik.values.businessDescription}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p
                style={{ fontStyle: "italic", fontSize: "12px" }}
                className="imp"
              >
                For California LLCs and Corporations: When filling online the
                state limit is 50 characters. Please take that into
                consideration when providing your answer above. If it is longer
                than 50 characters, we will have to paper file, which may take
                longer.
              </p>
            </div>

            <h3>Please enter your primary business address.</h3>
            <div className="bg-slate p-8 mb-1">
              <FormInput
                label="Country"
                name="address[country]"
                id="address[country]"
                value={formik.values.address.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormInput
                label="Street"
                name="address[street]"
                id="address[street]"
                value={formik.values.address.street}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormInput
                label="City"
                name="address[city]"
                id="address[city]"
                value={formik.values.address.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormInput
                label="State/Province"
                name="address[state]"
                id="address[state]"
                value={formik.values.address.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormInput
                label="Postal Code"
                type="number"
                name="address[postalcode]"
                id="address[postalcode]"
                value={formik.values.address.postalcode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <p
              style={{ fontStyle: "italic", fontSize: "12px" }}
              className="imp"
            >
              This must be a physical address. P.O. Boxes are not acceptable.
            </p>

            <p style={{ fontStyle: "italic" }}>
              Who are the business owners (also known as members)? If listing a
              company in this section, please include all beneficial owners in
              the next section below.
            </p>
            <div className="bg-slate p-8">
              <p>Is this contact an individual or a company?</p>
              <div className="flex gap-4">
                <input
                  type="radio"
                  name="contactType"
                  value="individual"
                  checked={formik.values.contactType === "individual"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label className="pt-2">Individual</label>
              </div>
              <div className="flex gap-4 mb-8">
                <input
                  type="radio"
                  name="contactType"
                  value="company"
                  checked={formik.values.contactType === "company"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label className="pt-2">Company</label>
              </div>
              <FormInput
                label="First Name"
                name="contact[firstName]"
                id="contact[firstName]"
                value={formik.values.contact.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormInput
                label="Middle Name"
                name="contact[middleName]"
                id="contact[middleName]"
                value={formik.values.contact.middleName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormInput
                label="Last Name"
                name="contact[lastName]"
                id="contact[lastName]"
                value={formik.values.contact.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormInput
                label="Country"
                name="contact[country]"
                id="contact[country]"
                value={formik.values.contact.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormInput
                label="Street"
                name="contact[street]"
                id="contact[street]"
                value={formik.values.contact.street}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormInput
                label="City"
                name="contact[city]"
                id="contact[city]"
                value={formik.values.contact.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormInput
                label="State/Province"
                name="contact[state]"
                id="contact[state]"
                value={formik.values.contact.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FormInput
                label="Postal Code"
                type="number"
                name="contact[postalcode]"
                id="contact[postalcode]"
                value={formik.values.contact.postalcode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>

            <span className="mb-8">+ Add Another Contact</span>

            {/*Who will run the business section*/}
            <h3 className="imp">Who will run the business?</h3>
            <div className="mb-8">
              <div className="flex gap-4">
                <input
                  type="radio"
                  name="businessRunner"
                  value="memberOrOwner"
                  checked={formik.values.businessRunner === "memberOrOwner"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label className="pt-2">Owner / Member</label>
              </div>
              <div className="flex gap-4 mb-8">
                <input
                  type="radio"
                  name="businessRunner"
                  value="manager"
                  checked={formik.values.businessRunner === "manager"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label className="pt-2">Manager</label>
              </div>
            </div>

            {/*Who are the beneficial owners */}
            <div className="mb-8">
              <h3 className="imp">
                Who are the beneficial owners? If a company was listed as a
                member in the above section, please include all beneficial
                owners in this section.
              </h3>

              <div className="bg-slate p-8">
                <FormInput
                  label="First Name"
                  name="contact[firstName]"
                  id="contact[firstName]"
                  value={formik.values.contact.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormInput
                  label="Middle Name"
                  name="contact[middleName]"
                  id="contact[middleName]"
                  value={formik.values.contact.middleName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormInput
                  label="Last Name"
                  name="contact[lastName]"
                  id="contact[lastName]"
                  value={formik.values.contact.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormInput
                  label="Country"
                  name="contact[country]"
                  id="contact[country]"
                  value={formik.values.contact.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormInput
                  label="Street"
                  name="contact[street]"
                  id="contact[street]"
                  value={formik.values.contact.street}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormInput
                  label="City"
                  name="contact[city]"
                  id="contact[city]"
                  value={formik.values.contact.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormInput
                  label="State/Province"
                  name="contact[state]"
                  id="contact[state]"
                  value={formik.values.contact.state}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormInput
                  label="Postal Code"
                  type="number"
                  name="contact[postalcode]"
                  id="contact[postalcode]"
                  value={formik.values.contact.postalcode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              <span className="mb-8">+ Add Another Contact</span>
            </div>

            {/* Important Notice */}
            <h2>Important Notice</h2>
            <hr />
            <p style={{ fontStyle: "italic" }}>
              To properly fulfill your Annual Report Prep and File service,
              [website] will be the registered agent for this company. The fee
              for the first year of this service will be added to your cart when
              you check the box below, agreeing to these terms. In future years,
              you will receive an annual invoice for Registered Agent Service.
              Need more information? Call us at [number].
            </p>
            {/* 
            <p>Additional Information</p>
            <div className='bg-slate p-8 mb-8'>
            <div className="businessRun">
              <p>How long has your business been operating?</p>
              <div className='flex gap-4 mb-8'>
              <input
                type="radio"
                name="businessRun"
                value="less_than_6_months"
                checked={formik.values.businessRun === 'less_than_6_months'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                <label className='pt-2'>Less than 6 months</label>
              </div>
              <div className='flex gap-4 mb-8'>
              <input
                type="radio"
                name="businessRun"
                value="6_months_to_1_year"
                checked={formik.values.businessRun === '6_months_to_1_year'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                <label className='pt-2'>6 months to 1 year</label>
              </div>
              <div className='flex gap-4 mb-8'>
              <input
                type="radio"
                name="businessRun"
                value="1_year_to_3_years"
                checked={formik.values.businessRun === '1_year_to_3_years'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                <label className='pt-2'>1 year to 3 years</label>
              </div>
              <div className='flex gap-4 mb-8'>
              <input
                type="radio"
                name="businessRun"
                value="3_years_or_more"
                checked={formik.values.businessRun === '3_years_or_more'}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                <label className='pt-2'>3 years or more</label>
                </div>
            </div>

            <FormInput
              label="Business Email"
              name="businessEmail"
              id="businessEmail"
              type="email"
              value={formik.values.businessEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <FormInput
              label="Business Phone"
              name="businessPhone"
              id="businessPhone"
              type="tel"
              value={formik.values.businessPhone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            </div> */}

            {/* Agree */}
            <div className="checkbox">
              <div className="flex gap-4 mb-8">
                <input
                  type="checkbox"
                  id="importantNotice"
                  name="importantNotice"
                  checked={formik.values.importantNotice}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="importantNotice" className="pt-2">
                  I have read the above statement and understand my requirement.
                </label>
              </div>
            </div>

            {/* Where should we ship your order */}
            <div className="mb-8">
              <h3 className="imp">Where should we ship your order?</h3>

              <div className="bg-slate p-8">
                <FormInput
                  label="First Name"
                  name="contact[firstName]"
                  id="contact[firstName]"
                  value={formik.values.contact.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormInput
                  label="Middle Name"
                  name="contact[middleName]"
                  id="contact[middleName]"
                  value={formik.values.contact.middleName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormInput
                  label="Last Name"
                  name="contact[lastName]"
                  id="contact[lastName]"
                  value={formik.values.contact.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormInput
                  label="Country"
                  name="contact[country]"
                  id="contact[country]"
                  value={formik.values.contact.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormInput
                  label="Street"
                  name="contact[street]"
                  id="contact[street]"
                  value={formik.values.contact.street}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormInput
                  label="City"
                  name="contact[city]"
                  id="contact[city]"
                  value={formik.values.contact.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormInput
                  label="State/Province"
                  name="contact[state]"
                  id="contact[state]"
                  value={formik.values.contact.state}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormInput
                  label="Postal Code"
                  type="number"
                  name="contact[postalcode]"
                  id="contact[postalcode]"
                  value={formik.values.contact.postalcode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
            </div>

            {/* LLC exist indefinitely */}
            <h3 className="imp">
              Do you want your LLC to exist indefinitely, or do you want your
              LLC to terminate on a certain date?
            </h3>
            <div className="mb-8">
              <div className="flex gap-4">
                <input
                  type="radio"
                  name="llcExistIndefinitely"
                  value="yes"
                  checked={formik.values.llcExistIndefinitely === "yes"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label className="pt-2">
                  I (we) plan to keep our LLC indefinitely.
                </label>
              </div>
              <div className="flex gap-4 mb-8">
                <input
                  type="radio"
                  name="llcExistIndefinitely"
                  value="no"
                  checked={formik.values.llcExistIndefinitely === "no"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label className="pt-2">
                  I (we) plan to shut down ("dissolve") our business on a
                  certain date.
                </label>
              </div>

              {/* Responsible Party for EIN */}
              <div className="mb-8">
                <FormInput
                  label="Who will be listed as the responsible party on the EIN application?"
                  name="responsiblePartyonEIN"
                  id="responsiblePartyonEIN"
                  value={formik.values.responsiblePartyonEIN}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              {/* Signatory Annual Report */}
              <div className="mb-8">
                <FormInput
                  label="Who will sign the Annual Report?"
                  name="signatoryAnnualReport"
                  id="signatoryAnnualReport"
                  value={formik.values.signatoryAnnualReport}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              {/* Title of incorporator */}
              <h3 className="imp">What is the title of the incorporator?</h3>
              <div className="mb-8">
                <div className="flex gap-4">
                  <input
                    type="radio"
                    name="incorporatorTitle"
                    value="memberOrOwner"
                    checked={
                      formik.values.incorporatorTitle === "memberOrOwner"
                    }
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label className="pt-2">Member / Owner</label>
                </div>
                <div className="flex gap-4 mb-8">
                  <input
                    type="radio"
                    name="incorporatorTitle"
                    value="manager"
                    checked={formik.values.incorporatorTitle === "manager"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label className="pt-2">Manager</label>
                </div>
              </div>

              {/*Who is the incorporator */}
              <div className="mb-8">
                <h3 className="imp">
                  What is the name and address of the incorporator?
                </h3>

                <div className="bg-slate p-8">
                  <FormInput
                    label="First Name"
                    name="incorporator[firstName]"
                    id="incorporator[firstName]"
                    value={formik.values.incorporator.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FormInput
                    label="Middle Name"
                    name="incorporator[middleName]"
                    id="incorporator[middleName]"
                    value={formik.values.incorporator.middleName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FormInput
                    label="Last Name"
                    name="incorporator[lastName]"
                    id="incorporator[lastName]"
                    value={formik.values.incorporator.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FormInput
                    label="Country"
                    name="incorporator[country]"
                    id="incorporator[country]"
                    value={formik.values.incorporator.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FormInput
                    label="Street"
                    name="incorporator[street]"
                    id="incorporator[street]"
                    value={formik.values.incorporator.street}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FormInput
                    label="City"
                    name="incorporator[city]"
                    id="incorporator[city]"
                    value={formik.values.incorporator.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FormInput
                    label="State/Province"
                    name="incorporator[state]"
                    id="incorporator[state]"
                    value={formik.values.incorporator.state}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FormInput
                    label="Postal Code"
                    type="number"
                    name="incorporator[postalcode]"
                    id="incorporator[postalcode]"
                    value={formik.values.incorporator.postalcode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>

              {/* Business Email & phone */}
              <div className="mb-8">
                <h3 className="imp">
                  What is your business email and business phone number?
                </h3>

                <div className="bg-slate p-8">
                  <FormInput
                    label="Phone"
                    name="businessPhone"
                    id="businessPhone"
                    value={formik.values.businessPhone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <FormInput
                    label="Phone"
                    name="businessEmail"
                    id="businessEmail"
                    value={formik.values.businessEmail}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>

              {/* Billing Contact */}
              <div className="mb-8">
                <h3 className="imp">
                  Who should be the designated billing contact for the Annual
                  Report Prep & File Service?
                </h3>

                <div className="bg-slate p-8">
                  <FormInput
                    label="First Name"
                    name="billingContact[firstName]"
                    id="billingContact[firstName]"
                    value={formik.values.billingContact.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FormInput
                    label="Middle Name"
                    name="billingContact[middleName]"
                    id="billingContact[middleName]"
                    value={formik.values.billingContact.middleName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FormInput
                    label="Last Name"
                    name="billingContact[lastName]"
                    id="billingContact[lastName]"
                    value={formik.values.billingContact.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FormInput
                    label="Country"
                    name="billingContact[country]"
                    id="billingContact[country]"
                    value={formik.values.billingContact.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FormInput
                    label="Street"
                    name="billingContact[street]"
                    id="billingContact[street]"
                    value={formik.values.billingContact.street}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FormInput
                    label="City"
                    name="billingContact[city]"
                    id="billingContact[city]"
                    value={formik.values.billingContact.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FormInput
                    label="State/Province"
                    name="billingContact[state]"
                    id="billingContact[state]"
                    value={formik.values.billingContact.state}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FormInput
                    label="Postal Code"
                    type="number"
                    name="billingContact[postalcode]"
                    id="billingContact[postalcode]"
                    value={formik.values.billingContact.postalcode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <span className="mb-8">+ Add Another Contact</span>
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="cartContainer">
        <CartCard /> {/* Rendering the CartCard component */}
      </div>
    </div>
  );
};

export default UserCompanyInfo;
