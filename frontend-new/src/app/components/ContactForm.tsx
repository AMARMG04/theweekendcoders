"use client";

// components ContactForm.tsx
import { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import axios from "axios";
import Link from "next/link";

interface FormData {
    name: string;
    email: string;
    message: string;
    category: string;
    requirement: string;
    number: string;
    selectedServices: string[];
}

const ContactForm: React.FC = () => {
    const services = [
        "Landing Site",
        "Ecommerce",
        "UI/UX Design",
        "Content Writing",
        "Backend Bridges",
    ];
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        trigger,
    } = useForm<FormData>(); // Specify the FormData type here

    const [loading, setLoading] = useState(false);

    const [step, setStep] = useState<number>(1);

    const onSubmit = async (data: FormData) => {
        // Include selectedServices in the form data
        data.selectedServices = selectedServices;

        try {
            // Make a POST request to the backend endpoint
            setLoading(true);
            const response = await axios.post(
                "http://localhost:3001/submit-form",
                data, { withCredentials: true }
            );
            setStep((prevStep) => prevStep + 1);

            // Handle the response as needed
            console.log("Form submitted successfully:", response.data);
        } catch (error) {
            // Handle errors
            console.error("Error submitting form:", error);
        } finally {
            setLoading(false);
        }
    };

    const nextStep = async () => {
        const isValid = await trigger();
        if (isValid) {
            setStep((prevStep) => prevStep + 1);
        }
    };

    const prevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    const toggleService = (service: string) => {
        // Check if the service is already selected
        const isSelected = selectedServices.includes(service);

        // If selected, remove from the array; otherwise, add to the array
        setSelectedServices((prevServices: string[]) =>
            isSelected
                ? prevServices.filter((item) => item !== service)
                : [...prevServices, service]
        );
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="mt-8 max-w-lg mx-auto border-black text-white p-4">
                        <div className="grid grid-cols-1 gap-8 mt-10">
                            <label className="block">
                                <span className=" text-2xl block">Full Name</span>
                                <input
                                    {...register("name", { required: "Your Name is required" })}
                                    placeholder="Enter Your Full Name"
                                    required
                                    className={`mt-1 h-14 block w-full border-b-2 border-white bg-black rounded-[6px] p-6 sm:text-[20px] ${errors.name ? "border-red-500" : ""
                                        }`}
                                />
                                {errors.name && (
                                    <span className="text-red-500 text-sm">
                                        {" "}
                                        {errors.name.message}
                                    </span>
                                )}
                            </label>
                            <label className="block">
                                <span className=" text-2xl block">E-mail</span>
                                <input
                                    {...register("email", {
                                        required: "This field is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                            message: "Invalid email address",
                                        },
                                    })}
                                    placeholder="Enter Your Email ID"
                                    className={`mt-1 h-14 block w-full border-b-2 border-white bg-transparent rounded-[6px] p-6 sm:text-[20px] ${errors.email ? "border-red-500" : ""
                                        }`}
                                />
                                {errors.email && (
                                    <span className="text-red-500 text-sm">
                                        {" "}
                                        {errors.email.message}
                                    </span>
                                )}
                            </label>
                            <label className="block">
                                <span className=" text-2xl block">Phone Number</span>
                                <input
                                    {...register("number", {
                                        required: "This field is required",
                                        maxLength: {
                                            value: 10,
                                            message: "Phone number must be 10 digits",
                                        },
                                        minLength: {
                                            value: 10,
                                            message: "Phone number must be 10 digits",
                                        },
                                    })}
                                    placeholder="Enter Your Phone Number"
                                    className={`mt-1 h-14 block w-full border-b-2 border-white bg-transparent rounded-[6px] p-6 sm:text-[20px] ${errors.number ? "border-red-500" : ""
                                        }`}
                                />
                                {errors.number && (
                                    <span className="text-red-500 text-sm">
                                        {" "}
                                        {errors.number.message}
                                    </span>
                                )}
                            </label>
                            <label className="block">
                                <span className="text-2xl block">Profession</span>
                                <input
                                    {...register("category", {
                                        required: "This field is required",
                                    })}
                                    placeholder="Enter Your Profession"
                                    className={`mt-1 h-14 block w-full border-b-2 border-white bg-transparent rounded-[6px] p-6 sm:text-[20px] ${errors.category ? "border-red-500" : ""
                                        }`}
                                />
                                {errors.category && (
                                    <span className="text-red-500 text-sm">
                                        {" "}
                                        {errors.category.message}
                                    </span>
                                )}
                            </label>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="border-2 border-indigo-600 my-8 p-6 w-52 font-bold rounded-full hover:bg-indigo-600 hover:text-white"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="mt-8 max-w-lg mx-auto p-4 border-black text-white font-raleway">
                        <div className="grid grid-cols-1 gap-6">
                            <label className="block">
                                <span className="text-2xl block">Services Required</span>
                                <div className="flex flex-row flex-wrap gap-4 mt-4">
                                    {services.map((service) => (
                                        <div
                                            key={service}
                                            onClick={() => toggleService(service)}
                                            className={`border border-white px-8 py-2 font-medium rounded-full ${selectedServices.includes(service)
                                                    ? "bg-white text-black"
                                                    : ""
                                                }`}
                                        >
                                            {service}
                                        </div>
                                    ))}
                                </div>
                            </label>
                            <label className="block">
                                <span className="text-2xl block">Project Description</span>
                                <textarea
                                    {...register("requirement", {
                                        required: "This field is required",
                                    })}
                                    placeholder="Please provide a summary of your requirement"
                                    className="block w-full h-64 mt-4 border-2 border-white bg-transparent rounded-[6px] p-6 sm:text-[20px]"
                                ></textarea>
                                {errors.requirement && (
                                    <span className="text-red-500 text-sm">
                                        Please Provide Description
                                    </span>
                                )}
                            </label>
                            <div className="flex flex-row gap-10">
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="border-2 border-indigo-600 my-10 p-6 w-52 font-bold rounded-full hover:bg-indigo-600 hover:text-white"
                                >
                                    Previous
                                </button>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    onClick={() => {
                                        handleSubmit(onSubmit)();
                                    }}
                                    className={`border-2 border-indigo-600 my-10 p-6 w-52 text-white font-bold rounded-full ${loading
                                            ? "cursor-not-allowed opacity-50"
                                            : "hover:bg-indigo-600 hover:text-white"
                                        }`}
                                >
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="font-raleway flex flex-col flex-wrap items-center justify-center px-20 md:mt-10">
                        <h1 className="text-white font-medium text-6xl mb-5">
                            Thank you for giving us a lead.
                            <br />
                        </h1>
                        <h1 className="text-white font-medium text-6xl">
                            {" "}
                            We will reach out to you soon.
                        </h1>
                        <Link href='/'>
                            
                        <button
                            type="button"
                            className="border-2 border-indigo-600 my-10 text-white p-6 w-52 font-bold rounded-full hover:bg-indigo-600 hover:text-white"
                        >
                            Get back to home
                        </button>
                        </Link>
                    </div>
                );
            default:
                return null;
        }
    };

    return <form onSubmit={handleSubmit(onSubmit)}>{renderStep()}</form>;
};

export default ContactForm;
