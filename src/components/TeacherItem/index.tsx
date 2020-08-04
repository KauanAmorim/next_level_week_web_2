import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem()
{
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/29787869?s=460&u=f7c78161c88d8520cf91b4bfba0fdf6965484680&v=4" alt=""/>
                <div>
                    <strong>Kauan Amorim</strong>
                    <span>Química</span>
                </div>

                <p>
                    Descrição aleatória 1 efawefa ef aewfawefawef awefawe
                    <br /><br />
                    Descrição aleatória 2sawefawe4fawefawe fhawfiuowhf afaowief awopiej fawoiefj awoiejf aiwejfawiejfaow ijfaowejif oawiejfoaiwejfaoiwe wijefaowiejfaowiej fao wie faoweij foaw iejfaoiwejfoawiejfoaiw ejfoia weioaw eofija
                </p>
                <footer>
                    <p>
                        Preço/Hora
                        <strong>R$70,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="whatsapp"/>
                        Entrar em contato
                    </button>
                </footer>
            </header>
        </article>
    );
}

export default TeacherItem;