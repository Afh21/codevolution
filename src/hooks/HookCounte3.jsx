import React, { useState } from "react";

function HookCounte3() {
  const [name, setName] = useState({ firstname: "", lastname: "" });

  return (
    <form>
      <input
        type='text'
        name='firstname'
        value={name.firstname}
        onChange={e => setName({ ...name, firstname: e.target.value })}
      />
      <input
        type='text'
        name='lastname'
        value={name.lastname}
        onChange={e => setName({ ...name, lastname: e.target.value })}
      />
      <h3>Name - {name.firstname}</h3>
      <h3>Lastname - {name.lastname}</h3>
      <h4>{JSON.stringify(name)}</h4>
    </form>
  );
}

export { HookCounte3 };
