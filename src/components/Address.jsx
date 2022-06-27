const Address = ({ address, handleMark }) => {
  return (
    <div className="address">
      <p>{address.address}</p>
      
      <div className="controls">
        {address.budgets.map(budget => (
          <button
            key={budget.id}
            type="button"
            onClick={() => handleMark([address.latitude, address.longitude], budget.name)}
          >
            {budget.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Address;
