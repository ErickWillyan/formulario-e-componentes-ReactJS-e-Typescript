import { useState, useRef, FormEvent } from "react";
import styles from "./App.module.css";
import FuncionarioBox from "./components/FuncionarioBox";

interface FuncionarioProps {
  readonly id: string | number;
  name: string;
  cargo: string;
}
function App() {
  const nameRef = useRef<HTMLInputElement>(null);
  const cargoRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);
  const [funcionarios, setFuncionario] = useState<FuncionarioProps[]>([]);

  function HandleRegister(event: FormEvent) {
    event?.preventDefault();
    if (
      !nameRef.current?.value ||
      !cargoRef.current?.value ||
      !idRef.current?.value
    ) {
      alert("Preencha todos os campos!!!");
      return;
    }

    let user = {
      id: idRef.current?.value,
      name: nameRef.current?.value,
      cargo: cargoRef.current?.value,
    };

    setFuncionario((values) => [...values, user]);

    idRef.current.value = "";
    nameRef.current.value = "";
    cargoRef.current.value = "";
  }

  return (
    <>
      <form className={styles.form} onSubmit={HandleRegister}>
        <h1 className={styles.title}>Registro de funcionários</h1>
        <input
          className={styles.textbox}
          placeholder="DIgite o id do funcionário:"
          type="text"
          ref={idRef}
        />
        <input
          className={styles.textbox}
          placeholder="DIgite o nome do funcionário:"
          type="text"
          ref={nameRef}
        />
        <input
          className={styles.textbox}
          placeholder="DIgite o cargo:"
          type="text"
          ref={cargoRef}
        />
        <input className={styles.button} type="submit" value="Cadastrar" />
      </form>
      <div className={styles.components}>
        {funcionarios.map((funcionarios: FuncionarioProps) => (
          <FuncionarioBox
            key={funcionarios.id}
            id={funcionarios.id}
            name={funcionarios.name}
            cargo={funcionarios.cargo}
          />
        ))}
      </div>
    </>
  );
}
export default App;
