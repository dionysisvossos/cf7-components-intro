import {useState} from "react";
import * as React from "react";

type FormValues = {
    name: string;
    email: string;
    message: string;
};

const initialValues = {
    name: '',
    email: '',
    message: '',
}

const MultiFieldForm = () => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmittedData(values);
        console.log("Form submitted with values:", values);
        // Here you can handle the form submission, e.g., send data to an API
        setValues(initialValues); // Reset form after submission

    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleClear = () => {
        setValues(initialValues); // Reset form values
        setSubmittedData(null); // Clear submitted data
        console.log("Form cleared");

    };

    return(
        <>
            <div className="flex text-center max-w-sm mx-auto mt-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        placeholder="Name"
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded border"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        placeholder="Email"
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded border"
                        required
                    />

                    <textarea
                        name="message"
                        value={values.message}
                        placeholder="Type Your Message"
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded border">
                        minlength={5}
                        required
                    </textarea>

                    <div className="flex gap-4 justify-center">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-cf-dark-red text-white rounded">
                            Submit
                        </button>
                        <button
                        type="button"
                        onClick={handleClear}
                        className="px-4 py-2 bg-gray-200 text-cf-gray rounded">
                            Clear
                        </button>
                    </div>

                    { submittedData && (
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold">Submitted Data</h2>
                        <p><strong>Name:</strong> {submittedData.name} </p>
                        <p><strong>Email:</strong> {submittedData.email} </p>
                        <p><strong>Message:</strong> {submittedData.message} </p>
                    </div>
                    )}
                </form>
            </div>
        </>
    )
};

export default MultiFieldForm;
