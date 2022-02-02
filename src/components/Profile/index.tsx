import { Container } from "./styles";

interface ProfileProps {
  imgSrc: string;
  name: string;
}

export const Profile = ({ imgSrc, name }: ProfileProps) => {
  return (
    <Container>
      <img className="profile-pic" src={imgSrc} alt={name} />
      <div className="text-content">
        <p>Report for</p>
        <h1 className="profile-name">{name}</h1>
      </div>
    </Container>
  );
};
