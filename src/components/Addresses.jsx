import Address from "./Address";

const Addresses = ({ adresses, handleMark }) => {
  return (
    <div className="address-list">
      {adresses.map(address => (
        <Address key={address.id} address={address} handleMark={handleMark} />
      ))}
    </div>
  )
}

export default Addresses;
