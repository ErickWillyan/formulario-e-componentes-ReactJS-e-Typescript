import { useState, useRef, FormEvent } from "react";
import styles from "./App.module.css";

interface FuncionarioProps {
  name: string;
  cargo: string;
}
function App() {
  const nameRef = useRef<HTMLInputElement>(null);
  const cargoRef = useRef<HTMLInputElement>(null);
  const [funcionarios, setFuncionario] = useState<FuncionarioProps[]>([]);

  function HandleRegister(event: FormEvent) {
    event?.preventDefault();
    if (!nameRef.current?.value || !cargoRef.current?.value) {
      alert("Preencha todos os campos!!!");
      return;
    }
    let user = {
      name: nameRef.current?.value,
      cargo: cargoRef.current?.value,
    };

    setFuncionario((values) => [...values, user]);

    nameRef.current.value = "";
    cargoRef.current.value = "";
  }

  return (
    <>
      <div>
        <form className={styles.form} onSubmit={HandleRegister}>
          <input
            className={styles.textbox}
            placeholder="DIgite seu nome:"
            type="text"
            ref={nameRef}
          />
          <input
            className={styles.textbox}
            placeholder="DIgite seu cargo:"
            type="text"
            ref={cargoRef}
          />
          <input className={styles.button} type="submit" value="Cadastrar" />
        </form>

        {funcionarios.map((funcionarios: FuncionarioProps) => (
          <div key={funcionarios.name}>
            <p>{funcionarios.name}</p>
            <p>{funcionarios.cargo}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default App;
