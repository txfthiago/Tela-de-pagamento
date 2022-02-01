import React, { useState, useEffect, useRef } from 'react'
import AppRoutes from '../route'

function Paypal() {
  const [paid, setPaid] = useState(false)
  const [loaded, setLoaded] = useState(false)

  let paypalRef = useRef()

  const product = {
    price: 100,
    discription: 'Finalize o pagamento de: '
  }
  useEffect(() => {
    const script = document.createElement('script')
    const id =
      'Affh6KvtYqJPtqZBEUTc5Oc0VE8lpZ3Qb8QR1h21_ivnU3Ne9xwQCq5mx_i7EDy8Iepue1muJjm8P0om'

    script.src = `https://www.paypal.com/sdk/js?currency=BRL&client-id=${id}`

    script.addEventListener('load', () => setLoaded(true))

    document.body.appendChild(script)

    if (loaded) {
      function loadButtons() {
        setTimeout(() => {
          console.log(window)
          window.paypal
            .Buttons({
              createOrder: (data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      description: product.discription,
                      amount: {
                        currency_code: 'BRL',
                        value: product.price
                      }
                    }
                  ]
                })
              },
              onApprove: async (_, actions) => {
                const order = await actions.order.capture()
                setPaid(true)
                console.log(order)
              }
            })
            .render(paypalRef)
        })
      }
      loadButtons()
    }
  })

  return (
    <>
      <div className="App">
        {paid ? (
          <div>
            <h1>Pagamento feito!</h1>
          </div>
        ) : (
          <>
            <h1>
              {product.discription} R${product.price}
            </h1>
            <div ref={v => (paypalRef = v)} />
          </>
        )}
      </div>
    </>
  )
}
export default Paypal
