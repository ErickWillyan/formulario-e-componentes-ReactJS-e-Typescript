import style from "./style.module.css";

interface FuncionarioProps {
  readonly id: string | number;
  name: string;
  cargo: string;
}

export default function FuncionarioBox({ id, name, cargo }: FuncionarioProps) {
  return (
    <>
      <div className={style.container}>
        <div className={style.infoBox}>
          <p className={style.funcao}>Id do funcionário: </p>
          <p className={style.dado}>{id}</p>
        </div>

        <div className={style.infoBox}>
          <p className={style.funcao}>Funcionário: </p>
          <p className={style.dado}>{name}</p>
        </div>

        <div className={style.infoBox}>
          <p className={style.funcao}>Cargo: </p>
          <p className={style.dado}>{cargo}</p>
        </div>
      </div>
    </>
  );
}
