
import { statusBadge } from './../../utils';

const Card = (props) => {
  const item = props.data || {};

  return (
    <div className="card">
      <img src={item.image} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <span className={statusBadge(item.status)}>{item.status}</span>
        <p className="card-text">
          <ul class="list-unstyled">
            <li><strong>Location:</strong> {item.location.name}</li>
            <li><strong>Origin:</strong> {item.origin.name}</li>
            <li><strong>Species:</strong> {item.species}</li>
            <li><strong>Gender:</strong> {item.gender}</li>
          </ul>
        </p>
      </div>
    </div>
  )
}

export default Card;