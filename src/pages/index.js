import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <main class="container">
      <h2>Preencha os dados para finalizar o pagamento</h2>
      <form action="/paypal">
        <div class="input-field">
          <input
            required
            type="text"
            name="name"
            id="name"
            placeholder="Digite seu nome"
          />
          <div class="underline"></div>
        </div>

        <div class="input-field">
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu E-mail"
          />
          <div class="underline"></div>
        </div>
        <>
          <div class="input-field">
            <input
              required
              id="cpf"
              type="text"
              placeholder="insira seu CPF (somente números)"
              pattern="[0-9]{11}"
            />
            <div class="underline"></div>
          </div>
        </>

        <button>Ir para tela de pagamento</button>
      </form>
    </main>
  )
}
export default Main
