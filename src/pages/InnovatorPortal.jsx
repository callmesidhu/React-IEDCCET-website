"use client"

import { useState, useEffect } from "react"
import {db , collection, addDoc } from "../services/configs" // Adjust the import based on your Firebase setup
import { useDarkMode } from "../context/DarkModeContext";
import Footer from "../components/landing/Footer"
import Navbar from "../components/landing/Navbar"

export default function RegistrationForm() {

  const {darkMode,setDarkMode} = useDarkMode();
  const bgColor = darkMode ? "#000414" : "#FFFFFF";
  const textColor = darkMode ? "#FFFFFF" : "#000000";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    ideaDetails: "",
    hasTeam: "",
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [registrationId, setRegistrationId] = useState("")

  // Handle browser navigation (back button, etc.)
  useEffect(() => {
    const handlePopState = () => {
      if (submitted) {
        // If user navigates back from success screen, reset the form
        resetForm()
      }
    }

    const handleBeforeUnload = () => {
      if (submitted) {
        // Reset form when user is leaving the page from success screen
        resetForm()
      }
    }

    const handleVisibilityChange = () => {
      if (document.hidden && submitted) {
        // Reset form when tab becomes hidden while on success screen
        resetForm()
      }
    }

    // Add event listeners
    window.addEventListener('popstate', handlePopState)
    window.addEventListener('beforeunload', handleBeforeUnload)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Cleanup event listeners
    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [submitted])

  // Function to reset form data
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      contact: "",
      ideaDetails: "",
      hasTeam: "",
    })
    setErrors({})
    setTouched({})
    setSubmitted(false)
    setRegistrationId("")
  }

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) return "Name is required"
    if (name.trim().length < 2) return "Name must be at least 2 characters"
    if (name.trim().length > 50) return "Name must be less than 50 characters"
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) return "Name can only contain letters and spaces"
    return ""
  }

  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) return "Please enter a valid email address"
    return ""
  }

  const validateContact = (contact) => {
    if (!contact.trim()) return "Contact number is required"
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
    const cleanContact = contact.replace(/[\s\-()]/g, "")
    if (!phoneRegex.test(cleanContact)) return "Please enter a valid contact number"
    if (cleanContact.length < 10) return "Contact number must be at least 10 digits"
    return ""
  }

  const validateIdeaDetails = (ideaDetails) => {
    if (!ideaDetails.trim()) return "Idea details are required"
    if (ideaDetails.trim().length < 50) return "Please provide at least 50 characters describing your idea"
    if (ideaDetails.trim().length > 1000) return "Idea details must be less than 1000 characters"
    return ""
  }

  const validateTeamStatus = (hasTeam) => {
    if (!hasTeam) return "Please select your team status"
    return ""
  }

  // Test Firebase connection


const validateField = (name, value) => {
  switch (name) {
    case "name":
      return validateName(value)
    case "email":
      return validateEmail(value)
    case "contact":
      return validateContact(value)
    case "ideaDetails":
      return validateIdeaDetails(value)
    case "hasTeam":
      return validateTeamStatus(value)
    default:
      return ""
  }
}

const handleInputChange = (e) => {
  const { name, value } = e.target
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }))

  // Real-time validation
  if (touched[name]) {
    const error = validateField(name, value)
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }))
  }
}

const handleBlur = (e) => {
  const { name, value } = e.target
  setTouched((prev) => ({
    ...prev,
    [name]: true,
  }))

  const error = validateField(name, value)
  setErrors((prev) => ({
    ...prev,
    [name]: error,
  }))
}

const handleTeamChange = (value) => {
  setFormData((prev) => ({
    ...prev,
    hasTeam: value,
  }))

  if (touched.hasTeam) {
    const error = validateTeamStatus(value)
    setErrors((prev) => ({
      ...prev,
      hasTeam: error,
    }))
  }
}

const handleTeamBlur = () => {
  setTouched((prev) => ({
    ...prev,
    hasTeam: true,
  }))

  const error = validateTeamStatus(formData.hasTeam)
  setErrors((prev) => ({
    ...prev,
    hasTeam: error,
  }))
}

const handleSubmit = async (e) => {
  e.preventDefault()

  // Validate all fields
  const newErrors = {}
  Object.keys(formData).forEach((key) => {
    const error = validateField(key, formData[key])
    if (error) newErrors[key] = error
  })

  // Mark all fields as touched
  const allTouched = {}
  Object.keys(formData).forEach((key) => {
    allTouched[key] = true
  })
  setTouched(allTouched)
  setErrors(newErrors)

  // If there are errors, don't submit
  if (Object.keys(newErrors).some((key) => newErrors[key])) {
    console.log("Form has errors:", newErrors)
    return
  }

  setIsSubmitting(true)

  try {
    console.log("Attempting to submit to Firestore...")
    console.log("Form data:", formData)
    
    // Generate custom registration ID in format INNO+randomid
    const generateRegistrationId = () => {
      const timestamp = Date.now().toString(36) // Convert timestamp to base36
      const randomStr = Math.random().toString(36).substr(2, 6) // 6 random characters
      return `INNO${timestamp}${randomStr}`.toUpperCase()
    }
    
    const registrationId = generateRegistrationId()
    
    // Save form data to Firebase Firestore with custom registration ID
    const docRef = await addDoc(collection(db, "registrations"), {
      regid: registrationId,
      name: formData.name.trim(),
      email: formData.email.trim(),
      contact: formData.contact.trim(),
      ideaDetails: formData.ideaDetails.trim(),
      hasTeam: formData.hasTeam,
      submittedAt: new Date(),
      status: "pending"
    })
    
    console.log("Document written with Registration ID: ", registrationId)
    setRegistrationId(registrationId)
    setSubmitted(true)
    
  } catch (error) {
    console.error("Full error object:", error)
    console.error("Error code:", error.code)
    console.error("Error message:", error.message)
    
    if (error.code === 'permission-denied') {
      alert("Permission denied. Please check your Firestore security rules.")
    } else if (error.code === 'failed-precondition') {
      alert("Firestore database not found. Please create the database in Firebase Console.")
    } else if (error.code === 'unavailable') {
      alert("Firestore is temporarily unavailable. Please try again.")
    } else {
      alert(`Error submitting form: ${error.message}`)
    }
  } finally {
    setIsSubmitting(false)
  }
}
  // Function to handle manual back button click and reset form
  const handleBackToForm = () => {
    resetForm()
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
        <div className="w-full max-w-md text-center bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="pt-6 pb-6 px-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Successful!</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-blue-700 font-medium mb-1">Your Registration ID:</p>
              <p className="text-xl font-mono font-bold text-blue-900 bg-white px-3 py-2 rounded border">{registrationId}</p>
            </div>
            <p className="text-gray-600 mb-6">Thank you for registering. Please save your registration ID for future reference. We'll be in touch soon!</p>
            
            {/* Back/Reset button */}
            <button
              onClick={handleBackToForm}
              className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Register Another Idea
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ backgroundColor: bgColor, color: textColor }} className="min-h-screen flex items-center justify-center flex-col">
      <Navbar/>
      <div className="w-5/6 max-w-2xl bg-white rounded-lg shadow-lg border border-gray-200 my-10">
        {/* Header */}
        <div className="text-center bg-blue-600 text-white rounded-t-lg px-8 py-6">
          <h1 className="text-3xl font-bold mb-2">Registration Form</h1>
          <p className="text-blue-100 text-lg">Join our community and share your innovative ideas</p>
        </div>

        {/* Form Content */}
        <div className="p-8 rounded-b-lg" style={{backgroundColor: darkMode ? "#000C3B" : "#FFFFFF"}}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" style={{ color: textColor }} className="block text-lg font-medium text-gray-700">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Enter your full name"
                required
                className={`w-full h-12 px-4 text-lg border-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                  errors.name && touched.name
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                }`}
              />
              {errors.name && touched.name && <p className="text-red-600 text-sm font-medium">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" style={{ color: textColor }} className="block text-lg font-medium text-gray-700">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Enter your email address"
                required
                className={`w-full h-12 px-4 text-lg border-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                  errors.email && touched.email
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                }`}
              />
              {errors.email && touched.email && <p className="text-red-600 text-sm font-medium">{errors.email}</p>}
            </div>

            {/* Contact Field */}
            <div className="space-y-2">
              <label htmlFor="contact" style={{ color: textColor }} className="block text-lg font-medium text-gray-700">
                Contact Number *
              </label>
              <input
                id="contact"
                name="contact"
                type="tel"
                value={formData.contact}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Enter your contact number (e.g., +1234567890)"
                required
                className={`w-full h-12 px-4 text-lg border-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                  errors.contact && touched.contact
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                }`}
              />
              {errors.contact && touched.contact && (
                <p className="text-red-600 text-sm font-medium">{errors.contact}</p>
              )}
            </div>

            {/* Idea Details Field */}
            <div className="space-y-2">
              <label htmlFor="ideaDetails" style={{ color: textColor }} className="block text-lg font-medium text-gray-700">
                Idea Details *
                <span className="text-sm text-gray-500 font-normal ml-2">
                  ({formData.ideaDetails.length}/1000 characters, minimum 50)
                </span>
              </label>
              <textarea
                id="ideaDetails"
                name="ideaDetails"
                value={formData.ideaDetails}
                onChange={handleInputChange}
                onBlur={handleBlur}
                placeholder="Describe your idea in detail... (minimum 50 characters)"
                required
                rows={5}
                className={`w-full px-4 py-3 text-lg border-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-opacity-50 resize-none ${
                  errors.ideaDetails && touched.ideaDetails
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                }`}
              />
              {errors.ideaDetails && touched.ideaDetails && (
                <p className="text-red-600 text-sm font-medium">{errors.ideaDetails}</p>
              )}
            </div>

            {/* Team Status Field */}
            <div className="space-y-4">
              <label style={{ color: textColor }} className="block text-lg font-medium text-gray-700">Do you already have a team? *</label>
              <div className="flex flex-col space-y-3">
                <div
                  className={`flex items-center space-x-3 p-3 border-2 rounded-lg hover:border-blue-300 transition-colors cursor-pointer ${
                    errors.hasTeam && touched.hasTeam ? "border-red-500" : "border-gray-200"
                  }`}
                  onClick={() => handleTeamChange("yes")}
                >
                  <input
                    type="radio"
                    id="team-yes"
                    name="hasTeam"
                    value="yes"
                    checked={formData.hasTeam === "yes"}
                    onChange={(e) => handleTeamChange(e.target.value)}
                    onBlur={handleTeamBlur}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="team-yes" className="text-lg cursor-pointer flex-1">
                    Yes, I have a team ready
                  </label>
                </div>
                <div
                  className={`flex items-center space-x-3 p-3 border-2 rounded-lg hover:border-blue-300 transition-colors cursor-pointer ${
                    errors.hasTeam && touched.hasTeam ? "border-red-500" : "border-gray-200"
                  }`}
                  onClick={() => handleTeamChange("no")}
                >
                  <input
                    type="radio"
                    id="team-no"
                    name="hasTeam"
                    value="no"
                    checked={formData.hasTeam === "no"}
                    onChange={(e) => handleTeamChange(e.target.value)}
                    onBlur={handleTeamBlur}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="team-no" className="text-lg cursor-pointer flex-1">
                    No, I'm looking for team members
                  </label>
                </div>
                <div
                  className={`flex items-center space-x-3 p-3 border-2 rounded-lg hover:border-blue-300 transition-colors cursor-pointer ${
                    errors.hasTeam && touched.hasTeam ? "border-red-500" : "border-gray-200"
                  }`}
                  onClick={() => handleTeamChange("maybe")}
                >
                  <input
                    type="radio"
                    id="team-maybe"
                    name="hasTeam"
                    value="maybe"
                    checked={formData.hasTeam === "maybe"}
                    onChange={(e) => handleTeamChange(e.target.value)}
                    onBlur={handleTeamBlur}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="team-maybe" className="text-lg cursor-pointer flex-1">
                    I'm open to both individual and team participation
                  </label>
                </div>
              </div>
              {errors.hasTeam && touched.hasTeam && (
                <p className="text-red-600 text-sm font-medium">{errors.hasTeam}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
             
            
              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  Object.keys(errors).some((key) => errors[key]) ||
                  !formData.name ||
                  !formData.email ||
                  !formData.contact ||
                  !formData.ideaDetails ||
                  !formData.hasTeam
                }
                className="w-full h-14 text-lg font-semibold bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  "Submit Registration"
                )}
              </button>
            </div>
          </form>

          {/* Footer Note */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 text-center">
              <strong>Note:</strong> All fields marked with * are required. We'll review your registration and contact
              you within 2-3 business days.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
