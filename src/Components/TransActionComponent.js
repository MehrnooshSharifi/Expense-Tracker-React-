import { useEffect, useState } from "react";
import "../App.css";

const TransActionComponent = (props) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredTns, setFilteredTns] = useState(props.transactions);
  const filterTransaction = (search) => {
    if(!search || search===""){
      setFilteredTns(props.transactions);
      return;
    }
    const filtered = props.transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTns(filtered);
  };
  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransaction(e.target.value);
  };
  useEffect(()=>{
    filterTransaction(searchItem);
  },[props.transactions]);
  return (
    <section>
      <input
        type="text"
        onChange={changeHandler}
        value={searchItem}
        className="searchInput"
        placeholder="Search your Items..."
      />
      {filteredTns.map((t) => (
        <div
          key={t.id}
          className="transaction"
          style={{ borderRight: t.type === "expense" && "4px solid red" }}
        >
          <span>{t.desc}</span>
          <span>$ {t.amount}</span>
        </div>
      ))}
    </section>
  );
};

export default TransActionComponent;
