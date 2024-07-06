// components/Definicoes/DeleteAccount.js
import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { deleteUserAccount } from "../../services/userData";
import { toast } from "react-toastify";
import styles from "./Definicoes.module.css";
import { useNavigate } from "react-router";

const DeleteAccount = () => {
  const { user } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    const confirmation = window.confirm(
      "Tem certeza de que deseja deletar sua conta? Esta ação não pode ser desfeita."
    );
    if (confirmation) {
      try {
        await deleteUserAccount(user?.id);
        toast.success("Conta deletada com sucesso!");
        navigate("/");
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div className={styles.deleteAccountContainer}>
      <h2>Deletar Conta</h2>
      <p>
        Se você deletar sua conta, perderá permanentemente seu perfil, mensagens
        e todos os dados associados. Esta ação não pode ser desfeita.
      </p>
      <button className={styles.deleteButton} onClick={handleDeleteAccount}>
        Deletar Conta
      </button>
    </div>
  );
};

export default DeleteAccount;
