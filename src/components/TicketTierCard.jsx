import Button from "./Button";
import "./TicketTierCard.css";

function TicketTierCard({ tier, selected, onSelect }) {
  return (
    <div className={selected ? "tier-card tier-card-selected" : "tier-card"}>
      <h3>{tier.name}</h3>
      <p className="tier-price">${tier.price}</p>
      <p className="tier-description">{tier.description}</p>
      <ul>
        {tier.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <Button variant={selected ? "primary" : "secondary"} onClick={() => onSelect(tier.id)}>
        {selected ? "Selected" : "Select"}
      </Button>
    </div>
  );
}

export default TicketTierCard;
