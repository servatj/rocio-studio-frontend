import { useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../components/Header";
import styled from "@emotion/styled";

// Styled components
const ContactContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
`;

const ProfileImage = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	object-fit: cover;
	margin-bottom: 20px;
`;

const ContactForm = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 400px;
	width: 100%;
	margin-top: 20px;
`;

const FormField = styled.div`
	margin-bottom: 20px;
`;

const Label = styled.label`
	font-size: 16px;
	margin-bottom: 8px;
`;

const Input = styled.input`
	padding: 10px;
	width: 100%;
`;

const Textarea = styled.textarea`
	padding: 10px;
	width: 100%;
	height: 100px;
`;

const SubmitButton = styled.button`
	padding: 10px 20px;
	background-color: black;
	color: white;
	border: none;
	cursor: pointer;
`;

const WhatsAppLink = styled.a`
	margin-top: 20px;
	font-size: 18px;
	color: green;
	text-decoration: none;
`;

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isEmailSent, setIsEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
    setLoading(true);

		const payload = {
			name,
			email,
			message,
		};

		console.log(payload);

		emailjs
			.send("service_q8drti9", "template_ru3ezoo", payload, "h8tltMS0wcVIpGuN3")
			.then(() => {
        setIsEmailSent(true);
        setLoading(false);
			})
			.catch((error: Error) => {
				console.error(error);
			});
	};

	return (
		<>
			<Header isMain={false} />
			<ContactContainer>
				<ProfileImage src="logo.png" alt="Your Name" />
				{(!isEmailSent && !loading) && (
					<>
						<h1>Please fill out the form below to get in touch with me.</h1>
						<ContactForm onSubmit={handleSubmit}>
							<FormField>
								<Label htmlFor="name">Name</Label>
								<Input
									type="text"
									id="name"
									name="name"
									required
									onChange={(e) => setName(e.target.value)}
								/>
							</FormField>
							<FormField>
								<Label htmlFor="email">Email</Label>
								<Input
									type="email"
									id="email"
									name="email"
									required
									onChange={(e) => setEmail(e.target.value)}
								/>
							</FormField>
							<FormField>
								<Label htmlFor="message">Message</Label>
								<Textarea
									id="message"
									name="message"
									required
									onChange={(e) => setMessage(e.target.value)}
								/>
							</FormField>
							<SubmitButton type="submit">Send</SubmitButton>
						</ContactForm>
					</>
				)}
        {loading && <h1>Loading...</h1>}
        {isEmailSent && <h1>Email sent successfully! We will shortly contact you! </h1>}
				<WhatsAppLink
					href="https://wa.me/your-number"
					target="_blank"
					rel="noopener noreferrer"
				>
					Contact me on WhatsApp
				</WhatsAppLink>
			</ContactContainer>
		</>
	);
};

export default Contact;
