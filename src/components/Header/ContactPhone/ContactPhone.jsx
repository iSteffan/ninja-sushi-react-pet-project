import { PhoneIcon, Link } from './ContactPhone.styled';

export const ContactPhone = () => {
  return (
    <Link href="tel:+380976993438">
      <PhoneIcon />
      +38 097 699 34 38
    </Link>
  );
};
