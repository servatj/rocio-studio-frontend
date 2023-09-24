import Header from "../components/Header";
import styled from '@emotion/styled';

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
  const handleSubmit = () => {
    // e.preventDefault();
    // Handle form submission here
  };

  return (
    <>
      <Header isMain={false} />
        <ContactContainer>
        <ProfileImage src="logo.png" alt="Your Name" />
        <ContactForm onSubmit={handleSubmit}>
            <FormField>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" required />
            </FormField>
            <FormField>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
            </FormField>
            <FormField>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required />
            </FormField>
            <SubmitButton type="submit">Send</SubmitButton>
        </ContactForm>
        <WhatsAppLink href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
            Contact me on WhatsApp
        </WhatsAppLink>
        </ContactContainer>
    </>
  );
};

export default Contact;
