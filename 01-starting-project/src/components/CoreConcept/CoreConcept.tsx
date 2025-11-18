import type { CoreConceptProps } from '../../models/CoreConcept';
import './CoreConcept.css';

function CoreConcept({ image, title, description }: CoreConceptProps) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

export default CoreConcept;
