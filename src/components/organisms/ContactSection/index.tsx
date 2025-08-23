import { Typography } from "../../atoms/typography/typography";
import * as S from './style';

const contactData = [
  { label: "Email", value: "lukas.paes18@gmail.com", href: "mailto:lukas.paes18@gmail.com" },
  { label: "Telefone", value: "(87) 9 9809-3765", href: "tel:+5587998093765" },
  { label: "Github", value: "github.com/luca-henrique", href: "https://www.github.com/luca-henrique" },
  { label: "Linkedin", value: "linkedin.com/in/luca-paes", href: "https://www.linkedin.com/in/luca-paes/" },
];

export const ContactSection = () => {
  return (
    <S.Section>
      <Typography tag="h2" size="lg" weight="bold">
        Contato
      </Typography>
      <S.ContactList>
        {contactData.map((item) => (
          <S.ContactItem key={item.label}>
            <Typography tag="h3" size="xs" weight="bold">
              {item.label}:
            </Typography>
            <S.Link href={item.href} target="_blank" rel="noopener noreferrer">
              <Typography tag="h3" size="xs" weight="medium">
                {item.value}
              </Typography>
            </S.Link>
          </S.ContactItem>
        ))}
      </S.ContactList>
    </S.Section>
  );
};
